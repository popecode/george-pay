<template>

  <v-flex xs12>
    <v-container grid-list-xl>
      <v-layout row wrap>

        <v-flex xs12 md4>
          <v-card class="elevation-0">
            <v-card-text class="text-xs-center">
              <v-icon x-large class="grey--text">announcement</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">Talk to your employer</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Have a conversation with your employer to resolve the issue. We offer free advice that you can use to prepare.</p>
              <div class="time-container">
                <v-icon x-large class="grey--text text--darken-3">alarm</v-icon> 
                <span class="time">Takes up to</span>
                <span class="time actual-time">Forever</span>
              </div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary">Get some advice</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <v-icon x-large class="grey--text">supervisor_account</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Get a mediator</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Have someone mediate a conversation with your employer to resolve the issue. We can recommend some mediators that can help you.</p>
              <div class="time-container">
                <v-icon x-large class="grey--text text--darken-3">alarm</v-icon> 
                <span class="time">Takes up to</span>
                <span class="time actual-time">10 weeks</span>
              </div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn color="primary">Find a mediator</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 md4>
          <v-card class="elevation-0 transparent">
            <v-card-text class="text-xs-center">
              <v-icon x-large class="grey--text">assignment</v-icon>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
              <div class="headline text-xs-center">Send a formal letter</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Write a formal letter to your employer for them to respond to. Fill out an online form to generate a letter template.</p>
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