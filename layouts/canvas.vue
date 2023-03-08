<script setup>
import { useStore } from '@/store/pagedata'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Loader from '@/components/Loader'

const store = useStore()

const wrapper_class = computed(() => {
	return 'bg-white min-h-screen antialiased'
})

onMounted(() => store.setLoading(false) )
</script>

<template>
<div>
	<div :class="wrapper_class">
		<slot />
		<Footer />
	</div>

	<Menu/>
</div>
</template>


<style scoped>
.wrapper_class{
	@apply overflow-x-hidden;
}
</style>
