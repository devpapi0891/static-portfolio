<script>
	import '../../app.css';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	// @ts-ignore
	const changeMode = (boolean) => {
		localStorage.setItem('darkMode', JSON.stringify(boolean));
		if (isDarkMode === false) {
			document.body.classList.remove('darkMode');
		} else {
			document.body.classList.add('darkMode');
		}
	};

	let isDarkMode = false;
	onMount(async () => {
		if (!localStorage.getItem('darkMode')) {
			localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
		}

		let currentDarkModeState = localStorage.getItem('darkMode');
		// @ts-ignore
		isDarkMode = JSON.parse(currentDarkModeState);

		changeMode(isDarkMode);
	});
</script>

<header class="py-5 sticky top-0 z-50">
	<nav>
		<div class="container mx-auto px-5">
			<div class="flex gap-2">
				<a href="./" id="logo">DevPapi</a>
				<button
					data-darkmode-toggler
					class="ms-auto text-3xl p-1 rounded-full"
					on:click={() => changeMode((isDarkMode = !isDarkMode))}
				>
					{#if isDarkMode === false}
						<Icon icon="bxs:moon" />
					{:else}
						<Icon icon="bxs:sun" class="text-red-500" />
					{/if}
				</button>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
	}
	nav {
	}

	[data-darkmode-toggler] {
		box-shadow: -7px -7px 16px 0 var(--color_neutral-1), 7px 7px 10px -4px var(--color_neutral-3);
	}

	[data-darkmode-toggler]:active {
		box-shadow: -7px -7px 9px 0 var(--color_neutral-1) inset,
			7px 7px 10px -4px var(--color_neutral-3) inset;
	}
</style>
