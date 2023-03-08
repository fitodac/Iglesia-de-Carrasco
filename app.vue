<script setup>
import { useStore } from '@/store/pagedata'
import { useStorage, useSessionStorage } from '@vueuse/core'
import { TimelineLite } from 'gsap/all'


const store = useStore()
const route = useRoute()
const router = useRouter()

await store.setPagedata()

const docready = ref(false)


const wrapper_class = computed(() => {
	if( docready.value ){
		const wrapper = new TimelineLite()

		if( store.menu_open ){
			wrapper.to('.mainWrapper', {
				// translateX: '20vw'
				marginRight: '-10vw'
			})
		}else{
			wrapper.to('.mainWrapper', {
				// translateX: 0
				marginRight: 0
			})
		}
	}

	return store.menu_open ? '' : ''
})


// console.log('preview 1')
// const testdata = await $fetch(`${env.api_url}iebc-v1`)
// console.log('testdata', testdata)

onMounted(() => {
	docready.value = true
})


// onBeforeMount(async () => {
// 	console.log( 'session_storage', window.sessionStorage.getItem('iebc_pagedata') )

// 	if( window.sessionStorage.getItem('iebc_pagedata') && null !== window.sessionStorage.getItem('iebc_pagedata') ){
// 		await store.setPagedata( JSON.parse(window.sessionStorage.getItem('iebc_pagedata')) )
// 	}else{
// 		console.log('session storage no existe')
// 		await store.setPagedata()
// 	}
// })

// onMounted(async () => {
// 	// window.sessionStorage.setItem('iebc_pagedata', JSON.stringify(store.data))
// })

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
	

	<Header/>

	<NuxtLayout class="mainWrapper">
		<NuxtPage/>
	</NuxtLayout>
</div>
</template>