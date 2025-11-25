<script lang="ts">
	import { Heart, Twitter, GitHub, Email } from '$lib';
	const date = new Date();
</script>

<footer
	class="flex flex-col p-4 mb-20 border-t border-gray-700/50 dark:border-gray-700 w-full m-auto"
>
	<div class="p-4 flex gap-4 justify-center">
		<a
			href="http://x.com/itskokeh"
			aria-label="link to Twitter account"
			class="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
		>
			<Twitter style="w-5 h-5" />
			<span class="ml-1">Twitter</span>
		</a>
		<a
			href="http://github.com/itskokeh"
			aria-label="link to GitHub account"
			class="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
		>
			<GitHub style="w-5 h-5" />
			<span class="ml-1">GitHub</span>
		</a>
		<a
			href="mailto:kokeh@proton.me"
			aria-label="link to send an email"
			class="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
		>
			<Email style="w-5 h-5" />
			<span class="ml-1">Contact</span>
		</a>
	</div>
	<p class="flex justify-center font-bold">
		With
		<span class="ml-1 mr-1 self-center">
			<Heart style="w-4 h-4" />
		</span>
		from the South of the Sahara
	</p>
	<span class="text-center font-bold">&copy; {date.getFullYear()}</span>
</footer>
