<script>
	import '../../../app.css';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { techstack } from '../../data/data';

	// @ts-ignore
	const showTechStackDetails = (item) => {
		console.log(item);
	};

	let techstackCardMargin = 'margin-right:-100vw;';
	let techstackIndex = 0;

	onMount(async () => {
		console.log(techstack);
	});
</script>

<div class="container mx-auto">
	<div class="py-20 px-5 relative">
		<div class="flex gap-5 flex-wrap items-center justify-center">
			{#each techstack as item, index}
				<button
					class="tech__card mb-2 flex gap-2 items-center py-3 px-6 rounded-full group"
					on:click={() => {
						techstackCardMargin = 'margin-right:-100vw;';
						setTimeout(() => {
							techstackIndex = index; // Set the new value of techstackIndex
							techstackCardMargin = 'margin-right:0;';
						}, 300);
						showTechStackDetails(item); // Call the testScript function
					}}
				>
					<span class=" text-sm lg:text-xl text-red-500 group-hover:text-red-600">
						<Icon icon={item.iconifyCode} />
					</span>
					<span class=" text-sm lg:text-md">{item.name}</span>
				</button>
			{/each}
		</div>

		<div
			style={techstackCardMargin}
			class="__tStackModal fixed right-[9%] bottom-[100px] border border-[--color_neutral-3] py-4 px-4 w-[100%] max-w-[360px] bg-[--color_neutral-2] rounded-lg"
		>
			<button
				data-close-modal
				class="absolute right-1 top-1 rounded-full p-2"
				on:click={() => {
					techstackCardMargin = 'margin-right:-100vw;';
				}}
			>
				<Icon icon="mdi:close" />
			</button>
			<div class="__tsModalHeader flex gap-3 items-center text-3xl mt-5 rounded-lg">
				<div data-techstack-icon class="rounded-lg p-5 text-3xl">
					<Icon icon={techstack[techstackIndex].iconifyCode} class="text-red-500" />
				</div>
				<div>
					<span class="text-md">{techstack[techstackIndex].name}</span>
					<p class="text-sm capitalize opacity-[0.78]">{techstack[techstackIndex].category}</p>
				</div>
			</div>

			<p class="border-b-2 border-[--color_neutral-3] py-3" />

			<p class="whitespace-pre-wrap py-5">{techstack[techstackIndex].shortDescription}</p>

			<div class="flex justify-end">
				<a
					href={techstack[techstackIndex].referenceLink}
					target="_blank"
					class="flex gap-1 items-center py-3 px-5 bg-red-500 hover:bg-red-600 text-[--color_neutral-2]"
				>
					<Icon icon="carbon:link" />
					Check this out!
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.tech__card {
		user-select: none;
		box-shadow: -7px -7px 16px 0 var(--color_neutral-1), 7px 7px 10px -4px var(--color_neutral-3);
		cursor: pointer;
		transition: 0.4s;
	}
	.tech__card:active {
		box-shadow: -7px -7px 16px 0 var(--color_neutral-1) inset,
			7px 7px 10px -4px var(--color_neutral-3) inset;
	}
	.__tStackModal {
		box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.15);
		transition: margin-right 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	[data-techstack-icon] {
		box-shadow: -7px -7px 16px 0 var(--color_neutral-1), 7px 7px 10px -4px var(--color_neutral-3);
		border: solid 2px var(--color_neutral-2);
	}

	[data-close-modal]:active {
		box-shadow: -7px -7px 16px 0 var(--color_neutral-1) inset,
			7px 7px 10px -4px var(--color_neutral-3) inset;
	}
</style>
