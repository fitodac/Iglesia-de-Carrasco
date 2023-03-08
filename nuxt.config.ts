// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

	target: 'server',

	publicRuntimeConfig: {
    // api_url: 'http://localhost:10009/',
		name: 'Iglesia de Carrasco',
    api_url: 'https://iebc.demo-staging.com/api/wp-json/wp/v2/',
		base_url: 'https://iebc.demo-staging.com/api/'
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
			// please note that this is an area that is likely to change
			style: [
				// <style type="text/css">:root { color: red }</style>
				// { children: ':root { color: #CCC }', type: 'text/css' }
			],
			noscript: [
				// <noscript>Javascript is required</noscript>
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
				// ital: [400]
			}
		}
	},

	// build: {
	// 	transpile: ['gsap']
	// },

	// image: {
	// 	dir: 'img'
	// },

})