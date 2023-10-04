<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import EmblaCarousel from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import Icon from '@iconify/svelte';
	import Introduction from '$lib/components/home/Introduction.svelte';
	import Projects from '$lib/components/home/Projects.svelte';
	import TechStack from '$lib/components/home/TechStack.svelte';
</script>

<section id="intro">
	<Introduction />
</section>
<section>
	<Projects />
</section>
<section id="skills">
	<TechStack />
</section>
