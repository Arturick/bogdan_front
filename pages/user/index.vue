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
          <div class="input-block">
            <input type="text" class="input-block__input py-5 px-6" placeholder="Имя" v-model="unew.name" autocomplete="off">
          </div>
          <div class="input-block">
            <input type="text" class="input-block__input py-5 px-6" placeholder="Фамилия" v-model="unew.surname" autocomplete="off">
          </div>
          <div class="input-block">
            <input type="text"  class="input-block__input py-5 px-6" placeholder="ИНН" readonly v-model="unew.email" autocomplete="off">
          </div>
        </div>
      </div>


      <div class="mt-12">
        <div class="content-title content-title_2">API ключ</div>
        <div>Ключ нужен для того, чтобы вы могли удобно добовлять товары в работу</div>
      </div>
      <div class="mt-4">
        <div class="md:grid md:grid-cols-2 gap-10 flex flex-wrap">
          <v-textarea
            outlined
            v-model="unew.token"
          ></v-textarea>
        </div>
      </div>

      <div class="mt-12">
        <div class="content-title content-title_2">Связанный аккаунт TELEGRAM</div>
        <div>В связанный телеграм аккаунт приходят ссылки для оплаты выкупов и уведомления</div>
      </div>
      <div class="mt-4">
        <div class="md:grid md:grid-cols-2 gap-10 flex flex-wrap">
          <div class="input-block input-block_edit">
            <input type="text" name="name" class="input-block__input py-5 px-6" placeholder="" v-model="unew.telegram" autocomplete="off">
            <i class="icon icon_edit input-block__icon"></i>
          </div>
        </div>
      </div>
      <div class="mt-4 flex justify-end">
        <button class="w-full md:w-52 p-2.5 teal lighten-2 text-2xl text-gray-800 rounded" @click="saveProfile" style="background: #1976d2; color: white">Сохранить</button>
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
        id: '',
        userAdd: false,
        unew: {
          name: '',
          email: '',
          token: ''
        },
        tHeaders: [],
        tItems: [],
        profile: {
          name: '',
          email: '',
          token: '',
          surname: ''
        }
      }
    },
    computed: {
      ...mapState('request', [
        'user',
        'opt_roles'
      ]),

    },
    watch: {

    },
    methods: {
      getProfile(){
        let task1 = +window.localStorage.getItem('task1');
        let access = window.localStorage.getItem('access');
        this.$store.dispatch('request/getProfile', {task1: task1, access: access}).then((x) => {

          this.unew = x.data.data[0];
          console.log(x);
        });
      },
      saveProfile(){
        let task1 = +window.localStorage.getItem('task1');
        let access = window.localStorage.getItem('access');
        this.$store.dispatch('request/saveProfile', {task1: task1, access: access, profile: this.unew}).then((x) => {
          if(x.data.success){
            this.profile = x.data.data[0];
          }
          console.log(x);
        });
      },

    },
    mounted() {
      this.getProfile();
    }
  }
</script>
