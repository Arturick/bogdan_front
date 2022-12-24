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
                <div class="table_sales">
                  <div>
                    <div v-if="type == 'Продажи'">
                      <div v-if="product.products.length > 0">
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
                      <div v-else>
                        <div class="result-empty" style="margin-top: 24px">ЗДЕСЬ ПОКА НИЧЕГО</div>
                      </div>
                    </div>
                    <div v-else >
                      <div v-if="order.products.length > 0">
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
                      <div v-else>
                        <div class="result-empty" style="margin-top: 24px">ЗДЕСЬ ПОКА НИЧЕГО</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div class="hamburger-menu1" style="position: relative; z-index: 99">
                    <input id="menu__toggle1" type="checkbox" />

                    <ul class="menu__box1">
                        <li><input type="checkbox" name=""  v-model="checkBox.brand" checked><span>Бренд</span></li>
                        <li><input type="checkbox" name="" v-model="checkBox.date" checked><span>Дата</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.img" checked><span>Фото</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.naming" checked><span>Наименование</span></li>
                        <li><input type="checkbox" name="" v-model="checkBox.article" checked><span>Артикул</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.barcode"><span>Баркод</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.category"><span>Категория</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.size"><span>Размер</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.cnt" checked><span>Заказано(шт)</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.price" checked><span>price</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.coms" ><span>Комиссия</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.region"><span>Регион</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.pwz"><span>Склад</span></li>
                        <li><input type="checkbox" name=""  v-model="checkBox.srid"><span>Номер поставки</span></li>
                    </ul>
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
        userId: 0,

      }
    },
    methods: {
      getStatic(){
        this.$store.dispatch('request/get_seller_data', {userId: this.userId,  dateFrom: '2022-11-24', flag: false, type: 4, date: this.date, article: this.article}).then((x) => {
          if(x.data.success){
            this.product.products = x.data['product']['products'];
            this.product.count = x.data['product']['count'][0]['cnt'];
            this.product.total = x.data['product']['total'][0]['cnt'];
          }
          console.log(this.product);
        });
        this.$store.dispatch('request/get_order_data', {userId: this.userId, dateFrom: '2022-11-24', flag: false, type: 4, date: this.date, article: this.article}).then((x) => {
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
      console.log(this.$route);
    },
  }
</script>


<style scoped>
#menu__toggle1 {
            opacity: 0;
        }

        #menu__toggle1:checked~.menu__btn1>span {
            transform: rotate(0);
        }

        #menu__toggle1:checked~.menu__btn1>span::before {
            transform: rotate(0);
        }

        #menu__toggle1:checked~.menu__btn1>span::after {
            transform: rotate(0);
        }

        #menu__toggle1:checked~.menu__box1 {
            visibility: visible;
            right: 0;
        }

        .menu__btn1 {
            display: flex;
            align-items: center;
            position: relative;

            width: 26px;
            height: 26px;

            cursor: pointer;
            z-index: 13;
        }



        .menu__btn1>span::before {
            content: '';
            top: -8px;
        }

        .menu__btn1>span::after {
            content: '';
            top: 8px;
        }

        .menu__box1 {
            display: block;
            position: fixed;
            visibility: hidden;
            bottom: 0;
            right: -100%;

            width: 200px;
            height: 100%;
            z-index: 11;

            margin: 0;
            padding: 5rem 1rem;

            list-style: none;

            background-color: #ffffff;
            box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
            border-left: 1px solid grey;

            transition: all .3s;
        }

        .menu__box1 span{
            padding-left: 1rem;
            font-size: 13px;
            font-weight: 700;
        }

        /* .menu__item {
            display: block;
            padding: 12px 24px;

            color: #333;

            font-size: 20px;
            font-weight: 600;

            text-decoration: none;

            transition: all .3s;
        } */

        .bur_sh{
            height: 1.5rem;
            width: 1.5rem;
        }
</style>
