<script setup>
import { useStore } from '@/store/pagedata'

const store = useStore()
const route = useRoute()

store.setSlug(route.name)

const pagedata = reactive(store.getPageData)
const env = useRuntimeConfig()

useHead({
	title: `Transparencia - ${env.name}`,
	meta: [
    { name: 'description', content: 'Esta página muestra los estatutos con los cuales se creeo la Iglesia de Carrasco.' },
  ],
	link: [
		{ rel: 'canonical', href: 'https://iglesiadecarrasco.com/transparencia' }
	]
})
</script>


<template>
<div class="page-content">
	<div 
		v-for="(chapter, i) in pagedata.acf.chapter"
		:key="i"
		:class="{'mt-12': i}">

		<div class="text-2xl leading-none font-black">{{ chapter.field_63210c6e02565 }}</div>
		
		<div 
			v-for="(article, ii) in chapter.field_63210cc37e9e1"
			:key="ii"
			class="mt-8">
			
			<div class="font-semibold leading-none">{{ article.field_63210cd77e9e2 }}</div>
			<div class="leading-tight mt-4">{{ article.field_63210d1e1cf9a }}</div>

			<div 
				v-if="article.field_63210d6e6388f"
				class="mt-6">
				<div 
					v-for="(item, iii) in article.field_63210d6e6388f"
					:key="iii"
					class="text-sm leading-tight indent-[-17px] pl-[17px]"
					:class="{'mt-4': iii}">
					<div>{{ item.field_63210d8963890 }}</div>
				</div>
			</div>

		</div>

	</div>
</div>
</template>

<style scoped></style>
