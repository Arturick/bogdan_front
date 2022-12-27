<template>
  <div class="md:container md:mx-auto">
    <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
      <div class="l1_sales">
        <NuxtLink to="/sales" class="btn_more_a">Назад</NuxtLink>
        <div class="win_title_s"><span>Главная /</span> {{this.type}}
        </div>
      </div>
      <div class="l2_sales">
        <div class="l2_title_btn">
          <div class="sales_title">Продажи товаров</div>

        </div>
        <div class="sales_params">
          {{this.date.toLocaleString().split('T')[0]}}
        </div>
        <div class="sales_sup">В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>дней, за неделю, за месяц
        </div>

        <div class="table_cont_md2">
          <div class="table_sales" style="width: 100%;">
            <div class="img_open_b">
              <img src="../../assets/images/shest.svg" alt="" @click="showBurger">
              <burger_salse
                :check-box="headerBox"
                v-if="isVisible"
                @close_burger="close_login_burger"
              />
            </div>
            <div>
              <div v-if="type == 'Продажи'">
                <v-data-table
                  :headers="productHeaders"
                  :items="product.products"
                  class="postable"
                  :sort-by="'date_seller'"
                  :sort-desc="true"
                >

                  <template v-slot:item.brand="{ item }">
                    <span>Partony</span>
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
              <div v-else >
                <v-data-table
                  :headers="productHeaders"
                  :items="order.products"
                  class="postable"
                  :sort-by="'date_seller'"
                  :sort-desc="true"
                >

                  <template v-slot:item.brand="{ item }">
                    <span>Partony</span>
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
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

  import burger_salse from '../../components/burger_salse.vue';

  export default {
    components: {
      burger_salse
    },
    data() {
      return {
        productHeaders: [
          {"text": "Брэнд", "value": 'brand', 'sortable': false},
          {"text": "Дата", "value": 'date_seller', 'sortable': true},
          {"text": "Фото", "value": 'img', 'sortable': false},
          {"text": "Наименование", "value": 'naming', 'sortable': false},
          {"text": "Артикул", "value": 'article', 'sortable': false},
          {"text": "Баркод", "value": 'barcode', 'sortable': false},
          {"text": "Категория", "value": 'category', 'sortable': false},
          {"text": "Скидка", "value": 'discount', 'sortable': false},
          {"text": "Размер", "value": 'size', 'sortable': false},
          {"text": "Заказано(шт)", "value": 'cnt', 'sortable': false},
          {"text": "Цена", "value": 'price', 'sortable': false},
          {"text": "Комиссия", "value": 'coms', 'sortable': false},
          {"text": "Регион", "value": 'region', 'sortable': false},
          {"text": "Номер Поставки", "value": 'srid', 'sortable': false},
          {"text": "ПВЗ", "value": 'pwz', 'sortable': false},
        ],
        product: {count: 0, total: 0, products: []},
        order: {count: 0, total: 0, products: []},
        date: this.$route.query.date,
        article: this.$route.query.article,
        type: this.$route.query.type == '1' ? 'Продажи' : 'Заказы',
        checkBox: {
          brand: true,
          img: true,
          date: true,
          article: true,
          cnt: true,
          discount: true,
          log: true,
          penalti: true,
          coms: true,
          price: true,
          barcode: true,
          category: true,
          size: true,
          region: true,
          pwz: true,
          srid: true
        },
        isVisible: false,
        userId: 0,

      }
    },
    methods: {
      getStatic(){
        let task1 = +window.localStorage.getItem('task1'),
          token = window.localStorage.getItem('access');
        this.$store.dispatch('request/get_seller_data', {userId: this.userId, dateFrom: '2022-11-01', flag: false, type: 4, date: this.date, article: this.article}).then((x) => {
          if(x.data.success){
            this.product.products = x.data['product']['products'];
            this.product.count = x.data['product']['count'][0]['cnt'];
            this.product.total = x.data['product']['total'][0]['cnt'];
          }
          console.log(this.product);
        });
        this.$store.dispatch('request/get_order_data', {userId: this.userId, dateFrom: '2022-11-01', flag: false, type: 4, date: this.date, article: this.article}).then((x) => {
          if(x.data.success){
            this.order.products = x.data['product']['products'];
            this.order.count = x.data['product']['count'][0]['cnt'];
            this.order.total = x.data['product']['total'][0]['cnt'];
          }
          console.log(this.order);
        });
      },
      showBurger(){
        this.isVisible = true;
      },
      close_login_burger(){
        this.isVisible = false;
      },
      headerBox(head){
        console.log(head);
        let index = 0;
        let flag = true;
        for(let i of this.productHeaders){
          console.log(head.text == i.text)
          if(head.text == i.text){
            flag = false;
            break;
          }
          index+=1;
        }
        if (!flag){
          console.log(1231);
          this.productHeaders.splice(index, 1);
        } else {
          console.log(999999999);
          this.productHeaders.unshift(head);
        }

      },
    },
    mounted() {
      this.userId = window.localStorage.getItem('userId');
      this.getStatic();
      console.log(this.$route);
    },
  }
</script>


<style scoped>

</style>
