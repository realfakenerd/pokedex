<script lang="ts">
	import { page } from '$app/stores';
	import { cn, handleScroll } from '$lib/utils';
	import { routes } from './routes';
</script>

<header use:handleScroll>
	<nav>
		{#each routes as { href, label, svg }, i (i)}
			<a {href}>
				{@html svg}
				<span class={cn($page.url.pathname === href ? 'block' : 'hidden')}>{label}</span>
			</a>
		{/each}
	</nav>
</header>

<style>
	header {
		z-index: 9999;
		gap: 5px;
		position: fixed;
		bottom: 0;
		width: 100%;
		margin-inline: auto;
		view-transition-name: nav;
		border-top: 1px solid #e2e8f0;
	}

	nav {
		background-color: theme('backgroundColor.surface-variant');
		color: theme('colors.on-surface-variant');
		width: 100%;
		min-height: 72px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 1rem;
		@apply text-label-large;
	}

	a {
		position: relative;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-width: 76px;
		width: 100%;
		transition-behavior: allow-discrete;
		transition: all 250ms;
	}

	
</style>
