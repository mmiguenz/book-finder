<template>
<b-card>
  <b-card-title slot="header">{{info.title}}</b-card-title>
  <b-card-img v-bind:src="info.smallThumbnailLink" width="20px"></b-card-img>
  <hr>
  <b-card-text>
    <p>Author: {{ info.authors || '-' }}</p>
    <p>Published by: {{ info.publisher || '-' }}</p>
  </b-card-text>
  <b-button v-bind:href="info.previewLink" variant="primary">Preview</b-button>
</b-card>
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
.card-img {
  max-width: 50%;
}
.card-header h4{
  margin: 0px;
}
</style>

