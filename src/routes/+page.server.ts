export const load = async ({ parent }) => {
	const parentData = await parent();
	const allPosts = parentData.posts;
	const allProjects = parentData.projects;

	const posts = allPosts && 'posts' in allPosts ? allPosts.posts : [];
	const projects = allProjects && 'projects' in allProjects ? allProjects.projects : [];
	return { posts, projects };
};
