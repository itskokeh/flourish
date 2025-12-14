<script lang="ts">
	let { slug, title, description, tags, featuredImage, techStack } = $props();
</script>

<article
	class="group flex flex-col sm:flex-row w-full rounded-xl overflow-hidden
  bg-lightMode-card dark:bg-darkMode-card
  border border-gray-200 dark:border-gray-800
  hover:shadow-xl hover:border-lightMode-accent/30 dark:hover:border-darkMode-accent/30
  transition-all duration-300 ease-out"
>
	<a href={`projects/${slug}`} class="flex flex-col sm:flex-row w-full">
		<div
			class="w-full sm:w-48 sm:shrink-0 h-48 sm:h-auto relative overflow-hidden"
		>
			<img
				src={featuredImage}
				alt={title}
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
		</div>

		<div class="p-5 flex flex-col gap-3 flex-grow">
			<div>
				<h3
					class="text-xl font-bold text-lightMode-text dark:text-white group-hover:text-lightMode-accent dark:group-hover:text-darkMode-accent transition-colors"
				>
					{title}
				</h3>
				<p
					class="text-gray-600 dark:text-gray-300 text-sm mt-1 leading-relaxed line-clamp-2"
				>
					{description}
				</p>
			</div>

			<div class="flex flex-wrap items-center gap-2 mt-auto">
				{#each techStack as tech}
					<span class="tag">{tech}</span>
				{/each}
			</div>

			{#if tags && tags.length > 0}
				<div
					class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400"
				>
					{#each tags as tag}
						<span>#{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
	</a>
</article>
