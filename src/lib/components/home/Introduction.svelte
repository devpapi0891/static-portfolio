<script>
	import '../../../app.css';
	import Icon from '@iconify/svelte';
</script>

<div class="container mx-auto py-20 px-5 flex items-center text-center md:text-left 
	md:text-3xl">
	<div class="__content flex flex-col gap-4 w-full" style="white-space:balance;">
		<p>I am Rafael</p>
		<p class="text-5xl md:text-8xl lg:text-9xl lg:max-w-[80%] font-fam-brand font-bold">
			Full Stack <span class="text-red-500">Web Developer</span>
		</p>
		<div class="mt-5 lg:mt-9">
			<a
				href="mailto:rafael50891.dev@gmail.com"
				class="bg-red-500 hover:bg-red-600 py-4 px-14 rounded-xl
				md:px-18 ">Hire Me</a
			>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		min-height: min(calc(100vh - 100px), 700px);
		/* height: calc(100vh - 100px); */
	}
	.container::before,
	.container::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	.container::before {
		background: url('seekanime-logo-rect.png');
		background-size: cover;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: right;
		opacity: 0.3;
	}
</style>
