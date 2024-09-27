import { defineStore } from 'pinia'

export const readingChallengeStore = defineStore('readingChallenge', {
  state: () => ({
    books: [],
    filter: 'unread',
    nextId: 0, 
    goal: 0
  }),
  getters: {
    readBooks(state) {
      return state.books.filter((book) => book.read)
    },
    unreadBooks(state) {
      return state.books.filter((book) => !book.read)
    },
    filteredBooks() {
      if (this.filter === 'read') {
        return this.readBooks
      } else if (this.filter === 'unread') {
        return this.unreadBooks
      }
      return []
    },
    readingGoal() {
      return this.goal
    },
    readBooksCount() {
      return this.readBooks.length
    }

  },
  actions: {
    addBook(title, author) {
      this.books.push({ title, author, id: this.nextId++, read: false })
    },
    setReadingGoal(bookGoal) {
      this.goal = bookGoal
    }
  },
})