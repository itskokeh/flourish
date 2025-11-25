<script lang="ts">
	import { Mail } from '@lucide/svelte';
	export let style: string = '';
</script>

<Mail
	class="cursor-pointer dark:hover:text-blue-400 hover:text-blue-600 {style}"
	aria-label="Email Icon"
/>
