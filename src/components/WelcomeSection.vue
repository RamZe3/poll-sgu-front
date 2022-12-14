<template>
  <div class="hello">
    <div class="container">
      <main class="main flex flex-col">
        <div class="flex justify-center my-6">
          <img class="w-100 h-96 rounded-full object-fit" src="@/assets/psihologiya.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center my-5 px-10">
          <figure class="mx-auto max-w-screen-md text-center">
              <svg aria-hidden="true" class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
              <blockquote>
                  <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"Тайна человеческой души — заключена в психических драмах детства. Докопайтесь до этих драм, и исцеление придет."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center mt-6 space-x-3">
                  <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite class="pr-3 font-medium text-gray-900 dark:text-white">Иван Петров</cite>
                      <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Менеджер</cite>
                  </div>
              </figcaption>
          </figure>
          <br>
          <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
          <p class="font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'welcome-section',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
