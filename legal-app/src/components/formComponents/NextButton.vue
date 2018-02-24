<template>
    <v-container>
        <v-btn class="button" v-on:click="buttonClick">{{ buttonText }}</v-btn>
    </v-container>
</template>

<script>
export default {
    props: ['buttonText'],
    methods: {
        buttonClick() {
            this.$emit('clicked')
        }
    }
}
</script>

<style>
    .button {
        margin-left: 72px;
    }
</style>