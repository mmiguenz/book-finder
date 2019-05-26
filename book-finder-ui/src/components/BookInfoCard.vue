<template>
  <div class="wrapper">     
    <div class="row">    
      <div v-for="joke in jokes" :key="joke.id">
        <div class="col-xs-4 cards">
          <img src="https://placeimg.com/300/300/nature" class="img-responsive" alt="Random images placeholder"> 
          <div>
            <h3>{{ joke.id }}</h3>
            <p>{{ joke.joke }}</p>
            <p>{{ joke.category }}</p>
          </div>         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
      jokes: [
        {
          id: 1,
          joke: "Curabitur eu sodales ante. Pellentesque habitant morbi",
          category: "blue"
        },
        {
          id: 2,
          joke: "Curabitur eu sodales ante. Pellentesque habitant morbi",
          category: "blue"
        },
        {
          id: 3,
          joke: "Curabitur eu sodales ante. Pellentesque habitant morbi",
          category: "blue"
        },
        {
          id: 4,
          joke: "Curabitur eu sodales ante. Pellentesque habitant morbi",
          category: "blue"
        }
      ]
  })
}
</script>

<style>

</style>

