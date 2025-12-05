<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import { compressImage } from '$lib/utils/imageCompressor';
	let { data } = $props();
	const { posts } = data;
	// console.log(posts);

	const pageDescription =
		'For builders and founders. Code that works, lessons that matter, and a life well-lived';
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'Kokeh Blog',
		description: pageDescription,
		url: 'https://www.kokeh.xyz/blog',
		numberOfPosts: posts.length,
		blogPost: posts.map((post) => ({
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.excerpt,
			url: `https://www.kokeh.xyz/blog/${post.slug}`,
			datePublished: post.publishDate,
		})),
	};
	const jsonLdString = JSON.stringify(jsonLd);
	// console.log(jsonLdString);
</script>

<svelte:head>
	<title>Kokeh - Blog</title>
	<meta name="description" content={pageDescription} />

	<!-- Open Graph -->
	<meta property="og:title" content="Kokeh - Blog" />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:type" content="website" />

	<!-- Twitter Card -->
	<meta name="twitter:name" content="Kokeh - Blog" />
	<meta name="twitter:description" content={pageDescription} />

	<!-- GEO: Structured data for AI -->
	{@html `<script type="application/ld+json">${jsonLdString}</script>`}
</svelte:head>

<section class="mx-auto max-w-3xl">
	<div>
		<h1>Blog</h1>
	</div>

	<section class="flex flex-col gap-4 my-4">
		{#each posts as post}
			<PostCard
				slug={post.slug}
				title={post.title}
				publishDate={post.publishDate}
				featuredImage={compressImage(post.featuredImage)}
			/>
		{/each}
	</section>
</section>
