<template>
    <div class="test-list my-[100px]">
        <div class="container">

            <div class="flex flex-col justify-center items-center">
                <button class="flex justify-center items-center mb-5 text-white mx-10 bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    <router-link to="/createtest" class="p-2 font-bold text-lg" aria-current="page">Создать новый тест</router-link>
                </button>
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-6">
                        <p class="font-bold text-2xl">Результаты ваших созданных тестов</p>
                    </div>
                    <hr>
                    <div class="flex">
                        <div class="w-1/4 flex justify-start">
                            <p class="font-bold flex items-center">Название</p>
                        </div>
                        <div class="w-3/4 flex justify-center">
                            <p class="w-1/5 flex justify-center font-bold items-center">Прошедшие тест</p>
                            <!-- доделать хидден -->
                            <p class="w-3/5 flex justify-center font-bold items-center md:hidden">ID теста</p>
                            <p class="w-1/5 flex justify-center font-bold items-center md:hidden">Управление</p>
                        </div>
                    </div>
                    <hr>
                    <div class="flex-col my-5">
                        <div class="flex my-3" v-for="([key, value], index) of userResultsM" v-bind:key="key">
                            <div class="w-1/4 flex justify-start items-center text-left">
                                <p>{{ getResultById(key) }}</p>
                            </div>
                            <div class="w-3/4 flex justify-between">
                                <div class="w-1/5 flex justify-center">
                                    <button @click="(opened[index] = !opened[index])" class="relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                        <p class="px-4">Посмотреть</p>
                                        <div v-if="opened[index]" class="absolute z-10 top-full w-full bg-white shadow-md mt-1 rounded">
                                            <div v-for="(user) in value" v-bind:key="user" class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <router-link to="/myowntests/result" class="z-20 block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white">
                                                    {{ this.getLoginById(user) }}
                                                </router-link>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div class="w-3/5 flex justify-center md:hidden">
                                    <p class="w-3/4 relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                        {{ key }}
                                    </p>
                                </div>
                                <div class="w-1/5 flex justify-center items-center">
                                    <button type="button" class="mr-1 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>
                                     <button type="button" class="ml-1 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {mapState} from "vuex";
import axios from "axios";
import {API_URL, USERS_API_URL} from "@/common/API";

export default {
    name: "results-list",
    data() {
        return {
          users: [],
            opened: [false, false, false],
            tests: [
                {title: "Шахматы", usersAnswered: ["Коля", "Вася", "Петя"]},
                {title: "Футбол", usersAnswered: ["Вася", "Дима", "Петя"]},
            ]
        }
	},
  async created() {
      const response =await axios.get(API_URL + USERS_API_URL + '/')
    this.users = response.data
  },
  methods:{
        addTest(n){
            this.tests.push(n)
        },
        // тут логику дописать, чтобы пользователи в разные тесты добавлялись
        addUserAnswered(n){
            this.userAnswered.push(n)
        },

        getResultById(id){
          return  this.results.find(el => el.test_id === id).title
        },
        getLoginById(id){
          return  this.users.find(el => el.id === id).login
        }
    },
  computed: mapState({
    userResultsM: state => state.creatorM.usersResultsModel,
    results: state => state.creatorM.usersResults,
  }),
  mounted() {
      this.$store.dispatch("getUsersResult")
  }
}
</script>

<style>

</style>