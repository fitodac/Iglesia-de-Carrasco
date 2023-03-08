<script setup>
import { useStore } from '@/store/pagedata'

const store = useStore()
const route = useRoute()
const env = useRuntimeConfig()

useHead({
	title: `Contacto - ${env.name}`,
	meta: [
		{ name: 'description', content: 'Si necesitas ayuda, comunicate con nosotros. Siempre estaremos aquí para orar por vos.' },
	],
	link: [
		{ rel: 'canonical', href: 'https://iglesiadecarrasco.com/contacto' }
	]
})

store.setSlug(route.name)

const pagedata = reactive(store.getPageData)

const form = reactive({
	name: { 
		value: null, 
		// value: `Usuario ${Date.now()}`, 
		validate: {
			isValid: false
		}
	},
	email: { 
		value: null, 
		// value: `email_${Date.now()}@gmail.com`, 
		validate: {
			isValid: false,
			isEmail: false
		}
	},
	message: { 
		value: null, 
		// value: 'Este es un mensaje de prueba que escribí en la web de la iglesia.\n\nY aquí había un salto de línea...', 
		validate: {
			isValid: false,
		}
	},
	valid: false
})

const sending = ref(false)
const loaderFill = '#FFFFFF'
const currentColor = '#6B9E00'
const captch_val_1 = ref(null)
const captch_val_2 = ref(null)
const captcha = ref(null)
const loading = ref(false)
const sent = ref(false)
const sent_message = ref(null)

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const submitForm = async () => {
	sending.value = true
	loading.value = true
	
	if( form.name.value ) form.name.validate.isValid = true
	if( form.email.value ) form.email.validate.isValid = true
	
	const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const email_test = reg.test(String(form.email.value).toLowerCase())
	if( email_test ) form.email.validate.isEmail = true
	if( form.message.value ) form.message.validate.isValid = true

	if(form.name.validate.isValid 
	&& form.email.validate.isValid 
	&& form.email.validate.isEmail 
	&& form.message.validate.isValid){
		if( captcha.value ){
			if( Math.round(captcha.value) === (captch_val_1.value + captch_val_2.value) ){
				form.valid = true
			}
		}

	}else{
		captch_val_1.value = randomNumber(1,9)
		captch_val_2.value = randomNumber(1,9)
	}


	if( form.valid ){
		// Envía el email
		useFetch(`${env.base_url}wp-json/contact/v2/send`, {
			method: 'POST',
			body: {
				contact_name: form.name.value,
				contact_email: form.email.value,
				contact_message: form.message.value
			}
		})
		.then(resp => {
			sent.value = true
			sent_message.value = resp.data.value.message
			form.name.value = ''
			form.email.value = ''
			form.message.value = ''
			form.valid = false
			captcha.value = ''
			loading.value = false
		})
		.catch(err => {
			console.log('Error:', new Error(err))
		})
	}else{
		loading.value = false
	}


}


onMounted(() => {
	captch_val_1.value = randomNumber(1,9)
	captch_val_2.value = randomNumber(1,9)
})
</script>


<template>
<div class="container max-w-lg px-6 pt-14 mx-auto lg:max-w-5xl">
	<div class="lg:grid lg:grid-cols-12 lg:gap-20">
		
		<div class="lg:col-span-8">
			<form 
				v-if="!sent"
				@submit.prevent="submitForm" 
				class="grid gap-x-4 gap-y-6 md:grid-cols-12"
				:class="{'disabled': loading}">

				<!-- NAME -->
				<div class="fieldgroup md:col-span-6">
					<input 
						type="text" 
						v-model="form.name.value"
						@keyup="sending = false">
					
					<div class="pt-1.5 flex">
						<label>Nombre</label>
						<div>
							<span 
								v-if="sending && !form.name.validate.isValid"
								class="error">Debes incluír tu nombre</span>
						</div>
					</div>
				</div>
				

				<!-- EMAIL -->
				<div class="fieldgroup md:col-span-6">
					<input 
						type="text" 
						v-model="form.email.value"
						@keyup="sending = false">
					
					<div class="pt-1.5 flex">
						<label>Email</label>
						<div>
							<span 
								v-if="sending && !form.email.validate.isValid"
								class="error">Debes incluír tu email</span>

							<span 
								v-if="sending && !form.email.validate.isEmail"
								class="error">El email debe ser válido</span>
						</div>
					</div>
				</div>


				<!-- MESSAGE -->
				<div class="fieldgroup md:col-span-12">
					<textarea 
						type="email" 
						v-model="form.message.value"
						@keyup="sending = false"
						rows="5"/>
					
					<div class="pt-1.5 flex">
						<label>Mensaje</label>
						<div>
							<span
								v-if="sending && !form.message.validate.isValid"
								class="error">Debes escribir un mensaje</span>
						</div>
					</div>
				</div>

				<div class="md:col-span-12 lg:flex lg:justify-between">
					<div class="fieldgroup flex items-center">
						<span class="bg-red-600 w-[6px] h-[6px] block rounded-full"/> 
						<span class="text-xs leading-none pl-2 select-none">Estos campos son requeridos</span>
					</div>

					<div class="mt-4 lg:flex lg:mt-0">
						<div class="fieldgroup flex items-center justify-center lg:pr-5">
							<div class="text-xs font-medium select-none">Completa el resultado:</div>
							<span class="font-bold text-right w-16 px-3 select-none">{{ `${captch_val_1} + ${captch_val_2}` }}</span>
							<input 
								type="text"
								v-model="captcha"
								class="input-captch">
						</div>

						<span
							v-if="sending && !form.valid"
							class="error text-center mt-2">Debes completar este captcha</span>
						
						<div class="mt-4 lg:mt-0">
							<button 
								:class="{'cursor-default': loading}"
								:disabled="loading">
								<span v-if="!loading">Enviar</span>
								<svg v-if="loading" class="inline w-5 h-5 -my-1 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" :fill="currentColor"/>
									<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" :fill="loaderFill"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</form>

			<div v-else
				class="text-2xl text-center font-bold leading-none py-20"
				v-html="sent_message"/>
		</div>

		<div class="pt-12 lg:col-span-4 lg:pt-0">
			<div v-html="pagedata.acf.contact_form_text"/>
		</div>

	</div>

</div>
</template>

<style lang="scss" scoped>
input[type="text"],
input[type="email"]{
	@apply bg-white border border-slate-300 font-semibold 
					leading-none px-3 py-2 w-full transition-all rounded-md;
}

textarea{
	@apply bg-white border border-slate-300 font-semibold 
					leading-none px-3 py-2 w-full transition-all rounded-md 
					resize-none;
}

label{
	@apply text-slate-500 text-xs font-semibold leading-none 
					inline-flex select-none md:text-sm;

	&::after{
		content: '';
		@apply bg-red-500 w-[6px] h-[6px] ml-1 block rounded-full;
	}
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus{
	@apply bg-slate-50 border-primary outline-none shadow-none;
}


input[type="text"]:focus + label,
input[type="email"]:focus + label,
textarea:focus + label{
	@apply text-primary;
}

button{
	@apply bg-primary text-white text-sm font-bold leading-none 
					text-center w-full py-3 px-6 rounded-lg transition-all md:w-36;
}

button:hover:not(:disabled){ @apply shadow-xl; }
button:disabled{ @apply opacity-80; }

.error{ @apply text-red-600 text-xs leading-none pl-3 block select-none; }

.error + .error{ @apply mt-1; }

form.disabled{
	.fieldgroup{ @apply opacity-30 pointer-events-none select-none; }
}

input[type="text"].input-captch{ @apply text-center w-12 px-2; }
</style>