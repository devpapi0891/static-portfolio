<script lang="ts">
	import '../../app.css';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	// @ts-ignore
	const switchDarkMode = (boolean) => {
		localStorage.setItem('darkMode', JSON.stringify(boolean));
		if (isDarkMode === false) {
			document.documentElement.classList.remove('darkMode'); //documentElement to target the html
		} else {
			document.documentElement.classList.add('darkMode');
		}
	};

	let isDarkMode = true;
	onMount(async () => {
		if (!localStorage.getItem('darkMode')) {
			localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
		}

		let currentDarkModeState = localStorage.getItem('darkMode');
		// @ts-ignore
		isDarkMode = JSON.parse(currentDarkModeState);

		switchDarkMode(isDarkMode);
	});
</script>

<header class="py-5 sticky top-0 z-50" style="backdrop-filter:blur(10px);">
	<nav>
		<div class="container mx-auto px-5">
			<div class="flex gap-2">
				<a href="./" id="logo" class="font-fam-brand text-base md:text-3xl">
					Dev<span class="text-red-500 font-bold">Papi</span>
				</a>
				<button
					data-darkmode-toggler
					class="ms-auto text-3xl p-1 rounded-full"
					on:click={() => switchDarkMode((isDarkMode = !isDarkMode))}
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
		box-shadow: -7px -7px 16px 0 var(--color-neutral-1), 7px 7px 10px -4px var(--color-neutral-3);
	}

	[data-darkmode-toggler]:active {
		box-shadow: -7px -7px 16px 0 var(--color-neutral-1) inset,
			7px 7px 10px -4px var(--color-neutral-3) inset;
	}
</style>
