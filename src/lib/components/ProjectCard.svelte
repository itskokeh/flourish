<script lang="ts">
	let { slug, title, excerpt, tags, publishDate, featuredImage } = $props();
</script>

<div
	class="flex border-0 rounded-md hover:shadow-lg transition-shadow duration-300 dark:bg-darkMode-card bg-lightMode-card"
>
	<a href={`projects/${slug}`} class="flex flex-col sm:flex-row w-full sm:h-48">
		<img
			src={featuredImage}
			alt="Project Preview"
			class="object-cover rounded-t-md sm:rounded-l-sm sm:rounded-t-none h-60 sm:h-48"
		/>
		<div class="p-4 flex flex-col gap-2">
			<h3>{title}</h3>
			<p>{excerpt}</p>
			<p>Published on: {publishDate}</p>
			<div class="flex flex-wrap items-center gap-2">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</div>
	</a>
</div>
