<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      
        <v-stepper v-model="e6" vertical>

          <v-stepper-step step="1" :complete="e6 > 1">
            Select an app
            <small>Summarize if needed</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click.native="e6 = 2">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="2" :complete="e6 > 2">Configure analytics for this app</v-stepper-step>
          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click.native="e6 = 3">Continue</v-btn>
            <v-btn flat @click.native="e6 = 1">Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="3" :complete="e6 > 3">Select an ad format and name ad unit</v-stepper-step>
          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click.native="e6 = 4">Continue</v-btn>
            <v-btn flat @click.native="e6 = 2">Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step step="4" :complete="e6 > 4">View setup instructions</v-stepper-step>
          <v-stepper-content step="4">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click.native="e6 = 1">Continue</v-btn>
            <v-btn flat @click.native="e6 = 3">Cancel</v-btn>
          </v-stepper-content>

        </v-stepper>
      
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e6: 1
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
