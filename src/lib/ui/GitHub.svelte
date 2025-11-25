<script lang="ts">
	import { LucideGithub } from '@lucide/svelte';
	export let style = '';
</script>

<LucideGithub
	class={`cursor-pointer dark:hover:text-blue-400 hover:text-blue-600 ${style}`}
	aria-label="GitHub Icon"
/>
