<template>
    <footer class="bottom-0 p-4 w-full bg-white border-t border-gray-500 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div class="container">
        <div class="flex flex-col">
          <div class="flex items-center gap-4 my-5">
            <a href="/" class="flex w-1/2 items-center justify-start">
              <img src="@/assets/icon-logo.png" alt="">
              <h1 class="tracking-wider text-4xl font-semibold text-gray-900 dark:text-white">Иконка</h1>
            </a>
            <div class="w-1/2 flex justify-end gap-[150px]">
              <div class="my-3"><p>Телефон</p></div>
              <div class="my-3"><p>Адрес</p></div>
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