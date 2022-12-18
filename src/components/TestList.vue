<template>
    <div class="test-list my-[100px]">
        <div class="container">

            <div class="flex justify-center flex-col items-center">
                <div class="justify-center shadow-lg my-3 border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-6">
                        <p class="font-bold text-2xl">Список тестов</p>
                    </div>
                    <hr>
                    <div class="flex">
                        <div class="w-1/3 flex justify-start">
                            <p class="font-bold flex items-center">Название</p>
                        </div>
                        <!-- доделать хидден -->
                        <div class="w-1/3 flex justify-center md:hidden">
                            <p class="font-bold flex items-center">Описание</p>
                        </div>
                    </div>
                    <hr>
                    <div class="flex-col py-5">
                        <div class="flex my-3" v-for="(item, index) in tests" v-bind:key="index">
                            <div class="w-1/3 flex justify-start items-center">
                                <p class="flex text-left">{{ item.title }}</p>
                            </div>
                            <div class="w-1/3 flex justify-center items-center md:hidden">
                                <p class="flex text-left">{{ item.description }}</p>
                            </div>
                            <div class="w-1/3 flex justify-end items-center">
                                <router-link to="/test" @click="this.$store.dispatch('setActiveTestById', item.id)">
                                    <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                        <p class="px-4">Пройти тест</p>
                                    </button>
                                </router-link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="justify-center shadow-lg my-3 border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="flex justify-center my-3">
                        <input v-model="testId" placeholder="Вставьте код теста" type="text" name="code" id="code" class="w-3/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                        <button @click="addTest" class="w-2/5 text-white mx-10 bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
                            <p class="p-2 font-bold text-lg">Добавить тест по приглашению</p>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
// import TestFormStartPage from './TestFormStartPage.vue';

export default {
    name: "tests-list",
    // components:{
    //     TestFormStartPage
    // },
    data(){
        return {
            //tests: ['1', '2'],
            testId: '',
            isStartPageVisible: false,
        }
    },
    methods:{
        addTest(){
          this.$store.dispatch("addTestByInviting", this.testId)
            if (this.testId.length === 0)
                alert('Введите код')
        }
    },
    computed: mapState({
        tests: state => state.testM.tests
      }),
    mounted() {
      this.$store.dispatch("getTests")
    }


}
</script>

<style>

</style>