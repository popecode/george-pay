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
              <div class="headline text-xs-center">Talk to your employer</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <v-icon x-large class="blue--text text--lighten-2">supervisor_account</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Get a mediator</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="time-container">
                <v-icon x-large class="grey--text text--darken-3">alarm</v-icon> 
                <span class="time">Takes up to</span>
                <span class="time actual-time">10 weeks</span>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <v-icon x-large class="blue--text text--lighten-2">assignment</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">Send a formal letter</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="time-container">
                <v-icon x-large class="grey--text text--darken-3">alarm</v-icon> 
                <span class="time">Take up to</span>
                <span class="time actual-time">10 days</span>
              </div>
            </v-card-text>
            <v-card-actions class="justify-center">
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