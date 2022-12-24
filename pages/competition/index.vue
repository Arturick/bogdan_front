<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/">
                    <div class="btn_more_a">Назад</div>
                </NuxtLink>
                <div class="win_title_s"><span>Главная /</span> Конкуренция</div>
            </div>
            <div class="sales_title">Сравните свои товары</div>
            <div class="comp_sup">В данном разделе вы можете 4 сравнить свои товары с<br> товарами конкурентов (по цене, по позициям в выдаче и<br>  отображению в ключевых запросах).
            </div>
            <div class="comparison_prs">
                <div class="comp_my">
                    <div class="comp_my_title">
                        1. Выберите свои товары
                    </div>
                    <div class="btns_inps_my">
                        <input v-model="article1" type="text" class="inp_my_comp" placeholder="Введите артикул или ссылку на товар">
                        <div class="btn_more_a" @click="() => {getProduct(1,this.article1)}">Добавить</div>
                    </div>
                    <div class="table_cont_md">
                        <div class="minTable_my">
                            <div class="minTable_my_params">
                                <div class="minTable_my_param">Фото</div>
                                <div class="minTable_my_param">Бренд</div>
                                <div class="minTable_my_param">Артикул</div>
                                <div class="minTable_my_param">Цена WB</div>
                            </div>
                            <div class="line_pr_myMin">
                              <div class="myMin_inner">
                                    <span><img :src="this.product1.image" alt="">
                                    </span>
                                <span>{{this.product1.brand}}</span>
                                <span>{{this.product1.article}}</span>
                                <span>{{this.product1.price}}</span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comp_other">
                    <div class="comp_my_title">
                        2. Выберите товары конкурентов
                    </div>
                    <div class="btns_inps_my">
                        <input v-model="article2" type="text" class="inp_my_comp" placeholder="Введите артикул или ссылку на товар">
                        <div class="btn_more_a" @click="() => {getProduct(2,this.article2)}">Добавить</div>
                    </div>
                    <div class="table_cont_md">
                        <div class="minTable_my">
                            <div class="minTable_my_params">
                                <div class="minTable_my_param">Фото</div>
                                <div class="minTable_my_param">Бренд</div>
                                <div class="minTable_my_param">Артикул</div>
                                <div class="minTable_my_param">Цена WB</div>
                            </div>
                            <div class="line_pr_myMin">
                              <div class="myMin_inner">
                                    <span><img :src="this.product2.image" alt="">
                                    </span>
                                <span>{{this.product2.brand}}</span>
                                <span>{{this.product2.article}}</span>
                                <span>{{this.product2.price}}</span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn_cont_s3">
                <div class="btn_more_a">
                    <NuxtLink :to="'/competition/competition2?article1='+ this.article1 + '&article2=' + this.article2">Далее</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        product1: {},
        product2: {},
        article1: '',
        article2: '',
        userId: 0,
      }
    },
    methods: {
      getStatic(){
        let localDate = new Date();
        let today = new Date();
        localDate = new Date(new Date().getTime() - (31 *86400000));
        localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;
        let task1 = +window.localStorage.getItem('task1'),
          token = window.localStorage.getItem('access');
        today= `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

          this.$store.dispatch('request/get_economy', {userId: this.userId, type: 4}).then((x) => {
            if(x.data.success){
              this.product = x.data['product']['products'];

            }
            console.log(this.product);
          })


      },
      getProduct(type, article){


          this.$store.dispatch('request/getByArticle', {userId: this.userId, article: article}).then((x) => {
            if(x.data.success){
              if(type == 1){
                this.product1 = x.data.product;
              } else {
                this.product2 = x.data.product;
              }
              console.log(x);

            }
            console.log(this.product);
          });



      }
    },
    mounted() {
      this.userId = +window.localStorage.getItem("userId");
      this.getStatic();
    },
  }
</script>
<style scoped>
  .btn_more_a{
    cursor: pointer;
  }
</style>
