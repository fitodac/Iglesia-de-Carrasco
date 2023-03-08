<script setup>
import { useStore } from '@/store/pagedata'
import { getWebpMedia } from '@/composables/media'

const store = useStore()

const data = reactive(store.data.global.focus)

const title = ref(data.title)

if( title.value.indexOf('enfoque') ){
	title.value = title.value.replace('enfoque', `<span class="text-primary font-handwrite text-[60px] font-medium indent-[-25px] -mt-4 -mb-6 inline-block relative z-10 lg:text-[100px]">enfoque</span><br>`)
}

data.step1.image_banner = getWebpMedia(data.step1.image_banner)
data.step2.image_banner = getWebpMedia(data.step2.image_banner)
data.step3.image_banner = getWebpMedia(data.step3.image_banner)

const cta = reactive([
	data.step3.cta1,
	data.step3.cta2,
	data.step3.cta3
])

const cta_buttons = Object.keys(cta).length

/********************
onMounted(() => {

	// gsap.to('#el-enfoque-para-tu-vida', {
	// 	scrollTrigger: {
	// 		start: 'top top',
	// 		scrub: 1
	// 	},
	// 	y: -300
	// })

})
********************/
</script>


<template>
<section 
	id="el-enfoque-para-tu-vida"
	class="container px-6 pt-0 pb-12 mx-auto overflow-hidden md:px-3  md:py-14 lg:py-20">
	<div class="section-enfoque grid grid-cols-3 gap-y-10 md:gap-x-6 lg:grid-cols-4 lg:gap-x-7">

		<div class="col-span-3 relative z-20 lg:col-span-1 lg:pt-24">
			<h3 
				class="text-secondary text-4xl leading-none font-black 
								w-[240px] mx-auto select-none lg:text-[4.5rem] 
								lg:w-[500px]"
				v-html="title"/>
		</div>


		<div 
			v-if="data.step1.title" 
			class="col-span-3 relative z-10 md:col-span-1">
			<nuxt-link 
				:to="data.step1.link" 
				class="bg-gray-50 max-w-xs h-[400px] mx-auto flex flex-col 
								justify-end relative rounded-2xl shadow-xl md:h-[300px] 
								lg:h-[400px]">
				<span class="text-secondary text-8xl font-black right-6 -top-8 absolute select-none z-20">1</span>
				
				<div class="bg-gradient-to-t from-black to-transparent text-white px-6 pb-8 pt-16 rounded-b-2xl z-20">
					<h4 class="text-xl font-black leading-none select-none">{{ data.step1.title }}</h4>
					<div class="text-[15px] leading-tight mt-2 select-none">{{ data.step1.content }}</div>
				</div>

				<img 
					v-if="data.step1.image_banner"
					:src="data.step1.image_banner"
					:alt="data.step1.title"
					class="w-full h-full object-cover rounded-2xl shadow-xl select-none absolute z-10"/>
			</nuxt-link>
		</div>


		<div 
			v-if="data.step2.title" 
			class="col-span-3 relative z-10 md:col-span-1">
			<nuxt-link 
				:to="data.step2.link"
				class="bg-gray-50 max-w-xs h-[400px] mx-auto flex flex-col 
								justify-end relative rounded-2xl shadow-xl md:h-[300px] 
								lg:h-[400px]">
				<span class="text-secondary text-8xl font-black right-6 -top-8 absolute select-none z-20">2</span>
				
				<div class="bg-gradient-to-t from-black to-transparent text-white px-6 pb-8 pt-16 rounded-b-2xl z-20">
					<h4 class="text-xl font-black leading-none select-none">{{ data.step2.title }}</h4>
					<div class="text-[15px] leading-tight mt-2 select-none">{{ data.step2.content }}</div>
				</div>

				<img 
					v-if="data.step2.image_banner"
					:src="data.step2.image_banner"
					:alt="data.step2.title"
					class="w-full h-full object-cover rounded-2xl shadow-xl select-none absolute z-10"/>
			</nuxt-link>
		</div>


		<div 
			v-if="data.step3.title" 
			class="col-span-3 relative z-10 md:col-span-1">
			<nuxt-link 
				:to="data.step3.link"
				class="bg-gray-50 max-w-xs h-[400px] mx-auto flex flex-col 
								justify-end relative rounded-2xl shadow-xl md:h-[300px] 
								lg:h-[400px]">
				<span class="text-secondary text-8xl font-black right-6 -top-8 absolute select-none z-20">3</span>
				
				<div class="bg-gradient-to-t from-black to-transparent text-white px-6 pb-8 pt-16 relative rounded-b-2xl z-20">
					<h4 class="text-xl font-black leading-none select-none">{{ data.step3.title }}</h4>
					<div class="text-[15px] leading-tight mt-2 select-none">{{ data.step3.content }}</div>
				</div>


				<img 
					v-if="data.step3.image_banner"
					:src="data.step3.image_banner"
					:alt="data.step3.title"
					class="w-full h-full object-cover rounded-2xl shadow-xl select-none absolute z-10"/>
			</nuxt-link>

			<div 
				ref="ctaGroup" 
				v-if="cta_buttons"
				class="grid grid-cols-3 gap-3 inset-x-2 -bottom-12 absolute z-30">

				<div v-for="(btn, i) in cta" :key="i">
					<nuxt-link 
						v-if="btn.title"	
						class="group" 
						:to="btn.link">

						<div 
						v-if="btn.icon"
						class="bg-white border border-gray-100 w-12 h-12 mx-auto flex items-center justify-center rounded-full shadow group-hover:shadow-lg">
							<img 
								:src="btn.icon.url"
								alt="icon"
								class="w-8 h-8 object-cover"/> 
						</div>

						<span class="text-secondary text-sm font-black text-center mt-1 block select-none group-hover:text-primary">{{ btn.title }}</span>
					</nuxt-link>

				</div>
			</div>
		</div>

	</div>
</section>

</template>


<style lang="scss" scoped>
$after_size: 300px;

.section-enfoque{
	position: relative;

	&::after{
		content: '';
		background-image: url('/img/shape.svg');
		background-size: cover;
		background-position: center;
		width: $after_size;
		height: $after_size;
		margin-left: $after_size;
		left: 20px;
		top: 50px;
		position: absolute;
		transform: translateX(-130px);
		opacity: .07;
	}
}
</style>