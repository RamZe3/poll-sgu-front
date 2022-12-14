<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(115deg, rgba(240,245,229,1) 0%, rgba(242,241,223,1) 55%, rgba(230,224,209,1) 100%);
}

nav a.router-link-exact-active {
  color: #8b9bf5;
}

body::-webkit-scrollbar {
  width: 8px;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

</style>
