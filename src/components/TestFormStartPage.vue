<template>
    <!-- Main modal -->
        <div id="test-form-start-page" tabindex="-1" aria-hidden="true" v-if="isStartPageVisible" class="fixed top-0 left-0 flex justify-center items-center w-full z-20 bg-gray-600/50 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div class="relative w-1/4 md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button @click="isStartPageVisible=!isStartPageVisible" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="flex flex-col px-6 py-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Тест "Название теста"</h3>
                        <div>
                            <p>Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание </p>
                        </div>
                        <router-link to="/test" @click="this.$store.dispatch('setActiveTestById', item.id)">
                            <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                <p class="px-4">Пройти тест</p>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div> 

</template>

<script>

import {useUser} from "@/hooks/useUser";
import {ref} from "vue";

export default {
    name: "test-form-start-page",
    // props: {
    //     isStartPageVisible:{
    //         type: Boolean
    //     }
    // },

    methods:{

      submitR(event) {
          this.register()
        event.preventDefault()
        this.registerV()
        this.checkAuth()
      },
      submitL(event) {
        this.login()
        event.preventDefault()
        this.closeLoginForm()
        this.checkAuth()
      }
    },
    setup(){
      const isRegisterButtonIsPressed = ref(false)
      const {user, checkAuth, signOut, register, login} = useUser()
      return {user, checkAuth, signOut, register, login, isRegisterButtonIsPressed}
    }
}
</script>

<style>

</style>