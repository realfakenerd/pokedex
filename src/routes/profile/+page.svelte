<script lang="ts">
	import Button from '$lib/components/button/CTA.svelte';
</script>

<section class="border-outline flex flex-col justify-center gap-2 border-b border-solid px-2 py-5">
	<div class="text-on-surface text-body-large flex justify-between gap-2 px-0.5">
		<p class="my-auto">Mantenha sua Pokédex atualizada e participe desse mundo.</p>
		<img
			style="height: 92px; width: 92px;"
			loading="lazy"
			src="/pngwing 1.png"
			alt="Pokémon themed illustration"
			class="shrink-0"
		/>
	</div>
	<Button outlined>Entre ou Cadastre-se</Button>
</section>

<main class="flex flex-col gap-2 p-4">
	<header class="text-title-large">
		<h1>Settings</h1>
	</header>
	<section class="flex flex-col gap-4">
		<article class="flex items-center justify-between">
			<div>
				<h2 class="text-title-medium">Mega Evolutions</h2>
				<p class="text-body-medium">Enable to see mega evolutions in the Pokédex.</p>
			</div>
			<button class="toggle" aria-label="Toggle Mega Evolutions">
				<span class="toggle-circle"><!----></span>
			</button>
		</article>
		<article class="flex items-center justify-between">
			<div>
				<h2 class="text-title-medium">Other Forms</h2>
				<p class="text-body-medium">Enable to see other forms of Pokémon.</p>
			</div>
			<button class="toggle" aria-label="Toggle Other Forms">
				<span class="toggle-circle"><!----></span>
			</button>
		</article>
	</section>
</main>

<style>
	.toggle {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 24px;
		background-color: #bfbfbf;
		border-radius: 30px;
		cursor: pointer;
	}

	.toggle-circle {
		width: 20px;
		height: 20px;
		background-color: white;
		border-radius: 50%;
		transition: transform 0.2s linear;
	}
</style>
