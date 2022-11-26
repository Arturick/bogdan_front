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
                            <div class="p_brand">Бренд</div>
                            <div class="p_date">Дата</div>
                            <div class="p_img">Фото</div>
                            <div class="p_name">Наименование</div>
                            <div class="p_art">Артикул</div>
                            <div class="p_count">Продано(шт)</div>
                            <div class="p_sale">Скидка</div>
                            <div class="p_price">Логистика к  клиенту (руб)</div>
                            <div class="p_bad">Штрафы</div>
                            <div class="p_commis">Комиссия</div>
                            <label class="menu__btn1" for="menu__toggle1">
                                <span><img class="bur_sh" src="../../assets/images/shest.svg" alt=""></span>
                            </label>
                        </div>
                        <div class="table_info">
                            <div class="table_inner">
                                <div class="line_info_sales">
                                    <div class="i_brand">Nenaglyada</div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                    <div class="i_bad">1200 руб</div>
                                    <div class="i_commis">1200 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand">Nenaglyada</div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                    <div class="i_bad">1200 руб</div>
                                    <div class="i_commis">1200 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand">Nenaglyada</div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                    <div class="i_bad">1200 руб</div>
                                    <div class="i_commis">1200 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand">Nenaglyada</div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                    <div class="i_bad">1200 руб</div>
                                    <div class="i_commis">1200 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand">Nenaglyada</div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                    <div class="i_bad">1200 руб</div>
                                    <div class="i_commis">1200 руб</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hamburger-menu1">
                    <input id="menu__toggle1" type="checkbox" />

                    <ul class="menu__box1">
                        <li><input type="checkbox" name="" id="" checked><span>Бренд</span></li>
                        <li><input type="checkbox" name="" id="" checked><span>Дата</span></li>
                        <li><input type="checkbox" name="" id="" checked><span>Фото</span></li>
                        <li><input type="checkbox" name="" id="" checked><span>Наименование</span></li>
                        <li><input type="checkbox" name="" id="" checked><span>Артикул</span></li>
                        <li><input type="checkbox" name="" id=""><span>Баркод</span></li>
                        <li><input type="checkbox" name="" id=""><span>Категория</span></li>
                        <li><input type="checkbox" name="" id=""><span>Размер</span></li>
                        <li><input type="checkbox" name="" id=""><span>Номер заказа</span></li>
                        <li><input type="checkbox" name="" id="" checked><span>Заказано(шт)</span></li>
                        <li><input type="checkbox" name="" id="" checked><span>Сумма заказа</span></li>
                        <li><input type="checkbox" name="" id=""><span>Комиссия</span></li>
                        <li><input type="checkbox" name="" id=""><span>Регион</span></li>
                        <li><input type="checkbox" name="" id=""><span>Склад</span></li>
                        <li><input type="checkbox" name="" id=""><span>Номер поставки</span></li>
                        <li><input type="checkbox" name="" id=""><span>Статус</span></li>
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
        date: this.$route.query.date.split(' ')[0],
        type: this.$route.query.type == '1' ? 'Продажи' : 'Заказы',

      }
    },
    methods: {
      getStatic(){
        this.$store.dispatch('request/get_seller_data', {token: "N2NiNGVjMGItZDMxZi00ZDIyLTg0NmEtOTI5MTQ4ODQ3YTBh", dateFrom: this.date, flag: '1'}).then((x) => {
          if(x.data.success){
            this.product = x.data['product'];
          }
          console.log(this.product);
        });
        this.$store.dispatch('request/get_order_data', {token: "N2NiNGVjMGItZDMxZi00ZDIyLTg0NmEtOTI5MTQ4ODQ3YTBh", dateFrom: this.date, flag: '1'}).then((x) => {
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
