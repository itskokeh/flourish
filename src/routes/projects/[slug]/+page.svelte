<script lang="ts">
	let { data } = $props();
	const { post, htmlContent } = data;

	console.log('message:', data);
</script>

<article class="prose dark:prose-invert gap-4">
	{#if post}
		<h1>{post.title}</h1>
		{#if post.tags && post.tags.length > 0}
			<div class="flex flex-wrap items-center gap-2">
				{#each Array.isArray(post.tags) ? post.tags : [post.tags] as tag}
					{#if typeof tag === 'string' && tag.length > 1}
						<span class="tag">{tag}</span>
					{/if}
				{/each}
			</div>
		{/if}
		{#if post.publishDate}
			<p>Published on: {new Date(post.publishDate).toLocaleDateString()}</p>
		{/if}
		{#if htmlContent}
			{@html htmlContent}
		{/if}
	{:else}
		<span class="text-7xl font-extrabold">Loading...</span>
	{/if}
</article>
