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
marked.renderer.rules.image = (tokens, idx, options, self) => {
	const token = tokens[idx];

	const { width, height } = getImageDimensions();

	token.attrSet('width', width.toString());
	token.attrSet('height', height.toString());

	return self.renderToken(tokens, idx, options);
};

const getImageDimensions = () => {
	return { width: 800, height: 600 };
};

export const renderMarkdown = async (md: string) => {
	return marked.renderAsync(md);
};
