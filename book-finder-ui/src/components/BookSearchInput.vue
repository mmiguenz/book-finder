<template>
  <div class="container">    
    <div class="row justify-content-md-center">
      <form @submit.prevent="search">
        <div class="form-group">   
          <div class="container center">
            <div class="row justify-content-md-center">              
              <div class="col-xs-10">
                <input v-model="searchText" type="text" required="required" class="form-control" id="inputsearch" placeholder="Enter your search">     
              </div>
              <div class="col-xs-2">
                <button type="submit" class="btn btn-primary">search</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>  
  </div>
</template>

<script>
export default {
    name: 'BookSearchInput',
    props:  {
       
    },
    data: () => ({
      searchText: ''
    }),
    methods: {
      search() {
        this.$emit('handleSearch', this.searchText)
    },    
  },
  mounted(){}

}
</script>

<style>

</style>
