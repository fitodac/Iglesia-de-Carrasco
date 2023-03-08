<script setup>
import { bible } from '@/composables/bible'
import { gsap, ScrollTrigger } from 'gsap/all'
import { breakpointsTailwind, useBreakpoints, useWindowSize } from '@vueuse/core'

defineProps({
	data: {
		type: Object, default: {}
	}
})

gsap.registerPlugin(ScrollTrigger)
const show_modal = ref(false)
const list = reactive({})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLG = breakpoints.greaterOrEqual('lg')


const getCapital = val => {
	const arr = val.split('')
	return arr[0]
}

const getWithoutCapital = val => {
	return val.substring(1)
}

const showModal = obj => {
	document.body.classList.add('overflow-hidden')
	show_modal.value = true
	
	for(const i in obj){
		list[obj[i].field_6320b17cabd1b] = bible[obj[i].field_6320b17cabd1b]
	}
}

const closeModal = () => {
	show_modal.value = false
	document.body.classList.remove('overflow-hidden')
	Object.keys(list).forEach(key => delete list[key]);
	console.log('list', list)
}


onMounted(() => {
	document.body.classList.remove('overflow-hidden')

	const cards = document.querySelectorAll('.item')

	if( isLG.value ){
		cards.forEach((el, i) => {		
			gsap.to(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top top',
					scrub: true,
					pin: true,
					pinSpacing: true,
					// markers: true,
				}
			})
		})

		gsap.to('.lo-que-creemos--title', {
			scrollTrigger: {
				trigger: '#lo-que-creemos',
				start: 'top top',
				end: 'bottom center',
				scrub: true,
				pin: '.lo-que-creemos--title',
				pinSpacing: true,
				// markers: true,
			}
		})
	}

})
</script>


<template>
<div 
	id="lo-que-creemos"
	class="px-6 pt-10 pb-20 lg:pt-20">
	<div class="container max-w-5xl mx-auto relative">

		<h2 
			class="lo-que-creemos--title text-slate-600 text-3xl font-black text-center select-none md:absolute lg:text-left lg:text-7xl lg:w-[340px]">
			{{ data.field_6320b10fabd16 }}
		</h2>

		<div class="lg:pl-[400px]">
			<div 
				v-for="(item, i) in data.field_6320b124abd17" 
				:key="i" 
				class="item">

				<div class="h-8"></div>

				<div 
					class="bg-white border border-slate-100 pl-3 pr-6 pb-6 rounded-xl shadow-lg">
					<h3 class="font-black flex items-center -mt-4 select-none">
						<span class="text-slate-200 text-6xl leading-none">{{ getCapital(item.field_6320b133abd18) }}</span>
						<span class="text-xl leading-none block -left-4 top-3 relative">{{ getWithoutCapital(item.field_6320b133abd18) }}</span>
					</h3>
				
					<div 
						class="text-sm leading-snug mt-3 pl-7"
						v-html="item.field_6320b140abd19"/>
					
					<div class="flex justify-end pt-3">
						<button 
							class="bg-primary text-white w-10 h-10 rounded-full"
							@click="showModal(item.field_6320b15babd1a)"
							>
							<Icon name="ri:book-3-line" size="20px"/>
						</button>
					</div>
				</div>

			</div>
		</div>

	</div>

	<teleport to="body">
		<div 
			v-if="show_modal"
			class="bg-slate-900 bg-opacity-90 inset-0 fixed z-50 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-slate-900 overflow-y-scroll">
			<div class="container max-w-4xl mx-auto">
				
				<div class="bg-slate-900 bg-opacity-30 px-6 pt-4 inset-x-0 top-0 fixed z-30">
					<div class="container max-w-5xl mx-auto flex justify-end">
						<button 
							@click="closeModal"
							class="text-white">
							<Icon name="ri:close-fill" size="44px" />
						</button>
					</div>
				</div>

				<div class="px-6 pt-20 pb-28 grid gap-6 overflow-y-auto">
					<div 
						v-for="(item, i) in list"
						:key="i"
						class="bg-white text-sm leading-snug p-6 rounded-lg"
						:class="{'hidden': !item.length}">
						<h4 class="font-bold mb-2 leading-none">{{ i }}</h4>
						<p v-for="(v, ii) in item" :key="ii" v-html="v"/>
					</div>
				</div>
			</div>
		</div>
	</teleport>

</div>
</template>




<style lang="scss" scoped>
p + p{
	margin-top: 14px;
}
</style>