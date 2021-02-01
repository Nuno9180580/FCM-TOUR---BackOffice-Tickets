<template id="temp">
 <div id="loginform" class="shadow">
    <div class="container-full title">
  
      <h1 id="redTitle">    <span id="title">FCM</span>TICKET MANAGER</h1>
    </div>
    <div class="container col-sm-7">
      <b-form v-on:submit.prevent="login()" v-if="show">
        <b-form-group id="input-group-1">
          <label for="input-1">Email</label>
          <b-form-input id="input-1" class="rounded-0" v-model="emailLogin" type="email" required
            placeholder="Introduzir email"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4">
          <label for="input-4">Password</label>
          <b-form-input id="input-4" class="rounded-0" v-model="passwordLogin" type="password" required
            placeholder="Introduzir password"></b-form-input>
        </b-form-group>
        <div class="container">
          <b-button type="submit" id="show-btn" class="submit" squared>Entrar</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>

export default {
    name: "LoginForm",
    data: () => ({
      emailLogin: "",
      passwordLogin: "",
      show: true
    }),
    methods: {
      async login() {
        try {
          await this.$store.dispatch("login", {
            email: this.emailLogin,
            password: this.passwordLogin
          });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      }
    }
  };
</script>

<style lang="css" scoped>


  #input-group-1 {
    padding-bottom: 20px;
  }

  #input-group-4{
    padding-bottom: 40px;

  }

  label {
    float: left;
    margin-bottom: 0.5rem;
  }

  #redTitle {
    font-family: "StratumNo1";
    font-size: 45px;
    color: black;
    position: relative;
  }

  #title {
    font-family: "StratumNo1 Black";
    font-size: 45px;
    color: black;
    position: relative;
    margin-right:15px;
  }


  .title {
    padding-top: 60px;
    padding-bottom: 40px;
  }


  #show-btn {
    background-color: #2E3192;
    transition: all 0.2s ease-in-out;
  }

  #show-btn:hover {
    transform: scale(1.1);
  }

  .submit {
    background-color: #2E3192;
    width: 150px;
    font-size: 20px;
  }

  .shadow{
    margin: auto;
    margin-top: 12vw;
    background-color: white;
    width: 40vw;
    height: 500px;
    border-radius: 20px;
    box-shadow: 0px 90px 160px 0px rgba(0,0,0,0.15);
    
  }

</style>
