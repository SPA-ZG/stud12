<template>
  <label><input v-model="filter" type="radio" value="unread"> To read</label>
  <label><input v-model="filter" type="radio" value="read"> Read</label>
  <ul>
    <li v-for="book in filteredBooks" :key="book.id">
      <input v-model="book.read" type="checkbox">
      "{{ book.title }}" by {{ book.author }}
    </li>
  </ul>
  <p v-if="filteredBooks.length === 0" style="color: gray">No books match selected filter</p>
  <label>
    Add book to challenge:
  </label>
  <div>
      <label for="title">Title: </label>
      <input type="text" id="title" placeholder="Title" v-model="newBookTitle"/>
    </div>

    <div>
      <label for="author">Author: </label>
      <input type="text" id="author" placeholder="Author" v-model="newBookAuthor"/>
    </div>

  <button :disabled="!newBookTitle || !newBookAuthor" @click="addBook">Add</button>
</template>

<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { readingChallengeStore } from './readingChallenge.js'

  const challengeStore = readingChallengeStore()
  const { filter, filteredBooks } = storeToRefs(challengeStore)

  const newBookTitle = ref('')
  const newBookAuthor = ref('')

  function addBook() {
    challengeStore.addBook(newBookTitle.value, newBookAuthor.value)
    newBookTitle.value = ''
    newBookAuthor.value = ''
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
