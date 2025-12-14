<script lang="ts">
	import { Heart } from '$lib';
	import { socialLinks } from '$lib/utils/socialLinks';
	import { page } from '$app/state'; // Import page store

	const date = new Date();
</script>

<footer
	class="flex flex-col p-4 mb-20 border-t border-gray-200 dark:border-gray-800 w-full mt-auto"
>
	{#if page.url.pathname !== '/'}
		<div class="p-4 flex md:gap-6 gap-4 justify-center">
			{#each socialLinks as { url, component: Icon, ariaLabel }}
				<a
					href={url}
					class="flex items-center hover:text-lightMode-accent dark:hover:text-darkMode-accent transition-colors"
					aria-label={ariaLabel}
					rel="noopener noreferrer"
					target="_blank"
				>
					<Icon class="w-8 h-8 sm:w-10 sm:h-10" />
				</a>
			{/each}
		</div>
	{/if}

	<div class="flex flex-col items-center gap-2 text-sm sm:text-base mt-4">
		<p
			class="flex items-center font-bold text-lightMode-text dark:text-darkMode-text"
		>
			With
			<span class="mx-1.5 self-center text-red-600 dark:text-red-500">
				<Heart style="w-4 h-4 fill-current" />
			</span>
			from the South of the Sahara
		</p>
		<span class="font-bold opacity-80">&copy; {date.getFullYear()}</span>
	</div>
</footer>
