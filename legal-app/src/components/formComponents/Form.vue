<template>
    <v-container fluid>
        <v-layout column v-if="step == 1">
            <v-container>
                <div class="question">
                    <span class="question-number">
                        1<v-icon large>arrow_right</v-icon>
                    </span>
                    <span class="question-text">Question the first</span>
                </div>
                <div class="content">
                    <span>Content tasjkldfasdjklfasjklasdfjklfasdjklflasjklf </span>
                </div>
                <div class="input">
                    <input type="text" autocomplete="off"/>
                </div>
            </v-container>
            <next-button
                v-on:clicked="nextClicked"
                buttonText="Next"
            />
        </v-layout>
        <v-layout column v-if="step == 2">
            <v-container>
                <div class="question">
                    <span class="question-number">
                        2<v-icon large>arrow_right</v-icon>
                    </span>
                    <span class="question-text">Question the second</span>
                </div>
                <div class="content">
                    <span>More content here, second step</span>
                </div>
                <div class="input">
                    <input type="text" autocomplete="off"/>
                </div>
            </v-container>
            <next-button
                v-on:clicked="nextClicked"
                buttonText="Next"
            />
        </v-layout>

    </v-container>
</template>

<script>
import NextButton from '@/components/formComponents/NextButton'

export default {
    data() {
        return {
            step: 1
        }
    },
    components: {
        NextButton
    },
    methods: {
        nextClicked() {
            this.step +=1
        }
    }
}
</script>

<style>
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
</style>
