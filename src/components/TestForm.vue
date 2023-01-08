<template>
    <div class="test-form my-[100px]">
      <div class="container">
        <div class="flex flex-col justify-center items-center flex-colitems-center">
          <div class="flex flex-col justify-center mb-2 items-center shadow-lg border-gray-300 border-2 p-2 w-4/5 bg-blue-50 rounded-3xl">
            <div class="mt-3">
               <p class="font-bold text-2xl">Тест "{{ this.activeTest.title }}"</p>
            </div>



            <nav class="my-3" aria-label="question-navigation">
              <ul class="inline-flex items-center -space-x-px">
                <li>
                  <button v-if="questionM !== 0" 
                              @click="this.$store.commit('setQuestion', this.questionM - 1)" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </button>
                  <button v-else-if="questionM == 0" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-gray-300 border border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </button>
                </li>

                <li v-for="(question, index) in this.questions" :key='index'>
                  <button v-if="question" @click="this.$store.commit('setQuestion', index)" class="px-3 py-2 leading-tight text-gray-500 bg-green-200 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {{ index + 1 }}
                  </button>
                  <button v-else-if="questionM === index" @click="this.$store.commit('setQuestion', index)" class="px-3 py-2 leading-tight text-gray-500 bg-blue-200 border border-gray-300  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {{ index + 1 }}
                  </button>
                  <button v-else @click="this.$store.commit('setQuestion', index)" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      {{ index + 1 }}
                  </button>
                </li>

<!--                <button @click="this.$store.commit('setQuestion', index)" class="px-3 py-2 leading-tight text-gray-500 bg-red-200 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--                  {{ 11 }}-->
<!--                </button>-->
<!--                <button @click="this.$store.commit('setQuestion', index)" class="px-3 py-2 leading-tight text-gray-500 bg-green-200 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--                  {{ 22 }}-->
<!--                </button>-->
<!--                <button @click="this.$store.commit('setQuestion', index)" class="px-3 py-2 leading-tight text-gray-500 bg-blue-200 border border-gray-300  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">-->
<!--                  {{ 33 }}-->
<!--                </button>-->

                <li>
                  <button v-if="questionM + 1 !== questionsCount"
                              @click="this.$store.commit('setQuestion', this.questionM + 1)" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  </button>
                  <button v-else-if="questionM + 1 === questionsCount" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-gray-300 border border-gray-300 rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-4/5 bg-blue-50 rounded-3xl">
              <div class="my-3">
                  <p class="font-bold text-lg">Вопрос {{ this.questionM + 1 }}</p>
              </div>
              <hr>
              <div class="flex justify-center my-3">
                  <p class="font-medium">{{this.activeTest.questions[this.questionM].question_text}}</p>
              </div>
              <div class="justify-start">
                  <form action="">
                    <div v-for="answer in this.activeTest.questions[this.questionM].answers" :key="answer.number" class="flex items-center my-3 ">
                      <!--TODO для нескольких ответов и checked доделать-->
                      <label v-if="answer.number%2 === 0" class="pl-3 w-full h-16 justify-start border border-gray-300 hover:border-gray-400 rounded-2xl items-center flex text-sm font-medium text-gray-900 dark:text-gray-300">
                        <input :checked="this.activeTest.questions[this.questionM].answer !== undefined && this.activeTest.questions[this.questionM].answer.includes(answer.number)"
                              @input="setAnswerToQ(answer.number)"
                              :id="answer.number" type="radio" name="answer" class="w-4 border border-gray-300 rounded" required>
                        <p class="ml-2 text-left">{{ answer.title }} </p>
                      </label>
                      <label v-else class="pl-3 w-full h-16 justify-start items-center border border-gray-300 hover:border-gray-400 rounded-2xl bg-gray-200 flex text-sm font-medium text-gray-900 dark:text-gray-300">
                        <input :checked="this.activeTest.questions[this.questionM].answer !== undefined && this.activeTest.questions[this.questionM].answer.includes(answer.number)"
                              @input="setAnswerToQ(answer.number)"
                              :id="answer.number" type="radio" name="answer" class="w-4 border border-gray-300 rounded" required>
                        <p class="ml-2 text-left">{{ answer.title }}</p>
                      </label>
                    </div>
                    
                  </form>
              </div>
              <div class="flex justify-evenly mt-5">
                <button v-if="questionM !== 0" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button"
                        @click="this.$store.commit('setQuestion', this.questionM - 1)">
                    
                    <p class="p-2 font-bold">Предыдущий вопрос</p>
                </button>
                <button v-if="questionM + 1 !== questionsCount " class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button"
                        @click="this.$store.commit('setQuestion', this.questionM + 1)">
                    <p class="p-2 font-bold">Следующий вопрос</p>
                </button>

                <!-- todo: придумать логику для установки булевого testIsComplete или просто заменить его на какое-то выражение проверки "все ли ответы даны" -->
                <button disabled v-else-if="this.getEmptyAnswers().length > 0" class="tooltip text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button"
                        @click="this.$store.dispatch('addTestToResult')">
                  <p class="p-2 font-bold">Отправить результат</p>
                  <span class="tooltip__text">Вы еще не прошли вопросы:<br>{{ this.getEmpty() }}</span>
                </button>
                <button v-else-if="this.getEmptyAnswers().length === 0" class="tooltip text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button"
                        @click="this.$store.dispatch('addTestToResult'); 
                                this.$router.push('/results')">
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
import {useQuestionModel} from "@/hooks/useQuestionModel";

export default {
    name: "test-form",
    data(){
      return{
        testIsComplete: false
      }
    },
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
  methods:{
    setAnswerToQ(number){
      this.$store.commit('setAnswer', number)
      this.setAnswer(this.questionM, true)
    },
    getEmpty(){
      //TODO переделать строку
      let str = ''
      this.getEmptyAnswers().forEach(el => str+=el+1 + ", ")
      str = str.slice(0, -2)
      return str
    }
  },

  mounted() {
    this.setQuestions(this.$store.getters.QUESTIONS_COUNT)
  },

  setup(){
      const {questions, questionsCount,
        setQuestions, setAnswer,
      getEmptyAnswers} = useQuestionModel()
    return {questions, questionsCount,
      setQuestions, setAnswer,
    getEmptyAnswers}
  }
}
</script>

<style>

.tooltip {
  position: relative;
}

.tooltip__text {
  visibility: hidden;
  width: 100%;
  background-color: rgba(20,20,20,0.7);
  color: #fff;
  text-align: center;
  border-radius: 10px;
  padding: 5px;

  position: absolute;
  left: 0;
  top: 110%;
  z-index: 1;
}

.tooltip:hover .tooltip__text {
  visibility: visible;
}

</style>