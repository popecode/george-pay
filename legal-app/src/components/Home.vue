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
          <div class="subheading mb-2 text-xs-center">Navigating the legal system can seem a little scary. LawBud is here to  demystify the legal system, bust some legal myths and guide you to the help you need.  </div>
          <h1 class="white--text mb-1 display-1 text-xs-center">To get started, tell me what’s going on</h1>
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
              <v-flex xs12 md3 class="action-card">
                <v-card class="elevation-3 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">CBD parking fine</div>
                  </v-card-title>
                  <v-card-text>
                    <v-flex column>
                    <p><strong>Current step:</strong> Send a letter</p>
                    <p><strong>Next step</strong>: Go to court</p>
                    </v-flex>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout class="card-status-icons" row justify-space-between align-center>
                      <v-flex>
                      <span class="green--text text--lighten-2">
                        20%
                      </span>
                      <v-progress-linear class="card-progress-bar" value="20" height="25" color="success"></v-progress-linear>
                      </v-flex>
                      <span class="green--text text--lighten-2">
                        1 files
                        <v-icon class="green--text text--light-2 attachment-icon">insert_drive_file</v-icon>
                      </span>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md3 class="action-card">
                <v-card class="elevation-3 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Youth allowance</div>
                  </v-card-title>
                  <v-card-text>
                    <v-flex column>
                    <p><strong>Current step:</strong> Send a letter</p>
                    <p><strong>Next step</strong>: Go to court</p>
                    </v-flex>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout class="card-status-icons" row justify-space-between align-center>
                      <v-flex>
                      <span class="green--text text--lighten-2">
                        90%
                      </span>
                      <v-progress-linear class="card-progress-bar" value="90" height="25" color="success"></v-progress-linear>
                      </v-flex>
                      <span class="green--text text--lighten-2">
                        11 files
                        <v-icon class="green--text text--light-2 attachment-icon">insert_drive_file</v-icon>
                      </span>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md3 class="action-card">
                <v-card class="elevation-3 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">I've been underpaid</div>
                  </v-card-title>
                  <v-card-text>
                    <v-flex column>
                    <p><router-link to="/"><strong>Current step:</strong> Send a letter</router-link></p>
                    <p><strong>Next step</strong>: Go to court</p>
                    </v-flex>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout class="card-status-icons" row justify-space-between align-center>
                      <v-flex>
                      <span class="green--text text--lighten-2">
                        0%
                      </span>
                      <v-progress-linear class="card-progress-bar" value="0" height="25" color="success"></v-progress-linear>
                      </v-flex>
                      <span class="green--text text--lighten-2">
                        0 files
                        <v-icon class="green--text text--light-2 attachment-icon">insert_drive_file</v-icon>
                      </span>
                    </v-layout>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md3 class="action-card">
                <v-card class="elevation-3 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Galaxy 7 refund</div>
                  </v-card-title>
                  <v-card-text>
                    <v-flex column>
                    <p><strong>Current step:</strong> Send a letter</p>
                    <p><strong>Next step</strong>: Go to court</p>
                    </v-flex>
                  </v-card-text>
                  <v-card-actions>
                    <v-layout class="card-status-icons" row justify-space-between align-center>
                      <v-flex>
                      <span class="green--text text--lighten-2">
                        50%
                      </span>
                      <v-progress-linear class="card-progress-bar" value="50" height="25" color="success"></v-progress-linear>
                      </v-flex>
                      <span class="green--text text--lighten-2">
                        3 files
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
          "I have a dispute with a neighbour",
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
    font-size: 70px;
    padding-bottom: 8px;
  }
  .action-card {
    min-height: 400px;
  }
</style>
