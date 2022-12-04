<template>
     <div class="md:container md:mx-auto">
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
                    <img src="../../assets/images/pr_img.svg" alt="">
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
            <div class="t2_low_ue_cont">
              <div class="table_down_a2">
                  <div class="tda2_params">
                      <span>Запрос</span>
                      <span>Частотность WB</span>
                      <span>Товаров на WB</span>
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
      },
      product: {},
      article: this.$route.query.article,
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
    getAnalyze(){
      let access = window.localStorage.getItem('access');
      this.$store.dispatch('request/getAnalyze', {access: access, article: this.article}).then((x) => {
        if(x.data.success){
          this.product = x.data.product;
        }
        console.log(x);

        let localchart = {
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
        }
        let seller = this.product.seller[0];
        let order = this.product.order[0];
        seller.map(i => {
          localchart.categories.push(i['date_seller']);
          localchart.series[1].data.push(i['cnt']);
        });
        order.map(i => {
          if(i['date_seller'] in localchart.categories){

          } else {
            localchart.categories.push(i['date_seller']);
          }
          localchart.series[0].data.push(i['cnt']);
        });
        this.chart = localchart;
      });

      },
  },
  mounted() {
    this.getPositions();
    this.getAnalyze();
  },
}
</script>
