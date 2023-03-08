<script setup>
import { useStore } from '@/store/pagedata'

const store = useStore()

const Y = new Date().getFullYear()

const menu = reactive(store.data.menu_footer)

menu.forEach(el => {
	el.url = el.url.replace('https://iebc.demo-staging.com/api/', '/')
	el.url.slice(0, -1)
})
</script>

<template>
  <div class="pt-20 pb-14">
		<div class="container mx-auto">
			<img 
				src="/img/logo-footer.svg"
				alt="Iglesia de Carrasco"
				class="w-[200px] mx-auto md:w-[300px]"/>


				<div class="text-gray-400 text-[11px] font-medium leading-tight 
				tracking-wide text-center mt-3 md:text-xs">
					©2016 - {{ Y }} Todos los derechos reservados.
				</div>


				<ul class="mt-8 flex flex-col items-center justify-center md:flex-row">
					<li 
						v-for="item in menu" 
						:key="item.ID"
						class="py-1.5 md:py-0 md:mx-4">
						
						<nuxt-link 
							:to="item.url"
							:alt="item.title"
							class="text-primary text-[12px] font-bold leading-none 
							uppercase select-none lg:text-xs">
							{{ item.title }}
						</nuxt-link>

					</li>
				</ul>
		</div>
  </div>
</template>

<style scoped></style>
