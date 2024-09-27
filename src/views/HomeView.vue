<template>
  <div class="home">
    <img alt="Site logo" src="../assets/logo.png" width="200px">
    <ChallengeBooks/>
    <ChallengeGoal :readingGoalTitle="`Reading goal ${date}`"/>
  </div>
</template>

<script>
import ChallengeBooks from '@/components/ChallengeBooksList.vue';
import ChallengeGoal from '@/components/ChallengeGoal.vue';

export default {
  data() {
    return {
      date: null
    };
  },
  name: 'HomeView',
  components: {
    ChallengeBooks,
    ChallengeGoal
  },
  methods: {
    getCurrentYear() {
      this.date = new Date().getFullYear();
    }
  },
  mounted() {
    this.getCurrentYear()
  }
}
</script>
