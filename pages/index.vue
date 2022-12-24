<template>
  <div class="md:container md:mx-auto">
    <div class="cards_main">
      <div class="card_main_line">
        <div class="card_main cb_red">
          <div class="c-up">
            <div class="btn_points">
              <svg width="20" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z" fill="grey"/>
                <path d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z" fill="grey"/>
                <path d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z" fill="grey"/>
              </svg>
            </div>
            <div class="c_name">
              <span class="card_name">Продажи</span>
              <span class="card_name_ico">&#9432;</span>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Сумма</div>
                <div class="stat_count">{{(+allSeller.totalPr).toLocaleString()}} ₽</div>
              </div>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Количество</div>
                <div class="stat_count">{{allSeller.cnt.toLocaleString()}} шт.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card_main cb_red">
          <div class="c-up c_up_1">
            <div class="btn_points">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z" fill="grey"/>
                <path d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z" fill="grey"/>
                <path d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z" fill="grey"/>
              </svg>
            </div>
            <div class="c_name">
              <span class="card_name" @click="allOrderFlag=0" :class="{ active : allOrderFlag == 0}" >Заказы</span>
              <span class="card_name" @click="allOrderFlag=1" :class="{ active : allOrderFlag == 1}">Незавершенные</span>
              <span class="card_name_ico">&#9432;</span>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Сумма</div>
                <div class="stat_count">{{(getAllOrderT).toLocaleString()}} ₽</div>
              </div>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Количество</div>
                <div class="stat_count">{{(getAllOrderC).toLocaleString()}} шт.</div>
              </div>

            </div>
          </div>
        </div>
        <div class="card_main cb_red">
          <div class="c-up">
            <div class="btn_points">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z" fill="grey"/>
                <path d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z" fill="grey"/>
                <path d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z" fill="grey"/>
              </svg>
            </div>
            <div class="c_name">
              <span class="card_name">Возвраты</span>
              <span class="card_name_ico">&#9432;</span>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Сумма</div>
                <div class="stat_count">{{(+retail.prt).toLocaleString()}} ₽</div>
              </div>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Количество</div>
                <div class="stat_count">{{(+retail.cnt).toLocaleString()}} шт.</div>
              </div>
              <div class="c_stat_d">0 шт.</div>
            </div>
          </div>
        </div>
        <!-- <div class="card_main cb_red">
          <div class="c-up">
            <div class="btn_points">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z" fill="grey"/>
                <path d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z" fill="grey"/>
                <path d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z" fill="grey"/>
              </svg>
            </div>
            <div class="c_name">
              <span class="card_name">Самовыкупы</span>
              <span class="card_name_ico">&#9432;</span>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Сумма</div>
                <div class="stat_count">0 ₽</div>
              </div>
              <div class="c_stat_d">0 ₽</div>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Количество</div>
                <div class="stat_count">0 шт.</div>
              </div>
              <div class="c_stat_d">0 шт.</div>
            </div>
          </div>
        </div> -->
        <div class="card_main">
          <div class="c-up">
            <div class="btn_points">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z" fill="grey"/>
                <path d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z" fill="grey"/>
                <path d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z" fill="grey"/>
              </svg>
            </div>
            <div class="c_name">
              <span class="card_name">Прибыль и комиссия</span>
              <span class="card_name_ico">&#9432;</span>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Прибыль</div>
                <div class="stat_count">0 ₽</div>
              </div>
              <div class="c_stat_d">0 ₽</div>
            </div>
          </div>
          <div class="c-content">
            <div class="c_stat">
              <div class="c_stat_f">
                <div class="stat_name">Комиссия WB</div>
                <div class="stat_count">0 ₽</div>
              </div>
              <div class="c_stat_d sc_green">0 ₽</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chart_main">
      <div class="chart_info">
        <div class="chart_title">График продаж</div>
      </div>
      <div class="chart_view">
        <div class="chart_switches">
          <div class="chart_switch">

          </div>
        </div>
        <div class="chart_inner">
          <div class="chart_info_inn">
            <span class="ch_gr">Количество заказов</span>
            <span>{{this.order.count}}шт</span>
            <span class="ch_gr">Сумма заказов</span>
            <span>{{this.order.total}}₽</span>
            <span class="ch_gr">Количество продаж</span>
            <span>{{this.product.count}}шт.</span>
            <span class="ch_gr">Сумма продаж</span>
            <span>{{this.product.total}}₽</span>
          </div>
          <div class="chart_cont">
            <ChartSale :categories="chart.categories" :series="chart.series"></ChartSale>
          </div>
        </div>
      </div>
    </div>
    <div class="news_orders_line">
      <div class="news_main">
        <div class="news_inner">
          <div class="news_title">Новости</div>
          <div class="news_cont_main">
          </div>
        </div>
      </div>
      <div class="orders_main">
        <div class="orders_inner">
          <div class="orders_title">Лента заказов</div>
          <div class="1" v-for="product in order.products">

              <div class="order_txt">
                📦 Товар: «{{product.article}}» Заказан.<br>
                📆 Дата заказа: {{product.date_seller.replace('T', ' ').replace('Z', '').split('.')[0]}}<br>
                💳 Стоимость товара составила: {{product.price}} ₽<br>
              </div>
              <div class="order_left">
                <div class="btn_more">
                  Подробнее
                  <NuxtLink :to="'/sales/sales2/?date=' + product.date_seller + '&article=' + product.article + '&type=0'" class="arrow_r">
                    <img src="../assets/images/btn_more.svg" alt="">
                  </NuxtLink>

                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
    <div class="analyze_main">
      <div class="a_inner">
        <div class="l1_a">
          <div class="a_title">ABC анализ</div>
          <NuxtLink to="/analyze">
            <div class="btn_more_a">
              Подробнее
              <img src="../assets/images/btn_more.svg" alt="">
            </div>
          </NuxtLink>
        </div>
        <div class="a_stat" v-if="this.abc">
          <div class="a_stat_bl">
            <div class="stat_inner">
              <div class="stat_title">Группа А</div>
              <div class="stat_sup1">Выручка {{ abc["a"]["totalSum"]}} ₽</div>
              <div class="stat_sup2">Товаров {{ abc["a"]["cnt"]}}шт</div>
            </div>
          </div>
          <div class="a_stat_bl">

              <div class="stat_title">Группа B</div>
              <div class="stat_sup1">Выручка {{ abc["b"]["totalSum"]}} ₽</div>
              <div class="stat_sup2">Товаров {{ abc["b"]["cnt"]}}шт</div>

          </div>
          <div class="a_stat_bl">
            <div class="stat_inner">
              <div class="stat_title">Группа C</div>
              <div class="stat_sup1">Выручка {{ abc["c"]["totalSum"]}} ₽</div>
              <div class="stat_sup2">Товаров {{ abc["c"]["cnt"]}}шт</div>
            </div>
          </div>
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
      resultsInSearch: {},
      loadingResultsInSearch: true,
      chart: {
        categories: [],
        series: [
          {
            data: [],
            name: 'Заказы'
          },
          {
            data: [],
            name: 'Продажи'
          },
        ],
        abc: false,
      },
      product: {count: 0, total: 0, products: {}},
      order: {count: 0, total: 0, products: {}},
      allSeller: {cnt: 0, totalPr: 0},
      allOrder: {cnt: 0, total: 0, retailTotal: 0, retailCnt: 0},
      allOrderFlag: 0,
      retail: {cnt: 0, prt: 0},
      userId: 0,
      config: {
        headers: {
          Authorization: 0
        }
      },
    }
  },
  computed: {
      getAllOrderT(){
        let answer = {cnt: 0, total: 0}
        switch (this.allOrderFlag) {
          case 0:
            answer.cnt = this.allOrder.cnt;
            answer.total = this.allOrder.total;
            break;
          case 1:
            answer.cnt = this.allOrder.retailCnt;
            answer.total = this.allOrder.retailTotal;
            break;
        }
        return answer.total;
      },
    getAllOrderC(){
      let answer = {cnt: 0, total: 0}
      switch (this.allOrderFlag) {
        case 0:
          answer.cnt = this.allOrder.cnt;
          answer.total = this.allOrder.total;
          break;
        case 1:
          answer.cnt = this.allOrder.retailCnt;
          answer.total = this.allOrder.retailTotal;
          break;
      }
      return answer.cnt;
    }
  },
  methods: {


    getStatic(){
      let newChart = { categories: [], series: [ {
          data: [],
          name: 'Заказы'
        },
          {
            data: [],
            name: 'Продажи'
          },]}
      let task1 = +window.localStorage.getItem('task1'),
          token = window.localStorage.getItem('access');
        console.log(token);
      this.$store.dispatch('request/get_all_retail', {userId: this.userId}).then((x) => {
        this.retail = x.data.product;
      });


      this.$store.dispatch('request/get_seller_data', {userId: this.userId, dateFrom: "2022-11-01", flag: '0', type: 3, config: this.config}).then((x) => {
          if(x.data.success){
            this.product.products = x.data['product']['products'];
            this.product.count = x.data['product']['count'][0]['cnt'];
            this.product.total = x.data['product']['total'][0]['cnt'];
            this.$store.dispatch('request/get_seller_data', {userId: this.userId, graph: true,  dateFrom: "2022-11-01", flag: '0', type: 3, config: this.config}).then((x) => {
              if(x.data.success){
                x.data['product']['products'].map(i => {
                  console.log(i['date_seller']);
                  newChart.categories.push(i['date_seller']);
                  newChart.series[1].data.push(i['cnt']);
                })
              }
            })
          }
          console.log(this.product);
        })


        this.$store.dispatch('request/get_order_data', { userId: this.userId, dateFrom: "2022-11-01", flag: '0', type: 3, config: this.config}).then((x) => {
          if(x.data.success){
            this.order.products = x.data['product']['products'];
            this.order.products = this.order.products.sort((a,b) => {
              console.log()
              return  new Date(b.date_seller).getTime() - new Date(a.date_seller).getTime();
            })
            this.order.count = x.data['product']['count'][0]['cnt'];
            this.order.total = x.data['product']['total'][0]['cnt'];
            this.$store.dispatch('request/get_order_data', {userId: this.userId, graph: true, config: this.config, dateFrom: "2022-11-01", flag: '0', type: 3,}).then((x) => {
              if(x.data.success){
                console.log()
                x.data['product']['products'].map(i => {
                  newChart.series[0].data.push(i['cnt']);
                })
              }
              this.chart = newChart;
            })
          }
          console.log(this.order);

        })


        this.$store.dispatch('request/get_abc', {userId: this.userId, config: this.config}).then((x) => {
        if(x.data.success){
          console.log(x.data);
          this.abc = x.data['product'];

        }
        console.log(this.order);

      });


      this.$store.dispatch('request/getSellerDiagram', {userId: this.userId}).then((x) => {
        console.log(x.data);
        this.allSeller = x.data.product[0];
        if(x.data.success){

          //this.abc = x.data['product'];

        }
        console.log(this.order);

      });

      this.$store.dispatch('request/getOrderDiagram', {userId: this.userId}).then((x) => {
        this.allOrder = x.data.product;

        if(x.data.success){
          //this.abc = x.data['product'];

        }
        console.log(this.order);

      });

    }
  },
  mounted() {
    this.userId = +window.localStorage.getItem('userId');
    this.config.headers.Authorization = window.localStorage.getItem('access');
    console.log(this.config);
    this.getStatic();
    },
}
</script>
