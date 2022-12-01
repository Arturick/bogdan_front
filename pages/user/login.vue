<template>
  <div>
    <input type="text" placeholder="Login" v-model="login">
    <input type="text" placeholder="Password" v-model="password">
    <button @click="loginUser()" type="button">VOITI</button>
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
          if(x.data.success){
            window.localStorage.setItem('access', x.data.token);
            window.localStorage.setItem('task1', x.data.profile[0]['task1']);
            this.$auth.setUserToken('Bearer ' + x.data.token)
            this.$store.dispatch('request/auth_user').then((resp) => {
              this.$router.push('/user')
            })

          }
          //console.log(x);
        });
      },

    },
    mounted() {
    },
  }
</script>
