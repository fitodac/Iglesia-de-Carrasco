<script setup>
defineProps({
	data: {
		type: Object, default: {}
	}
})
</script>


<template>
<div class="px-4 pt-60 mt-14 relative lg:py-20 lg:mt-0">
	
	<div 
		class="w-full max-w-6xl mx-auto relative 
						rounded-xl z-10 lg:container lg:rounded-none">
		<div class="p-6 lg:grid lg:grid-cols-2 lg:gap-32 lg:px-0">

			<div class="font-light">
				<h2 class="text-4xl font-black">{{ data.field_6320b5f6c75eb }}</h2>
				<div class="text-xl font-black leading-none mt-4" v-html="data.field_6320b612c75ec"/>
				<div class="mt-4" v-html="data.field_6320b630c75ed"/>
			</div>

		</div>	
	</div>


	<div 
		class="w-full h-60 overflow-hidden left-0 top-0 
						absolute lg:h-full lg:grid lg:grid-cols-2 
						lg:inset-0">
		<div></div>

		<div class="h-full">
			<nuxt-img 
				src="/img/pr.webp" 
				format="webp"
				quality="80"
				class="w-full h-full object-cover"
				sizes="sm:100vw md:50vw lg:400px" />
		</div>
	</div>
</div>
</template>