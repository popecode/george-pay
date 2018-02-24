<template>

  <v-flex xs12>
    <v-container grid-list-xl>
      <v-layout row wrap>

        <v-flex xs12 md4>
          <v-card class="elevation-0">
            <v-card-text class="text-xs-center">
              <v-icon x-large class="blue--text text--lighten-2">announcement</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">Option 1</div>
            </v-card-title>
            <v-card-text>
              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <v-icon x-large class="blue--text text--lighten-2">account_balance</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Option 2</div>
            </v-card-title>
            <v-card-text>
              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <v-icon x-large class="blue--text text--lighten-2">assignment</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">Option 3</div>
            </v-card-title>
            <v-card-text>
              <div class="before-start">
                <p class="time">Before you start, you need:</p>
                <p>Document 1</p>
                <p>Document 2</p>
                <p>Document 3</p>
              </div>
              <v-divider></v-divider>
              <div class="time-container">
                <v-icon x-large class="grey--text text--darken-3">alarm</v-icon> 
                <span class="time">This takes about</span>
                <span class="time actual-time">2 minutes</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" v-on:click="hideLanding">Get Started</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>

</template>

<script>

export default {
    data() {
        return {
        }
    },
    props: [
      'hideLanding'
    ]
}
</script>

<style>
  .time-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 15px;
  }

  .time {
    font-size: 18px;
    font-weight: bold;
  }

  .actual-time {
    font-size: 24px;
  }

  .before-start {
    text-align: center;
  }
</style>