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
  margin-top: 60px;
}
</style>
