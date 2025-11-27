import { fromAsyncCodeToHtml } from '@shikijs/markdown-it/async';
import markdownAnchor from 'markdown-it-anchor';
import { MarkdownItAsync } from 'markdown-it-async';
import { createHighlighter } from 'shiki';
// Import specific packages
import js from 'shiki/langs/javascript.mjs';
import svelte from 'shiki/langs/svelte.mjs';
import darkTheme from 'shiki/themes/vitesse-dark.mjs';

export const renderMarkdown = async (md: string) => {
	const highlighter = await createHighlighter({
		themes: [darkTheme],
		langs: [js, svelte],
	});
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
			fromAsyncCodeToHtml(async (code, options) => highlighter.codeToHtml(code, options), {
				themes: {
					light: 'vitesse-dark',
					dark: 'vitesse-dark',
				},
			}),
		);

	return await marked.renderAsync(md);
};
