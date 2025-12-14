<script lang="ts">
	let { slug, title, publishDate, featuredImage } = $props();
</script>

<article class="group w-full">
	<a
		href={`blog/${slug}`}
		class="flex items-start gap-4 p-3 -mx-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors duration-200"
	>
		<div
			class="shrink-0 w-24 h-24 sm:w-28 sm:h-20 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700"
		>
			<img
				src={featuredImage}
				alt={title}
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				fetchpriority="high"
				loading="eager"
			/>
		</div>

		<div class="flex flex-col justify-center h-full gap-1">
			<h2
				class="text-lg sm:text-xl font-bold leading-tight text-lightMode-text dark:text-white group-hover:text-lightMode-accent dark:group-hover:text-darkMode-accent transition-colors"
			>
				{title}
			</h2>

			{#if publishDate}
				<time
					class="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase"
				>
					{publishDate}
				</time>
			{/if}
		</div>
	</a>
</article>
