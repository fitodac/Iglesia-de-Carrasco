<script setup>
import { useStore } from '@/store/pagedata'
import { gsap, ScrollTrigger, TimelineLite } from 'gsap/all'

import SectionTitle from '@/components/SectionTitle'


const store = useStore()
gsap.registerPlugin(ScrollTrigger)

const social = computed(() => store.data.global.social_networks)


/********************
onMounted(() => {

	const end = '40% center'

	// gsap.to('#social', {
	// 	scrollTrigger: {
	// 		start: 'top top',
	// 		scrub: 1
	// 	},
	// 	y: -600
	// })


	gsap.from('.social--section-title', {
		scrollTrigger: {
			trigger: '#social',
			// start: 'top center',
			end: end,
			scrub: 1
		},
		duration: .3,
		opacity: 0
	})

	gsap.from('.fb', {
		scrollTrigger: {
			trigger: '#social',
			// start: '10% center',
			end: end,
			scrub: 1
		},
		duration: .3,
		x: -100,
		opacity: 0
	})

	gsap.from('.ig', {
		scrollTrigger: {
			trigger: '#social',
			// start: '10% center',
			end: end,
			scrub: 1
		},
		duration: .5,
		y: 100,
		opacity: 0
	})

	gsap.from('.yt', {
		scrollTrigger: {
			trigger: '#social',
			// start: '10% center',
			end: end,
			scrub: 1
		},
		duration: .7,
		x: 100,
		opacity: 0
	})

})
********************/
</script>



<template>
<section id="social" class="py-14 overflow-hidden lg:pt-20 lg:pb-0">
	<div class="container mx-auto px-6">
	
		<SectionTitle title="SOCIAL" color="dark" class="social--section-title"/>


		<div class="grid grid-cols-3 gap-0 max-w-5xl mx-auto lg:gap-20">
		
			<div 
				v-if="social.facebook" 
				class="col-span-3 flex justify-center lg:col-span-1">
				<nuxt-link 
					:to="social.facebook" 
					target="_blank"
					class="fb text-[#1973EB] leading-none font-black 
									tracking-tighter h-28 flex items-center 
									select-none lg:h-40">
					<div class="w-12 lg:w-20">
						<img 
							src="/img/facebook.gif"
							alt="facebook"
							class="w-20 mx-auto object-cover lg:w-28"/>
					</div>
					<div class="pt-1 lg:pt-0">
						<span class="block lg:text-lg">Estamos en</span>
						<span class="text-xl -mt-1 block lg:text-3xl lg:-mt-2">facebook</span>
					</div>
				</nuxt-link>
			</div>
			


			<div 
				v-if="social.instagram"
				class="col-span-3 flex justify-center lg:col-span-1">
				<nuxt-link 
					:to="social.instagram" 
					target="_blank"
					class="ig leading-none font-black tracking-tighter 
									h-28 flex items-center select-none lg:h-40">
					<div class="w-14 lg:w-28">
						<img 
							src="/img/instagram.gif"
							alt="instagram"
							class="w-28 mx-auto object-cover lg:w-40"/>
					</div>
					<div class="pt-1 lg:pt-0">
						<span class="text-[#CD386A] block lg:text-lg">Estamos en</span>
						<span class="text-[#EB4041] text-xl -mt-1 block lg:text-3xl lg:-mt-2">instagram</span>
					</div>
				</nuxt-link>
			</div>
			


			<div 
				v-if="social.youtube"
				class="col-span-3 flex justify-center lg:col-span-1">
				<nuxt-link 
					:to="social.youtube" 
					target="_blank"
					class="yt text-[#F50E02] leading-none font-black 
								tracking-tighter h-28 flex items-center 
								select-none lg:h-40">
					<div class="w-20">
						<img 
							src="/img/youtube.gif"
							alt="youtube"
							class="w-12 lg:w-24 mx-auto object-cover lg:w-32"/>
					</div>
					<div class="pt-1 lg:pt-0">
						<span class="block lg:text-lg">Estamos en</span>
						<span class="text-xl -mt-1 block lg:text-3xl lg:-mt-2">YouTube</span>
					</div>
				</nuxt-link>
			</div>

		</div>

	</div>
</section>
</template>