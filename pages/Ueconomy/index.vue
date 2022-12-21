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
            <input type="text" class="inp_Ue" placeholder="Поиск по баркоду, артикулу поставщика, бренду" v-model="searchKey">
            <div class="table_new_wrap">
              <v-data-table
                :headers="productHeaders"
                :items="sortProduct"
                class="postable"
              >

                <template v-slot:item.brand="{ item }">
                  <span>Partony</span>
                </template>
                <template v-slot:item.img="{ item }">
                  <div class="i_img">
                    <img :src="item.img"/>
                  </div>
                </template>
                <template v-slot:item.action="{ item }">
                  <NuxtLink :to="'/Ueconomy/Ue-sales?article=' +item.article" >
                    <img class="arr_r_ue" src="../../assets/images/arr_r.svg" alt="">
                  </NuxtLink>
                </template>

              </v-data-table>
            </div>

            </div>

        </div>

</template>
<script>
  export default {
    components: {},
    data() {
      return {
        productHeaders:  [
          {"text": "Брэнд", "value": 'brand', 'sortable': false},
          {"text": "Фото", "value": 'img', 'sortable': false},
          {"text": "Размер", "value": 'size', 'sortable': false},
          {"text": "Артикул", "value": 'article', 'sortable': false},
          {"text": "Колличество", "value": 'cnt', 'sortable': false},
          {"text": "Цена", "value": 'price', 'sortable': false},
          {"text": "", "value": 'action', 'sortable': false},
        ],
        product: [],
        searchKey: ''

      }
    },
    computed: {
      sortProduct(){
        return this.product.filter(i => {
          console.log(i);
          return i.article.toLowerCase().includes(this.searchKey.toLowerCase()) || i.naming.toLowerCase().includes(this.searchKey.toLowerCase()) || i.brand.toLowerCase().includes(this.searchKey.toLowerCase());
        })
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
