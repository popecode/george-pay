<template>
    <v-container class="container">
        <div class="question">
            <span class="question-number">
                {{ questionNumber }}<v-icon large>arrow_right</v-icon>
            </span>
            <span class="question-text">{{ questionText }}</span>
        </div>
        <div class="content">
            <span>{{ contentText }}</span>
        </div>
        <div class="input">
            <input type="text" autocomplete="off"/>
        </div>
    </v-container>
</template>

<script>
export default {
    props: ['questionNumber', 'questionText', 'contentText']
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