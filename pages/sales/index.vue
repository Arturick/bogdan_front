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
                  <button @click="() => {getStatic(1)}" :class="{ active_date : sellerCount == 1}" class="today" >За сегодня</button>
                  <button @click="() => {getStatic(2)}" :class="{ active_date : sellerCount == 2}"  class="yesterday">Вчера</button>
                  <button @click="() => {getStatic(3)}" :class="{ active_date : sellerCount == 3}" class="week">7 дней</button>
                  <button @click="() => {getStatic(4)}" :class="{ active_date : sellerCount == 4}" class="month">Месяц</button>
                </div>
                <div class="sales_sup">В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>дней, за неделю, за месяц
                </div>
                <div class="table_cont_md">
                    <div class="table_sales">
                      <div v-if="product.products.length > 0">
                      <v-data-table
                        :headers="orderHeaders"
                        :items="product.products"
                        class="postable"
                        :sort-by="'date_seller'"
                        :sort-desc="true"
                      >

                        <template v-slot:item.brand="{ item }">
                          <span>{{item.brand}}</span>
                        </template>
                        <template v-slot:item.date_seller="{ item }">
                          <span>{{item.date_seller.toLocaleString().split("T")[0]}}</span>
                        </template>
                        <template v-slot:item.img="{ item }">
                          <div class="i_img">
                            <img :src="item.img"/>
                          </div>
                        </template>
                        <template v-slot:item.action="{ item }">
                          <NuxtLink :to="'/sales/sales2/?date=' + item.date_seller + '&article=' + item.article + '&type=1'" class="arrow_r">
                            <img  src="../../assets/images/arr_r.svg" alt="">
                          </NuxtLink>
                        </template>

                      </v-data-table>
                      </div>
                      <div v-else>
                        <div class="result-empty" style="margin-top: 24px">ЗДЕСЬ ПОКА НИЧЕГО</div>
                      </div>
                      </div>
                 </div>
            </div>
            <div class="l3_sales">
                <div class="sales_title">Заказы товаров</div>
                <div class="sales_params">
                    <button @click="(e) => {getStatic1(1);}" :class="{ active_date : orderCount == 1}" class="today">За сегодня</button>
                    <button @click="(e) => {getStatic1(2);}" :class="{ active_date : orderCount == 2}" class="yesterday">Вчера</button>
                    <button @click="(e) => {getStatic1(3);}" :class="{ active_date : orderCount == 3}" class="week">7 дней</button>
                    <button @click="(e) => {getStatic1(4);}" :class="{ active_date : orderCount == 4}" class="month">Месяц</button>
                </div>
                <div class="sales_sup">В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>дней, за неделю, за месяц
                </div>
                <div class="table_cont_md">
                    <div class="table_sales">
                      <div v-if="order.products.length > 0">
                      <v-data-table
                        :headers="orderHeaders"
                        :items="order.products"
                        class="postable"
                        :sort-by="'date_seller'"
                        :sort-desc="true"
                      >

                        <template v-slot:item.brand="{ item }">
                          <span>{{item.brand}}</span>
                        </template>
                        <template v-slot:item.date_seller="{ item }">
                            <span>{{item.date_seller.toLocaleString().split("T")[0]}}</span>
                          </template>
                        <template v-slot:item.img="{ item }">
                          <div class="i_img">
                            <img :src="item.img"/>
                          </div>
                        </template>
                        <template v-slot:item.action="{ item }">
                          <NuxtLink :to="'/sales/sales2/?date=' + item.date_seller + '&article=' + item.article + '&type=0'" class="arrow_r">
                            <img  src="../../assets/images/arr_r.svg" alt="">
                          </NuxtLink>
                        </template>

                      </v-data-table>
                      </div>
                      <div v-else>
                        <div class="result-empty" style="margin-top: 24px">ЗДЕСЬ ПОКА НИЧЕГО</div>
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
        productHeaders: [
          {"text": "Брэнд", "value": 'brand', 'sortable': false},
          {"text": "Дата", "value": 'date_seller', 'sortable': true},
          {"text": "Фото", "value": 'img', 'sortable': false},
          {"text": "Наименование", "value": 'naming', 'sortable': false},
          {"text": "Артикул", "value": 'article', 'sortable': false},
          {"text": "Колличество", "value": 'cnt', 'sortable': false},
          {"text": "Скидка", "value": 'discount', 'sortable': false},
          {"text": "Цена", "value": 'price', 'sortable': false},
          {"text": "", "value": 'action', 'sortable': false},
        ],
        orderHeaders: [
          {"text": "Брэнд", "value": 'brand', 'sortable': false},
          {"text": "Дата", "value": 'date_seller', 'sortable': true},
          {"text": "Фото", "value": 'img', 'sortable': false},
          {"text": "Наименование", "value": 'naming', 'sortable': false},
          {"text": "Артикул", "value": 'article', 'sortable': false},
          {"text": "Колличество", "value": 'cnt', 'sortable': false},
          {"text": "Скидка", "value": 'discount', 'sortable': false},
          {"text": "Цена", "value": 'price', 'sortable': false},
          {"text": "", "value": 'action', 'sortable': false},
        ],
        product: {count: 0, total: 0, products: []},
        order: {count: 0, total: 0, products: []},
        orderCount: 1,
        sellerCount: 1,
        type: 4,
        userId: 0,
      }
    },
    computed: {

    },
    methods: {
      getStatic(type = 4){
        let localDate = new Date(),
          flag = 1;
        this.sellerCount = type;
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
        let task1 = +window.localStorage.getItem('task1'),
            token = window.localStorage.getItem('access');
        localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;

        this.$store.dispatch('request/get_seller_data', {graph: false, dateFrom: localDate, flag: flag, type: type, userId: this.userId}).then((x) => {
          if(x.data.success){
            this.product.products = x.data['product']['products'];
            this.product.count = x.data['product']['count'][0]['cnt'];
            this.product.total = x.data['product']['total'][0]['cnt'];
          }
          console.log(this.product);
        });
      },
      getStatic1(type = 4){
        let localDate = new Date(),
          flag = 1;
        this.orderCount = type;
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
        let task1 = +window.localStorage.getItem('task1'),
          token = window.localStorage.getItem('access');
        localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;

        this.$store.dispatch('request/get_order_data', {graph: false, dateFrom: localDate, flag: flag, type: type, userId: this.userId}).then((x) => {
          if(x.data.success){
            this.order.products = x.data['product']['products'];
            this.order.count = x.data['product']['count'][0]['cnt'];
            this.order.total = x.data['product']['total'][0]['cnt'];
          }
          console.log(this.order);
        });
      }
    },
    mounted() {
      this.userId = +window.localStorage.getItem("userId");
      this.getStatic();
      this.getStatic1();
      console.log(this.$route);
    },
  }
</script>
