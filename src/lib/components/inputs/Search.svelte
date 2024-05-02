<script lang="ts">
	let { value = $bindable(), onkeyup }: { value: string; onkeyup?: (e: Event) => void } = $props();
</script>

<div
	class="border-outline inline-flex h-20 w-full min-w-[360px] items-center justify-center border-b px-4"
>
	<div class="ring-primary-container h-12 w-full min-w-[328px] rounded-3xl px-4 py-3.5 ring-2">
		<div class="inline-flex w-full items-center justify-start">
			<input
				{onkeyup}
				bind:value
				placeholder="Procurar Pókemon..."
				class="placeholder:text-on-surface w-full bg-transparent outline-none"
			/>
		</div>
	</div>
</div>
