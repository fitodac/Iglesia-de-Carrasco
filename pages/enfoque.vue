<script setup>
import { useStore } from '@/store/pagedata'

const store = useStore()
const route = useRoute()

store.setSlug(route.name)

const pagedata = reactive(store.getPageData)
const sections = pagedata.acf.sections
const env = useRuntimeConfig()
const hash = route.hash


useHead({
	title: `El enfoque de Dios para tu vida - ${env.name}`,
	meta: [
		{ name: 'description', content: 'Nuestra visión es ser una iglesia abierta y sensible que se vincula con su entorno, compartiendo los valores de una vida abundante, siguiendo el ejemplo de Jesús.' },
  ],
	link: [
		{ rel: 'canonical', href: 'https://iglesiadecarrasco.com/enfoque' }
	]
})


onMounted(() => {
	const el = document.getElementById(hash.replace('#', ''))
	
	if( el ){
		window.scrollTo({
			top: el.offsetTop - 120
		})
	}
})
</script>


<template>
<div class="page-content">
	
	<div class="grid lg:grid-cols-12">
		<section
			v-for="(section, i) in sections"
			:key="i"
			class="lg:text-sm lg:col-span-8"
			:class="{'mt-20': i, 'lg:col-start-4': i%2}"
			:id="section.field_63679c1ecab24">

			<h3 class="text-3xl font-black leading-none ">{{ section.field_632112fda7aed }}</h3>

			<div class="mt-6">
				<div 
					v-for="(p, ii) in section.field_6321130aa7aee"
					:key="ii"
					:class="{'mt-8': ii}">
					
					<h4 class="text-xl font-bold">{{ p.field_63211379a7aef }}</h4>
					<div 
						v-html="p.field_63211381a7af0"
						class="leading-tight mt-4"/>
				</div>
			</div>

		</section>
	</div>

	<!-- <pre class="text-gray-600 text-sm w-full overflow-hidden">{{ sections }}</pre> -->
</div>
</template>

<style scoped></style>
