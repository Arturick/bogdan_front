<template>
     <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <div class="btn_more_a">Назад</div>
                <div class="win_title_s">
                    <span>Главная /</span> Юнит экономика
                </div>
            </div>
            <div class="a2_title">Товар artikul_12941529</div>
            <div class="graf_infoPr_a2">
                <div class="infoPr_a2">
                    <img src="../../assets/images/pr_img.svg" alt="">
                    <div class="infoPr_txt_a2">
                        <span>SKU: 78858215</span>
                        <span>Бренд: Nenaglyada</span>
                        <span>Тип продаж: FBS</span>
                        <span>Категория: Футболки и топы</span>
                        <span>Продаж: 950 000р за все время</span>
                        <span>Проадж (шт): 1000 шт</span>
                        <span>Рейтинг: 4,3</span>
                        <span>Прибыль за все время: 350 000р</span>
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
                      <span>26.11</span>
                      <span>27.11</span>
                      <span>28.11</span>
                      <span>29.11</span>
                      <span>30.11</span>
                      <span>01.11</span>
                      <span>02.11</span>
                  </div>
                  <div class="tda2_inner">
                      <div class="tda2_line">
                          <span class="tda2_1">Футболка женская</span>
                          <span>150</span>
                          <span>150</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                      </div>
                      <div class="tda2_line">
                          <span class="tda2_1">Футболка женская</span>
                          <span>150</span>
                          <span>150</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                      </div>
                      <div class="tda2_line">
                          <span class="tda2_1">Футболка женская</span>
                          <span>150</span>
                          <span>150</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                      </div>
                      <div class="tda2_line">
                          <span class="tda2_1">Футболка женская</span>
                          <span>150</span>
                          <span>150</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                      </div>
                      <div class="tda2_line">
                          <span class="tda2_1">Футболка женская</span>
                          <span>150</span>
                          <span>150</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
                          <span>77</span>
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
      let localDate = new Date();
      let today = new Date();
      localDate = new Date(new Date().getTime() - (31 *86400000));
      localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;
      today= `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
      this.$store.dispatch('request/get_economy', {token: "YjY1M2UwNGEtMGJmNS00ZTZhLWFmYWYtMDdhMDc3OTk3ZWU5", dateFrom: localDate, dateTo: today}).then((x) => {
        if(x.data.success){
          this.product = x.data['product'];
        }
        console.log(this.product);
      });

    },
  },
  mounted() {
    this.getPositions();
    this.getAnalyze();
  },
}
</script>
