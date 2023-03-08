<script setup>
defineProps({
	title: String,
	color: {
		type: String,
		default: 'light'
	}
})
</script>

<template>
<div 
	class="text-xs leading-none font-semibold 
	tracking-wider uppercase select-none"
	:class="{
		'text-white': 'light' === color, 
		'text-secondary': 'dark' === color
	}">
	{{ title }} &gt;&gt;&gt;
</div>
</template>