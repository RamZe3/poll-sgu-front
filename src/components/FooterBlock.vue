<template>
    <footer class="p-8 w-full bg-white border-t border-gray-500 md:flex md:items-center dark:bg-gray-800 dark:border-gray-600">
      <div class="container">
        <div class="flex flex-col">
          <div class="flex items-center gap-4 my-5">
            <a href="/" class="flex w-2/3 items-center justify-start">
              <img src="@/assets/icon-logo.png" alt="" class="h-10 w-10 mr-5">
              <h1 class="tracking-wider text-4xl font-semibold text-gray-900 dark:text-white">Тесты</h1>
            </a>
            <div class="w-1/3 flex justify-between">
              <div class="my-3"><a href="tel:+78142332211">+7(814)-233-22-11</a></div>
              <div class="my-3"><a href="https://yandex.ru/maps/-/CCUnm6TscC">Мирный переулок, 17</a></div>
            </div>
          </div>
          <hr>

          <div>
            <p>© 2022. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'footer-block'
}
</script>

<style>

</style>