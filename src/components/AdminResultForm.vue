<template>
  <div class="test-form my-[100px]">
      <div class="container">
          <div class="flex flex-col justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">
                    <div class="my-3">
                      <p class="font-bold">Результат теста "Шахматы" <br> пользователя Павел</p>
                  </div>
                </div>

                <div class="justify-center my-8 items-stretch shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">
                  <div class="my-3">
                      <p class="font-bold">Вопрос 1</p>
                  </div>
                  <hr>
                  <div class="flex justify-start my-3">
                      <p class="font-medium">Всегда ли вы находите тему для разговора, если даже беседа проходит с незнакомым вам человеком?</p>
                  </div>
                  <div class="justify-start">
                    <div class="flex my-3 items-center">
                        <div class="w-4 h-4 border border-gray-300 rounded bg-blue-700 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>
                        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да</p>
                    </div>
                    <div class="flex my-3 items-center">
                        <div class="flex w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>
                        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да</p>
                    </div>
                  </div>
                </div>

                <div class="justify-center my-8 items-stretch shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">
                  <div class="my-3">
                      <p class="font-bold">Вопрос 2</p>
                  </div>
                  <hr>
                  <div class="flex justify-start my-3">
                      <p class="font-medium">Всегда ли вы находите тему для разговора, если даже беседа проходит с незнакомым вам человеком?</p>
                  </div>
                  <div class="justify-start">
                    <div class="flex my-3 items-center">
                        <div class="w-4 h-4 border border-gray-300 rounded bg-blue-700 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>
                        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да</p>
                    </div>
                    <div class="flex my-3 items-center">
                        <div class="flex w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>
                        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да</p>
                    </div>
                  </div>
                </div>

                <div class="justify-center shadow-lg my-3 border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Оставить комментарий</p>
                    </div>
                    <hr>
                    
                    <div class="flex flex-col my-3 items-center">
                        <input type="text" class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>

                    <div class="flex justify-center my-3">
                        <button class="text-white mx-10 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="this.questions.push(null)">
                            <p class="p-2 font-bold">Подтвердить</p>
                        </button>
                    </div>
                    
                </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
  name: "test-form",
}
</script>

<style>

</style>