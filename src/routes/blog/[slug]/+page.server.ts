import { API } from '$lib/api';
import type { BlogPost } from '$lib/types';
import { renderMarkdown } from '$lib/utils/markdownRenderer';
import type { PageServerLoad } from './$types';

const isDev = import.meta.env?.DEV ?? false;

interface PostResponse {
	post: BlogPost;
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
		htmlContent = await renderMarkdown(post.content);
	} catch (error) {
		console.error('Parsing error:', error);
		const errorResponse = isDev ? (error as Error).message : 'Failed to load content.';
		htmlContent = `<p>${errorResponse}</p>`;
	}
	setHeaders({ 'cache-control': 'public, max-age=300, s-maxage=3600' });
	const hasCodeBlocks = htmlContent.includes('<pre') || htmlContent.includes('<code');

	return {
		post,
		htmlContent,
		hasCodeBlocks,
	};
};
