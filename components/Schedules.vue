<script setup>
import { useStore } from '@/store/pagedata'
import { gsap, ScrollTrigger, TimelineLite } from 'gsap/all'

import SectionTitle from '@/components/SectionTitle'


const store = useStore()
gsap.registerPlugin(ScrollTrigger)

const schedule = reactive({
	primary: store.data.global.schedule_primary,
	secondary: store.data.global.schedule_secondary
})

const schedule_secondary_length = computed(() => store.data.global.schedule_secondary.length)

const schedule_secondary_width_class = computed(() => {
	switch(schedule_secondary_length.value){
		case 1: return 'w-1/4'; break;
		case 2: return 'w-2/4'; break;
		case 3: return 'w-3/4'; break;
		case 4: return 'w-full'; break;
	}
})

const schedule_secondary_grid_columns_class = computed(() => {
	switch(schedule_secondary_length.value){
		case 1: return 'grid-cols-1'; break;
		case 2: return 'grid-cols-2'; break;
		case 3: return 'md:grid-cols-2 lg:grid-cols-3'; break;
		case 4: return 'md:grid-cols-2 lg:grid-cols-4'; break;
	}
})

const schedule_secondary_columns_class = computed(() => {
	switch(schedule_secondary_length.value){
		case 1: return 'w-1/4'; break;
		case 2: return 'w-2/4'; break;
		case 3: return 'w-3/4'; break;
		case 4: return 'w-full'; break;
	}
})
</script>


<template>
<section id="horarios">
	<div class="container mx-auto xl:max-w-5xl 2xl:max-w-6xl">
		<div class="bg-primary overflow-hidden sm:mx-6 sm:rounded-2xl lg:mx-3 xl:mx-0">
			<div class="pt-10 px-8 pb-20 lg:px-10 lg:pt-28 xl:px-20 xl:pt-32 2xl:px-32">
				
				<SectionTitle title="HORARIOS" class="schedules-section-title"/>

				<div class="mt-8 md:grid md:grid-cols-12 md:gap-8 lg:gap-10 lg:mt-12">
					<div 
						v-for="(h, i) in schedule.primary"
						:key="i"
						class="font-black tracking-tight leading-none select-none md:col-span-6"
						:class="{'mt-5 lg:text-right md:mt-0': (i % 2)}">
						<div 
							class="text-center lg:inline-block"
							:class="[`schedule-primary-${i}`]">
							
							<div 
								class="text-white text-2xl whitespace-nowrap lg:text-4xl xl:text-5xl">
								{{ h.actividad }}
							</div>

							<div 
								class="text-black font-black mt-1 lg:text-xl lg:text-right">
								{{ `${h.day} ${h.hour}` }}
							</div>
						</div>
					</div>
				</div>


				<div class="w-full flex justify-center">
					<div 
						class="grid gap-6 md:gap-6 xl:gap-14 mt-12"
						:class="[schedule_secondary_width_class, schedule_secondary_grid_columns_class]">
						<div 
							v-for="(hh, ii) in schedule.secondary"
							:key="ii"
							class="">

							<div 
								class="bg-black bg-opacity-10 text-white h-full 
								px-4 pt-5 pb-4 rounded-2xl"
								:class="[`schedule-box-${ii}`]">

								<img 
									v-if="hh.icon.url"
									:src="hh.icon.url"
									alt="icon"
									class="w-16 mb-2 md:w-auto"/>
								<div class="text-2xl font-black leading-none">{{ hh.actividad }}</div>
								<div class="border-t border-white border-opacity-30 leading-none pt-2 mt-3">{{ hh.day }}</div>
								<div class="text-2xl font-black">{{ hh.hour }}</div>
							</div>

						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
</template>