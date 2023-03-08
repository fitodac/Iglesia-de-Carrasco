<script setup>
import { useStore } from '@/store/pagedata'
// import { yt } from '@/composables/media'
import 'remixicon/fonts/remixicon.css'

const store = useStore()
const route = useRoute()

store.setSlug(route.name)

const pagedata = reactive(store.getPageData)

const ytparams = [
	'maxResults=12',
	'channelId=UCCjiOZQU3snGJSgH7EINdqA',
	'order=date',
	'part=snippet,id',
	'key=AIzaSyCQRlVF3DhadwWgTktVvbBrytHEvwDXpmE'
	// 'key=AIzaSyAcySoehHZd6zgGMY--XbkKPpqt4fE9mxY'
]

const videos = computed(() => store.videos)
const yt_url = ref(store.data.global.social_networks.youtube)
const error_msj = ref(false)

if( !Object.keys(videos.value).length ){
	// console.log('videos:', yt)
	// const {pending, data: resp, error} = await yt
	const {pending, data: resp, error} = await useFetch('https://youtube.googleapis.com/youtube/v3/search?'+ytparams.join('&'))

	console.log('error', error)
	console.log(resp.value)

	if( error.value ){
		error_msj.value = true
	}else{
		store.setVideos(resp.value)
		// store.setVideos(yt)
	}

	// if( resp ){}
	// store.setVideos({'a': 'video 1', 'b': 'video 2'})
}


// console.log('videos:', videos.length)



const env = useRuntimeConfig()

useHead({
	title: `Videos - ${env.name}`,
	meta: [
		{ name: 'description', content: 'Quizás no has podido reunirte con nosotros por algún motivo. Aún así, queremos que seas parte de la Familia de la Iglesia de Carrasco a través de la web mediante videos que realizamos en cada reunión.' },
  ],
	link: [
		{ rel: 'canonical', href: 'https://iglesiadecarrasco.com/nosotros' }
	]
})

</script>


<template>
<div class="content max-w-6xl mx-auto px-6 pt-12 xl:px-0">
	<h2 class="page-intro leading-tight text-center lg:text-sm" v-html="pagedata.acf.content"/>

	<div 
		v-if="error_msj"
		class="bg-red-100 bg-opacity-50 text-red-600 text-sm 
		leading-tight text-center max-w-sm px-10 py-5 mx-auto 
		mt-10 rounded-xl">
		<p>Ha ocurrido un error con la conexión a YouTube. 
			Por favor, inténtalo de nuevo mas tarde 
			o visítanos en nuestro 
			<nuxt-link 
				:to="yt_url"
				target="_blank"
				class="font-semibold underline">canal de YouTube</nuxt-link>
		</p>
	</div>



	<div 
		v-if="Object.keys(videos).length"
		class="grid gap-x-8 gap-y-10 mt-12 mx-auto
						sm:grid-cols-2 md:max-w-2xl lg:max-w-full 
						xl:grid-cols-12 xl:gap-8">
		
		<div 
			v-for="(item) in videos.items"
			:key="item.id.videoId"
			class="xl:col-span-4"
			:class="[`v-${item.id.videoId}`]">

			<nuxt-link 
				:to="`http://www.youtube.com/watch?v=${item.id.videoId}`"
				target="_blank">
				<div class="bg-slate-900 h-56 relative rounded-2xl overflow-hidden group">
					<img 
						:src="item.snippet.thumbnails.medium.url"
						:alt="item.snippet.title"
						class="w-full h-full object-cover rounded-2xl 
										transition-all group-hover:scale-110 
										group-hover:opacity-70"/>
					
					<Icon 
						name="ri:play-circle-line" 
						size="80" 
						class="text-slate-200 -ml-[40px] -mt-[40px] left-1/2 
											top-1/2 absolute opacity-80 transition-all"/>
				</div>

				<div class="px-3 pt-3">
					<h3 class="font-bold leading-none">{{ item.snippet.title }}</h3>
					<div class="text-sm leading-tight mt-2">{{ item.snippet.description }}</div>
				</div>
			</nuxt-link>

		</div>

	</div>

	<div 
		v-if="Object.keys(videos).length"
		class="flex justify-center mt-14">
		<nuxt-link 
			to="https://www.youtube.com/channel/UCCjiOZQU3snGJSgH7EINdqA"
			target="_blank"
			class="bg-primary text-white leading-none 
								w-full px-10 py-4 flex justify-center items-center 
								rounded-lg sm:max-w-xs lg:text-sm">
		Visita nuestro canal <Icon name="ri:youtube-line" size="20" class="ml-1"/>
		</nuxt-link>
	</div>

</div>
</template>


<style lang="scss" scoped>
.page-intro{
	:deep(a){
		@apply text-primary font-medium;

	}
	
	:deep(i){
		@apply relative;
		top: 3px;
	}
}
</style>
