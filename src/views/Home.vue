<template>
  <div class="home">
    <principal valor="1" ancho="w-25"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Principal from '@/components/Principal.vue'

export default {
  name: 'Home',
  components: {
    Principal
  }
}
</script>