<template>
    <div class="test-list my-[100px]">
        <div class="container">

            <div class="flex justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Список результатов ваших тестов</p>
                    </div>
                    <hr>
                    <div class="flex-col my-5">
                        <div class="flex my-3" v-for="(item, index) in tests" v-bind:key="index">
                            <div class="w-1/2 flex justify-start items-center">
                                <p>{{ item }}</p>
                            </div>
                            <div class="w-1/2 flex justify-start">
                                <button @click="(opened = !opened)" class="relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <p class="px-4">Прошедшие тест</p>
                                    <div v-if="opened" class="absolute z-10 top-full mi-w-full w-max bg-white shadow-md mt-1 rounded">
                                        <div class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white" v-for="(user, index) in usersAnswered" v-bind:key="index">
                                            <!-- не срабатывала ссылка роутера, переделал, но теперь открываются все вместе;
                                            надо как-то разбить, чтобы по отдельности: -->
                                            <router-link to="/myowntests/result" class="z-20 block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">{{ user }}</router-link>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "results-list",
    data() {
        return {
            opened: false,
            tests: ["Футбол", "Шахматы"],
            usersAnswered: ["Коля", "Вася", "Петя"]
        }
	},
    methods:{
        addTest(n){
            this.tests.push(n)
        },
        // тут логику дописать, чтобы пользователи в разные тесты добавлялись
        addUserAnswered(n){
            this.userAnswered.push(n)
        }
    }
}
</script>

<style>

</style>