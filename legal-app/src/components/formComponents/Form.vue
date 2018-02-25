<template>
    <v-container fluid>
        <v-layout column v-if="step == 1">
            <v-container>
                <div class="question">
                    <span class="question-number">
                        1<v-icon large>arrow_right</v-icon>
                    </span>
                    <span class="question-text">When did you <u>start</u> your job?</span>
                </div>
                <div class="input">
                    <v-date-picker v-model="start_date"></v-date-picker>
                </div>
            </v-container>
            <v-container>
                <v-btn v-on:click="showLanding">Previous</v-btn>
                <v-btn color="primary" v-on:click="nextClicked">Next</v-btn>
            </v-container>
        </v-layout>

        <v-layout column v-if="step == 2">
            <v-container>
                <div class="question">
                    <span class="question-number">
                        2<v-icon large>arrow_right</v-icon>
                    </span>
                    <span class="question-text">When did you <u>end</u> your job?</span>
                </div>
                <div class="input">
                    <v-date-picker v-model="end_date"></v-date-picker>
                </div>
            </v-container>
            <v-container>
                <v-btn v-on:click="previousClicked">Previous</v-btn>
                <v-btn color="primary" v-on:click="nextClicked">Next</v-btn>
            </v-container>
        </v-layout>

        <v-layout column v-if="step == 3">
            <v-container>
                <div class="question">
                    <span class="question-number">
                        3<v-icon large>arrow_right</v-icon>
                    </span>
                    <span class="question-text">What is the name of your employer?</span>
                </div>
                <div class="input">
                    <v-flex xs6>
                      <v-text-field label="Employee name" v-model="employer" required></v-text-field>   
                    </v-flex>
                </div>
            </v-container>
            <v-container>
                <v-btn v-on:click="previousClicked">Previous</v-btn>
                <v-btn color="primary" v-on:click="nextClicked">Next</v-btn>
            </v-container>
        </v-layout>

        <v-layout column v-if="step == 4">
            <v-container>
                <div class="question">
                    <span class="question-number">
                        4<v-icon large>arrow_right</v-icon>
                    </span>
                    <span class="question-text">What was your employment status?</span>
                </div>
                <div class="input">
                    <v-flex xs6>
                        <v-select
                          :items="positions"
                          v-model="e1"
                          label="Select"
                          single-line
                          bottom>
                        </v-select>
                    </v-flex>
                </div>
            </v-container>
            <v-container>
                <v-btn v-on:click="previousClicked">Previous</v-btn>
                <v-btn color="primary" v-on:click="nextClicked">Next</v-btn>
            </v-container>
        </v-layout>

        <v-layout column v-if="step == 5">
            <v-container>
                <div class="question">
                    <span class="question-number">
                        5<v-icon large>arrow_right</v-icon>
                    </span>
                    <span class="question-text">Check which apply for you:</span>
                </div>
                <div class="input">
                    <v-checkbox label="I am a trainee" v-model="c1"></v-checkbox>
                    <v-checkbox label="I am eligible for supported wage" v-model="c2"></v-checkbox>
                    <v-checkbox label="I am an apprentice" v-model="c3"></v-checkbox>
                </div>
            </v-container>
            <v-container>
                <v-btn v-on:click="previousClicked">Previous</v-btn>
                <v-btn color="primary" v-on:click="nextClicked">Next</v-btn>
            </v-container>
        </v-layout>

        <v-layout column v-if="step == 6">
            <v-container>
                <div class="question">
                    <span class="question-number">
                        6<v-icon large>arrow_right</v-icon>
                    </span>
                    <span class="question-text">Upload your documentation</span>
                </div>
                <div class="input">
                    <ul>
                        <li>Pay slips</li>
                        <li>Contract</li>
                    </ul>
                </div>
            </v-container>
            <v-container>
                <v-btn v-on:click="previousClicked">Previous</v-btn>
                <v-btn color="primary" v-on:click="generate">Generate letter!</v-btn>    
            </v-container>
        </v-layout>

        <v-layout column v-if="step > 6">
            <v-container v-if="generating">
                <div class="generating">
                    <span class="subheading text-xs-center question-text">LawBud is just writing your letter and supporting documents... hold tight!</span>
                    <v-progress-circular indeterminate :size="50" color="primary"></v-progress-circular>
                </div>
            </v-container>
            <v-container v-else>
                <v-flex xs6 class="my-margin">
                  <DocumentPreview />  
                </v-flex>
                <v-flex class="my-margin">
                    <v-btn>Send to E-Mail</v-btn>
                    <v-btn color="primary" v-on:click="nextStep">Save to profile</v-btn>
                </v-flex>
            </v-container>
        </v-layout>

    </v-container>
</template>

<script>
import NextButton from '@/components/formComponents/NextButton'
import DocumentPreview from '@/components/DocumentPreview'

export default {
    data() {
        return {
            step: 1,
            start_date: '',
            end_date: '',
            employer: '',
            e1: '',
            positions: [
              { text: 'Full time' },
              { text: 'Part time' },
              { text: 'Casual' }
            ],
            c1: false,
            c2: false,
            c3: false,
            generating: false
        }
    },
    props: [
        'showLanding',
        'nextStep'
    ],
    components: {
        NextButton,
        DocumentPreview
    },
    methods: {
        nextClicked() {
            this.step += 1;
        },
        previousClicked() {
            this.generating = false;
            this.step -= 1;
        },
        generate() {
            this.step += 1;
            this.generating = true;

            setTimeout(function() {
                this.setGenerate(false);
            }.bind(this), 5000)
        },
        setGenerate(newVal) {
            this.generating = newVal;
        }
    }
}
</script>

<style scoped>
    .container {
        padding-left: 50px;
    }
    .question {
        padding-top: 50px;
        padding-bottom: 10px;
        font-size: 30px;
    }
    .question-number {
        margin-right: 10px;
    }
    .question-text {
        font-weight: 500;
    }
    .content {
        padding-left: 72px;
        padding-bottom: 10px;
    }
    .input {
        padding-left: 72px;
        margin-top: 10px;
    }
    .input > input {
        outline-color: initial;
        outline-style: initial;
        outline-width: 0px;
        font-size: 30px;
    }
    .generating {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .generating .question-text {
        margin-bottom: 20px;
    }

    .my-margin {
        margin-top: 20px;
    }
</style>
