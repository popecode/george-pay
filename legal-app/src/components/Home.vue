<template>
  <v-container fluid>
    <section>
      <v-parallax src="static/hero.jpeg" height="400">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <div class="subheading mb-3 text-xs-center">Navigating the legal system can seem a little scary. LawBud is here to  demystify the legal system, bust some legal myths and guide you to the help you need.  </div>
          <h1 class="white--text mb-2 display-1 text-xs-center">To get started, tell me what’s going on</h1>
          <div class="search-holder">
            <v-flex row>
              <v-layout class="search-container" align-center row>
                <v-icon class="search-icon" x-large>search</v-icon>
                <input type="search" class="search" :placeholder="placeholderText" />
              </v-layout>
            </v-flex>
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md3>
                <v-card class="elevation-3 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">CBD parking fine</div>
                  </v-card-title>
                  <v-card-text>
                    Current step: Pending review
                  </v-card-text>
                  <v-card-actions>
                    <v-layout class="card-status-icons" row justify-space-between align-center>
                      <v-progress-linear class="card-progress-bar" value="10" height="25" color="success"></v-progress-linear>
                      <span class="display-3 green--text text--lighten-2">
                        3
                        <v-icon class="green--text text--light-2 attachment-icon">insert_drive_file</v-icon>
                      </span>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card class="elevation-3 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Youth allowance</div>
                  </v-card-title>
                  <v-card-text>
                    Current step: Pending review
                  </v-card-text>
                  <v-card-actions>
                    <v-layout class="card-status-icons" row justify-space-between align-center>
                      <v-progress-linear class="card-progress-bar" value="90" height="25" color="success"></v-progress-linear>
                      <span class="display-3 green--text text--lighten-2">
                        3
                        <v-icon class="green--text text--light-2 attachment-icon">insert_drive_file</v-icon>
                      </span>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card class="elevation-3 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Pay dispute</div>
                  </v-card-title>
                  <v-card-text>
                    <router-link to="/">Continue</router-link>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout class="card-status-icons" row justify-space-between align-center>
                      <v-progress-linear class="card-progress-bar" value="0" height="25" color="success"></v-progress-linear>
                      <span class="display-3 green--text text--lighten-2">
                        3
                        <v-icon class="green--text text--light-2 attachment-icon">insert_drive_file</v-icon>
                      </span>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card class="elevation-3 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Galaxy 7 refund</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis.
                  </v-card-text>
                  <v-card-actions>
                    <v-layout class="card-status-icons" row justify-space-between align-center>
                      <v-progress-linear class="card-progress-bar" value="50" height="25" color="success"></v-progress-linear>
                      <span class="display-3 green--text text--lighten-2">
                        3
                        <v-icon class="green--text text--light-2 attachment-icon">insert_drive_file</v-icon>
                      </span>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>

            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="assets/section.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="/pre-made-themes"
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-footer class="blue darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        placeholderText: "",
        placeholderArrayIndex: 0,
        placeholderTextLetterIndex: 0,
        placeholderArray: [
          "I've been fined",
          "I have a neighbour dispute",
          "I have an insurance claim",
          "I have a rent dispute",
          "I have issues with my 457 visa"
        ],
        placeholderComplete: false
      }
    },
    methods: {
      addPlaceholderLetter() {
        if (!this.placeholderComplete) {
          this.placeholderText = this.placeholderText + this.placeholderArray[this.placeholderArrayIndex][this.placeholderTextLetterIndex];
          this.placeholderTextLetterIndex += 1;
          if (this.placeholderText.length == this.placeholderArray[this.placeholderArrayIndex].length) {
            this.placeholderComplete = true;
            setTimeout(function () {
              this.nextPlaceholder();
            }.bind(this), 750);
          }
        }
      },
      nextPlaceholder() {
        this.placeholderText = "";
        this.placeholderComplete = false;
        this.placeholderTextLetterIndex = 0;
        this.placeholderArrayIndex += 1;
        if (this.placeholderArrayIndex == this.placeholderArray.length) {
          this.placeholderArrayIndex = 0;
        }
      }
    },
    mounted: function () {
      this.addPlaceholderLetter();

      setInterval(function () {
        this.addPlaceholderLetter();
      }.bind(this), 50); 
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-container {
    position: relative;
    width: 60%;
    margin-left: 20%;
  }
  .search-holder {
    width: 100%;
  }
  .search {
    background: #fbfbfb;
    border: 1px solid #232323;
    color: #232323;
    font-size: 40px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 50px;
    margin-top: 15px;
    width: 100%;
  }
  .search-icon {
    position: absolute;
    top: 38%;
    padding-left: 8px;
    color: #232323;
  }
  .card-status-icons {
    padding: 30px 50px;
  }
  .card-progress-bar {
    width: 150px;
    margin-right: 50px;
  }
  .attachment-icon {
    font-size: 60px;
    padding-bottom: 8px;
  }
</style>
