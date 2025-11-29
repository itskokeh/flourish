<script lang="ts">
	import { Heart } from '$lib';
	import X from '$lib/ui/X.svelte';
	import GH from '$lib/ui/GH.svelte';
	import TelegramX from '$lib/ui/TelegramX.svelte';
	import Email from '$lib/ui/Email.svelte';
	import LinkedIn from '$lib/ui/LinkedIn.svelte';
	const date = new Date();
</script>

<footer
	class="flex flex-col p-4 mb-20 border-t border-gray-700/50 dark:border-gray-700 w-full m-auto"
>
	<div class="p-4 flex md:gap-6 gap-4 justify-center">
		<a
			href="http://x.com/itskokeh"
			target="_blank"
			referrerpolicy="no-referrer"
			aria-label="link to Twitter account"
			class="flex items-center"
		>
			<X
				class="w-10 h-10 dark:text-gray-300 dark:hover:text-gray-400 hover:text-gray-800 text-black"
			/>
		</a>
		<a
			href="http://github.com/itskokeh"
			target="_blank"
			referrerpolicy="no-referrer"
			aria-label="link to GitHub account"
			class="flex items-center"
		>
			<GH
				class="w-10 h-10 dark:text-gray-300 dark:hover:text-gray-400 hover:text-gray-800 text-black"
			/>
		</a>
		<a
			href="mailto:kokeh@proton.me"
			aria-label="Send an email"
			class="flex items-center"
		>
			<Email
				class="w-9 h-9 dark:text-gray-300 dark:hover:text-gray-400 hover:text-gray-800 text-black"
			/>
		</a>
		<a
			href="http://t.me/itskokeh"
			target="_blank"
			referrerpolicy="no-referrer"
			aria-label="link to Telegram account"
			class="flex items-center"
		>
			<TelegramX
				class="w-10 h-10 dark:text-gray-300 dark:hover:text-gray-400 hover:text-gray-800 text-black"
			/>
		</a>
		<a
			href="http://linkedin.com/in/itskokeh"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="link to linkedIn account"
			class="flex items-center"
		>
			<LinkedIn
				class="w-10 h-10 dark:text-gray-300 dark:hover:text-gray-400 hover:text-gray-800 text-black"
			/>
		</a>
	</div>
	<p class="flex justify-center">
		With
		<span class="ml-1 mr-1 self-center">
			<Heart style="w-4 h-4" />
		</span>
		from the South of the Sahara
	</p>
	<span class="text-center font-bold">&copy; {date.getFullYear()}</span>
</footer>
