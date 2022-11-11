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
            <span>25 шт.</span>
            <span class="ch_gr">Сумма заказов</span>
            <span>6422 ₽</span>
            <span class="ch_gr">Количество продаж</span>
            <span>25 шт.</span>
            <span class="ch_gr">Сумма продаж</span>
            <span>6422 ₽</span>
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
      <div class="orders_main">
        <div class="orders_inner">
          <div class="orders_title">Лента заказов</div>
          <div class="order">
            <div class="order_txt">
              📦 Товар: «2857588» Заказан.<br>
              📆 Дата выкупа: 2022-06-27 20:44:38<br>
              💳 Стоимость товара составила: 2622 ₽<br>
            </div>
            <div class="order_left">
              <div class="nLeft_time">27.06.2022 20:47</div>
              <div class="btn_more">
                Подробнее
                <img src="../assets/images/btn_more.svg" alt="">
              </div>
            </div>
          </div>
          <div class="order">
            <div class="order_txt">
              📦 Товар: «2857588» Заказан.<br>
              📆 Дата выкупа: 2022-06-27 20:44:38<br>
              💳 Стоимость товара составила: 2622 ₽<br>
            </div>
            <div class="order_left">
              <div class="nLeft_time">27.06.2022 20:47</div>
              <div class="btn_more">
                Подробнее
                <img src="../assets/images/btn_more.svg" alt="">
              </div>
            </div>
          </div>
          <div class="order">
            <div class="order_txt">
              📦 Товар: «2857588» Заказан.<br>
              📆 Дата выкупа: 2022-06-27 20:44:38<br>
              💳 Стоимость товара составила: 2622 ₽<br>
            </div>
            <div class="order_left">
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
    <div class="analyze_main">
      <div class="a_inner">
        <div class="l1_a">
          <div class="a_title">ABC анализ</div>
          <div class="btn_more_a">
            Подробнее
            <img src="../assets/images/btn_more.svg" alt="">
          </div>
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
        categories: ['День 1', 'День 2', 'День 3', 'День 4', 'День 5', 'День 6', 'День 7'],
        series: [
          {
            data: ['1', '2', '5', '1', '9', '21'],
            name: 'Заказы'
          },
          {
            data: ['5', '11', '3', '1', '2', '3'],
            name: 'Продажи'
          },
        ],
      }
    }
  },
  methods: {
    getPositions() {
      this.loadingResultsInSearch = true
      this.$store.dispatch('request/get_positions').then((x) => {
        this.resultsInSearch = x.data
        this.loadingResultsInSearch = false
      })
    },
  },
  mounted() {
    this.getPositions()
  },
}
</script>