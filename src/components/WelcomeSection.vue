<template>
  <div class="hello">
    <div class="container">
      <main class="main flex flex-col">
        <div class="flex justify-center my-5">
          <img class="w-96 h-96 rounded-full" src="@/assets/psihologiya.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center my-5 px-10">
          <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
          <p class="font-light text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
document.title = 'Главная';

export default {
  name: 'WelcomeSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
