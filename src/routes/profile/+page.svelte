<script lang="ts">
	import Button from '$lib/components/button/CTA.svelte';
	import { cn } from '$lib/utils';
</script>

{#snippet toggle()}
<label
class="ring-primary group relative flex min-h-[32px] min-w-[52px] cursor-pointer items-center overflow-hidden rounded-[100px] px-2 py-1 ring-2"
>
<input type="checkbox" id="other-forms" class="peer sr-only" />
<div
	class={cn(
		'absolute inset-0 w-full h-full bg-surface-variant peer-checked:bg-surface transition-colors'
	)}
>
	<!--  -->
</div>
<div
	class={cn(
		'h-4 w-4 transition-transform',
		'bg-primary relative rounded-full',
		'peer-checked:translate-x-full peer-checked:scale-150 peer-checked:bg-primary-container'
	)}
>
	<div
		class={cn(
			'absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2',
			'rounded-[100px] bg-primary/20',
			'w-10 h-10 scale-0',
			'transition-transform ease-in-out duration-[250ms]',
			'group-hover:scale-105 group-active:scale-100'
		)}
	>
		<!--  -->
	</div>
</div>
</label>
{/snippet}

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
			{@render toggle()}
		</article>
		<article class="flex items-center justify-between">
			<div>
				<h2 class="text-title-medium">Other Forms</h2>
				<p class="text-body-medium">Enable to see other forms of Pokémon.</p>
			</div>
			{@render toggle()}
		</article>
	</section>
</main>
