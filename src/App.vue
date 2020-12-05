<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/travel">travel</router-link>
      <router-link to="/partner">Partner</router-link>
      <router-link to="/footer">Footer</router-link>
      <router-link to="/recomend">reco</router-link>
      <router-link to="/Promotions">pro</router-link>
      <router-link to="/slider">slider</router-link>
      <router-link to="/signup">signup</router-link>
      <router-link to="/pg2">pg2</router-link>
      <router-link to="/hotel">hotel</router-link>
      <router-link to="/nav">nav</router-link>
      <router-link to="/search">search</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
