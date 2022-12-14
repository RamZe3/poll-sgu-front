<template>
  <header class="bg-white shadow-xl py-10 dark:bg-gray-900 w-full z-10 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container">
      <nav class="flex justify-between items-center">
        <router-link to="/" class="flex items-center justify-start">
          <img src="@/assets/icon-logo.png" alt="" class="h-10 w-10 mr-5">
          <h1 class="tracking-wider text-4xl font-semibold text-gray-900 dark:text-white">Тесты</h1>
        </router-link>

        <ul class="flex gap-4 flex-wrap ml-5">
          <!-- доделать адаптив -->
          <li class="flex justify-center items-center "><router-link to="/" class="text-xl md:text-base font-sans font-bold hover:text-blue-700" aria-current="page">Главная</router-link></li>
          <li class="flex justify-center items-center "><router-link to="/tests" class="text-xl md:text-base font-sans font-bold hover:text-blue-700" aria-current="page">Тесты</router-link></li>
          <li class="flex justify-center items-center "><router-link to="/results" class="text-xl md:text-base font-sans font-bold hover:text-blue-700" aria-current="page">Результаты</router-link></li>
          <li class="flex justify-center items-center "><router-link to="/myowntests" class="text-xl md:text-base font-sans font-bold hover:text-blue-700" aria-current="page">Мои тесты</router-link></li>
          
          <li v-show="!this.$store.getters.ISAUTH" class="flex justify-center items-center "><login-button @click="toggleElement"></login-button></li>
          
          <!-- отображение имени и кнопки выйти, если вошли: -->
          <li v-show="this.$store.getters.ISAUTH" class="flex flex-col justify-center items-center">
            <div class="font-sans leading-tight mb-2">Вошли как:<br>{{ this.$store.getters.LOGIN }}</div>
            <exit-button @click="this.$store.dispatch('signOut')"></exit-button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <UserAuth v-model:isVisible="isVisible"></UserAuth>
</template>

<script>
import LoginButton from './UI/buttons/LoginButton.vue';
import ExitButton from './UI/buttons/ExitButton.vue';
import UserAuth from './UserAuth.vue';

export default {
  name: 'header-block',
  components: {
    LoginButton, UserAuth, ExitButton
  },
  data: () =>{
        return {
            isVisible: false
        }
    },
    methods:{
        toggleElement(){
            this.isVisible = !this.isVisible
        }
    }
}
</script>

<style>

</style>