<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/">
                    <div class="btn_more_a">Назад</div>
                </NuxtLink>
                <div class="win_title_s">
                    <span>Главная /</span> Юнит Экономика
                </div>
            </div>
            <div class="u_titles">
                <div class="u_txt">
                    <div class="u_title">Анализ товара {{article}}</div>
                    <div class="u_sup">
                        В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>  дней, за неделю, за месяц
                    </div>
                </div>

            </div>
            <div class="title_ues">Продажи товара {{article}}</div>

            <div class="table_stat_ues">
                <div class="l1_st_ues">
                    <div>Товар</div>
                    <div>Продажи</div>
                    <div>Возвраты</div>
                    <div>Логистика</div>
                    <div>Комиссия</div>
                    <div>Статьи расходов</div>
                    <div>Прибыль</div>
                    <div>ABC анализ</div>
                    <div>Цена</div>
                </div>
                <div class="l2_st_ues">
                    <div class="bl_pr_ues">
                        <span>Фото</span>
                        <span>Бренд</span>
                        <span>Артикул поставщика</span>
                        <span>Баркод</span>
                        <span>SKU</span>
                        <span>Размер</span>
                        <span>Себестоимость товаров</span>
                    </div>
                    <div class="bl_sales_ues">
                        <span>Сумма</span>
                        <span>Кол - во</span>
                        <span>За вычетом возвратов</span>
                    </div>
                    <div class="bl_returns_ues">
                        <span>Сумма</span>
                        <span>Кол-во</span>
                    </div>
                    <div class="bl_log_ues">
                        <span>К клиенту</span>
                        <span>От клиента</span>
                    </div>
                    <div class="bl_com_ues">
                        <span>Штрафы</span>
                        <span>Комиссия WB</span>
                    </div>
                    <div class="bl_exp_ues">
                        <span v-for="i in minusList">{{i['naming']}}</span>
                    </div>
                    <div class="bl_prof_ues">
                        <span>Маржинальная прибыль</span>
                        <span>Рентабельность реализованной продукции</span>
                        <span>Маржинальность</span>
                    </div>
                    <div class="bl_anal_ues">
                        <span></span>
                    </div>
                    <div class="bl_price_ues">
                        <span>Базовая</span>
                        <span>Скидка</span>
                        <span>Цена со скидкой</span>
                    </div>
                </div>
                <div class="l3_st_ues" v-for="pr in products" style="background: rgba(235, 235, 235, 0.76)">
                    <div class="bl_pr_ues">
                        <span>
                            <img :src="pr['img']" alt="">
                        </span>
                        <span>{{pr['brand']}}</span>
                        <span>{{pr['owner_article']}}</span>
                        <span>{{pr['barcode']}}</span>
                        <span>{{pr['article']}}</span>
                        <span>{{pr['size']}}</span>
                      <input class="input_self" v-model="priceLocal[pr['article']]" type='text' style="height: 35px; width: 75px;">
                    </div>
                    <div class="bl_sales_ues">
                        <span>{{pr['totalBuy']}}</span>
                        <span>{{pr['cntBuy']}}</span>
                        <span>{{+pr['cntBuy'] - +pr['countRetail']}}</span>
                    </div>
                    <div class="bl_returns_ues">
                      <span>{{pr['rtp']}}</span>
                      <span>{{pr['countRetail']}}</span>
                    </div>
                    <div class="bl_log_ues">
                      <span>{{pr['lg']}}</span>
                      <span>{{pr['lg']}}</span>
                    </div>
                    <div class="bl_com_ues">
                        <span>{{pr['pnt']}}р</span>
                      <span>{{pr['com_wb']}}</span>
                    </div>
                    <div class="bl_exp_ues">
                        <div v-for="i in minusList"> -{{i['value']}}</div>
                    </div>
                    <div class="bl_prof_ues">
                        <span>{{pr['totalBuy']  - (pr['cntBuy'] * priceLocal[pr['article']])}}р</span>
                        <span>{{pr['totalBuy'] - (pr['cntBuy'] * priceLocal[pr['article']])}}р</span>
                        <span>{{((100 * priceLocal[pr['article']]) / pr['price'])}}%</span>
                    </div>
                    <div class="bl_anal_ues" v-if="loading">
                        <span>{{abc[pr['article']]}} кат</span>
                    </div>
                    <div class="bl_price_ues">
                      <span>{{pr['price']}}</span>
                      <span>{{pr['discount']}}</span>
                        <span>{{ +pr['price'] -  ((+pr['price'] * +pr['discount']) / 100)}}</span>
                    </div>
                </div>
            </div>
          <div class="txt_ues">
            Общее количество:  &nbsp;<span>{{totalCnt.articles}} артикула,{{totalCnt.cnt}} шт</span><br>
            Сумма продаж:  &nbsp;<span>{{totalCnt.totalSell}}₽</span><br>
            Возвраты: &nbsp;<span>{{totalCnt.retail}} шт</span><br>
            Комиссия: &nbsp;<span>1000р</span><br>
            Логистика к клиенту и от клиента: &nbsp;<span>{{totalCnt.logick}}P</span><br>
            Себестоимость товаров: &nbsp;<span>N рублей</span><br>
            <span>Итого: {{totalCnt.totalSell}}р</span><br>
            <span>ПРИБЫЛЬ С ТОВРАРА: {{totalCnt.totalSell - totalCnt.logick - totalCnt.retail}}р</span>
          </div>
        </div>
    </div>
</template>
<script>
  import Button from "../../components/Button";
  export default {
    components: {Button},
    data() {
      return {
        products: {},
        loading: false,
        article: this.$route.query.article,
        priceLocal: {},
        typeLocal: this.$route.query.type,
        minusList: [],
        totalCnt: {
            articles: 0,
            cnt: 0,
            totalSell: 0,
            retail: 0,
          totalCms: 0,
          logick: 0,
          sebst: 0,
          total: 0
        },
        minus: {
          naming: '',
          value: '',
          allTime: '',
          old: '',
        },
        userId: 0,
      }
    },
    methods: {
      getStatic(type){
        let localDate = new Date();
        let today = new Date();
        if(type == 3){
          localDate = new Date(new Date().getTime() - (7 *86400000));
        } else if(type == 4){
          localDate = new Date(new Date().getTime() - (31 *86400000));
        } else if(type == 2){
          localDate = new Date(new Date().getTime() - (1 *86400000));
        }
        localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;
        today= `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
        let task1 = +window.localStorage.getItem('task1'),
          token = window.localStorage.getItem('access');
        console.log(this.typeLocal != 1);
        console.log(!this.typeLocal);

        if(!this.typeLocal){
          this.$store.dispatch('request/get_economy', {userId: this.userId, type: 4, article: this.article}).then((x) => {
            if(x.data.success){

              this.products = x.data['product']['products'];

              this.products.map( i => {
                this.totalCnt.articles += 1;
                this.totalCnt.total +=  +i['totalBuy'];
                  this.totalCnt.cnt += +i['cntBuy'];
                  this.totalCnt.logick += +i['lg'];
                  this.totalCnt.retail += Math.floor((+i['totalBuy'] / +i['cntBuy']) * +i['countRetail']);
                this.totalCnt.totalCms += +i['comi_wb'];
                this.totalCnt.totalSell += +i['totalBuy'];

              })
            }

          })
        } else {
          console.log(1);
          this.$store.dispatch('request/get_all_economy', {userId: this.userId}).then((x) => {

            if(x.data.success){
             this.products = x.data['product']['products'];
              console.log(this.products);
            }

          })
        this.$store.dispatch('request/get_abc', {userId: this.userId}).then((x) => {
          if(x.data.success){
            console.log(x.data);
            this.abc = x.data['product'];
            this.loading = true;
          }

        })

      }
        },
      getMinus(){
        let task1 = +window.localStorage.getItem('task1');
        this.$store.dispatch('request/getMinus', {userId: this.userId}).then((x) => {
          this.minusList = x.data['product'];
          console.log(this.minusList);
        })
        console.log(this.minus);
      },
    },
    mounted() {
      this.userId = +window.localStorage.getItem("userId");
      this.getMinus();
      this.getStatic(4);
      console.log(this.$route);
    },
  }
</script>
<style>
  .input_self{
      border: 7px solid white;
      border-radius: 10px;
    background: white;
  }
</style>


