<script setup>
import { useStore } from '@/store/pagedata'

const store = useStore()
const env = useRuntimeConfig()

const menu = computed(() => {
	if(store.getMenu){
		return store.getMenu.map(el => ({
			title: el.title,
			target: el.target,
			link: el.url.replace(env.base_url, '/')
		}))
	}
})
</script>

<template>
  <div>
    <nuxtLink 
			v-for="(item, idx) in menu"
			:key="idx"
			:to="item.link"
			:target="item.target"
			class="leading-none whitespace-nowrap px-4 py-2 inline-block">{{ item.title }}</nuxtLink>
  </div>
</template>

<style scoped></style>
