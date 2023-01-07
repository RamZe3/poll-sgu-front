<template>
    <div class="test-form my-[100px]">
        <div class="container">
            <div class="flex flex-col justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">
                    <div class="my-3">
                      <p class="font-bold">Ваш результат теста "{{ activeResult.title }}"</p>
                  </div>
                </div>

              <div v-for="question in activeResult.questions" :key="question.number" class="justify-center my-8 items-stretch shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">
                <div class="my-3">
                  <p class="font-bold">Вопрос {{ question.number + 1 }}</p>
                </div>
                <hr>
                <div class="flex justify-start my-3">
                  <p class="font-medium">{{question.question_text}}</p>
                </div>
                <div class="justify-start">
                  <div v-for="answer in question.answers" :key="answer.number" class="flex my-3 items-center">
                    <div v-if="question.answer.includes(answer.number)" class="w-4 h-4 border border-gray-300 rounded bg-blue-700 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>
                    <div v-if="!question.answer.includes(answer.number)" class="flex w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>
                    <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ answer.title }}</p>
                  </div>
                </div>
              </div>

<!--                <div class="justify-center my-8 items-stretch shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">-->
<!--                  <div class="my-3">-->
<!--                      <p class="font-bold">Вопрос 1</p>-->
<!--                  </div>-->
<!--                  <hr>-->
<!--                  <div class="flex justify-start my-3">-->
<!--                      <p class="font-medium">Всегда ли вы находите тему для разговора, если даже беседа проходит с незнакомым вам человеком?</p>-->
<!--                  </div>-->
<!--                  <div class="justify-start">-->
<!--                    <div class="flex my-3 items-center">-->
<!--                        <div class="w-4 h-4 border border-gray-300 rounded bg-blue-700 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>-->
<!--                        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да</p>-->
<!--                    </div>-->
<!--                    <div class="flex my-3 items-center">-->
<!--                        <div class="flex w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>-->
<!--                        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="justify-center my-8 items-stretch shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">-->
<!--                  <div class="my-3">-->
<!--                      <p class="font-bold">Вопрос 2</p>-->
<!--                  </div>-->
<!--                  <hr>-->
<!--                  <div class="flex justify-start my-3">-->
<!--                      <p class="font-medium">Всегда ли вы находите тему для разговора, если даже беседа проходит с незнакомым вам человеком?</p>-->
<!--                  </div>-->
<!--                  <div class="justify-start">-->
<!--                    <div class="flex my-3 items-center">-->
<!--                        <div class="w-4 h-4 border border-gray-300 rounded bg-blue-700 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>-->
<!--                        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да</p>-->
<!--                    </div>-->
<!--                    <div class="flex my-3 items-center">-->
<!--                        <div class="flex w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"></div>-->
<!--                        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Да</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
                
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-3/5 bg-blue-50 rounded-3xl">
                    <!-- если тест с баллами выводим эти 2 блока div'ов: -->
                    <div v-if="activeResult.type == 'Psiho'" class="my-3">
                        <p class="font-bold">Итоговый результат</p>
                    </div>
                    <hr>
                    <!-- форма для ответа: -->
                    <div v-if="activeResult.type == 'Psiho'" class="flex justify-start my-3">
                      <p class="font-medium">{{ activeResult.result }}</p> 
                    </div>
                  
                    <div class="my-3">
                        <p class="font-bold">Комментарий психолога</p>
                    </div>
                    <hr>
                    
                    <div class="flex justify-start my-3">
                        <p v-if="activeResult.comment != null" class="font-medium">{{ activeResult.comment }}</p>
                        <p v-if="activeResult.comment == null" class="font-medium">Тест еще не проверен</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "result-form",
  computed: mapState({
    activeResult: state => state.resultM.activeResult,
  }),
}
</script>

<style>

</style>