<template>
  <div class="col-xs-4 cards">
    <img src="https://placeimg.com/300/300/nature" class="img-responsive" alt="Random images placeholder"> 
    <div>
      <h3>{{ info.id }}</h3>
      <p>{{ info.title }}</p>
      <p>{{ info.category }}</p>
    </div>         
  </div>   
</template>

<script>
export default {
  name: 'BookInfoCard',
  props: ['info'],
  data: () => ({ 
  }),
  mounted() { } 
}
</script>

<style>

</style>

