<script>
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import Hero from './hero.svelte';
</script>

<section>
	<Hero />
</section>
<section class="container px-36 py-20 text-white space-y-10">
	<h3 class="text-3xl font-medium">Not sure where to start?</h3>
	<p>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</p>
	<div class="w-max flex flex-row flex-nowrap gap-5 mt-12 overflow-x-auto">
		<div class="w-72 grid grid-cols-[1fr_24px] grid-rows-2 items-end bg-[#323443] p-8 rounded-md">
			<h4 class="self-start col-span-2 font-semibold text-xl">Workout Videos</h4>
			<p>Access to hundreds of free, full-length workout videos.</p>
			<ArrowRight class="ml-auto" />
		</div>
		<div class="w-72 grid grid-cols-[1fr_24px] grid-rows-2 items-end bg-[#232532] p-8 rounded-md">
			<h4 class="self-start col-span-2 font-semibold text-xl">Workout Programs</h4>
			<p>Affordable and effective workout programs.</p>
			<ArrowRight class="ml-auto" />
		</div>
		<div class="w-72 grid grid-cols-[1fr_24px] grid-rows-2 items-end bg-[#323443] p-8 rounded-md">
			<h4 class="self-start col-span-2 font-semibold text-xl">Meal Plans</h4>
			<p>Plans built with registered dietitians and nutritionists.</p>
			<ArrowRight class="ml-auto" />
		</div>
		<div class="w-72 grid grid-cols-[1fr_24px] grid-rows-2 items-end bg-[#4F5261] p-8 rounded-md">
			<h4 class="self-start col-span-2 font-semibold text-xl">WO Plus ALL ACCESS</h4>
			<p>Add powerful features to your membership.</p>
			<ArrowRight class="ml-auto" />
		</div>
	</div>
</section>
<section class="container grid grid-cols-2 items-center gap-10 py-20 px-36 text-white">
	<div class="space-y-6">
		<h2 class="text-3xl font-semibold">Work out at home for free.</h2>
		<p class="text-[#EFEDE8]">
			We believe fitness should be accessible to everyone, everywhere, regardless of income or
			access to a gym. With hundreds of professional workouts, healthy recipes and informative
			articles, as well as one of the most positive communities on the web, you’ll have everything
			you need to reach your personal fitness goals – for free!
		</p>
		<a href="/#" class="mt-5 inline-flex gap-3">See More <ArrowRight /></a>
	</div>
	<img src="/images/photo-1.png" alt="" class="w-full" />
</section>
<section class="container grid grid-cols-2 items-center gap-10 py-20 px-36 text-white">
	<img src="/images/photo-2.png" alt="" class="w-full" />
	<div class="space-y-6">
		<h2 class="text-3xl font-semibold">
			Get more with low-cost training programs and advanced features.
		</h2>
		<p class="text-[#EFEDE8]">
			We believe fitness should be accessible to everyone, everywhere, regardless of income or
			access to a gym. With hundreds of professional workouts, healthy recipes and informative
			articles, as well as one of the most positive communities on the web, you’ll have everything
			you need to reach your personal fitness goals – for free!
		</p>
		<a href="/#" class="mt-5 inline-flex gap-3">See More <ArrowRight /></a>
	</div>
</section>
<section class="container py-20 px-36 text-white space-y-8 flex flex-wrap justify-around">
	<h4 class="w-full text-5xl leading-relaxed border-b border-[#D8D8D8] pb-6">Membership</h4>
	<div class="w-2/5 p-16 bg-[#232532]">
		<div class="space-y-6">
			<h4 class="text-4xl font-medium text-center">Join for Free</h4>
			<p class="text-[#EFEDE8]">
				Reach your fitness goals or maintain your healthy lifestyle with professional training and
				support from a positive and active online community.
			</p>
			<ul class="text-[#EFEDE8]">
				<li class="list-disc">~600 Full-Length Workout Videos</li>
				<li class="list-disc">Customizable Calendar</li>
				<li class="list-disc">Healthy Recipes</li>
				<li class="list-disc">Health and Fitness Articles</li>
				<li class="list-disc">Positive and Supportive Online Community</li>
				<li class="list-disc">No Credit Card Needed</li>
				<li />
			</ul>
		</div>
	</div>
	<div class="w-2/5 p-16 bg-[#232532]">
		<div class="space-y-6">
			<h4 class="text-4xl font-medium text-center">WO Plus</h4>
			<p class="text-[#EFEDE8]">
				WO Plus includes everything you get with a free membership and adds brand new convenience
				features, fitness tools, and unique content.
			</p>
			<ul class="text-[#EFEDE8]">
				<li class="list-disc">Ads-Free Website and Videos</li>
				<li class="list-disc">Surprise Me Workout Selection Tool</li>
				<li class="list-disc">Statistics for Your Activities</li>
				<li class="list-disc">Enter and Track Custom Workouts</li>
				<li class="list-disc">FB Plus Exclusive Workouts</li>
				<li class="list-disc">Trackers to See Your Progress</li>
				<li class="list-disc">FB Plus Content and Challenges</li>
				<li class="list-disc">Video Tags</li>
				<li class="list-disc">FB Plus Routines</li>
				<li class="list-disc">Rest Day Complete</li>
				<li />
			</ul>
		</div>
	</div>
</section>
