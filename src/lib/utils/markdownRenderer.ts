import Shiki from '@shikijs/markdown-it';
import MarkdownIt from 'markdown-it';
import markdownAnchor from 'markdown-it-anchor';

const marked = MarkdownIt({
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
		await Shiki({
			themes: {
				light: 'vitesse-dark',
				dark: 'vitesse-dark',
			},
		}),
	);

export const renderMarkdown = (md: string) => {
	return marked.render(md);
};
