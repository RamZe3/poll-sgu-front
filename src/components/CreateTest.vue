<template>
    <div class="test-form my-[100px]">
        <div class="container">
            <form class="flex flex-col justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">
                    <p class="font-bold">Введите название теста</p>
                    <input type="text" class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>

                <TransitionGroup name="question-boxes">
                    <div class="my-8 shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl flex flex-col" v-for="(item, index) in questions" v-bind:key="index">
                    
                        <div class="flex flex-col my-3 items-center">
                            <p class="font-bold">Вопрос {{ index+1 }}</p>
                        </div>
                        <hr>
                        <div class="flex flex-col my-3 items-center">
                            <p>Введите вопрос</p>
                            <input type="text" class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <hr>
                        <div class="flex flex-col my-3" v-for="(item, index) in answers" v-bind:key="index">
                            <p>Введите вариант ответа</p>
                            <input type="text" class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="flex justify-end my-3">
                            <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" @click="this.answers.push(null)">
                                <p>Добавить вариант ответа</p>
                            </button>
                        </div>
                        <div class="flex justify-center my-3">
                            <button class="text-white mx-10 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="this.questions.push(null)">
                                <p class="p-2 font-bold">Удалить вопрос</p>
                            </button>
                            <button class="text-white mx-10 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="this.questions.push(null)">
                                <p class="p-2 font-bold">Добавить вопрос</p>
                            </button>
                        </div>
                    </div>
                </TransitionGroup>
                
                <button class="flex justify-center border-solid my-3 w-3/5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" type="submit">
                    <p class="p-2 font-bold">Завершить тест</p>
                </button>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name: "test-form",
    data() {
        return {
            answers: [null],
            questions: [null]
        }
	},
    methods:{
        addAnswer(){
            this.answers.push(null)
        },
        addQuestion(){
            this.questions.push(null)
        }
    }
}
</script>

<style>
.question-boxes-enter-active,
.question-boxes-leave-active {
  transition: all 0.8s ease;
}
.question-boxes-enter-from,
.question-boxes-leave-to {
  opacity: 0;
  transform: translateY(-80px);
}
</style>