<template>
<cabecera />
<div class="container">
  <div class="row">
    <nav class="navbar navbar-expand-lg navbar-info" style="background-color: #e3f2fd;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mb-2 mb-lg-0 mx-auto gap-4">
          <router-link class="nav-link menu" to="/">Router 1</router-link>
          <router-link class="nav-link menu" to="/about">Router 2</router-link>
          <router-link class="nav-link menu" to="/enlace">Router 3</router-link>
          <router-link class="nav-link menu" to="/contacto">Router 4</router-link>
        </div>
      </div>
    </nav>
  </div>
</div>
<router-view/> 
<pie />
</template>
<script>
import Cabecera from '@/components/Cabecera.vue'
import Pie from '@/components/Pie.vue'

export default {
  components: {
    Cabecera,
    Pie
  }
}
</script>


<style scoped>
.menu:hover{
  /*font-size: 18px;*/
  font-weight: bold;
  border-radius: 10px;
  background-color: blue;
  color:white;
  /*border: 1px solid black;*/
  
}
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
