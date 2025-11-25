<script lang="ts">
	import { processedKeywords } from '$lib/utils/postProcessor';
	let { data } = $props();
	const { post, htmlContent } = data;

	const keywords = processedKeywords(post.keywords);

	// console.log('message:', data);
</script>

<svelte:head>
	{#if post}
		<title>{post.title}</title>
		<meta name="title" content={post.metaTitle} />
		<meta name="description" content={post.metaDescription} />
		<meta name="keywords" content={keywords} />

		<!-- Open Graph -->
		<meta property="og:title" content={post.metaTitle} />
		<meta property="og:description" content={post.metaDescription} />
		<meta property="og:type" content="article" />
		<meta property="og:image" content={post.featuredImage} />

		<!-- Twitter Card -->
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={post.metaTitle} />
		<meta name="twitter:description" content={post.metaDescription} />
	{/if}
</svelte:head>

<article class="prose dark:prose-invert mx-auto">
	{#if post}
		<h1 class="font-bold text-2xl mb-0">{post.title}</h1>
		{#if post.publishDate}
			<p class="font-bold">
				Published: {post.publishDate}
			</p>
		{/if}
		{#if post.tags}
			<div class="flex flex-wrap items-center gap-2 mb-4">
				{#each post.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}
		<img src={post.featuredImage} alt="featured" class="mt-0" />
		{#if htmlContent}
			{@html htmlContent}
		{/if}
	{:else}
		<span class="text-7xl font-extrabold">Loading...</span>
	{/if}
</article>
