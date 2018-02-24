<template>
  <v-container
    fluid
    grid-list-lg
    style="min-height: 0;"
  >
      <v-layout row justify-space-around>
          <v-flex v-for="actionCard in actionCards" :key="actionCard.id" xs3>
            <action-card
                v-bind:actionTitle="actionCard.actionTitle"
                v-bind:actionDescription="actionCard.actionDescription"
                v-bind:callToAction="actionCard.callToAction"
                v-bind:icon="actionCard.icon"
                v-bind:cardClass="actionCard.cardClass"
                v-bind:cardColor="actionCard.cardColor"
            />
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import ActionCard from '@/components/landingComponents/ActionCard'

export default {
    data() {
        return {
            actionCards: [
                {
                    id: 1,
                    actionTitle: 'Test1',
                    actionDescription: 'This is a test description for test 1',
                    callToAction: 'Test now!',
                    icon: 'home',
                    cardColor: 'blue-grey darken-2',
                    cardClass: 'white--text'
                },
                {
                    id: 2,
                    actionTitle: 'Test2',
                    actionDescription: 'This is a test description for test 2',
                    callToAction: 'Test now!',
                    icon: 'gavel',
                    cardColor: 'blue-grey darken-2',
                    cardClass: 'white--text'
                },
                {
                    id: 3,
                    actionTitle: 'Test3',
                    actionDescription: 'This is a test description for test 3',
                    callToAction: 'Test now!',
                    icon: 'info',
                    cardColor: 'blue-grey darken-2',
                    cardClass: 'white--text'
                }
            ]
        }
    },
    components: {
        ActionCard
    }
}
</script>