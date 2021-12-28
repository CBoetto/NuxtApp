<template>
  <div>
    <button v-on:click="getUsers">Get Friends List</button>
    <button v-on:click="sortAlphabetically" v-if="!!userList.length">Sort by username (alphabetically)</button>
    <button v-on:click="sortAlphabeticallyReverse" v-if="!!userList.length">Sort by username (reverse)</button>
    <ul>
      <li v-for="user in userList" :key="user.email">
        <p class="listUsername"><b>username:</b> {{user.username}}</p>
        <p class="listEmail"><b>email:</b> {{user.email}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    userList () {
      return this.$store.state.users.userList;
    }
  },
  methods: {
    getUsers () {
      this.$store.dispatch('users/getUsers')
    },
    sortAlphabetically () {
      this.$store.commit('users/sortAlphabetically')
    },
    sortAlphabeticallyReverse () {
      this.$store.commit('users/sortAlphabeticallyReverse')
    }
  }
}
</script>

<style scoped>
li {
  margin-bottom: 5px;
}
.listUsername {
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding: 3px;
}
.listEmail {
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding: 3px;
}
</style>