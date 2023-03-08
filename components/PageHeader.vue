<script setup>
import { useStore } from '@/store/pagedata'
import { breakpointsTailwind, useBreakpoints, useWindowSize } from '@vueuse/core'

const store = useStore()
const route = useRoute()

await store.getPageData // No borrar esta línea
const title = computed(() => store.getHeaderData.title)
const short_content = computed(() => store.getHeaderData.short_content)
const image = computed(() => store.getHeaderData.image)

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLG = breakpoints.greaterOrEqual('lg')
const { width, height } = useWindowSize()

watch(isLG, val => {
	if( val ) document.addEventListener("mousemove", parallax)
})


function parallax(e){
  this.querySelectorAll(".layer").forEach(layer=>{
    const speed = layer.getAttribute("data-speed");
    
    const x = (width.value - e.pageX*speed)/150;
    const y = (height.value - e.pageY*speed)/150;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

onMounted(() => {
	if( isLG.value ) document.addEventListener("mousemove", parallax)
})
</script>


<template>
<section class="pt-20 relative select-none lg:h-[60vh]">
	<div 
		class="flex flex-col container max-w-6xl h-full 
						px-6 mx-auto relative z-10 lg:items-center 
						lg:flex-row">

		<div 
			class="px-5 pt-2 order-2 lg:px-0 lg:grid lg:grid-cols-12 lg:gap-20 
						lg:left-0 lg:absolute lg:order-1 lg:pt-0">
			<div 
				class="layer text-center col-span-5 z-10 lg:text-left" 
				data-speed="-1.5">
				<h1 
					v-if="title" 
					v-html="title"
					class="text-slate-600 text-5xl font-extrabold lg:text-7xl"/>
				
				<div 
					v-if="short_content" 
					v-html="short_content"
					class="font-semibold leading-tight mt-2 lg:text-lg lg:mt-3 lg:pl-2 lg:leading-tight"/>
			</div>
		</div> 
		
		<div 
			class="layer bg-slate-100 w-full h-[330px] rounded-xl overflow-hidden shadow-2xl lg:ml-32 lg:h-full"
			data-speed="1.5">
			<nuxt-img 
				v-if="image"
				:src="image"
				class="w-full h-full rounded-xl object-cover object-right lg:object-top"/>
		</div>

	</div>
</section>
</template>