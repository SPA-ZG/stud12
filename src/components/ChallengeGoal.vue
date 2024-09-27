<template>
    <div>
        <p>{{ readingGoalTitle }}</p>
        <div>
        <label for="goal"> Goal for number of books to read: </label>
        <input type="number" id="goal" placeholder="0" v-model="readingGoal" @input="validateInput"/>
        <button :disabled="!goalEntered" @click="setReadingGoal">Set reading goal</button>
        </div>
        <p>Compleated {{ readBooksCount }} / {{ getReadingGoal }}</p>
    </div>
  </template>
  
<script>
    import { storeToRefs } from 'pinia'
    import { readingChallengeStore } from './readingChallenge.js'

    export default {
        props: ['readingGoalTitle'],
        data() {
            return {
                readingGoal: null,
                goalEntered: false,
                goalSet: null
            };
        },
        setup() {
            const challengeStore = readingChallengeStore();
            const filteredBooks  = storeToRefs(challengeStore)
            return {
                books: filteredBooks
            };
         },
         methods: {
            setReadingGoal() {
                const challengeStore = readingChallengeStore();
                challengeStore.setReadingGoal(this.readingGoal)
                this.readingGoal = null;
            },
            validateInput() {
                if (this.readingGoal <= 0 || this.readingGoal == null) {
                    this.readingGoal = null;
                    this.goalEntered = false;
                } else {
                    this.goalEntered = true;
                }
            },
         },
         computed: {
            getReadingGoal() {
                const challengeStore = readingChallengeStore();
                return challengeStore.readingGoal
            },
            readBooksCount() {
                const challengeStore = readingChallengeStore();
                return challengeStore.readBooksCount 
            }
         }
    };
 </script>
  