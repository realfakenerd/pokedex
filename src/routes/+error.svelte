<script>
	import { page } from '$app/stores';
</script>

<section class="flex flex-col items-center justify-center min-h-[100dvh] text-error">
	<hgroup>
		<h1 class="text-title-small">{$page.status}</h1>
		<h2 class="text-title-large">{$page.error?.message}</h2>
	</hgroup>

    <a class="text-label-large" href="/">go back!</a>
</section>
