<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-list-tile-avatar><img :src="avatar"></v-list-tile-avatar>
      <v-toolbar-title v-text="username"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'LawBud',
      username: 'Tom Jones',
      avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg'
    }
  },
  name: 'App'
}
</script>

<style scoped>
.toolbar__title {
  color: #42b983;
  font: verdana;
  font-weight: normal;
}
</style>

