<template>
    <div class="test-form my-[100px]">
        <div class="container">
            <div class="flex justify-center flex-colitems-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-4/5 bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Вопрос 1</p>
                    </div>
                    <hr>
                    <div class="flex justify-start my-3">
                        <p class="font-medium">Всегда ли вы находите тему для разговора, если даже беседа проходит с незнакомым вам человеком?</p>
                    </div>
                    <div class="justify-start">
                        <form action="">
                            <div class="flex items-center my-3">
                                <input id="checked-checkbox" type="radio" name="field" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да</label>
                            </div>
                            <div class="flex items-center">
                                <input id="checked-checkbox" type="radio" name="field" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Нет</label>
                            </div>
                        </form>
                    </div>
                    <div class="flex justify-evenly mt-5">
                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="this.questions.push(null)">
                            
                            <p class="p-2 font-bold">Предыдущий вопрос</p>
                        </button>
                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="this.questions.push(null)">
                            <p class="p-2 font-bold">Следующий вопрос</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
document.title = 'Прохождение теста';

export default {
    name: "test-form",
    data() {
        return {
            totalQuestions: [1,2],
        }
	},
}
</script>

<style>

</style>