<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/">
                    <div class="btn_more_a">Назад</div>
                </NuxtLink>
                <div class="win_title_s">
                    <span>Главная /</span> Юнит экономика
                </div>
            </div>
            <div class="u_titles">
                <div class="u_txt">
                    <div class="u_title">Результативность продаж</div>
                    <div class="u_sup">
                        В данном разделе вы можете указать себестоимость товара,<br> упаковки, прочих расходов. Так же посмотреть ваше финансовое<br> состояние, на сегодняшний день, за вычетом всех расходов<br>  Идивидуально по товару так и по всем
                    </div>
                </div>
              <NuxtLink to="/Ueconomy/ue-sales?type=1" >
                <div class="btn_u" >Посмотреть по всем</div>
              </NuxtLink>

            </div>
            <input type="text" class="inp_Ue" placeholder="Поиск по баркоду, артикулу поставщика, бренду">
            <div class="table_new_wrap">
                <div class="table_md">
                <div class="tmd_params">
                            <span>Фото</span>
                            <span>Бренд</span>
                            <span>Артикул</span>
                            <span>Размер</span>
                            <span>Баркод</span>
                            <span>Артикул поставщика</span>
                            <span>Цена WB</span>
                        </div>
                        <div class="tmd_lines">
                          <div class="1" v-for="pr in product">
                            <div class="tmd_line">
                                <div class="tmd_line_inner">
                                    <span>
                                        <img :src="pr['img']" alt="">
                                    </span>
                                    <span>{{pr['brand']}}</span>
                                    <span>{{pr['article']}}</span>
                                    <span>S</span>
                                    <span>{{pr['barcode']}}</span>
                                    <span>{{pr['article']}}</span>
                                    <span>{{pr['price']}}</span>
                                    <!--  -->
                                    <NuxtLink :to="'/Ueconomy/Ue-sales?article=' + pr['article']" >
                                        <img class="arr_r_ue" src="../../assets/images/arr_r.svg" alt="">
                                    </NuxtLink>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div class="low_props_md">
                        <div class="low_props_md_inner">
                            <div class="title_md_low">Показать записей</div>
                            <div class="sel_md_low">
                                <select>
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option>
                                    <option>25</option>
                                    <option>30</option>
                                </select>
                                <img src="../../assets/images/arr_d.svg" alt="">
                            </div>
                            <div class="pages_md_low">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>...</span>
                                <span>10</span>
                            </div>
                        </div>
                    </div>
            </div>2

        </div>
    </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {

        product: {},

      }
    },
    methods: {
      getStatic(){
        let localDate = new Date();
        let today = new Date();
        localDate = new Date(new Date().getTime() - (31 *86400000));
        localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;
        let task1 = +window.localStorage.getItem('task1'),
          token = window.localStorage.getItem('access');
        today= `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

          this.$store.dispatch('request/get_economy', {task1: task1, access: token, type: 4}).then((x) => {
            if(x.data.success){
              this.product = x.data['product']['products'];

            }
            console.log(this.product);
          }).catch(() => {
            this.$store.dispatch('request/refresh', {task1: task1}).then((x) => {
              if(x.data.success){
                window.localStorage.setItem('access', x.data.token);
                window.localStorage.setItem('task1', x.data.profile[0]['task1']);
                this.$auth.setUserToken('Bearer ' + x.data.token)
              }
              //console.log(x);
            });
          })


      }
    },
    mounted() {
      this.getStatic();
    },
  }
</script>
