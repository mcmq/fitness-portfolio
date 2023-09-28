<script>
	import { Footprints, Play } from 'lucide-svelte';
	import HeroImage from '$lib/assets/images/hero-image.png?w=200&webp;png';
</script>

<section>
	<div class="container py-40 px-24 relative">
		<h1 class="text-[#fafaf9] font-sf-heavy md:text-9xl lg:text-[10rem] leading-none">
			WORKOUT <br />WITH ME
		</h1>
		<div class="w-56 sm:w-64 md:w-72 lg:w-96 absolute right-60 top-56">
			<img src={HeroImage} alt="Hero" class="w-full transition-all" />
			<div
				class="bg-[#ef8964] h-min flex flex-col gap-2 absolute -top-12 -right-20 md:-right-20 p-3 px-6 rounded-lg text-white"
			>
				<Footprints class="w-5 md:w-6 lg:w-9" />
				<p class="font-bold text-3xl md:text-4xl lg:text-5xl flex items-end gap-2 transition-all">
					4,95 <span class="text-base text-gray-300">km</span>
				</p>
			</div>
			<div
				class="bg-[#303030] w-max h-min grid grid-cols-3 grid-rows-2 gap-x-4 items-center absolute top-80 -left-44 p-4 px-6 rounded-lg text-white"
			>
				<Play size="48" class="bg-[#EF8963] rounded-full p-2 row-span-2" />
				<p class="col-span-2 font-bold text-3xl">350+</p>
				<p class="col-span-2 text-gray-300">Video tutorial</p>
			</div>
			<div
				class="bg-[#7A29DC] w-52 h-min flex flex-col gap-3 absolute bottom-24 -right-40 p-4 px-6 rounded-lg text-white"
			>
				<p class="col-span-2 font-bold text-3xl">500+</p>
				<p class="col-span-2 text-gray-300">Free Workout Videos</p>
			</div>
		</div>
		<p class="text-[#efede8] pt-20 font-sans">
			A huge selection of health and fitness content, healthy recipes and <br /> transformation stories
			to help you get fit and stay fit!
		</p>
		<button class="bg-[#E6533C] text-white font-medium text-lg mt-10 rounded-lg p-4 w-48"
			>Join Club Now!</button
		>
	</div>
</section>
