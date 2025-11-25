<script lang="ts">
	// import { Layers3 } from '@lucide/svelte';
	import Icon from '@iconify/svelte';
	import hammerAndwrench from '@iconify-icons/noto/hammer-and-wrench'
	type Props = {
		class?: string;
		[key: string]: any;
	};
	let { ...rest }: Props = $props();
</script>

<Icon icon={hammerAndwrench} {...rest} />
