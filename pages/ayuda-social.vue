<script setup>
import { useStore } from '@/store/pagedata'

const store = useStore()
const route = useRoute()

store.setSlug(route.name)

const pagedata = reactive(store.getPageData)
const env = useRuntimeConfig()

useHead({
	title: `Ayuda social - ${env.name}`,
	meta: [
    { name: 'description', content: 'Se recolectan todos los meses alimentos no perecederos y son entregados a familias de nuestra iglesia que están pasando por necesidad.' },
  ],
	link: [
		{ rel: 'canonical', href: 'https://iglesiadecarrasco.com/ayuda-social' }
	]
})
</script>


<template>
<div class="page-content">
	<div v-html="pagedata.acf.content"></div>
</div>
</template>

<style scoped></style>
