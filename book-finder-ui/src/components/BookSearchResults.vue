<template>
<div class="container">
  <BookSearchInput @handleSearch="handleSearch"/>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <div v-if= "!isLoading && bookInfoResults.length == 0" class="jumbotron">
    <h3 class="display-5">no results found :(</h3>  
  </div>
  <div class="container">
    <div class="wrapper">     
       <div class="row">
          <b-card-group columns>
            <BookInfoCard
              v-for="bookInfo in bookInfoResults"
              :key="bookInfo.id"
              v-bind:info="bookInfo"
            />
          </b-card-group>
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
      fetch('https://book-finder-chingu-preproject.herokuapp.com/api/booksearch/?searchText='+searchInput)
        .then((response) => response.json())
        .then(data => {
          this.bookInfoResults = (data.stack)?[]:data
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
