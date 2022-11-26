<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/">
                    <div class="btn_more_a">Назад</div>
                </NuxtLink>
                <div class="win_title_s"><span>Главная /</span> Продажи и заказы
                </div>
            </div>
            <div class="l2_sales">
                <div class="sales_title">Продажи товаров</div>
                <div class="sales_params">
                  <button @click="() => {getStatic(1)}" class="today">За сегодня</button>
                  <button @click="() => {getStatic(2)}" class="yesterday">Вчера</button>
                  <button @click="() => {getStatic(3)}" class="week">7 дней</button>
                  <button @click="() => {getStatic(4)}" class="month">Месяц</button>
                </div>
                <div class="sales_sup">В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>дней, за неделю, за месяц
                </div>
                <div class="table_cont_md">
                    <div class="table_sales">
                        <div class="table_sales_params">
                            <div class="p_brand">Бренд</div>
                            <div class="p_date">Дата</div>
                            <div class="p_img">Фото</div>
                            <div class="p_name">Наименование</div>
                            <div class="p_art">Артикул</div>
                            <div class="p_count">Продано(шт)</div>
                            <div class="p_sale">Скидка</div>
                            <div class="p_price">Цена со скидкой</div>
                        </div>
                        <div class="table_info">
                            <div class="table_inner">
                              <div class="1" v-for="pr in product.products">
                                <div class="line_info_sales" v-for="productDate in pr">
                                    <div class="i_brand">{{productDate['brand']}}</div>
                                    <div class="i_date">{{productDate['date']}}</div>
                                    <div class="i_img">
                                        <img :src="productDate['img']" alt="">
                                    </div>
                                    <div class="i_name">{{productDate['naming']}}</div>
                                    <div class="i_art">{{productDate['article']}}</div>
                                    <div class="i_count">{{productDate['count']}}</div>
                                    <div class="i_sale">{{productDate['discountPercent']}}</div>
                                    <div class="i_price">{{productDate['price']}} руб
                                        <NuxtLink :to="'/sales/sales2/?date=' + productDate['date']+ '&type=0'" class="arrow_r">
                                            <img  src="../../assets/images/arr_r.svg" alt="">
                                        </NuxtLink>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div class="l3_sales">
                <div class="sales_title">Заказы товаров</div>
                <div class="sales_params">
                    <button @click="() => {getStatic(1)}" class="today">За сегодня</button>
                    <button @click="() => {getStatic(2)}" class="yesterday">Вчера</button>
                    <button @click="() => {getStatic(3)}" class="week">7 дней</button>
                    <button @click="() => {getStatic(4)}" class="month">Месяц</button>
                </div>
                <div class="sales_sup">В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>дней, за неделю, за месяц
                </div>
                <div class="table_cont_md">
                    <div class="table_sales">
                        <div class="table_sales_params">
                            <div class="p_brand">Бренд</div>
                            <div class="p_date">Дата</div>
                            <div class="p_img">Фото</div>
                            <div class="p_name">Наименование</div>
                            <div class="p_art">Артикул</div>
                            <div class="p_count">Продано(шт)</div>
                            <div class="p_sale">Скидка</div>
                            <div class="p_price">Цена со скидкой</div>
                        </div>
                        <div class="table_info">
                            <div class="table_inner">
                              <div class="1" v-for="pr in product.products">
                                <div class="line_info_sales" v-for="productDate in pr">
                                  <div class="i_brand">{{productDate['brand']}}</div>
                                  <div class="i_date">{{productDate['date']}}</div>
                                  <div class="i_img">
                                    <img :src="productDate['img']" alt="">
                                  </div>
                                  <div class="i_name">{{productDate['naming']}}</div>
                                  <div class="i_art">{{productDate['article']}}</div>
                                  <div class="i_count">{{productDate['count']}}</div>
                                  <div class="i_sale">{{productDate['discountPercent']}}</div>
                                  <div class="i_price">{{productDate['price']}} руб
                                    <NuxtLink :to="'/sales/sales2/?date=' + productDate['date']+ '&type=1'" class="arrow_r">
                                      <img  src="../../assets/images/arr_r.svg" alt="">
                                    </NuxtLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
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

        product: {count: 0, total: 0, products: {}},
        order: {count: 0, total: 0, products: {}},
        type: 4
      }
    },
    methods: {
      getStatic(type = 4){
        let localDate = new Date(),
          flag = 1;
        switch (type) {
          case 2:
            localDate = new Date(new Date().getTime() - 86400000);
            break;
          case 3:
            flag = 0;
            break;
          case 4:
            flag = 0;
            break;
        }
        localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;

        this.$store.dispatch('request/get_seller_data', {token: "N2NiNGVjMGItZDMxZi00ZDIyLTg0NmEtOTI5MTQ4ODQ3YTBh", dateFrom: localDate, flag: flag, type: type}).then((x) => {
          if(x.data.success){
            this.product = x.data['product'];
          }
          console.log(this.product);
        });
        this.$store.dispatch('request/get_order_data', {token: "N2NiNGVjMGItZDMxZi00ZDIyLTg0NmEtOTI5MTQ4ODQ3YTBh", dateFrom: localDate, flag: flag, type: type}).then((x) => {
          if(x.data.success){
            this.order = x.data['product'];
          }
          console.log(this.order);
        });
      }
    },
    mounted() {
      this.getStatic();
      console.log(this.$route);
    },
  }
</script>
