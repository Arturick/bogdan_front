<template>
    <div class="bg-white">
        <div class="md:container md:mx-auto">
            <div class="md:px-2.5 md:py-7 px-2.5 py-4">
                <div class="md:flex  md:justify-between up_head_bl">
                    <div class="relative z-10">
                        <NuxtLink to="/" class="header-title">
                          <img class="logo_img_head" src="../assets/images/logo_img.svg" alt="">
                          <img src="../assets/images/Logo_txt.svg" alt="">
                        </NuxtLink>

                        <div class="md:pt-7 md:justify-between">
                            <input id="burger" type="checkbox" name="burger" v-model="burger"/>
                            <label class="burger" for="burger">
                                <span class="burger__bar"></span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <v-menu offset-y>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              text
                              v-bind="attrs"
                              v-on="on"
                              class="w-full md:w-auto "
                            >
                                <v-icon small>mdi-account</v-icon>
                                <span class="truncate w-64" >{{ user.name }}</span>
                                <v-icon large>mdi-chevron-down</v-icon>
                            </v-btn>
                          </template>
                          <v-list>
                            <v-list-item>
                                <NuxtLink to="/user" class="menu-profile__link">Настройки</NuxtLink>
                            </v-list-item>
                            <v-list-item>
                                <a href="#" class="menu-profile__link" @click.prevent="logout">Выйти</a>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                    </div>

                </div>  
            </div>
            <div class="menu">
                <ul class="menu__items" @click="burger=false">
                      <li class="menu__item">
                          <NuxtLink to="/" class="menu__link" exact-active-class="menu__link_active">Главная</NuxtLink>
                      </li>
                      <li class="menu__item">
                          <NuxtLink to="/sales" class="menu__link" exact-active-class="menu__link_active">Продажи</NuxtLink>
                      </li>
                      <li class="menu__item">
                        <NuxtLink to="/competition" class="menu__link" exact-active-class="menu__link_active">Конкурентность</NuxtLink>
                      </li>
                      <li class="menu__item">
                        <NuxtLink to="/analyze" class="menu__link" exact-active-class="menu__link_active">Анализ товаров</NuxtLink>
                      </li>
                      <li class="menu__item">
                          <NuxtLink to="/Ueconomy" class="menu__link" exact-active-class="menu__link_active">Юнит экономика</NuxtLink>
                      </li>
                      <li class="menu__item">
                          <NuxtLink to="/news" class="menu__link" exact-active-class="menu__link_active">Новости</NuxtLink>
                      </li>
                  </ul>
              </div>
        </div>
      </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      burger: false,
      innAdd: false,
      completionAuth: false,
      inn: '',
      companies: [],
      step: 1,
      number: '',
      suggestions: []
    }
  },
  watch: {
    burger: function(val) {
      window.console.log(val)
    },
  },
  computed: {
    ...mapState('request', [
      'user'
    ]),
  },
  methods: {
    save() {
        if ( !this.number ) {
            this.$toast.warning('Номер договора не валидный')
            return false
        }

        this.$store.dispatch('request/auth_user_save', {
            inn: this.inn,
            suggestions: this.suggestions,
            number: this.number
        }).then((x) => {
          if ( !x.data.error ) {
            this.checkUserInfo()
          } else {
              this.$toast.error(x.data.error)
          }
        })
    },
    logout() {
      this.$auth.setUserToken(null)
      window.location.reload()
    },
    checkUserInfo() {
        // if ( !this.user.role ) {
        //     this.completionAuth = true
        // } else {
        //     this.completionAuth = false
        // }
    },
    getByInn() {
        if (
            this.inn.search(/^\d{10}$/) != -1
            || this.inn.search(/^\d{12}$/) != -1
        ) {
          this.$store.dispatch('request/dadata_search', {inn: this.inn}).then((x) => {
              if ( !x.data.error ) {
                this.companies = x.data.data
                this.suggestions = x.data.suggestions
              } else {
                  this.$toast.error(x.data.error)
              }
          })
        } else {
            this.$toast.warning('ИНН не валидный')
        }
    }
  },
  mounted() {
    this.$store.dispatch('request/auth_user').then((resp) => {
        this.checkUserInfo()
    })
    this.$store.dispatch('request/get_options').then((x) => {})
  }
}
</script>

<style scoped>

</style>