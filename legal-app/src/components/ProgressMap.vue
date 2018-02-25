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
            <v-icon x-large class="green--text text--lighten-2">attach_money</v-icon>
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
            Know your options
          </v-stepper-step>
          <v-stepper-content step="1">
            <!-- START -->
            <v-flex xs12>
                <v-container grid-list-xl>
                  <v-layout row wrap>

                    <v-flex xs6>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="grey--text">face</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline">1. Do It Yourself</div>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                          <p class="text-xs-center">Try to work it out with your employer yourself.</p>
                          
                          <v-layout row wrap>
                            <v-flex xs6 class="text-xs-center">
                              <p class="subheading"><strong>Pros</strong></p>
                              <p>Quicker</p>
                              <p>Cheaper</p>
                              <p>Less paperwork</p>
                            </v-flex>

                            <v-flex xs6 class="text-xs-center">
                              <p class="subheading"><strong>Cons</strong></p>
                              <p>Reluctant employer</p>
                              <p>No offical ruling</p>
                            </v-flex>
                          </v-layout>
                          
                        </v-card-text>
                        <v-card-actions class="justify-center">
                          <v-btn color="primary" large @click.native="step_no = 2">Start</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>

                    <v-flex xs6>
                      <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                          <v-icon x-large class="grey--text">account_balance</v-icon>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                          <div class="headline">2. Go to Small Claims Court</div>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                          <p class="text-xs-center">If you can’t work it out with your employer you may need to go to court.</p>

                          <v-layout row wrap>
                            <v-flex xs6 class="text-xs-center">
                              <p class="subheading"><strong>Pros</strong></p>
                              <p>Fairness</p>
                              <p>Finality</p>
                            </v-flex>

                            <v-flex xs6 class="text-xs-center">
                              <p class="subheading"><strong>Cons</strong></p>
                              <p>Legal costs</p>
                              <p>Stressful</p>
                              <p>Slow process</p>
                            </v-flex>
                          </v-layout>

                        </v-card-text>
                        <v-card-actions class="justify-center">
                          <v-btn large color="primary">Start</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>

                  </v-layout>
                </v-container>
              </v-flex>
            <!-- END -->
          </v-stepper-content>

          <v-stepper-step step="2" :complete="step_no > 2">DIY</v-stepper-step>
          <v-stepper-content step="2">
            <v-slide-y-transition mode="out-in" v-if="landing">
              <Landing :hideLanding="hideLanding"/>
            </v-slide-y-transition>
            
            <v-slide-y-transition mode="out-in" v-else>
              <Form :showLanding="showLanding" :nextStep="nextStep" />
            </v-slide-y-transition>
          </v-stepper-content>

          <v-stepper-step step="3" :complete="step_no > 3">
            Going to court
            <small>What to bring・What to wear・When to arrive・Courtroom virtual tour</small>
          </v-stepper-step>
          <v-stepper-content step="3">
            <v-slide-y-transition mode="out-in">
              <router-link to="/home">Go to Dashboard</router-link>
            </v-slide-y-transition>
          </v-stepper-content>

          <v-stepper-step step="4" :complete="step_no > 4">
            Prepare your court claim
            <small>Check evidence・Check entitlement・Calculate your claim</small>
          </v-stepper-step>

          <v-stepper-step step="5" :complete="step_no > 5">
            Lodge your application
          </v-stepper-step>

          <v-stepper-step step="6" :complete="step_no > 6">
            Serve your employer
          </v-stepper-step>

          <v-stepper-step step="7" :complete="step_no > 7">
            Your day in court
          </v-stepper-step>

          <v-stepper-step step="8" :complete="step_no > 8">
            Participate in the hearing
          </v-stepper-step>

          <v-stepper-step step="9" :complete="step_no > 9">
            Enforce your order
          </v-stepper-step>

        </v-stepper>
      
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import Landing from '@/components/Landing'
  import Form from '@/components/formComponents/Form'

  export default {
    data () {
      return {
        step_no: 1,
        landing: true,
        introduction: true
      }
    },
    components: {
      Landing,
      Form
    },
    methods: {
      hideLanding() {
        this.landing = false;
      },
      showLanding() {
        console.warn('here');
        this.landing = true;
      },
      nextStep() {
        this.step_no = 3
      }
    }
  }
</script>

<style>
  .parallax__content .icon {
    font-size: 70px !important;
  }

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
