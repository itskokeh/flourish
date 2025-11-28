// import Shiki from '@shikijs/markdown-it';
import markdownAnchor from 'markdown-it-anchor';
import { MarkdownItAsync } from 'markdown-it-async';

const marked = new MarkdownItAsync({
	html: true,
	linkify: true,
	typographer: true,
}).use(markdownAnchor, {
	slugify: (s: string) =>
		s
			.trim()
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]/g, ''),
});
// .use(
// 	await Shiki({
// 		themes: {
// 			light: 'vitesse-dark',
// 			dark: 'vitesse-dark',
// 		},
// 	}),
// );

export const renderMarkdown = async (md: string) => {
	return marked.renderAsync(md);
};
