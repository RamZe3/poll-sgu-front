<template>
  <header class="bg-white shadow-xl px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-10 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container">
      <nav class="flex justify-between items-center py-10px">
        <a href="/" class="flex items-center justify-center">
          <img src="@/assets/icon-logo.png" alt="">
          <h1 class="tracking-wider text-4xl font-semibold text-gray-900 dark:text-white">Иконка</h1>
        </a>

        <ul class="flex gap-4">
          <li class="flex justify-center items-center "><router-link to="/" class="font-sans hover:text-blue-700 hover:underline" aria-current="page">Главная</router-link></li>
          <li class="flex justify-center items-center "><router-link to="/tests" class="font-sans hover:text-blue-700 hover:underline" aria-current="page">Тесты</router-link></li>
          <li class="flex justify-center items-center "><router-link to="/results" class="font-sans hover:text-blue-700 hover:underline" aria-current="page">Результаты</router-link></li>

          <li class="flex justify-center items-center "><router-link to="/createtest" class="font-sans hover:text-blue-700 hover:underline" aria-current="page">Создать тест</router-link></li>
          <li class="flex justify-center items-center "><router-link to="/myowntests" class="font-sans hover:text-blue-700 hover:underline" aria-current="page">Мои тесты</router-link></li>

          <li class="flex justify-center items-center "><login-button @click="toggleElement"></login-button></li>
        </ul>
      </nav>
    </div>
  </header>
  <UserAuth v-model:isVisible="isVisible"></UserAuth>
</template>

<script>
import LoginButton from './UI/buttons/LoginButton.vue';
import UserAuth from './UserAuth.vue';

export default {
  name: 'header-block',
  components: {
    LoginButton, UserAuth
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