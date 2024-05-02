<script lang="ts">
	let { stats }: { stats: PokemonStat } = $props();
</script>

<div class="poke-stat">
	<div style:width={stats.base_stat + '%'}>
		<!--  -->
	</div>
	<section>
		<p>{stats.stat.name}</p>
		<p>{stats.base_stat}</p>
	</section>
</div>

<style>
	.poke-stat {
		--tw-ring-opacity: 1;
		--tw-ring-color: rgb(var(--bg-color) / var(--tw-ring-opacity));
		@apply bg-surface-variant/70 text-label-large relative inline-flex w-full 
        items-center overflow-hidden rounded-full px-4 py-2 uppercase ring-1;
	}

	.poke-stat > div {
		background-color: rgb(var(--bg-color));
		@apply absolute inset-0 z-[1];
	}

	.poke-stat section {
		color: rgb(var(--on-color));
		@apply relative z-[2] inline-flex gap-2;
	}
</style>
