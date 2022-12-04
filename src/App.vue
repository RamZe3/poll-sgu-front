<template>
  <HeaderBlock></HeaderBlock>
  <router-view/>
  <FooterBlock></FooterBlock>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(115deg, rgba(240,245,229,1) 0%, rgba(242,241,223,1) 55%, rgba(230,224,209,1) 100%);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #8b9bf5;
}
</style>
