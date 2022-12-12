<template>
    <div class="test-list my-[100px]">
        <div class="container">

            <div class="flex justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Список результатов ваших тестов</p>
                    </div>
                    <hr>
                    <div class="flex">
                        <div class="w-1/4 flex justify-start">
                            <p class="font-bold flex items-center">Название</p>
                        </div>
                        <div class="w-3/4 flex justify-center">
                            <p class="w-1/3 flex justify-center font-bold items-center">Прошедшие тест</p>
                            <p class="w-2/3 flex justify-center font-bold items-center">ID теста</p>
                        </div>
                    </div>
                    <hr>
                    <div class="flex-col my-5">
                        <div class="flex my-3" v-for="([key, value], index) of userResultsM" v-bind:key="key">
                            <div class="w-1/4 flex justify-start items-center">
                                <p>{{ getResultById(key) }}</p>
                            </div>
                            <div class="w-3/4 flex justify-start">
                                <div class="w-1/3 flex justify-center">
                                    <button @click="(opened[index] = !opened[index])" class="relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                        <p class="px-4">Посмотреть результаты</p>
                                        <div v-if="opened[index]" class="absolute z-10 top-full w-full bg-white shadow-md mt-1 rounded">
                                            <div v-for="(user) in value" v-bind:key="user" class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <router-link to="/myowntests/result" class="z-20 block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                                    {{ this.getLoginById(user) }}
                                                </router-link>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div class="w-2/3 flex justify-center">
                                    <p class="w-full relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                        {{ key }}
                                    </p>
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

document.title = 'Мои тесты';

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