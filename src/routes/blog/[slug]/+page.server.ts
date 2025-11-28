import { codeToHtml } from 'shiki/bundle/web';
import { API } from '$lib/api';
import type { BlogPost } from '$lib/types';
import { renderMarkdown } from '$lib/utils/markdownRenderer';
import type { PageServerLoad } from './$types';

interface PostResponse {
  post: BlogPost;
}

interface HighlightedContent {
  html: string;
  hasCodeBlocks: boolean;
}

export const load: PageServerLoad = async ({ fetch, params, setHeaders }) => {
  const { slug } = params;
  const res = await fetch(`${API}/posts/${slug}`);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch blog: ${res.status}`);
  }

  const { post }: PostResponse = await res.json();
  
  let htmlContent: string;
  try {
    const highlighted = await processMarkdownWithHighlighting(post.content);
    htmlContent = highlighted.html;
  } catch (error) {
    console.error('Content processing failed', error);
    htmlContent = '<p>Error loading content.</p>';
  }

  setHeaders({ 
    'cache-control': 'public, max-age=300, s-maxage=3600' 
  });

  return {
    post,
    htmlContent,
  };
};

/**
 * Process markdown content with syntax highlighting
 */
async function processMarkdownWithHighlighting(markdown: string): Promise<HighlightedContent> {
  const rawHtml = await renderMarkdown(markdown)
  const highlightedHtml = await highlightCodeBlocks(rawHtml);
  
  return {
    html: highlightedHtml,
    hasCodeBlocks: highlightedHtml !== rawHtml
  };
}

/**
 * Highlight code blocks in HTML content
 */
async function highlightCodeBlocks(html: string): Promise<string> {
  // Regex to find <pre><code> blocks with language classes
  const codeBlockRegex = /<pre><code class="language-([^"']+)">([\s\S]*?)<\/code><\/pre>/g;
  const matches = Array.from(html.matchAll(codeBlockRegex));
  
  if (matches.length === 0) {
    return html;
  }

  let processedHtml = html;
  
  for (const match of matches) {
    const [fullMatch, lang, code] = match;
    const decodedCode = decodeHTML(code);
    
    try {
      const highlighted = await codeToHtml(decodedCode, {
        lang: lang as any,
        theme: 'vitesse-dark',
      });
      
      processedHtml = processedHtml.replace(fullMatch, highlighted);
    } catch (error) {
      console.warn(`Failed to highlight ${lang} code block:`, error);
    }
  }
  
  return processedHtml;
}

/**
 * Server-safe HTML entity decoding
 */
function decodeHTML(html: string): string {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ');
}