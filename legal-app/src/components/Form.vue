<template>
    <v-container fluid>
        <v-layout column>
            <form-question
                questionNumber="1"
                questionText="sample question text here"
                contentText="sample content here"
            />
            <next-button
                v-on:clicked="nextClicked"
                buttonText="Next"
            />
        </v-layout>
    </v-container>
</template>

<script>
import FormQuestion from '@/components/FormQuestion'
import NextButton from '@/components/NextButton'

export default {
    components: {
        FormQuestion,
        NextButton
    },
    methods: {
        nextClicked() {
            console.log('next clicked');
        }
    }
}
</script>

<style>

</style>
