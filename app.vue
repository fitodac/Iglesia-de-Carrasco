<script setup>
import { useStore } from '@/store/pagedata'
import { TimelineLite } from 'gsap/all'


const env = useRuntimeConfig()
const store = useStore()
const router = useRouter()
const docready = ref(false)
const data_loaded = ref(false)

fetch(`${env.api_url}iebc-v1`)
	.then(resp => resp.json())
	.then(async data => {
		store.setLoading(false)
		data_loaded.value = true
		store.setPagedata(data)
	})
	.catch(error => {
		console.error('Ha habido un error con los datos')
		console.log(`Error ${error}`)
	})



const wrapper_class = computed(() => {
	if( docready.value ){
		const wrapper = new TimelineLite()

		if( store.menu_open ){
			wrapper.to('.mainWrapper', {
				marginRight: '-10vw'
			})
		}else{
			wrapper.to('.mainWrapper', {
				marginRight: 0
			})
		}
	}

	return store.menu_open ? '' : ''
})


onMounted(() => {
	docready.value = true
})


router.beforeResolve(async () => {
	store.menuClose()
	setTimeout(() => { store.setLoading(false) }, 600)
})

router.beforeEach(() => {
	store.setLoading(true)
})
</script>


<template>
<div 
	class="overflow-x-hidden" 
	:class="wrapper_class">
	
	
	<Transition>
		<Loader 
			v-if="store.loading"
			:class="{'opacity-1': store.loading, 'opacity-0': !store.loading}"/>
	</Transition> 


	<div v-if="data_loaded">
		<Header/>

		<NuxtLayout class="mainWrapper">
			<NuxtPage/>
		</NuxtLayout>
	</div>
	<!-- 
	-->
</div>
</template>