<script lang="ts">
	let { data } = $props();
	const { project, htmlContent } = data;
</script>

<svelte:head>
	{#if project}
		<title>{project.title} | Projects</title>
	{/if}
</svelte:head>

<section class="py-12 sm:py-20">
	{#if project}
		<header
			class="mb-12 space-y-6 border-b border-gray-100 dark:border-gray-800 pb-10"
		>
			<div class="flex items-center gap-3">
				<span class="h-px w-8 bg-lightMode-accent dark:bg-darkMode-accent"
				></span>
				<p
					class="text-sm font-bold tracking-widest uppercase text-lightMode-accent dark:text-darkMode-accent"
				>
					{project.category}
				</p>
			</div>

			<h1
				class="text-4xl sm:text-6xl font-bold tracking-tight text-lightMode-text dark:text-white leading-tight"
			>
				{project.title}
			</h1>

			<div class="flex flex-wrap items-center gap-2 pt-2">
				{#each project.techStack as stack}
					<span class="tag">{stack}</span>
				{/each}
			</div>
		</header>

		<div
			class="
      prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-a:text-lightMode-accent dark:prose-a:text-darkMode-accent prose-a:no-underline hover:prose-a:underline
      prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
      prose-blockquote:border-l-lightMode-accent dark:prose-blockquote:border-l-darkMode-accent
    "
		>
			{#if htmlContent}
				{@html htmlContent}
			{:else}
				<p class="text-red-500 italic">
					Failed to load content. Please refresh.
				</p>
			{/if}
		</div>
	{:else}
		<div class="flex justify-center items-center h-64">
			<span class="text-xl font-medium animate-pulse text-gray-400"
				>Loading project...</span
			>
		</div>
	{/if}
</section>
