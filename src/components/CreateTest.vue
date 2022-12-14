<template>
    <div class="test-form my-[100px]">
        <div class="container">
            <form @submit="addTest" class="flex flex-col justify-center items-center">
                <div class="justify-center my-3 shadow-lg border-gray-300 border-2 p-[20px] w-full max-w-xl bg-blue-50 rounded-3xl">
                    <p class="font-bold">Введите название теста</p>
                    <input required
                        :value="newTest.title"
                        @input="event => this.$store.commit('setTitle' ,event.target.value)"
                        type="text" class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark">
                </div>

                <div class="justify-center my-3 shadow-lg border-gray-300 border-2 p-[20px] w-full max-w-xl bg-blue-50 rounded-3xl">
                  <p class="font-bold">Введите описание теста</p>
                  <textarea required
                      :value="newTest.description"
                      @input="event => this.$store.commit('setDescription' ,event.target.value)"
                      type="text" class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark">
                  </textarea>  
                </div>

                <div class="justify-center my-3 shadow-lg border-gray-300 border-2 p-[20px] w-full max-w-xl bg-blue-50 rounded-3xl">
                  <p class="font-bold">Выберите тип теста</p>
                  <div class="my-3">
                    <div v-for="(type, index) in typesOfTests" :key="index">
                      <input checked @input="setType(type)" id="typeOfTestRadio" type="radio" name="field">
                      <label for="private-typeOfTestRadio-not" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ type }}</label>
                    </div>
                  </div>
                </div>

                <TransitionGroup name="question-boxes">
                    <div v-for="(question, index) in newTest.questions" :key="question.number" class="my-8 shadow-lg border-gray-300 border-2 p-[20px] w-full max-w-xl bg-blue-50 rounded-3xl flex flex-col">
                    
                        <div class="flex flex-col my-3 items-center">
                            <p class="font-bold">Вопрос {{ index +1 }}</p>
                        </div>
                        <hr>
                        <div class="flex flex-col my-3 items-center">
                            <p>Введите вопрос</p>
                            <input required
                                :value="question.question_text"
                                   @input="event => this.$store.commit('setQuestionTitle', {index: index, title: event.target.value})"
                                   type="text" class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark">
                        </div>
                        <hr>
                        <div class="flex flex-col my-3" v-for="(answer) in question.answers" v-bind:key="answer.number">
                          <div v-if="testType == 'Psiho'">
                            <div class="flex">
                              <p class="w-4/5 mr-3">Введите вариант ответа</p>
                              <p class="w-1/5">Баллы за ответ</p>
                            </div>
                            <div class="flex">
                              <input required
                                  :value="answer.title"
                                  @input="event => this.$store.commit('setAnswerTitle', {testIndex: index, index:answer.number, title: event.target.value})"
                                  type="text" class="w-4/5 mr-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark">
                              <input required
                                  :value="answer.value"
                                  @input="event => this.$store.commit('setAnswerValue', {testIndex: index, index:answer.number, value: event.target.value})"
                                  type="number" class="w-1/5 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark">
                            </div>
                          </div>
                          <div v-if="testType == 'Default'"> 
                            <div class="flex w-full justify-center">
                              <p>Введите вариант ответа</p>
                            </div>
                            <div class="flex">
                              <input required
                                  :value="answer.title"
                                  @input="event => this.$store.commit('setAnswerTitle', {testIndex: index, index:answer.number, title: event.target.value})"
                                  type="text" class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark">
                            </div>
                          </div>
                        </div>
                        <div class="flex justify-around my-3">
                          <button v-if="question.answers.length > 1" @click="this.$store.commit('deleteAnswer', index)" class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600" type="button">
                            <p>Удалить вариант ответа</p>
                          </button>
                          <button @click="this.$store.commit('addNewAnswer', index)" class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600" type="button">
                            <p>Добавить вариант ответа</p>
                          </button>
                        </div>
                        <div class="flex justify-center my-3">
                            <button @click="this.$store.commit('deleteQuestion', index)"
                                    v-if="count > 1"
                                    type="button"
                                    class="text-white mx-10 bg-red-400 hover:bg-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-400 dark:hover:bg-red-500">
                                <p class="p-2 font-bold">Удалить вопрос</p>
                            </button>
                            <button @click="this.$store.commit('addNewQuestion', index)" class="text-white mx-10 bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
                                <p class="p-2 font-bold">Добавить вопрос</p>
                            </button>
                        </div>
                    </div>

                </TransitionGroup>

                <div v-if="testType == 'Psiho'" class="justify-center shadow-lg my-3 border-gray-300 border-2 p-[20px] w-3/5 max-w-xl bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Установить разбаловку</p>
                    </div>
                    <hr>

                    <div class="flex my-3">
                        <div class="w-1/6 flex justify-center">
                            <p class="font-bold flex items-center">От</p>
                        </div>
                        <div class="w-1/6 flex justify-center">
                            <p class="font-bold flex items-center">До</p>
                        </div>
                        <div class="w-4/6 flex justify-center">
                            <p class="font-bold flex items-center">Результат</p>
                        </div>
                    </div>
                    <hr>  
                    
                    <div v-for="(balling, index) in ballings" :key="index" class="flex my-3">
                        <div class="w-1/6 flex justify-center">
                          <input :value="ballings[index].minValue"
                                 @input="event => this.$store.commit('addBallingMinValue', {index: index, min: event.target.value})"
                                 type="number" class="w-3/4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark">
                        </div>
                        <div class="w-1/6 flex justify-center">
                          <input :value="ballings[index].maxValue"
                                 @input="event => this.$store.commit('addBallingMaxValue', {index: index, max: event.target.value})"
                                 type="number" class="w-3/4 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark">
                        </div>
                        <div class="w-4/6 flex justify-center">
                          <input :value="ballings[index].answer"
                                 @input="event => this.$store.commit('addBallingAnswer', {index: index, answer: event.target.value})"
                                 type="text" class="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark">
                        </div>
                    </div>

                    <div class="flex justify-around my-3">
                      <button v-if="ballings.length > 1" @click="this.$store.commit('deleteBalling')" class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600" type="button">
                            <p>Удалить разбаловку</p>
                      </button>
                      <button @click="this.$store.commit('addBalling')" class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600" type="button">
                            <p>Добавить разбаловку</p>
                      </button>
                    </div>
                </div>

                <div class="flex items-center h-5">
                    <input v-model="newTest.by_invitation"
                           @input="this.$store.commit('setByInvation' ,!newTest.by_invitation)"
                           id="private-or-not" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-600 dark:border-gray-500">
                    <label for="private-or-not" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Тест по приглашению</label>
                </div>

                <button type="submit" class="flex justify-center border-solid my-3 w-3/5 max-w-xl text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700">
                    <p class="p-2 font-bold">Завершить тест</p>
                </button>
            </form>
        </div>
    </div>

</template>

<script>
import {mapState} from "vuex";

export default {
    name: "test-form",
    data: () =>{
        return {
          typesOfTests: ["Psiho", "Default"],
          testType: "Default",
          resultTypes: [null, null]
        }
    },
    methods:{
      addTest(event) {
        this.$store.dispatch("addNewTest")
        this.$router.push('/tests')
        event.preventDefault()
      },
      setType(type){
        this.$store.commit('setType', type)
        this.testType = type
      }
    },
  mounted() {
      this.setType("Default")
  },
  computed: mapState({
    newTest: state => state.newTestM.newTest,
    ballings: state => state.newTestM.ballings,
    count: state => state.newTestM.count
  }),
}
</script>

<style>
.question-boxes-enter-active,
.question-boxes-leave-active {
  transition: all 0.4s ease;
}
.question-boxes-enter-from,
.question-boxes-leave-to {
  opacity: 0;
  transform: translateY(-80px);
}
</style>