<template>
  <div class="about">
    <h1>No designers were harmed while making this site.</h1>
    <h4>But some might be upset while viewing it.</h4>
    <FeedbackView feedbackText="Your privacy is very important to us, which is why we're not saving your opinion anywhere." @submitEvent="thankForFeedback"/>
  </div>
  <div v-if="feedbackSubmitted">
    {{ thanksText }}
  </div>
</template>

<script>
import FeedbackView from '@/components/Feedback.vue';

export default {
  name: 'AboutView',
  data() {
    return {
      feedbackSubmitted: false,
      thanksText: ""
    };
  },
  components: {
    FeedbackView
  },
  methods: {
    thankForFeedback(opinion) {
      this.feedbackSubmitted = true
      if (opinion.length == 0) {
        this.thanksText = "Usually, you should write something before you click submit."
      } else if (opinion.length < 10) {
        this.thanksText = "Less than 10 words? Not very opinionated, are you?"
      } else {
        this.thanksText = "You sure did take your time to write all that. Don't worry, it won't go to waste."
      }
    }
  }
}
</script>