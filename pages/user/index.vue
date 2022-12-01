<template>

    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-2.5 md:p-7 pb-20">
            <div class="">
                <div class="content-title">Настройки</div>
                <div class="content-desc mt-3.5">Здесь вы можете управлять настройками вашего личного кабинета.</div>
            </div>
            <div class="mt-12">
                <div class="content-title content-title_2">Контакные данные</div>
                <div>Данные требуются для формирования закрывающих документов.</div>
            </div>
            <div class="mt-4">
                <div class="md:grid md:grid-cols-3 gap-10 flex flex-wrap">
                </div>
            </div>


          <input type="text" v-model="profile.token" style="
            width: 500px;
            height: 50px;
            border: solid 1px #00A888;
          ">

          <div class="mt-12">
                <div class="content-title content-title_2">API ключ</div>
                <div>Ключ нужен для того, чтобы вы могли удобно добовлять товары в работу</div>

            </div>

            <div class="mt-12">
                <div class="content-title content-title_2">Связанный аккаунт TELEGRAM</div>
                <div>В связанный телеграм аккаунт приходят ссылки для оплаты выкупов и уведомления</div>
            </div>
            <div class="mt-4 flex justify-end">
                <button class="w-full md:w-52 p-2.5 teal lighten-2 text-2xl text-gray-800 rounded" @click="() => {saveProfile()}">Сохранить</button>
            </div>

            <div class="mt-12">
                <div class="content-title content-title_2">Договор</div>
                <div>Договор нужен для работы по рассчетному счету и формирования закрывающих документов</div>
            </div>
            <div class="mt-4">
                <button class="w-full md:w-52 p-2.5 bg-white text-2xl text-black rounded border border-black">
                    <v-icon dense>mdi-tray-arrow-down</v-icon>
                    Скачать
                </button>
            </div>

                    </div>
    </div>




</template>

<script>

import { mapState } from "vuex";

export default {
  data() {
    return {
        userAdd: false,
        profile: {
          token: '',

        },
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
      getProfile(){
        let task1 = +window.localStorage.getItem('task1');
        let access = window.localStorage.getItem('access');
        this.$store.dispatch('request/getProfile', {task1: task1, access: access}).then((x) => {
          if(x.data.success){
            this.profile = x.data.data[0];

          }
          console.log(x);
        });
      },
    saveProfile(){
      let task1 = +window.localStorage.getItem('task1');
      let access = window.localStorage.getItem('access');
      this.$store.dispatch('request/saveProfile', {task1: task1, access: access, profile: this.profile}).then((x) => {
        if(x.data.success){
          this.profile = x.data.data[0];

        }
        console.log(x);
      });
    },

      },
  mounted() {
    this.getProfile()
  }
}
</script>
