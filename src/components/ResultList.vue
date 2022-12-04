<template>
    <div class="test-list my-[100px]">
        <div class="container">

            <div class="flex justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Список результатов</p>
                    </div>
                    <hr>
                    <div class="flex-col py-5">
                        <div class="flex my-3">
                            <div class="w-1/2 flex justify-start items-center">
                                <a href="/test">Футбол</a>
                            </div>
                            <div class="w-1/2 flex justify-start">
                                 <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <a href="/tests/result"><p class="px-4">Посмотреть результат</p></a>
                                </button>
                            </div>
                        </div>
                        <div class="flex my-3">
                            <div class="w-1/2 flex justify-start items-center">
                                <a href="/test">Шахматы</a>
                            </div>
                            <div class="w-1/2 flex justify-start">
                                <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <a href="/tests/result"><p class="px-4">Посмотреть результат</p></a>
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
    name: "results-list"
}
</script>

<style>

</style>