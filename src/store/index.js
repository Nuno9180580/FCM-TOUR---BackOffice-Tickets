import Vue from 'vue'
import Vuex from 'vuex'
import ticketService from '../API/api.js'
import router from '../router/index.js'
import Swal from 'sweetalert2'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    token:[],
    loggedUser:[],
  },
  mutations: {
    LOGIN(state, data) {
      state.token = data.token
      localStorage.clear("token")
      localStorage.setItem("token", state.token);

      let jwtToken = state.token.split(".")[1]
      state.loggedUser = JSON.parse(window.atob(jwtToken))

        const toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        });

        console.log(state.loggedUser)
        console.log(data)
      
        toast.fire({
          icon: 'success',
          title: 'Bem-vindo ' + state.loggedUser.data.name,
        })   
        
        router.push("/about")
      }
     
  },
  actions: {
    async login({
      commit
    }, payload) {
      commit("LOGIN", await ticketService.login(payload.email, payload.password))
    },
    async code({
      commit
    }, payload) {
      commit("CODE", await ticketService.codeRegister(payload.code))
    },
  },
  modules: {
  }
})
