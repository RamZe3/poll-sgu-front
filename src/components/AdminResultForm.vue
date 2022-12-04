<template>
  <div class="test-form my-[100px]">
      <div class="container">
          <div class="flex flex-col justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-3">
                      <p class="font-bold">Результат теста Павла</p>
                  </div>
                </div>

                <div class="justify-center my-8 items-stretch border-black border-2 p-[20px] w-3/5 bg-blue-50 rounded-lg">
                  <div class="my-3">
                      <p class="font-medium">Вопрос 1</p>
                  </div>
                  <hr>
                  <div class="flex justify-start my-3">
                      <p class="font-medium">Всегда ли вы находите тему для разговора, если даже беседа проходит с незнакомым вам человеком?</p>
                  </div>
                  <div class="justify-start">
                    <div class="flex items-center my-3">
                        <input checked id="checked-checkbox" type="radio" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                        <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да, я не гей</label>
                    </div>
                  </div>
                </div>

                <div class="justify-center my-8 items-stretch border-black border-2 p-[20px] w-3/5 bg-blue-50 rounded-lg">
                  <div class="my-3">
                      <p class="font-medium">Вопрос 1</p>
                  </div>
                  <hr>
                  <div class="flex justify-start my-3">
                      <p class="font-medium">Всегда ли вы находите тему для разговора, если даже беседа проходит с незнакомым вам человеком?</p>
                  </div>
                  <div class="justify-start">
                    <div class="flex items-center my-3">
                        <input checked id="checked-checkbox" type="radio" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                        <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да, я не гей</label>
                    </div>
                  </div>
                </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
  name: "test-form"
}
</script>

<style>

</style>