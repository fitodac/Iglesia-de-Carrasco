<script>
definePageMeta({
  layout: 'canvas',
});
</script>


<script setup>
import { useStore } from '@/store/pagedata'
import { getWebpMedia } from '@/composables/media'
import { gsap, ScrollTrigger } from 'gsap/all'
import { Swiper, EffectFade } from 'swiper'
import 'swiper/css'
import tinycolor from 'tinycolor2'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'


import Hero from '@/components/Hero'
import Schedules from '@/components/Schedules'
import Social from '@/components/Social'
import SectionTitle from '@/components/SectionTitle'

useHead({
	title: 'Bienvenido a la Iglesia de Carrasco',
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: 'Nuestra misión es vivir para la gloria de Dios haciendo discípulos para nuestro Señor Jesucristo'
		}
	],
	link: [
		{
			rel: 'canonical',
			href: 'https://iglesiadecarrasco.com'
		}
	]
})


const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndLarger = breakpoints.greaterOrEqual('sm')
const largerThanSm = breakpoints.greater('sm')
const lgAndSmaller = breakpoints.smallerOrEqual('lg')
const smallerThanLg = breakpoints.smaller('lg')
const largerThanLg = breakpoints.greater('lg')


gsap.registerPlugin(ScrollTrigger)

const store = useStore()
const route = useRoute()

store.setSlug(route.name)
const pagedata = reactive(store.getPageData)
	


// SECTIONS
const sections = reactive([...pagedata.acf.sections])
const sections_bg_color = ref('#FFF')
const section_controls = reactive([[], []])
const sections_slider = reactive([])
const activities_title_color = ref('light')

sections.forEach(el => el.field_632093cb3f922 = getWebpMedia(el.field_632093cb3f922))

sections.map((s, i) => {
	const el = {...s, active: false}
	if( i % 2 ){ section_controls[1].push(el) }else{ section_controls[0].push(el) }
})

const section_controls_idx = ref(0)

section_controls[0][0].active = true


// console.log('sections', sections)
// console.log('section_controls', section_controls)

const swiper = ref(null)

const sliderNavigate = id => swiper.value.slideTo(id, .8, true)

Swiper.use([EffectFade])



watch(route, val => {
	const hash = val.hash.replace('#', '')
	document.querySelectorAll('.swiper-slide').forEach((el, idx) => {
		if( el.id == hash ) setTimeout(() => { swiper.value.slideTo(idx, .8, true) }, 100)
	})
})


onMounted(() => {

	swiper.value = new Swiper('.swiper', {
		// parallax: true,
		preloadImages: true,
		fadeEffect: { crossFade: true },
		effect: 'fade',
		// slidesPerView: 1,
		speed: 800,
  	// lazy: true,
		hashNavigation: true,
		loop: true,
		on: {
			init: el => {
				sections_bg_color.value = section_controls[0][el.activeIndex].field_6323075bb7fbc
			},
			slideChangeTransitionStart: el => {
				let idx = el.activeIndex - 1
				
				section_controls[0].forEach(el => el.active = false)
				section_controls[1].forEach(el => el.active = false)

				if( el.activeIndex <= section_controls[0].length - 1 ){
					sections_bg_color.value = section_controls[0][el.activeIndex].field_6323075bb7fbc
					section_controls[0][el.activeIndex].active = true
				}else{
					idx =  el.activeIndex - section_controls[0].length
					sections_bg_color.value = section_controls[1][idx].field_6323075bb7fbc
					section_controls[1][idx].active = true
				}

				activities_title_color.value = tinycolor(sections_bg_color.value).getBrightness() >= 200 ? 'dark' : 'light'
			}
		}
	})



	section_controls.map((el, i) => {
		section_controls[i].map((v, ii) => {
			sections_slider[section_controls_idx.value] = {
				...v,
				field_632093cb3f922: getWebpMedia(v.field_632093cb3f922, 'large')
			}
			section_controls_idx.value++
		})
	})


	if( route.hash ){
		setTimeout(() => {
			const hash = route.hash.replace('#', '')
			const el = document.getElementById(hash)
			el.scrollIntoView({block: 'end'})			
			
			document.querySelectorAll('.swiper-slide').forEach((el, idx) => {
				if( el.id == hash ) setTimeout(() => { swiper.value.slideTo(idx, .8, true) }, 100)
			})			
		}, 0)
	}


	/********************

	const scrolltrigger_config = {
			trigger: '#actividades',
			start: 'top center',
			scrub: 1
		}

	gsap.from('.actividades--section-title', {
		scrollTrigger: scrolltrigger_config,
		duration: .3,
		opacity: 0
	})

	gsap.from('.activities::before', {
		scrollTrigger: scrolltrigger_config,
		duration: .1,
		opacity: 0
	})

	gsap.from('.activities::after', {
		scrollTrigger: scrolltrigger_config,
		duration: .5,
		opacity: 0
	})

	********************/
})
</script>



<template>
<div>

	<Hero />

	<Schedules class=" -mb-14 relative z-10 lg:-mt-14"/>

	
	<section 
		id="actividades"
		class="activities bg-opacity-40 pt-28 overflow-hidden md:pt-36 
						xl:pt-40"
		:style="{'background-color': sections_bg_color}">

		<div class="container mx-auto px-6 relative">

			<SectionTitle 
				title="Actividades" 
				:color="activities_title_color" 
				class="actividades--section-title"/>

			<div class="h-14 lg:h-20"></div>


			<div 
				v-if="largerThanLg"
				class="w-[240px] pt-[120px] left-0 absolute z-20 xl:w-[280px] xl:left-[80px]">
				<div class="grid gap-y-2">
					<div 
						v-for="(btn, i) in section_controls[0]"
						:key="i"
						class="section-nav"
						:class="{'section-nav--active': btn.active}"
						@click="sliderNavigate(i)">
						
						<img 
							v-if="btn.field_632c1736a74ae"
							:src="btn.field_632c1736a74ae"
							alt="icon"
							class="w-7"
							:class="{'hidden': btn.active}"/>

						<img 
							v-if="btn.field_632c18fa3d7da"
							:src="btn.field_632c18fa3d7da"
							alt="icon"
							class="w-7"
							:class="{'hidden': !btn.active}"/>

						<span class="text-sm pl-2">{{ btn.field_6320997d25d7a }}</span>

					</div>
				</div>
			</div>


			<div 
				v-if="largerThanLg"
				class="w-[240px] pt-[120px] right-0 absolute z-20 xl:w-[280px] xl:right-[80px]">
				<div class="grid gap-y-2">
					<div 
						v-for="(btn, i) in section_controls[1]"
						:key="i"
						class="section-nav"
						:class="{'section-nav--active': btn.active}"
						@click="sliderNavigate(section_controls[0].length + i)">

						<img 
							v-if="btn.field_632c1736a74ae"
							:src="btn.field_632c1736a74ae"
							alt="icon"
							class="w-7"
							:class="{'hidden': btn.active}"/>

						<img 
							v-if="btn.field_632c18fa3d7da"
							:src="btn.field_632c18fa3d7da"
							alt="icon"
							class="w-7"
							:class="{'hidden': !btn.active}"/>

						<span class="text-sm pl-2">{{ btn.field_6320997d25d7a }}</span>

					</div>
				</div>
			</div>
			


			<div class="max-w-3xl mx-auto">
				<div class="swiper">
					<div class="swiper-wrapper">
						
						<div 
							v-for="slide in sections_slider"
							:key="slide.id"
							class="swiper-slide lg:px-10"
							:id="slide.field_6320997d25d7a">

							<div class="h-[350px] relative overflow-hidden rounded-2xl lg:h-[500px]">
								<span class="bg-gradient-to-t from-black to-transparent h-3/4 -bottom-14 inset-x-0 absolute"></span>
								
								<img 
									v-if="slide.field_632093cb3f922"
									:src="slide.field_632093cb3f922"
									:alt="slide.field_632099ae25d7b"
									class="w-full h-full object-cover select-none"/>
							</div>


							<div 
								class="bg-primary text-white text-center 
								px-10 pb-6 mx-6 -top-14 relative rounded-xl sm:mx-20 md:mx-28 lg:mx-36 xl:mx-36">
								
								<h3 class="activities-title text-4xl leading-none font-black tracking-tight -top-5 relative select-none xl:text-5xl">{{ slide.field_6320997d25d7a }}</h3>
								<h4 class="text-xl font-black leading-none -top-3 relative select-none">{{ slide.field_632099ae25d7b }}</h4>
								<div class="text-sm leading-snug mt-1 select-none" v-html="slide.field_632099cb25d7c"/>

							</div>
						

						</div>

					</div>
				</div>
			</div>

		</div>
	</section>

	<Social/>
	<Focus/>
</div>

</template>




<style lang="scss" scoped>
.section-nav{ 
	@apply bg-white border border-gray-100 text-secondary 
		text-base font-black tracking-tight px-4 py-3 flex 
		items-center rounded-lg transition-all cursor-pointer 
		select-none hover:shadow-xl; 

	&.section-nav--active{ 
		@apply bg-secondary border-secondary text-white; 
	}
}


$before_size: 350px;
$after_size: 260px;

.activities{
	position: relative;

	&::before,
	&::after{
		content: '';
		background-image: url('/img/shape.svg');
		background-size: cover;
		background-position: center;
		mix-blend-mode: overlay;
		position: absolute;
		opacity: .1;
	}

	&::before{
		width: $before_size;
		height: $before_size;
		margin-left: -$before_size;
		left: 50vw;
		top: 120px;
		transform: translateX(-130px);
	}

	&::after{
		width: $after_size;
		height: $after_size;
		margin-left: $after_size;
		left: 50vw;
		top: 650px;
		transform: translateX(-130px);
	}
}

.activities-title{
	text-shadow: 0 6px 8px rgba(0,0,0,.3);
}
</style>
