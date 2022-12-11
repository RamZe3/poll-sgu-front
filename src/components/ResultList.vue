<template>
    <div class="test-list my-[100px]">
        <div class="container">

            <div class="flex justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Список результатов</p>
                    </div>
                    <hr>
                    <div class="flex-col py-5">
                        <div v-for="result in results" :key="result.id" class="flex my-3">
                            <div class="w-1/2 flex justify-start items-center">
                                <p class="flex items-center">{{result.title}}</p>
                            </div>
                            <div class="w-1/2 flex justify-end">
                                 <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <router-link to="/tests/result"
                                    @click="this.$store.dispatch('setActiveResult', result.id)"><p class="px-4">Посмотреть результат</p></router-link>
                                </button>
                            </div>
                        </div>

<!--                        <div class="flex my-3">-->
<!--                            <div class="w-1/2 flex justify-start items-center">-->
<!--                                <p class="flex items-center">2</p>-->
<!--                            </div>-->
<!--                            <div class="w-1/2 flex justify-end">-->
<!--                                <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-->
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

document.title = 'Результаты';

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