<template>
  <div class="form_auth" >
    <h1 class="title_auth">Добро пожаловать</h1>
    <h2 class="text_auth">Введите пожалуйста ваш логин и пароль для входа</h2>
    <form action="" class="auth_input"></form>
    <input type="text" placeholder="Login" class="input_auth" v-model="login">
    <input type="text" placeholder="Password" class="input_auth" v-model="password">
    <button @click="loginUser()" type="button" class="auth_btn">Войти</button>

  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        login: '',
        password: ''
      }
    },
    methods: {
      loginUser(){
        console.log(1);
        this.$store.dispatch('request/login_user', {login: this.login, password: this.password}).then((x) => {
          window.localStorage.setItem('access', x.data.token);
          window.localStorage.setItem('task1', x.data.profile[0]['task1']);
          this.$auth.setUserToken('Bearer ' + x.data.token)
          this.$store.dispatch('request/auth_user').then((resp) => {

          })
          this.$router.push('/');
          if(x.data.success){


          }
          //console.log(x);
        });
      },

    },
    mounted() {
    },
  }
</script>
<style scoped>
  .form_auth{
    position: relative;
    width: 40%;
    height: 200px;
    margin: 110px auto;
  }
  .title_auth{
    font-family: Montserrat;
    width: 100%;
    font-weight: bold;
    text-align: center;
  }

  .text_auth{
    width: 100%;
    font-size: 18px;
    font-family: Montserrat;
    text-align: center;
    margin: 24px 0;
  }

  .auth_input{
    width: 100%;
    margin: 20px auto;
  }

  .input_auth{
    border: 4px solid rgba(158, 144, 144, 0.3);
    border-radius: 10px;
    padding-bottom: 6px;
    padding-top: 6px;
    padding-left: 6px;
    padding-right: 6px;
    margin-right: 5px;
  }
  .auth_btn{
    margin-left: 15px;
    padding-top: 6px;
    padding-bottom: 6px;
    width: 140px;
    height: 40px;
    background: #cbdfff;
    border-radius: 10px;
    font-weight: bold;
    color: #1a73e8;
  }

</style>
