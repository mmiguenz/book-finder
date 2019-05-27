<template>
  <div id="app">      
    <BookSearchResults/>    
  </div>
</template>

<script>
import BookSearchResults from './components/BookSearchResults'

export default {
  name: 'app',
  components: {
    BookSearchResults,
  },
  mounted: () => (console.log('app is mounted'))
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;  
}
div {
  background-image: url("http://www.pngmart.com/files/1/Transparent-Magic-Book-PNG.png");
  background-color: rgba(52, 106, 167, 0.322)
}
</style>
