<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/">
                    <div class="btn_more_a">Назад</div>
                </NuxtLink>
                <div class="win_title_s">
                    <span>Главная /</span> Продажи
                </div>
            </div>
            <div class="u_titles">
                <div class="u_txt">
                    <div class="u_title">Анализ товара artikul_12941529</div>
                    <div class="u_sup">
                        В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>  дней, за неделю, за месяц
                    </div>
                </div>
                <div class="btn_u">
                    Выгрузить в Excel
                </div>
            </div>
            <div class="title_ues">Продажи товара artikul_12941529</div>
            <div class="sales_params">
              <button class="today"  @click="() => {getStatic(1)}">За сегодня</button>
              <button class="yesterday"  @click="() => {getStatic(2)}">Вчера</button>
              <button class="week"  @click="() => {getStatic(3)}">7 дней</button>
              <button class="month"  @click="() => {getStatic(4)}">Месяц</button>
            </div>
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
                        <span>Категория</span>
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
                        <span></span>
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
                <div v-if="product[article]" class="l3_st_ues">
                    <div class="bl_pr_ues">
                        <span>
                            <img :src="product[article]['img']" alt="">
                        </span>
                        <span>{{product[article]['brand']}}</span>
                        <span>{{product[article]['nm_id']}}</span>
                        <span>{{product[article]['barcode']}}</span>
                        <span>78858215</span>
                        <span>S</span>
                        <span>Категория товаров</span>
                        <span></span>
                    </div>
                    <div class="bl_sales_ues">
                        <span>{{product[article]['priceBuy']}}</span>
                        <span>{{product[article]['countBuy']}}</span>
                        <span>{{product[article]['priceRetail']}}</span>
                    </div>
                    <div class="bl_returns_ues">
                      <span>{{product[article]['priceRetail']}}</span>
                      <span>{{product[article]['countRetail']}}</span>
                    </div>
                    <div class="bl_log_ues">
                      <span>{{product[article]['logic']}}</span>
                    </div>
                    <div class="bl_com_ues">
                        <span>0р</span>
                      <span>{{product[article]['report']}}</span>
                    </div>
                    <div class="bl_exp_ues">
                        <span>-1500р</span>
                    </div>
                    <div class="bl_prof_ues">
                        <span>50000р</span>
                        <span>50000р</span>
                        <span>50%</span>
                    </div>
                    <div class="bl_anal_ues">
                        <span>A кат</span>
                    </div>
                    <div class="bl_price_ues">
                      <span>{{product[article]['priceRetail']}}</span>
                      <span>{{product[article]['discount']}}</span>
                        <span>{{ +product[article]['price'] -  ((+product[article]['price'] * +product[article]['discount']) / 100)}}</span>
                    </div>
                </div>
            </div>
            <div  v-if="product[article]"  class="txt_ues">
                Общее количество:  &nbsp;<span>1 артикула, {{product[article]['countBuy']}} шт</span><br>
                Сумма продаж:  &nbsp;<span>{{product[article]['priceBuy']}}₽</span><br>
                Возвраты: &nbsp;<span>{{product[article]['priceRetail']}}Р</span><br>
                Комиссия: &nbsp;<span>1000р</span><br>
                Логистика к клиенту и от клиента: &nbsp;<span>{{product[article]['logic']}}р</span><br>
                Себестоимость товаров: &nbsp;<span>N рублей</span><br>
                <span>Итого: {{+product[article]['priceBuy'] - (+product[article]['logic']) - (+product[article]['priceRetail'])}}₽</span><br>
                <span>ПРИБЫЛЬ С ТОВРАРА: {{+product[article]['priceBuy'] - (+product[article]['logic']) - (+product[article]['priceRetail'])}}₽</span>
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
        product: {},
        article: this.$route.query.article
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

        this.$store.dispatch('request/get_economy', {token: "YjY1M2UwNGEtMGJmNS00ZTZhLWFmYWYtMDdhMDc3OTk3ZWU5", dateFrom: localDate, dateTo: today, article: this.article}).then((x) => {
          if(x.data.success){
            this.product = x.data['product'];
          }
          console.log(this.product);
        });
      }
    },
    mounted() {
      this.getStatic(4);
      console.log(this.$route);
    },
  }
</script>


