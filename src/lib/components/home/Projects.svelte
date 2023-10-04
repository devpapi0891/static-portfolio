<script>
// @ts-nocheck

	import '../../../app.css';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import EmblaCarousel from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	import { projectsData as data } from '$lib/data/portfolio';

	onMount(async () => {
		console.log(data);
	});

	// Embla configs
	let options = {
		loop: true,
		align: "center", //0 1 or center
		// align: 0,
		dragFree: false
	}
	let plugins = [Autoplay()];
</script>

<div class="container mx-auto py-20 px-5">
	<div class="text-center">
		<h3 class="text-red-500 text-4xl font-bold mb-3">Projects</h3>
		<p class=" text-2xl">Here are some of the projects I made and collaborated with.</p>

		<div class="py-5">
			<div class="embla" use:EmblaCarousel={{ plugins, options }}>
				<div class="embla__container">
					{#if data.length === 0}
						<div class="embla__slide relative bg-neutral-800"></div>
					{:else}
						{#each data as dt}
						<div class="embla__slide aspect-video">
							<div class="__item">
								<img src="{dt.image}" class="object-cover rounded-2xl aspect-video" alt="">
								<p class="pt-5 text-red-500 text-3xl font-bold">{dt.title}</p>
								<p class="text-center py-3 text-sm whitespace-pre-wrap leading-20">
									{dt.description}
								</p>
								<div class="text-center py-3 flex justify-center gap-4">
									<a href="{dt.githubLink}" target="_blank"
										class="text-red-500 text-3xl">
										<Icon icon="mdi:github" />
									</a>
									<a href="{dt.siteLink}" target="_blank"
										class="text-red-500 text-3xl">
										<Icon icon="ion:globe-outline" />
									</a>
								</div>
							</div>
						</div>
						{/each}
					{/if}
				</div>
			</div>
		</div>

	</div>
</div>


<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
		/* gap: 16px; */
  }
  .embla__slide {
    flex: 0 0 50%;
    min-width: 0;
		padding: 0 8px;
  }

	.embla__slide img {
		box-shadow: 3px 4px 5px 0 rgba(0, 0, 0, 0.5);
	}
</style>