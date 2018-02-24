<template>
    <v-card :color="cardColor" :class="cardClass" height="500px">
        <v-container fluid grid-list-lg fill-height>
            <v-layout justify-space-between column>
                <v-layout row height="125px">
                    <v-flex xs7>
                        <div class="headline">{{ actionTitle }}</div>
                    </v-flex>
                    <v-flex xs5>
                        <v-flex align-center>
                            <v-icon dark size="100px">{{ icon }}</v-icon>
                        </v-flex>
                    </v-flex>
                </v-layout>
                <v-layout column justify-space-between>
                    <div>{{ actionDescription }}</div>
                    <v-btn flat dark>{{ callToAction }}</v-btn>
                </v-layout>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: ['actionTitle', 'actionDescription', 'callToAction', 'icon', 'cardClass', 'cardColor']
}
</script>