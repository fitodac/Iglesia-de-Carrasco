<script setup>
defineProps({
	data: {
		type: Object, default: {}
	}
})
</script>


<template>
<div class="px-4 pt-60 relative lg:bg-slate-600 lg:py-20">

	<div class="bg-slate-600 w-full max-w-6xl mx-auto -mt-20 relative rounded-xl z-10 lg:bg-transparent lg:container lg:rounded-none lg:mt-0">
		<div class="p-6 lg:grid lg:grid-cols-2 lg:gap-32 lg:px-0">

			<div></div>

			<div class="text-white font-light">
				<h2 class="text-4xl font-black">{{ data.field_6320b580950e5 }}</h2>
				<div class="mt-4" v-html="data.field_6320b590950e6"/>
			</div>

		</div>	
	</div>

	
	<div class="w-full h-60 overflow-hidden left-0 top-0 absolute lg:h-full lg:grid lg:grid-cols-2 lg:inset-0">
		<div class="h-full">
			<nuxt-img 
				src="/img/historia.webp" 
				format="webp"
				quality="80"
				class="w-full h-full object-cover"
				sizes="sm:100vw md:50vw lg:400px" />
		</div>
	</div>


	<!-- <pre class="text-gray-600 text-sm w-full overflow-hidden">{{ data }}</pre> -->
</div>
</template>