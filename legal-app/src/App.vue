<template>
  <v-app>
    <v-navigation-drawer
       persistent
       v-model="drawer"
       enable-resize-watcher
       fixed
       app
       clipped
     >
       <v-list>
         <v-list-tile
           value="true"
           v-for="(item, i) in items"
           :key="i"
         >
           <v-list-tile-action>
             <v-icon v-html="item.icon"></v-icon>
           </v-list-tile-action>
           <v-list-tile-content>
             <v-list-tile-title v-text="item.title"></v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
       </v-list>
     </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
      drawer: false,
       fixed: false,
       items: [{
         icon: 'people',
         title: 'Online User Community'
      }, {
        icon: 'account_balance',
        title: 'Community Legal Centres'
      },
      {
        icon: 'gavel',
        title: ' Private Lawyers'
      }
      ],
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

