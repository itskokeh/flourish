<script lang="ts">
	import { onMount } from 'svelte';
	import { processedKeywords } from '$lib/utils/postProcessor';
	import { compressImage } from '$lib/utils/imageCompressor';
	import { highlightExistingPreCodeBlocks } from '$lib/utils/syntaxHighlighter';

	let { data } = $props();
	const { post, htmlContent, hasCodeBlocks } = data;

	const keywords = processedKeywords(post.keywords);

	onMount(async () => {
		if (hasCodeBlocks) {
			requestIdleCallback(() => highlightExistingPreCodeBlocks());
		}
	});
</script>

<svelte:head>
	{#if post}
		<title>{post.title}</title>
		<meta name="title" content={post.metaTitle} />
		<meta name="description" content={post.metaDescription} />
		<meta name="keywords" content={keywords} />

		<meta property="og:title" content={post.metaTitle} />
		<meta property="og:description" content={post.metaDescription} />
		<meta property="og:type" content="article" />
		<meta property="og:image" content={post.featuredImage} />

		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={post.metaTitle} />
		<meta name="twitter:description" content={post.metaDescription} />
	{/if}
</svelte:head>

<article class="py-12 sm:py-20">
	{#if post}
		<header class="mb-10 text-center space-y-6">
			<h1
				class="text-4xl sm:text-6xl font-bold tracking-tight text-lightMode-text dark:text-darkMode-text leading-tight"
			>
				{post.title}
			</h1>

			<div
				class="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
			>
				{#if post.publishDate}
					<time datetime={post.publishDate}>{post.publishDate}</time>
					<span class="hidden sm:inline text-gray-300">•</span>
				{/if}

				<div class="flex items-center gap-2">
					<span>By</span>
					<a
						href="http://x.com/itskokeh"
						target="_blank"
						class="font-bold text-lightMode-text dark:text-white hover:text-lightMode-accent dark:hover:text-darkMode-accent underline decoration-2 underline-offset-4 transition-colors"
					>
						Kokeh
					</a>
				</div>
			</div>

			{#if post.tags}
				<div class="flex flex-wrap justify-center gap-2 pt-2">
					{#each post.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</header>

		<figure class="mb-12">
			<img
				src={compressImage(post.featuredImage, 800, 600)}
				alt={post.title}
				class="w-full h-auto rounded-xl shadow-md border border-gray-100 dark:border-gray-800"
				width="800"
				height="600"
				fetchpriority="high"
				loading="eager"
			/>
		</figure>

		<div
			class="
      prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-a:text-lightMode-accent dark:prose-a:text-darkMode-accent prose-a:no-underline hover:prose-a:underline
      prose-img:rounded-xl prose-img:shadow-sm
      prose-blockquote:border-l-lightMode-accent dark:prose-blockquote:border-l-darkMode-accent
    "
		>
			{#if htmlContent}
				{@html htmlContent}
			{/if}
		</div>
	{:else}
		<div class="flex justify-center items-center h-64">
			<span class="text-xl font-medium animate-pulse text-gray-400"
				>Loading...</span
			>
		</div>
	{/if}
</article>
