<template>
    <div class="test-list my-[100px]">
        <div class="container">

            <div class="flex justify-center items-center">
                <div class="justify-center shadow-lg border-gray-300 border-2 p-[20px] w-full bg-blue-50 rounded-3xl">
                    <div class="my-3">
                        <p class="font-bold">Список тестов</p>
                    </div>
                    <hr>
                    <div class="flex-col py-5">
                        <div class="flex">
                            <div class="w-1/2 flex justify-start">
                                <a href="#">Футбол</a>
                            </div>
                            <div class="w-1/2 flex justify-start">
                                <p>Этот тест позволит определить, Павел гей или нет</p>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-1/2 flex justify-start">
                                <a href="#">Шахматы</a>
                            </div>
                            <div class="w-1/2 flex justify-start">
                                <p>Этот тест позволит определить, Рамиль гей или нет</p>
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
    name: "tests-list"
}
</script>

<style>

</style>