export const load = async ({ parent }) => {
	const parentData = await parent();
	const allPosts = parentData.posts;

	const posts = allPosts && 'posts' in allPosts ? allPosts.posts : [];
	return { posts };
};
