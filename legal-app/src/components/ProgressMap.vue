<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in" v-if="introduction">
      <section>
        <v-parallax height="600">
          <v-layout
            column
            align-center
            justify-center
            class="grey--text">
            <h1 class="grey--text text--darken-2 mb-2 display-2 text-xs-center">So you think you’ve been underpaid?</h1>
            <div class="mb-3 text-xs-center text--darken-2 headline">
              You’ve come to the right place. It's easy to get started!
            </div>
            <v-btn dark large color="primary" @click.native="introduction = false">Let's Go!</v-btn>
          </v-layout>
        </v-parallax>
      </section>
    </v-slide-y-transition>

    <v-slide-y-transition mode="out-in" v-else>
        <v-stepper v-model="step_no" vertical>
          <v-btn flat @click.native="introduction = true">Cancel</v-btn>

          <v-stepper-step step="1" :complete="step_no > 1">
            Select an app
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <!-- START -->
            <v-flex xs12>
                <v-container grid-list-xl>
                  <v-layout row wrap>

                    <v-flex xs6>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="blue--text text--lighten-2">face</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline">DIY</div>
                        </v-card-title>
                        <v-card-text>
                          Try to work it out with your employer yourself.
                          <p>Pros:</p>

                          <ul>
                            <li></li>
                          </ul>

                          <p>Cons:</p>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="primary" @click.native="step_no = 2">Start</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>

                    <v-flex xs6>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="blue--text text--lighten-2">account_balance</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline">Go to Court</div>
                        </v-card-title>
                        <v-card-text>
                          If you can’t work it out with your employer you may need to go to court. There are a few things you need to consider first.
                        </v-card-text>
                        <v-card-actions>
                          <v-btn color="primary" @click.native="step_no = 3">Start</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>

                  </v-layout>
                </v-container>
              </v-flex>
            <!-- END -->
          </v-stepper-content>

          <v-stepper-step step="2" :complete="step_no > 2">Configure analytics for this app</v-stepper-step>
          <v-stepper-content step="2">
            <Landing v-if="landing" :hideLanding="hideLanding"/>
            <div v-else>
              <p>form</p>
            </div>
            <v-btn flat @click.native="step_no = 1">Previous</v-btn>
            <v-btn color="primary" @click.native="step_no = 3">Next</v-btn>
          </v-stepper-content>

          <v-stepper-step step="3" :complete="step_no > 3">Select an ad format and name ad unit</v-stepper-step>
          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-5" height="200px">
              Some content goes here
            </v-card>
            <v-btn flat @click.native="step_no = 2">Previous</v-btn>
            <v-btn color="primary" @click.native="step_no = 4">Next</v-btn>
          </v-stepper-content>

          <v-stepper-step step="4" :complete="step_no > 4">View setup instructions</v-stepper-step>
          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn flat @click.native="step_no = 3">Previous</v-btn>
            <v-btn color="primary" @click.native="step_no = 5">Next</v-btn>
          </v-stepper-content>

        </v-stepper>
      
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import Landing from '@/components/Landing'

  export default {
    data () {
      return {
        step_no: 1,
        landing: true,
        introduction: true
      }
    },
    components: {
      Landing
    },
    methods: {
      hideLanding() {
        this.landing = false;
      },
      showLanding() {
        this.landing = true;
      }
    }
  }
</script>

<style>
  .stepper__step__step {
    height: 40px;
    width: 40px;
    font-size: 20px;
  }

  .stepper__label {
    font-size: 24px;
  }

  .stepper__label small {
    font-size: 16px;
  }
</style>
