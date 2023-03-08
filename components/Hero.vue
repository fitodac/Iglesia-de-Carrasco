<script setup>
import { useStore } from '@/store/pagedata'
import { getWebpMedia } from '@/composables/media'
import { gsap, ScrollTrigger } from 'gsap/all'

// image: field_632a5822e057e
// title: field_632a576ee057b
// handwrited words: field_632a5793e057c

gsap.registerPlugin(ScrollTrigger)

const store = useStore()
const pagedata = reactive(store.getPageData)
const hero_data = reactive({...pagedata?.acf?.hero})

let title = hero_data.field_632a576ee057b

hero_data.field_632a5793e057c.map(el => {
	title = title.replace(el[Object.keys(el)], `<span class="text-primary font-handwrite text-5xl font-medium indent-[-20px] -mt-4 -mb-6 inline-block relative z-[-1] xl:text-7xl xl:indent-[-35px]">${el[Object.keys(el)]}</span>`)
})


hero_data.field_632a5822e057e = getWebpMedia(hero_data.field_632a5822e057e)


/********************
onMounted(() => {

	gsap.to('.main-hero--image', {
		scrollTrigger: {
			trigger: '#mainHero',
			start: 'top top',
			scrub: 1
		},
		opacity: 0,
		// webkitFilter: 'blur(10px)',
		// scale: 1.1,
		y: -300
	})


	gsap.to('.main-hero--logo', {
		scrollTrigger: {
			trigger: '#mainHero',
			start: 'top top',
			scrub: 1
		},
		opacity: 0,
		scale: 1.2,
		y: -60
	})


	gsap.to('.main-hero--title', {
		scrollTrigger: {
			trigger: '#mainHero',
			start: 'top top',
			scrub: 1
		},
		opacity: 0,
		scale: 1.1,
		y: -30
	})

})
********************/
</script>


<template>
<section id="mainHero" class="relative z-20">
	<div class="container mx-auto px-6 pt-20 pb-14 lg:px-10 lg:pt-8 lg:pb-0 xl:px-20">
		<div class="grid grid-cols-12 lg:gap-x-10 xl:gap-x-20">
			
			<div class="col-span-12 lg:col-span-7">
				<img 
					v-if="hero_data.field_632a5822e057e"
					:src="hero_data.field_632a5822e057e"
					alt="Iglesia Evangélica Bautista de Carrasco"
					class="main-hero--image w-full h-[320px] object-cover rounded-2xl select-none lg:h-[660px]"/>
			</div>
			
			<div class="col-span-12 pt-8 flex items-center lg:col-span-5 lg:pt-0">
				<div>
					<h1 class="hidden lg:block">
						<img 
							src="/img/brand-secondary.svg"
							width="200"
							height="50"
							alt="Iglesia Evangélica Bautista de Carrasco"
							class="main-hero--logo mb-6 select-none"/>
						<span class="sr-only">Iglesia Evangélica Bautista de Carrasco</span>
					</h1>

					<div class="main-hero--title">
						<h2 
							v-html="title" 
							class="text-secondary text-3xl font-extrabold leading-none select-none lg:text-3xl xl:text-5xl"/>

						<div class="mt-4 text-right">
							<div class="text-gray-400 font-extrabold select-none lg:text-xl">{{ hero_data.field_632a749ca20fe }}</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
</template>