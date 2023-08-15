<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { regions } = data;
	console.log(regions);
</script>

<ul class="my-2 flex flex-col gap-2 px-2">
	{#each regions.results as region, i (i)}
		<section class="bg-surface-variant relative inline-flex min-h-[118px] rounded-2xl">
			<h1 class="text-title-large">{region.name}</h1>
		</section>
	{/each}
</ul>
