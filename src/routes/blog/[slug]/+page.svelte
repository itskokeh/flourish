<script lang="ts">
	// import { onMount } from 'svelte';
	import { processedKeywords } from '$lib/utils/postProcessor';
	import { compressImage } from '$lib/utils/imageCompressor';
	import {
		// hljs,
		// highlightExistingPreCodeBlocks,
	} from '$lib/utils/syntaxHighlighter';
	// import 'highlight.js/styles/github-dark.css';

	let { data } = $props();
	const { post, htmlContent } = data;

	const keywords = processedKeywords(post.keywords);

	// onMount(async () => {
	// 	// hljs.highlightAll();
	// 	highlightExistingPreCodeBlocks();
	// });

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
		<!-- <link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
		/> -->
	{/if}
</svelte:head>

<article class="prose dark:prose-invert mx-auto">
	<pre><code class="language-svelte">Hello, Svelte!</code></pre>
	{#if post}
		<h1 class="mb-0">{post.title}</h1>
		{#if post.publishDate}
			<p class="font-bold">
				Published: {post.publishDate}
			</p>
			<p class="font-bold -mt-4">
				By: <a
					href="http://x.com/itskokeh"
					target="_blank"
					class="font-bold underline-offset-4 hover:dark:text-yellow-400"
					>Kokeh</a
				>
			</p>
		{/if}
		{#if post.tags}
			<div class="flex flex-wrap items-center gap-2 mb-4">
				{#each post.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}
		<img
			src={compressImage(post.featuredImage, 800, 600)}
			alt="featured"
			class="mt-0"
			width="800"
		/>
		{#if htmlContent}
			{@html htmlContent}
		{/if}
	{:else}
		<span class="text-7xl font-extrabold">Loading...</span>
	{/if}
</article>
