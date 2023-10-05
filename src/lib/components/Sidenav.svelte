<script>
	import '../../app.css';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
</script>

<div class="__vertical_menu flex flex-row lg:flex-row-reverse gap-5 text-sm">
	<a href="" class="font-fam-brand hover:text-red-600">Home</a>
	<a href="" class="font-fam-brand hover:text-red-600">Projects</a>
	<a href="" class="font-fam-brand hover:text-red-600">Info</a>
	<a href="" class="font-fam-brand hover:text-red-600">Contact</a>
</div>

<style>
	.__vertical_menu {
		position: fixed;
		left: 15px;
		top: 95%;
		transform: translateY(-50%) rotate(-90deg);
		transform-origin: left center;
		padding: 8px 15px 10px 15px;
		z-index: 1000;
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;

		backdrop-filter: blur(5px);
		border: solid 2px transparent;
		border-top: none;
		border: solid 2px var(--color-inverted-2);

		flex-direction: row-reverse;
	}
	.__vertical_menu:hover {
		background-color: var(--color-neutral-2);
		border: solid 2px var(--color-inverted-2);
	}

	@media (max-height: 600px) {
		.__vertical_menu {
			position: fixed;
			left: 0;
			top: unset;
			bottom: 0;
			transform: unset;
			transform-origin: unset;
			z-index: 1000;
			border-radius: 0 !important;
			flex-direction: row;
		}
	}
</style>
