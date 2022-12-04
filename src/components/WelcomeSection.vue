<template>
  <div class="hello">
    <div class="container">
      <main class="main flex flex-col">
        <div class="flex justify-center my-5">
          <img class="w-96 h-96 rounded-full" src="@/assets/psihologiya.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center my-5 px-10">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus cupiditate labore vitae nesciunt ab animi mollitia veritatis doloribus doloremque aut 
            distinctio aliquam debitis eos, odit optio consequatur, consequuntur, voluptates enim.</p>
          <br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus cupiditate labore vitae nesciunt ab animi mollitia veritatis doloribus doloremque aut 
          distinctio aliquam debitis eos, odit optio consequatur, consequuntur, voluptates enim.</p>
          <br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus cupiditate labore vitae nesciunt ab animi mollitia veritatis doloribus doloremque aut 
          distinctio aliquam debitis eos, odit optio consequatur, consequuntur, voluptates enim.</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
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
