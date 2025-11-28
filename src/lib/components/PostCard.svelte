<script lang="ts">
	let { slug, title, excerpt, tags, publishDate, featuredImage } = $props();
</script>

<div
	class="flex border-0 rounded-md hover:shadow-lg transition-shadow duration-300 dark:bg-darkMode-card bg-lightMode-card h-full"
>
	<a
		href={`blog/${slug}`}
		class="flex flex-col w-full grow"
	>
		<img
			src={featuredImage}
			alt="Post Avatar"
			fetchpriority="high"
			loading="lazy"
			style="object-fit: cover;"
			class="aspect-[4/5] h-32 sm:h-56 rounded-t-md"
		/>
		<div class="p-4 flex flex-col justify-between gap-4 h-full">
			<h2
				class="text-lg md:text-2xl text-center md:text-left dark:text-yellow-400"
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
