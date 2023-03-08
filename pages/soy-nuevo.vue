<script setup>
import { useStore } from '@/store/pagedata'
import { gsap, ScrollTrigger } from 'gsap/all'

import Creed from '@/components/new/Creed'
import History from '@/components/new/History'
import Pr from '@/components/new/Pr'
import Schedules from '@/components/Schedules'

const env = useRuntimeConfig()

useHead({
	title: `Soy nuevo - ${env.name}`,
	meta: [
    { name: 'description', content: 'Nuestra visión es ser una iglesia abierta y sensible que se vincula con su entorno, compartiendo los valores de una vida abundante, siguiendo el ejemplo de Jesús.' },
  ],
	link: [
		{ rel: 'canonical', href: 'https://iglesiadecarrasco.com/soy-nuevo' }
	]
})

const store = useStore()
const route = useRoute()

gsap.registerPlugin(ScrollTrigger)
store.setSlug(route.name)

const pagedata = reactive(store.getPageData)
const sections = reactive({})

for(const key in pagedata.acf){
	if('short_content' !== key) sections[key] = pagedata.acf[key]
}
</script>


<template>
<div>

	<div class="px-6 py-20 lg:pt-32">
		<div class="container max-w-5xl mx-auto">
			<div class="grid gap-y-14 lg:grid-cols-2 lg:gap-20">

				<div class="relative">
					<div class="ml-16 relative z-10">
						<h3 class="text-xl leading-none font-black uppercase select-none">Misión</h3>
						<div v-html="sections.mission" class="mt-2"/>
					</div>
					<span class="text-slate-100 text-9xl font-black left-0 -top-7 absolute">M</span>
				</div>

				<div class="relative">
					<div class="ml-10 relative z-10">
						<h3 class="text-xl leading-none font-black uppercase">Visión</h3>
						<div v-html="sections.vision" class="mt-2"/>
					</div>
					<span class="text-slate-100 text-9xl font-black left-0 -top-7 absolute">V</span>
				</div>

			</div>
		</div>
	</div>


	<Schedules/>
	

	<section 
		v-for="(section, key) in sections"
		:key="key">

		<Creed v-if="'creed' === key" :data="section"/>
		<History v-if="'history' === key" :data="section"/>
		<Pr v-if="'pastor' === key" :data="section"/>
	</section>

</div>
</template>

<style scoped></style>
