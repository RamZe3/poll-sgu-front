<template>
    <div class="test-list my-[100px]">
        <div class="container">

            <div class="flex justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Список результатов ваших тестов</p>
                    </div>
                    <hr>
                    <div class="flex-col my-5">
                        <div class="flex my-3">
                            <div class="w-1/2 flex justify-start items-center">
                                <p>Футбол</p>
                            </div>
                            <div class="w-1/2 flex justify-start">
                                <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <p class="px-4">Прошедшие тест</p>
                                    <div class="absolute hidden z-10 group-focus:block top-full mi-w-full w-max bg-white shadow-md mt-1 rounded">
                                        <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                            <li class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"><a href="/myowntests/result">Павел</a></li>
                                            <li class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"><a href="/myowntests/result">Андрей</a></li>
                                            <li class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"><a href="/myowntests/result">Коля</a></li>
                                            <li class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"><a href="/myowntests/result">Вася</a></li>
                                        </ul>

                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="flex my-3">
                            <div class="w-1/2 flex justify-start items-center">
                                <p>Футбол</p>
                            </div>
                            <div class="w-1/2 flex justify-start">
                                <button class="group relative flex justify-center items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                    <p class="px-4">Прошедшие тест</p>
                                    <div class="absolute hidden z-10 group-focus:block top-full mi-w-full w-max bg-white shadow-md mt-1 rounded">
                                        <ul class="text-left border rounded">
                                            <li class="px-4 py-1 hover:bg-gray-100 border-b"><a href="/myowntests/result">Павел</a></li>
                                            <li class="px-4 py-1 hover:bg-gray-100 border-b"><a href="/myowntests/result">Андрей</a></li>
                                            <li class="px-4 py-1 hover:bg-gray-100 border-b"><a href="/myowntests/result">Коля</a></li>
                                            <li class="px-4 py-1 hover:bg-gray-100 border-b"><a href="/myowntests/result">Вася</a></li>
                                        </ul>
                                    </div>
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