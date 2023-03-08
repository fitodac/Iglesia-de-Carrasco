<script setup>
import { useStore } from '@/store/pagedata'
import { storeToRefs } from 'pinia'
import { gsap, ScrollTrigger } from 'gsap/all'

const store = useStore()
const env = useRuntimeConfig()
gsap.registerPlugin(ScrollTrigger)
const { menu_open } = storeToRefs(store)

const menu = reactive(store.getMenu.map(el => {
	el.url = el.url.replace(env.base_url, '/')
	return el
}))


const social = computed(() => store.data.global.social_networks)
const activities = reactive(store.data.pages.inicio.acf.sections)


const ml = ref('-100vw')

watch(menu_open, val => {
	if( val ){
		gsap.to('.menu-wrapper', { marginLeft: 0 })
	}else{
		gsap.to('.menu-wrapper', { marginLeft: '-100vw' })
	}
})
</script>



<template>
<div 
	v-if="!store.loading"
	class="menu-wrapper bg-primary w-screen h-screen top-0 fixed z-50" 
	style="margin-left: -100vw;">

	<div class="container max-w-6xl px-6 pt-20 pb-16 mx-auto relative 2xl:px-0">
	
		<button class="close" @click="store.menuToggler">
			<span class="sr-only">cerrar</span>
		</button>


		<div class="grid lg:grid-cols-12 lg:gap-10">
			<div class="sm:col-span-6 lg:col-span-4">
				<ul class="main-menu">
					<li 
						v-for="(item, i) in menu" 
						:key="item.ID"
						:class="{'pt-4': i}"
						class="">
						<nuxt-link 
							:to="item.url"
							class="text-white text-2xl leading-none 
												font-black transition-all 
												duration-500 select-none 
												hover:text-secondary hover:ml-3 
												lg:text-3xl"
							:target="item.target"
							:alt="item.title">
							{{ item.title }}
						</nuxt-link>
					</li>
				</ul>


				<div class="mt-14 flex">
					<nuxt-link 
						v-if="social.instagram"
						:to="social.instagram"
						target="_blank"
						class="">
						<img 
							src="/img/icon-instagram.svg"
							alt="instagram"
							class="w-7"/>
					</nuxt-link>

					<nuxt-link 
						v-if="social.facebook"
						:to="social.facebook"
						target="_blank"
						class="ml-3">
						<img 
							src="/img/icon-facebook.svg"
							alt="facebook"
							class="w-7"/>
					</nuxt-link>

					<nuxt-link 
						v-if="social.youtube"
						:to="social.youtube"
						target="_blank"
						class="ml-3">
						<img 
							src="/img/icon-youtube.svg"
							alt="youtube"
							class="w-7"/>
					</nuxt-link>
				</div>
			</div>


			<div class="hidden lg:block lg:col-span-3">
				<div class="text-white text-sm font-medium tracking-wider">Actividades</div>

				<ul class="menu-activities mt-10">
					<li
						v-for="(item, idx) in activities"
						:key="idx"
						:class="{'pt-2': idx}">
						<nuxt-link 
							:to="`./#${item.field_6320997d25d7a}`"
							class="text-lg text-white leading-none tracking-wider 
										transition-all duration-500 opacity-70 select-none 
										hover:opacity-100">{{ item.field_6320997d25d7a }}</nuxt-link>
							<!-- <pre>{{ item }}</pre> -->
					</li>
				</ul>
			</div>
		</div>

	</div>
	
</div>
</template>


<style lang="scss" scoped>
.close{
	@apply w-8 h-8 right-6 top-6 absolute transition-all duration-500 overflow-hidden;

	background: url('/img/icon-close-white.svg') no-repeat center / cover;

	&::after{
		content: '';
		@apply bg-white w-0 h-[4px] left-[30px] top-[25px] absolute opacity-0 transition-all duration-500;
	}

	&:hover{
		background-position: -27px;

		&::after{
			width: 26px;
			left: 2px;
			opacity: 1;
		}
	}

	@media (min-width: 992px){
		@apply w-12 h-12 right-0;
	}
}


.main-menu .router-link-exact-active{
	@apply text-slate-700;
}
</style>