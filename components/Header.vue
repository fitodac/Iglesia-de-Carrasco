<script setup>
import { useStore } from '@/store/pagedata'
import { gsap, ScrollTrigger } from 'gsap/all'
import { breakpointsTailwind, useBreakpoints, useWindowSize } from '@vueuse/core'

const store = useStore()
const route = useRoute()
const router = useRouter()
gsap.registerPlugin(ScrollTrigger)


const props = defineProps({
	type: {
		default: 'basic',
		type: String
	}
})

const header = ref(null)
const spacer_height = computed(() => store.header_spacer)

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLG = breakpoints.greaterOrEqual('lg')

const header_class = computed(() => {
	return store.menu_open ? 'translate-x-12 opacity-0' : ''
})

const container_class = 'basic' === props.type ? '' : 'lg:justify-end'


const goHome = () => {
	if('/' !== route.path) router.push('/')
}

onMounted(() => {
	store.setHeaderSpacer(header.value.offsetHeight)

	const duration = .4
	const borderRadius = 1000

	if( document.getElementById('mainWrapper') ){
		gsap.to('#pageHeader > div', {
			background: '#475569',
			margin: isLG.value ? '15px 40px 0' : '15px 1.5rem 0',
			borderRadius,
			duration,
			scrollTrigger: {
				// trigger: '#mainWrapper',
				start: 'top top',
				end: '120px top',
				toggleActions: 'play none reverse none',
				toggleClass: 'active'
				// scrub: true,
				// markers: true,
			}
		})

		gsap.to('#menuToggler', {
			borderRadius,
			duration,
			scrollTrigger: {
				// trigger: '#mainWrapper',
				start: 'top top',
				end: '120px top',
				toggleActions: 'play none reverse none',
				// markers: true,
			}
		})

		gsap.to('.header_container', {
			paddingLeft: '1rem',
			paddingRight: '1rem',
			duration,
			scrollTrigger: {
				// trigger: '#mainWrapper',
				start: 'top top',
				end: '120px top',
				toggleActions: 'play none reverse none',
				// markers: true,
			}
		})

		gsap.to('.brand-primary', {
			display: 'block',
			scrollTrigger: {
				// trigger: '#mainWrapper',
				start: 'top top',
				end: '120px top',
				toggleActions: 'play none reverse none',
				// markers: true,
			}
		})

		gsap.to('.brand-secondary', {
			display: 'none',
			scrollTrigger: {
				trigger: '#mainWrapper',
				start: 'top top',
				end: '120px top',
				toggleActions: 'play none reverse none',
				// markers: true,
			}
		})
	}
})
</script>


<template>
<div 
	id="pageHeader"
	class="pointer-events-none">
  
	<div 
		ref="header" 
		class="inset-x-0 top-0 fixed transition-all duration-500 z-40"
		:class="header_class">

		
		<div 
			class="header_container flex px-6 py-1 justify-between xl:px-10 lg:px-6 lg:py-2"
			:class="container_class">
			

			<div 
				class="w-5/12 h-10 -ml-1 flex items-center relative lg:w-6/12 lg:ml-0"
				:class="{'pointer-events-auto': ('/' !== route.path)}">
				<img 
					src="/img/brand-primary.svg"
					width="170"
					height="35"
					alt="Iglesia de Carrasco"
					class="brand-primary absolute hidden cursor-pointer"
					:class="{'lg:hidden': ('/' === route.path)}"
					@click="goHome"/>
				
				<img 
					src="/img/brand-secondary.svg"
					width="170"
					height="35"
					alt="Iglesia de Carrasco"
					class="brand-secondary absolute cursor-pointer"
					:class="{'lg:hidden': ('/' === route.path)}"
					@click="goHome"/>
			</div>


			
			<button 
				id="menuToggler"
				class="bg-primary text-white text-xs 
								leading-none font-black uppercase 
								px-7 -mr-2 flex items-center rounded-lg 
								transition-all pointer-events-auto 
								select-none lg:text-sm lg:px-6 lg:py-2"
				@click="store.menuToggler">
				
				<div class="burguer"></div>
				<span class="text-[12px] tracking-wider ml-2 inline-block md:text-base lg:ml-3">Menu</span>

			</button>
		
		</div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.burguer{
	background: #fff;
	width: 15px;
	height: 2px;
	border-radius: 100px;

	&::before{
		content: '';
		background: #fff;
		width: 100%;
		height: inherit;
		margin-top: -5px;
		display: block;
		border-radius: inherit;
	}

	&::after{
		content: '';
		background: #fff;
		width: 100%;
		height: inherit;
		margin-top: 8px;
		display: block;
		border-radius: inherit;
	}

	@media ( min-width: 768px ){
		width: 18px;
	}
}// burguer
</style>
