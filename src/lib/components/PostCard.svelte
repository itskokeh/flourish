<script lang="ts">
	import { Image } from '@unpic/svelte';
	let { slug, title, excerpt, tags, publishDate, featuredImage } = $props();
</script>

<div
	class="flex border-0 rounded-md hover:shadow-lg transition-shadow duration-300 dark:bg-darkMode-card bg-lightMode-card"
>
	<a href={`blog/${slug}`} class="flex flex-col sm:flex-row w-full sm:max-h-60">
		<Image
			src={featuredImage}
			alt="Post Avatar"
			width={800}
			height={600}
			class="object-cover rounded-t-md sm:rounded-l-sm sm:rounded-t-none sm:min-w-50 h-50 sm:h-full"
			fetchpriority="high"
			loading="lazy"
			layout="constrained"
		/>
		<div class="p-4 flex flex-col gap-2">
			<h3>{title}</h3>
			<p>{excerpt}</p>
			<p>Published: {publishDate}</p>
			<div class="flex flex-wrap items-center gap-2">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</div>
	</a>
</div>
