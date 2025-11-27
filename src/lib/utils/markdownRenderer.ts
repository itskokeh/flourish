import { fromAsyncCodeToHtml } from '@shikijs/markdown-it/async';
import markdownAnchor from 'markdown-it-anchor';
import { MarkdownItAsync } from 'markdown-it-async';
import { codeToHtml } from 'shiki';
import darkTheme from 'shiki/themes/vitesse-dark.mjs';

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
				light: darkTheme,
				dark: darkTheme,
			},
		}),
	);

export const renderMarkdown = async (md: string) => {
	return await marked.renderAsync(md);
};
