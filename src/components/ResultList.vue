<template>
    <div class="test-list my-[100px]">
        <div class="container">

            <div class="flex justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-6">
                        <p class="font-bold text-2xl">Результаты пройденных вами тестов</p>
                    </div>
                    <hr>
                    <div class="flex justify-between">
                        <div class="w-1/3 flex">
                            <p class="font-bold flex items-center">Название</p>
                        </div>
                        <div class="w-1/3 flex">
                            <p class="font-bold flex items-center">Дата прохождения</p>
                        </div>
                        <div class="w-1/3 flex">
                            <p class="font-bold flex items-center">Результаты</p>
                        </div>
                    </div>
                    <hr>
                    <div class="flex-col py-5">
                        <div v-for="result in results" :key="result.id" class="flex my-3">
                            <div class="w-1/3 flex items-center">
                                <p class="flex text-left">{{result.title}}</p>
                            </div>
                          <div class="w-1/3 flex items-center">
                            <p class="flex text-left">{{result.date_of_passage}}</p>
                          </div>
                            <div class="w-1/3 flex">
                                <router-link to="/results/result" @click="this.$store.dispatch('setActiveResult', result.id)">
                                    <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                        <p class="px-4">Посмотреть результат</p>
                                    </button>
                                </router-link>
                            </div>
                        </div>

<!--                        <div class="flex my-3">-->
<!--                            <div class="w-1/2 flex justify-start items-center">-->
<!--                                <p class="flex items-center">2</p>-->
<!--                            </div>-->
<!--                            <div class="w-1/2 flex justify-end">-->
<!--                                <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-->
<!--                                    <a href="/tests/result"><p class="px-4">Посмотреть результат</p></a>-->
<!--                                </button>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {mapState} from "vuex";

export default {
    name: "results-list",
  computed: mapState({
    activeResult: state => state.resultM.activeResult,
    results: state => state.resultM.results,
  }),
  mounted() {
    this.$store.dispatch("getResults")
  }
}
</script>

<style>

</style>