 const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        movies: []
      }
    },
    mounted() {
        fetch("https://api.themoviedb.org/4/list/1?api_key=57c02085434b4d224d11aaa4bff6b330")
        .then((response) => response.json())
        .then((response) => {
          this.movies = response.results
        })
    }
  }).mount('#app')