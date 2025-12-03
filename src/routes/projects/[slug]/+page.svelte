<script lang="ts">
	let { data } = $props();
	const { project, htmlContent } = data;

	// console.log("message:", data);
</script>

<article class="prose dark:prose-invert gap-4">
	{#if project}
		<h1>{project.title}</h1>
		<div class="flex flex-wrap items-center gap-2 mb-4">
			{#each project.techStack as stack}
				<span class="tag">{stack}</span>
			{/each}
		</div>
		<p>{project.category}</p>
		{#if htmlContent}
			{@html htmlContent}
		{:else}
			<p>Failed to load content. Please refresh</p>
		{/if}
	{:else}
		<span class="text-7xl font-extrabold">Loading...</span>
	{/if}
</article>
