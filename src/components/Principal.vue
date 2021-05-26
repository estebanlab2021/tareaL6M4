<template>
  <div class="container py-3">
    <div class="row justify-content-center align-content-center">
        <div class="bg-info text-center card" style="height:150px; border-radius:20px; box-shadow: 10px 10px 5px #aaaaaa;"
        :class="ancho">
          <div class="card-body d-flex justify-content-center align-items-center">
            <h4 class="card-text fw-bold">Esto es un Router {{valor}}</h4>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['valor','ancho']

}
</script>

<style>

</style>