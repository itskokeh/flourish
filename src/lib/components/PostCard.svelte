<script lang="ts">
	let { slug, title, excerpt, tags, publishDate, featuredImage } = $props();
</script>

<div
	class="flex border-0 rounded-md hover:shadow-lg transition-shadow duration-300 dark:bg-darkMode-card bg-lightMode-card"
>
	<a
		href={`blog/${slug}`}
		class="flex flex-col sm:flex-row h-52 sm:h-56 w-full"
	>
		<img
			src={featuredImage}
			alt="Post Avatar"
			fetchpriority="high"
			loading="lazy"
			style="object-fit: cover;"
			class="aspect-[4/5] h-32 sm:h-56"
		/>
		<div class="p-4 flex flex-col justify-between">
			<h2
				class="text-lg sm:text-2xl text-center sm:text-left dark:text-yellow-400 sm:dark:text-white"
			>
				{title}
			</h2>
			<p class="hidden sm:block">{excerpt}</p>
			<p class="text-center sm:text-left">{publishDate}</p>
			<div class="sm:flex sm:flex-wrap items-center gap-2 hidden">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</div>
	</a>
</div>
