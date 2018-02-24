<template>
    <v-card :color="cardColor" :class="cardClass" height="500px">
        <v-card-title primary-title>
          <div class="headline">{{ actionTitle }}</div>
          <div>{{ actionDescription }}</div>
         </v-card-title>
         <v-card-actions>
           <v-btn flat dark>{{ callToAction }}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ['actionTitle', 'actionDescription', 'callToAction', 'icon', 'cardClass', 'cardColor']
}
</script>