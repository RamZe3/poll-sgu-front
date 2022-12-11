<template>
    <div class="test-form my-[100px]">
        <div class="container">
            <div class="flex justify-center flex-colitems-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-4/5 bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Вопрос {{ this.questionM + 1 }}</p>
                    </div>
                    <hr>
                    <div class="flex justify-start my-3">
                        <p class="font-medium">{{this.activeTest.questions[this.questionM].question_text}}</p>
                    </div>
                    <div class="justify-start">
                        <form action="">
                          <div v-for="answer in this.activeTest.questions[this.questionM].answers" :key="answer.number" class="flex items-center my-3">
                            <!--TODO для нескольких ответов и checked доделать-->
                            <input
                                   @input="this.$store.commit('setAnswer', answer.number)"
                                   :id="answer.number" type="radio" name="field" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                            <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{answer.title}}</label>
                          </div>
                        </form>
                    </div>
                    <div class="flex justify-evenly mt-5">
                        <button v-if="questionM !== 0" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                                @click="this.$store.commit('setQuestion', this.questionM - 1)">
                            
                            <p class="p-2 font-bold">Предыдущий вопрос</p>
                        </button>
                        <button v-if="questionM + 1 !== questionsCount " class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                                @click="this.$store.commit('setQuestion', this.questionM + 1)">
                            <p class="p-2 font-bold">Следующий вопрос</p>
                        </button>
                      <button v-else class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                              @click="this.$store.dispatch('addTestToResult')">
                        <p class="p-2 font-bold">Отправить результат</p>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {mapState} from "vuex";

document.title = 'Прохождение теста';

export default {
    name: "test-form",
  //  data() {
  //      return {
  //          totalQuestions: [1,2],
  //      }
	//},

  //watch:{
  //    questionM(){
  //      this.activeTest = this.$store.getters.ACTIVETEST
  //    }
  //},

  computed: mapState({
    activeTest: state => state.testM.activeTest,
    questionM: state => state.testM.currentQuestionAT,
    questionsCount: state => state.testM.questionsCount,
  }),
}
</script>

<style>

</style>