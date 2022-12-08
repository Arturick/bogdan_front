<template>
     <div class="md:container md:mx-auto" v-if="!loadingResultsInSearch">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <div class="btn_more_a">Назад</div>
                <div class="win_title_s">
                    <span>Главная /</span> Юнит экономика
                </div>
            </div>
            <div class="a2_title">{{this.article}}</div>
            <div class="graf_infoPr_a2">
                <div class="infoPr_a2">
                    <img :src="this.product.data[0]['img']" alt="">
                    <div class="infoPr_txt_a2" v-if="this.product.data">
                        <span>SKU: {{this.article}}</span>
                        <span>Бренд: {{this.product.data[0]['brand']}}</span>
                        <span>Тип продаж: FBS</span>
                        <span>Категория: Футболки и топы</span>
                        <span>Продаж: {{this.product.data[0]['SUM(*)']}} за все время</span>
                        <span>Проадж (шт): {{this.product.data[0]['cnt']}} шт</span>
                    </div>
                </div>
                <div class="graf_a2">
                    <ChartSale :categories="chart.categories" :series="chart.series"></ChartSale>
                </div>
            </div>
            <div class="t2_low_ue_cont" style="overflow: scroll">
              <div class="table_down_a2">
                  <div class="tda2_params">
                      <span>Запрос</span>
                      <span v-for="pr in product.dates">{{pr}}</span>

                  </div>
                  <div class="tda2_inner" v-if="product.products">
                      <div class="tda2_line" v-for="pr in Object.keys(product.products)">
                            <span class="tda2_1">{{pr}}</span>

                            <span v-for="i in product.products[pr]">{{i}}</span>


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
      product: {},
      article: this.$route.query.article,
    }
  },
  methods: {
    getAnalyze(){
      let newChart = { categories: [], series: [ {
          data: [],
          name: 'Заказы'
        },
          {
            data: [],
            name: 'Продажи'
          },]}
      let access = window.localStorage.getItem('access');
      let task1 = window.localStorage.getItem('task1');
      this.$store.dispatch('request/getAnalyze', {access: access, article: this.article}).then((x) => {
        if(x.data.success){
          this.loadingResultsInSearch = false;
          this.product = x.data.product;
        }
        console.log(x);
      });
      this.$store.dispatch('request/get_seller_data', {graph: true, task1: task1, access: access, dateFrom: "2022-11-01", flag: '0', type: 4, article: this.article}).then((x) => {
        if(x.data.success){
          console.log(x);
          x.data['product']['products'].map(i => {
            console.log(i['date_seller']);
            newChart.categories.push(i['date_seller']);
            newChart.series[1].data.push(i['cnt']);
          })
        }
      });
      this.$store.dispatch('request/get_order_data', {graph: true, task1: task1, access: access, dateFrom: "2022-11-01", flag: '0', type: 4, article: this.article}).then((x) => {
        if(x.data.success){
          console.log(x);
          x.data['product']['products'].map(i => {
            newChart.series[0].data.push(i['cnt']);
          })
        }
        this.chart = newChart;
      })},
  },
  mounted() {
    this.getAnalyze();
  },
}
</script>
