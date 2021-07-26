<template>
  <nav>
    <b-navbar variant="primary" type="dark" tag="ul">
      <b-navbar-brand  tag="li">
        Chatting App
      </b-navbar-brand>
      <b-navbar-nav tag="li">
        <b-nav-item to="/">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li">
        <b-nav-item to="/chats">Chats</b-nav-item>
      </b-navbar-nav>
    </b-navbar><br />
  </nav>
</template>
<style scoped>
ul {
  justify-content: center;
  align-items: center;
  height: 3.5rem;
}
li {
  padding-right: 1em;
  display: flex;
}
</style>
