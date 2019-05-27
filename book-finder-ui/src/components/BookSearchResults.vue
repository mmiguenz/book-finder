<template>
<div>
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
    console.log('search triggered')
    console.log(searchInput)
    this.bookInfoResults = [
        {
        id: 1,
        title: 'mockbook 1',
        category: 'mockCategory 1'
        },
        {
        id: 2,
        title: 'mockbook 2',
        category: 'mockCategory 2'
        },
        {
        id: 3,
        title: 'mockbook 3',
        category: 'mockCategory 3'
        }          
        ]
    }
  },
  mounted() {}
}
</script>

<style>

</style>
