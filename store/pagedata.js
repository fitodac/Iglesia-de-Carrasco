import { defineStore } from 'pinia'


export const useStore = defineStore('data', {
	state: () => ({ 
		data: null,
		videos: {},
		slug: null,
		header_spacer: 0,
		loading: true,
		menu_open: false
	}),
	getters: {
		getPageData(state){ 
			const slug = 'index' === state.slug ? 'inicio' : state.slug
			return {...state.data?.pages[slug]}
		},

		getMenu(state){ return state.data?.menu },

		getHeaderData(state){
			const { title, short_content, image } = this.getPageData.acf
			return { title, short_content, image }
		}
	},
	actions: {
		async setPagedata(val){

			if( val ){
				this.data = val
			}else{
				const env = useRuntimeConfig()

				if( !this.data ){
					const {pending, data: resp} = await useFetch(`${env.api_url}iebc-v1`)

					if( resp.value ){
						this.data = resp.value
					}else{
						console.log('Ha habido un error con los datos')
					}
				}	
			}

			// this.loading = false

		},

		setLoading(val){ this.loading = val },

		setSlug(val){ this.slug = val },

		setHeaderSpacer(val){ this.header_spacer = val },

		setVideos(val){ Object.assign(this.videos, val) },

		menuToggler(){ this.menu_open = !this.menu_open },
		menuClose(){ this.menu_open = false }
	},
})