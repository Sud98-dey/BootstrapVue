import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: { texts: [] },
  mutations: {
    addChats(state,chats){
    chats.forEach(chat => {
      state.texts.push(chat) });
    this.$router.push('/chats')
    },
    removeChat(state,i){ 
      state.texts.splice(i,1);
    }
  },
  actions: {
    addChats( {commit}, chats) { commit('addChats',chats) }
  },
  getters: {
   ChatsData (state) { return state.texts },
   }
})
