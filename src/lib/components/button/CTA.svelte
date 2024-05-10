<script lang="ts">
	import type { Snippet } from "svelte";
	
	interface Props {
		filled?: boolean;
		outlined?: boolean;
		disabled?: boolean;
		children: Snippet;
	}

	let { filled = false, outlined = false, disabled = false, children }: Props = $props();
</script>

<button class:filled={!outlined} class:outlined={!filled} {disabled}>
	<span>
		{@render children()}
	</span>
</button>

<style>
	button {
		@apply text-label-large flex w-full min-w-[328px] items-center justify-center rounded-3xl px-2 py-2.5;
	}

	button.filled:not(:disabled) {
		@apply interactive-bg-primary-container;
	}

	button.outlined:not(:disabled) {
		@apply ring-primary-container text-on-surface ring-1 transition-all;
	}

	button.outlined:hover:not(:disabled) {
		@apply text-primary ring-2;
	}

	button:disabled {
		@apply bg-inverse-surface/60 text-on-inverse-surface/60;
	}

	button > span {
		@apply flex items-center justify-center gap-1.5;
	}
</style>
