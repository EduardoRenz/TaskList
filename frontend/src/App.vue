<template>
  <v-app class="grey lighten-2">
    <v-toolbar app class="primary">
      <v-toolbar-title class="headline text-uppercase white--text" >
        <span  title="Desafio Supero Tecnologia">Eduardo Renz</span>
        <span class="font-weight-light" title="Desafio Supero Tecnologia"> Desafio Supero Tecnologia</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/EduardoRenz"
        target="_blank"
      >
        <span class="mr-2 white--text">Github</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
