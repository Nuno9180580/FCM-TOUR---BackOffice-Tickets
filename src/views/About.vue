<template id="temp">
 <div id="loginform" class="shadow">
    <div class="container-full title">
  
      <h1 id="redTitle">    <span id="title">FCM</span>TICKET MANAGER</h1>
    </div>
    <div class="container col-sm-7">
      <b-form v-on:submit.prevent="codeRegister()" v-if="show">
        <b-form-group id="input-group-1">
          <label for="input-1">Código</label>
          <b-form-input id="input-1" class="rounded-0" v-model="code" type="text" required
            placeholder="Introduzir código"></b-form-input>
        </b-form-group>
        <div class="container">
          <b-button type="submit" id="show-btn" class="submit" squared>Registar código</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>

export default {
    name: "codeForm",
    data: () => ({
      code: "",
      show: true
    }),
    methods: {
      async codeRegister() {
        try {
          await this.$store.dispatch("code", {
            code: this.code,
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
    width: 190px;
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