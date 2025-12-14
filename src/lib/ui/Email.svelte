<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';
  type Props = {
    class?: string;
    [key: string]: any;
  } & SVGAttributes<SVGElement>;
  let { class: classname, ...rest }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...rest}
  class={classname}
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path
    d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3Zm0 2.5v.086l9.648 8.04a.75.75 0 0 0 .963.03l.08-.073L22.25 5.518V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Zm0 13.75h20.5a.25.25 0 0 0 .25-.25V7.472l-9.336 7.78a2.25 2.25 0 0 1-2.738.106l-.152-.128L1.5 7.39v11.86c0 .138.112.25.25.25Z"
  />
</svg>
