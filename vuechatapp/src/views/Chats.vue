<template>
    <section>
    <b-container aria-setsize="justify">
     <div v-for="(chat,index) in chats" :key=index>
      <b-card
        body-tag="b"
        v-if="chats.length > 0">
    <b-card-body class="cardBody-font" @click="removeChat(index)">
    {{ chat.message }} 
    </b-card-body>
    </b-card>
    </div>
    </b-container>
    </section>
</template>
<script>
export default {
    data() {
        return { chats:[] }
    },
    mounted() { this.chats = this.$store.getters.ChatsData },
    methods: {
      removeChat(i) { this.$store.commit('removeChat',i) }
    }
}
</script>
<style scoped>
.cardBody-font { font-size: 10pt; }
</style>