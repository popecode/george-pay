<template>

  <v-flex xs12>
    <v-container grid-list-xl>
      <v-layout row wrap align-center>

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
              <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                  <v-flex xs6>
                    <p>Before you start, you need this:</p>
                    <ul class="document-list">
                      <li>Document 1</li>
                      <li>Document 2</li>
                      <li>Document 3</li>
                    </ul>
                  </v-flex>
                  <v-flex xs6>
                    <div class="time-container">
                      <v-icon x-large class="grey--text text--darken-3">alarm</v-icon> 
                      <span class="time">This takes about</span>
                      <span class="time actual-time">2 minutes</span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
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
  .document-list {
    margin-left: 20%;
  }

  .document-list li {
    text-align: left;
  }

  .time-container {
    display: flex;
    flex-direction: column;
  }

  .time {
    font-size: 18px;
    font-weight: bold;
  }

  .actual-time {
    font-size: 24px;
  }
</style>