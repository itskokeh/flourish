import { fromAsyncCodeToHtml } from '@shikijs/markdown-it/async';
import markdownAnchor from 'markdown-it-anchor';
import { MarkdownItAsync } from 'markdown-it-async';
import { codeToHtml } from 'shiki';

const marked = new MarkdownItAsync({
	html: true,
	linkify: true,
	typographer: true,
})
	.use(markdownAnchor, {
		slugify: (s: string) =>
			s
				.trim()
				.toLowerCase()
				.replace(/\s+/g, '-')
				.replace(/[^\w-]/g, ''),
	})
	.use(
		fromAsyncCodeToHtml(codeToHtml, {
			themes: {
				light: 'vitesse-dark',
				dark: 'vitesse-dark'
			},
		}),
	);

export const renderMarkdown = async (md: string) => {
	return await marked.renderAsync(md);
};
