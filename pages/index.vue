<template>
  <div class="md:container md:mx-auto">
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
                  <NuxtLink :to="'/sales/sales2/?date=' + product.date_seller + '&article=' + product.article + '&type=2'" class="arrow_r">
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
          <NuxtLink to="/Ueconomy">
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
              <div class="stat_sup1">Выручка {{ Number(abc["a"]["totalSum"]).toLocaleString()}} ₽</div>
              <div class="stat_sup2">Товаров {{ abc["a"]["cnt"]}}шт</div>
            </div>
          </div>
          <div class="a_stat_bl">
            <div class="stat_inner">
              <div class="stat_title">Группа B</div>
              <div class="stat_sup1">Выручка {{ Number(abc["b"]["totalSum"]).toLocaleString()}} ₽</div>
              <div class="stat_sup2">Товаров {{ abc["b"]["cnt"]}}шт</div>
            </div>
          </div>
          <div class="a_stat_bl">
            <div class="stat_inner">
              <div class="stat_title">Группа C</div>
              <div class="stat_sup1">Выручка {{ Number(abc["c"]["totalSum"]).toLocaleString()}} ₽</div>
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
      dates: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб',],
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
      order: {count: 0, total: 0, products: {}}
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
        this.$store.dispatch('request/get_seller_data', {task1: task1, access: token, dateFrom: "2022-11-01", flag: '0', type: 3,}).then((x) => {
          if(x.data.success){
            this.product.products = x.data['product']['products'];
            this.product.count = x.data['product']['count'][0]['cnt'];
            this.product.total = +x.data['product']['total'][0]['cnt'];
            this.product.total =  this.product.total.toLocaleString();
            this.$store.dispatch('request/get_seller_data', {graph: true, task1: task1, access: token, dateFrom: "2022-11-01", flag: '0', type: 3,}).then((x) => {
              if(x.data.success){
                x.data['product']['products'].map(i => {
                  console.log(new Date(i['date_seller']).getDay());
                  console.log(this.dates[new Date(i['date_seller']).getDay()]);

                  newChart.categories.push(this.dates[new Date(i['date_seller']).getDay()]);
                  newChart.series[1].data.push(i['cnt']);
                })
              }
            })
          }
          console.log(this.product);
        })


        this.$store.dispatch('request/get_order_data', {task1: task1, access: token, dateFrom: "2022-11-01", flag: '0', type: 3,}).then((x) => {
          if(x.data.success){
            this.order.products = x.data['product']['products'];
            this.order.products = this.order.products.sort((a,b) => {
              console.log()
              return  new Date(b.date_seller).getTime() - new Date(a.date_seller).getTime();
            })
            this.order.count = x.data['product']['count'][0]['cnt'];
            this.order.total = +x.data['product']['total'][0]['cnt'];
            this.order.total = this.order.total.toLocaleString();
            this.$store.dispatch('request/get_order_data', {graph: true, task1: task1, access: token, dateFrom: "2022-11-01", flag: '0', type: 3,}).then((x) => {
              if(x.data.success){
                console.log()
                x.data['product']['products'].map(i => {
                  newChart.series[0].data.push(`${i['cnt']}`);
                })
              }
              this.chart = newChart;
            })
          }
          console.log(this.order);

        })


        this.$store.dispatch('request/get_abc', {}).then((x) => {
        if(x.data.success){
          console.log(x.data);
          this.abc = x.data['product'];

        }
        console.log(this.order);

      })

    }
  },
  mounted() {
    this.getStatic();
    },
}
</script>
<style scoped>
  .stat_inner{
    text-decoration: none;
  }
</style>
