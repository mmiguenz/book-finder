<template>
  <div id="app">   
    <BookSearch msg="Welcome to Your Vue.js App"/>
    <BookInfoCard/>
  </div>
</template>

<script>
import BookSearch from './components/BookSearch'
import BookInfoCard from './components/BookInfoCard'

export default {
  name: 'app',
  components: {
    BookSearch,
    BookInfoCard
  }
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
