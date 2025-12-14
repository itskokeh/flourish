// src/routes/sitemap.xml/+server.ts
import { getPostMetadata, getProjectMetadata } from '$lib/api';
import type { RequestHandler } from './$types';

// Domain configuration
const site = 'https://www.kokeh.xyz';

export const GET: RequestHandler = async () => {
	const [postsData, projectsData] = await Promise.all([getPostMetadata(), getProjectMetadata()]);

	const posts = postsData.posts || [];
	const projects = projectsData.projects || [];

	const pages = ['/', '/blog', '/projects'];
	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? 1.0 : 0.8}</priority>
  </url>
  `,
		)
		.join('')}

  ${posts
		.map(
			(post) => `
  <url>
    <loc>${site}/blog/${post.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <lastmod>${post.publishDate ? new Date(post.publishDate).toISOString() : new Date().toISOString()}</lastmod>
  </url>
  `,
		)
		.join('')}

  ${projects
		.map(
			(project) => `
  <url>
    <loc>${site}/projects/${project.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  `,
		)
		.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=0, s-maxage=3600',
		},
	});
};
