<template>
    <div>
        <p>{{ feedbackText }}</p>
        <textarea v-model="opinion" rows="10" cols="50"></textarea>
        <p><button @click="deleteFormAndEmit">Submit</button></p>
    </div>
  </template>
  
<script>
    export default {
        data() {
            return {
                opinion: "",
            };
        },
        props: ["feedbackText"],
        methods: {
            deleteFormAndEmit() {
                this.$emit("submitEvent", this.opinion);
                this.opinion = ""
            }
        }
    };
 </script>
  