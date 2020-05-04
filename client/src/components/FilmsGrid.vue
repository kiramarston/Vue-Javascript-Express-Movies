<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
  </div>
</template>

<script>

import FilmGridItem from './FilmGridItem'
import { eventBus } from '@/main.js'
import FilmsService from '@/services/FilmsService.js'

export default {
  data(){
    return {
      films: []
    };
  },
  mounted(){
    FilmsService.getFilms()
    .then(films => this.films = films)

    eventBus.$on('film-deleted', (id) => {
      const index = this.films.findIndex(film => film._id === id);
      this.films.splice(index, 1);
    })

  },
  components: {
    'film-grid-item': FilmGridItem
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
