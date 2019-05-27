<template>
<div class="container">
  <BookSearchInput @handleSearch="handleSearch"/>
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
    bookInfoResults: []
    }),
  methods: {  
    handleSearch(searchInput) {
      fetch('http://localhost:5000/api/booksearch/?searchText='+searchInput)
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          this.bookInfoResults = data
        })
        .catch(error => console.log(error));   
      }
  },
  mounted() {}
}
</script>

<style>

</style>
