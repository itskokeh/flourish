<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import { compressImage } from '$lib/utils/imageCompressor';

	let { data } = $props();
	const { posts } = data;

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
</script>

<svelte:head>
	<title>Kokeh - Blog</title>
	<meta name="description" content={pageDescription} />

	<meta property="og:title" content="Kokeh - Blog" />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:type" content="website" />

	<meta name="twitter:name" content="Kokeh - Blog" />
	<meta name="twitter:description" content={pageDescription} />

	{@html `<script type="application/ld+json">${jsonLdString}</script>`}
</svelte:head>

<section class="py-20">
	<header class="mb-16 space-y-6">
		<h1
			class="text-5xl font-bold tracking-tight text-lightMode-text dark:text-white"
		>
			Writing
		</h1>
		<p
			class="text-xl text-lightMode-accent dark:text-darkMode-accent italic leading-relaxed max-w-xl"
		>
			{pageDescription}
		</p>
		<div class="h-px w-20 bg-gray-200 dark:bg-gray-800 mt-8"></div>
	</header>

	<section class="flex flex-col gap-8">
		{#each posts as post}
			<article class="group relative transition-opacity hover:opacity-100">
				<PostCard
					slug={post.slug}
					title={post.title}
					publishDate={post.publishDate}
					featuredImage={compressImage(post.featuredImage)}
				/>
			</article>
		{/each}
	</section>
</section>
