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
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
            <div class="new_main">
              <div class="new_txt">
                <div class="new_title">Wildberries ввел платную поставку товаров
                </div>
                <div class="new_sup">
                  Сегодня утром, поступила новость что wildberries ввел платную поставку на складах в колледино
                  электросталь и подольск!
                </div>
              </div>
              <div class="new_left">
                <div class="nLeft_time">27.06.2022 20:47</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="orders_main">
        <div class="orders_inner">
          <div class="orders_title">Лента заказов</div>
          <div class="1" v-for="product in order.products">

              <div class="order_txt">
                📦 Товар: «{{product.article}}» Заказан.<br>
                📆 Дата выкупа: 2022-06-27 20:44:38<br>
                💳 Стоимость товара составила: {{product.price}} ₽<br>
              </div>
              <div class="order_left">
                <div class="nLeft_time">{{product.date}}</div>
                <div class="btn_more">
                  Подробнее
                  <img src="../assets/images/btn_more.svg" alt="">
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
        <div class="a_stat">
          <div class="a_stat_bl">
            <div class="stat_inner">
              <div class="stat_title">Группа А</div>
              <div class="stat_sup1">Выручка 846 571,11 ₽ (77 %)</div>
              <div class="stat_sup2">Товаров 2шт 10%</div>
            </div>
          </div>
          <div class="a_stat_bl">
            <div class="stat_inner">
              <div class="stat_title">Группа А</div>
              <div class="stat_sup1">Выручка 846 571,11 ₽ (77 %)</div>
              <div class="stat_sup2">Товаров 3шт 15%</div>
            </div>
          </div>
          <div class="a_stat_bl">
            <div class="stat_inner">
              <div class="stat_title">Группа А</div>
              <div class="stat_sup1">Выручка 846 571,11 ₽ (77 %)</div>
              <div class="stat_sup2">Товаров 15шт (75%)</div>
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
          token = +window.localStorage.getItem('access');
      this.$store.dispatch('request/get_seller_data', {task1: task1, access: token, dateFrom: "2022-11-01", flag: '0', type: 4,}).then((x) => {
        if(x.data.success){
          this.product.products = x.data['product']['products'];
          this.product.count = x.data['product']['count'][0]['cnt'];
          this.product.total = x.data['product']['total'][0]['cnt'];
          this.product.products.map(i => {
            console.log(2);
            newChart.categories.push(i['date_seller']);
            newChart.series[1].data.push(i['cnt']);
          })
        }
        console.log(this.chart);
      });
      this.$store.dispatch('request/get_order_data', {task1: task1, access: token, dateFrom: "2022-11-01", flag: '0', type: 4,}).then((x) => {
        if(x.data.success){
          this.order.products = x.data['product']['products'];
          this.order.count = x.data['product']['count'][0]['cnt'];
          this.order.total = x.data['product']['total'][0]['cnt'];
          this.order.products.map(i => {
            console.log(1);
            newChart.series[0].data.push(i['cnt']);
          })
        }
        console.log(this.chart);
        this.chart = newChart;
      });
    }
  },
  mounted() {
    this.getStatic();
    },
}
</script>
