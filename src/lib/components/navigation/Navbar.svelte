<nav>
	<a href="/">
		<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"
			><path fill="#fff" d="M2.2 13a10.8 10.8 0 1 0 21.6 0H2.2Z" /><path
				fill="#CD3131"
				d="M23.8 13a10.8 10.8 0 0 0-21.6 0h21.6Z"
			/><circle cx="13" cy="13" r="3.3" fill="#fff" /><path
				stroke="#173EA5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M13 23.8a10.8 10.8 0 1 0 0-21.6 10.8 10.8 0 0 0 0 21.6Z"
			/><path
				stroke="#173EA5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M13 16.3a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6v0Z"
			/><path stroke="#173EA5" stroke-width="1.5" d="M2.2 13h7.5m6.6 0h7.5" /></svg
		>
		<span>Pokedéx</span>
	</a>
	<a href="/regions">
		<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"
			><path fill="#fff" d="M13 25C4 17 4 15 3 11h20c0 5-5 11-10 14Z" /><path
				fill="#CD3131"
				d="M23 11H3C3 8 5 2 13 1c7 0 10 7 10 10Z"
			/><circle cx="13" cy="10.8" r="3.3" fill="#fff" /><path
				stroke="#173EA5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M23 11c0 7-10 14-10 14S3 18 3 11a10 10 0 1 1 20 0Z"
			/><path
				fill="#fff"
				stroke="#173EA5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.6"
				d="M13 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
			/><path stroke="#173EA5" stroke-width="1.6" d="M3 11h7m6 0h7" /></svg
		>
		<span>Regions</span>
	</a>
	<a href="/favorites">
		<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#FFF"
			><path
				fill="#FD525C"
				stroke="#173EA5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M23 5a6 6 0 0 0-9 0l-1 1-1-1a6 6 0 1 0-9 8l2 2 8 8 8-8 2-2a6 6 0 0 0 0-8Z"
			/></svg
		>
		<span>Favorites</span>
	</a>
	<a href="pokepn">
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none"
			><rect width="12.857" height="4.286" x="8.572" y="21.428" fill="#CD3131" rx="2.143" /><path
				stroke="#173EA5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M22.955 7.045c4.393 4.393 4.393 11.517 0 15.91-4.393 4.393-11.517 4.393-15.91 0-4.393-4.393-4.393-11.517 0-15.91 4.393-4.393 11.517-4.393 15.91 0"
			/><path
				fill="#173EA5"
				fill-rule="evenodd"
				d="M17.487 10.405a3.516 3.516 0 1 1-4.973 4.973 3.516 3.516 0 0 1 4.973-4.973Z"
				clip-rule="evenodd"
			/><path
				stroke="#173EA5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M17.487 10.405a3.516 3.516 0 1 1-4.973 4.973 3.516 3.516 0 0 1 4.973-4.973M22.5 23.699c-1.794-1.889-4.69-3.074-7.5-3.074a9.806 9.806 0 0 0-7.134 3.074"
			/></svg
		>
		<span>Profile</span>
	</a>
</nav>

<style>
	nav {
		@apply bg-surface-variant text-label-large text-on-surface-variant flex min-h-[72px] w-full items-center justify-between border-t px-8 py-0;
		border-color: #e6e6e6;
	}

	a {
		@apply flex flex-col place-items-center;
		display: flex;
		gap: -2px;
	}
</style>
