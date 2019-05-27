<template>
  <div class="col-xs-4 cards">
    <img v-bind:src= "info.smallThumbnailLink" class="img-responsive" alt="Random images placeholder"> 
    <div>      
      <h4>{{ info.title }}</h4> 
      <p>Author: {{ info.authors}}</p> 
      <p>Publish: {{ info.publisher }}</p> 
      <a class="btn btn-primary" v-bind:href="info.previewLink" role="button">More</a>    
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

