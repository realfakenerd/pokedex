<script>
	export let value = '';
</script>

<div
	class="border-outline inline-flex h-20 w-full min-w-[360px] items-center justify-center border-b px-4"
>
	<div class="ring-primary-container h-12 w-full min-w-[328px] rounded-3xl px-4 py-3.5 ring-2">
		<div class="inline-flex w-full items-center justify-start">
			<input
				on:keyup
				bind:value
				placeholder="Procurar Pókemon..."
				class="placeholder:text-on-surface w-full bg-transparent outline-none"
			/>
		</div>
	</div>
</div>
