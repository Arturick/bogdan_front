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
                    <div class="btn_more_a">Выгрузить Excel</div>
                </div>
                <div class="sales_params">
                   {{this.date}}
                </div>
                <div class="sales_sup">В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>дней, за неделю, за месяц
                </div>
              <div class="table_cont_md2">
                <div class="table_sales">
                  <div class="table_sales_params">
                    <div class="p_brand" v-if="checkBox.brand">Бренд</div>
                    <div class="p_date" v-if="checkBox.date">Дата</div>
                    <div class="p_img" v-if="checkBox.img" >Фото</div>
                    <div class="p_name" v-if="checkBox.naming" >Наименование</div>
                    <div class="p_art" v-if="checkBox.article" >Артикул</div>
                    <div class="p_count" v-if="checkBox.cnt" >Продано(шт)</div>
                    <div class="p_sale" v-if="checkBox.discount" >Скидка</div>
                    <div class="p_price" v-if="checkBox.log" >Логистика к  клиенту (руб)</div>
                    <div class="p_bar" v-if="checkBox.barcode" >Баркод</div>
                    <div class="p_cat" v-if="checkBox.category" >Категория</div>
                    <div class="p_size" v-if="checkBox.size" >Размер</div>
                    <div class="p_region" v-if="checkBox.region" >Регион</div>
                    <div class="p_pvz" v-if="checkBox.pwz" >ПВЗ</div>
                    <div class="p_price" v-if="checkBox.srid" >Номер поставки</div>
                    <div class="p_bad">Штрафы</div>
                    <div class="p_commis">Комиссия</div>
                    <label class="menu__btn1" for="menu__toggle1">
                      <span><img class="bur_sh" src="../../assets/images/shest.svg" alt=""></span>
                    </label>
                  </div>
                  <div class="table_info">
                    <div v-if="type == 'Продажи'">
                      <div v-for="pr in product.products" class="table_inner">

                        <div class="line_info_sales">
                          <div class="i_brand" v-if="checkBox.brand">{{pr['brand']}}</div>
                          <div class="i_date" v-if="checkBox.date">{{pr['date_seller']}}}</div>
                          <div class="i_img" v-if="checkBox.img">
                            <img :src="pr['img']" alt="">
                          </div>
                          <div class="i_name" v-if="checkBox.naming">{{pr['naming']}}</div>
                          <div class="i_art" v-if="checkBox.article">{{pr['article']}}</div>
                          <div class="i_count" v-if="checkBox.cnt">{{pr['count']}}</div>
                          <div class="i_sale" v-if="checkBox.discount" >{{pr['discount']}}</div>
                          <div class="i_price" v-if="checkBox.price" >{{pr['price']}}</div>
                          <div class="i_bad">{{}}</div>
                          <div class="i_commis">{{}}</div>
                          <div class="i_bad" v-if="checkBox.barcode">{{pr['barcode']}}</div>
                          <div class="i_commis" v-if="checkBox.category" >{{pr['category']}}</div>
                          <div class="i_bad" v-if="checkBox.region" >{{pr['region']}}</div>
                          <div class="i_commis" v-if="checkBox.size" >{{pr['size']}}</div>
                          <div class="i_commis" v-if="checkBox.pwz" >{{pr['pwz']}}</div>

                        </div>

                      </div>
                    </div>
                    <div v-else >
                      <div v-for="pr in order.products" class="table_inner">

                        <div class="line_info_sales">
                          <div class="i_brand" v-if="checkBox.brand">{{pr['brand']}}</div>
                          <div class="i_date" v-if="checkBox.date">{{pr['date_seller']}}}</div>
                          <div class="i_img" v-if="checkBox.img">
                            <img :src="pr['img']" alt="">
                          </div>
                          <div class="i_name" v-if="checkBox.naming">{{pr['naming']}}</div>
                          <div class="i_art" v-if="checkBox.article">{{pr['article']}}</div>
                          <div class="i_count" v-if="checkBox.cnt">{{pr['count']}}хуй</div>
                          <div class="i_sale" v-if="checkBox.discount" >{{pr['discount']}}</div>
                          <div class="i_price" v-if="checkBox.price" >{{pr['price']}}</div>
                          <div class="i_bar" v-if="checkBox.barcode">{{pr['barcode']}}</div>
                          <div class="i_reg" v-if="checkBox.region" >{{pr['region']}}</div>
                          <div class="i_size" v-if="checkBox.size" >{{pr['size']}}</div>
                          <div class="i_pwz" v-if="checkBox.pwz" >{{pr['pwz']}}</div>
                          <div class="i_bad">1200 руб</div>
                          <div class="i_commis">1200 руб</div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
                <div class="hamburger-menu1">
                    <input id="menu__toggle1" type="checkbox" />

                    <ul class="menu__box1">
                        <li><input type="checkbox" name="" id="" v-model="checkBox.brand" checked><span>Бренд</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.date" checked><span>Дата</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.img" checked><span>Фото</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.naming" checked><span>Наименование</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.article" checked><span>Артикул</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.barcode"><span>Баркод</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.category"><span>Категория</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.size"><span>Размер</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.cnt" checked><span>Заказано(шт)</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.price" checked><span>price</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.coms" ><span>Комиссия</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.region"><span>Регион</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.pwz"><span>Склад</span></li>
                        <li><input type="checkbox" name="" id="" v-model="checkBox.srid"><span>Номер поставки</span></li>
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

        product: {count: 0, total: 0, products: {}},
        order: {count: 0, total: 0, products: {}},
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

      }
    },
    methods: {
      getStatic(){
        let task1 = +window.localStorage.getItem('task1'),
          token = window.localStorage.getItem('access');
        this.$store.dispatch('request/get_seller_data', {task1: task1, access: token, dateFrom: '2022-11-01', flag: false, type: 4, date: this.date, article: this.article}).then((x) => {
          if(x.data.success){
            this.product.products = x.data['product']['products'];
            this.product.count = x.data['product']['count'][0]['cnt'];
            this.product.total = x.data['product']['total'][0]['cnt'];
          }
          console.log(this.product);
        });
        this.$store.dispatch('request/get_order_data', {task1: task1, access: token, dateFrom: '2022-11-01', flag: false, type: 4, date: this.date, article: this.article}).then((x) => {
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
