<script lang="ts">
	let { value = $bindable(), onkeyup }: { value: string; onkeyup?: (e: Event) => void } = $props();
</script>

<div class="inline-flex h-20 w-full min-w-[360px] items-center justify-center border-b px-4">
	<div
		class="ring-primary-container h-12 w-full min-w-[328px] hover:bg-surface-variant inline-flex items-center rounded-3xl px-4 py-3.5 ring-2 transition-shadow focus-within:ring-4 hover:ring-1"
	>
		<div class="inline-flex w-full items-center">
			<input
				{onkeyup}
				bind:value
				type="text"
				autocomplete="off"
				placeholder="Procurar Pókemon..."
				class="placeholder:text-on-surface caret-grass w-full bg-transparent outline-none"
			/>
		</div>
	</div>
</div>
