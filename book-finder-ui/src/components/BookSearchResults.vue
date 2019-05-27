<template>
<div class="container">
  <BookSearchInput @handleSearch="handleSearch"/>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div v-if= "!isLoading && bookInfoResults.length == 0" class="jumbotron">
    <h1 class="display-4">no results found :(</h1>  
  </div>
  <div class="container">
    <div class="wrapper">     
      <div class="row">            
        <BookInfoCard v-for="bookInfo in bookInfoResults" :key="bookInfo.id" v-bind:info="bookInfo"/>       
      </div>  
    </div>  
  </div>
</div>
</template>

<script>
import BookSearchInput from './BookSearchInput'
import BookInfoCard from './BookInfoCard'

export default {
  name: 'BookSearchResults', 
  components: {
    BookSearchInput,
    BookInfoCard    
  },
  data: () => ({
    bookInfoResults: [],
    isLoading: false
    }),
  methods: {  
    handleSearch(searchInput) {      
      this.isLoading = true;      
      fetch('http://localhost:5000/api/booksearch/?searchText='+searchInput)
        .then((response) => response.json())
        .then(data => { 
          console.log(data)         
          this.bookInfoResults = data
          this.isLoading = false
        })
        .catch(error => console.log(error));   
      }
  },
  mounted() {}
}
</script>

<style>

</style>
