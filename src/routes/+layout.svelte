<script>
	import '../app.css';
	import Header from './header.svelte';
</script>

<div class="min-h-screen flex flex-col bg-[#171717]">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<footer
		class="text-white text-sm py-10 bg-white/5 flex flex-col items-center justify-center gap-2 text-center"
	>
		<h3>
			This website is built by <a
				class="font-semibold text-blue-400"
				href="https://linktr.ee/thekaasim">Kaasim Abdallah</a
			>
		</h3>
		<h3>
			Design is from <a class="font-semibold text-blue-400" href="https://www.figma.com/@calebapril"
				>Calib</a
			>
		</h3>
	</footer>
</div>
