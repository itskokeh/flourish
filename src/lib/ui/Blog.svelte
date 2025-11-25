<script lang="ts">
	// import { BookText } from '@lucide/svelte';
	import Icon from '@iconify/svelte';
	import openBook from '@iconify-icons/noto/open-book';
	type Props = {
		class?: string;
		[key: string]: any;
	};
	let { ...rest }: Props = $props();
</script>

<Icon icon={openBook} {...rest} />
