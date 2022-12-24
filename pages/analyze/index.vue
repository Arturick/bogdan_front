<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/">
                    <div class="btn_more_a">Назад</div>
                </NuxtLink>
                <div class="win_title_s">
                    <span>Главная /</span> Анализ товаров
                </div>
            </div>
            <div class="u_titles">
                <div class="u_txt">
                    <div class="u_title">Анализ товара</div>
                    <div class="u_sup">
                        В данном разделе вы можете увидеть  полный анализ<br> своей карточки, сколько ключей, категорий, продаж по<br>  ней, на каких позициях товар
                    </div>
                </div>
            </div>
            <input type="text" class="inp_Ue" placeholder="Поиск по баркоду, артикулу поставщика, бренду" v-model="searchKey">
            <div class="table_cont_md">
                <div class="table_new_wrap">
                  <div v-if="product.length > 0">
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
                      <NuxtLink :to="'/analyze/analyze2?article=' + item.article" >
                        <img class="arr_r_ue" src="../../assets/images/arr_r.svg" alt="">
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
        searchKey: '',
        userId: 0,
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
        localDate = new Date(new Date().getTime() - (29 *86400000));
        localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;
        today= `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

          this.$store.dispatch('request/get_economy', {userId: this.userId, type: 4}).then((x) => {
            if(x.data.success){
              this.product = x.data['product']['products'];
            }
            console.log(this.product);
          })

      }
    },
    mounted() {
      this.userId = +window.localStorage.getItem("userId");
      this.getStatic();
    },
  }
</script>
