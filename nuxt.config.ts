// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

	// target: 'static',

	publicRuntimeConfig: {
		name: 'Iglesia de Carrasco',
    // api_url: 'https://api.iglesiadecarrasco.com/wp-json/wp/v2/',
		// base_url: 'https://iglesiadecarrasco.com/'
    api_url: 'https://iebc.fitodac.com/api/wp-json/wp/v2/',
		base_url: 'https://iglesia-de-carrasco.vercel.app/'
  },

	app: {
		head: {
			htmlAttrs: {
				lang: 'es'
			},
			meta: [
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
			script: [
				// <script src="https://myawesome-lib.js"></script>
      	// {
				// 	type: 'text/javascript',
				// 	src: "gsap-3.3.1.min.js",
				// 	body: true,
				// 	async: true,
    		// 	crossorigin: 'anonymous'
				// },
				// { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/gsap.min.js' },
				// { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/ScrollTrigger.min.js' },
				// { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/ScrollToPlugin.min.js' }
			],
			link: [
				// favicon
				{
					rel: 'icon',
					type: 'image/png',
					href: '/favicon-16x16.png',
					sizes: '16x16'
				},
				{
					rel: 'icon',
					type: 'image/png',
					href: '/favicon-32x32.png',
					sizes: '32x32'
				},
				{ 
					rel: 'apple-touch-icon',
					href: '/apple-touch-icon.png',
					sizes: '180x180'
				},
				{
					rel: 'manifest',
					href: '/site.webmanifest'
				}
			],
			style: [
			],
			noscript: [
				{ children: 'Javascript is required' }
			]
		}
	},


	css: [
		'/assets/css/main.css'
	],


	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@nuxtjs/google-fonts',
		'@nuxt/image-edge',
		'nuxt-icon',
		'@vueuse/nuxt'
	],

	axios: {
		proxy: true,
	},
	

	googleFonts: {
		families: {
			Hind: {
				wght: [400, 500, 600, 700]
			},
			Prata: {
				wght: [400],
			}
		}
	}

})