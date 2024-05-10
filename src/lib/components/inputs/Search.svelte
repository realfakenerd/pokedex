<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	// ring-primary-container hover:bg-surface-variant inline-flex h-12 w-full min-w-[328px] items-center rounded-3xl px-4 py-3.5 ring-2 transition-shadow focus-within:ring-4 hover:ring-1
	let { value = $bindable(), onkeyup }: { value: string; onkeyup?: (e: Event) => void } = $props();
</script>

<fieldset class="group">
	<label class="inline-flex w-full gap-4">
		<Icon icon="mdi:search" width="24px" class="group-hover:text-primary-container transition-colors" />
		<input
			{onkeyup}
			bind:value
			type="text"
			autocomplete="off"
			placeholder="Procurar Pókemon..."
			class="placeholder:text-on-surface caret-grass w-full border-none bg-transparent outline-none"
		/>
	</label>
</fieldset>

<style>
	fieldset {
		display: inline-flex;
		width: 100%;
		min-width: 328px;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		padding-inline: 1rem;
		padding-block: 0.875rem;
		transition-property: box-shadow, background-color;
		transition: 150ms ease-in-out;
		
		@apply ring-primary-container text-label-large ring-2;

		&:focus-within {
			@apply ring-1;
		}
	}

	@media (hover: hover) {
		fieldset:hover {
			@apply ring-4 bg-surface-variant/30;
		}
	}

</style>
