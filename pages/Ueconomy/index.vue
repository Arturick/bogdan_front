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
                  <NuxtLink :to="'/Ueconomy/Ue-sales?article=' +item.article" >
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
      <div class="title_ue2">Статьи расходов</div>
      <div class="ue2_txt_bl">
        <div class="ue_sup22">
          В данном разделе вы можете указать статьи расходов, для<br> того чтобы кооректно отобразить вам ваш зароботок.<br>  Постоянные расходы сохраняются тут, не постоянные<br>  ежемесчено нужно заполнять
        </div>
        <div class="btn_u" @click="addMinus">Добавить</div>
      </div>
      <div class="t2_low_ue_cont">
        <div class="t2_low_ue">
          <div class="t_menu_ue">
            <span>Дата занесения</span>
            <span>Название расхода</span>
            <span>Число</span>
            <span>Постоянный</span>
            <span>Когда вычетать</span>

          </div>
          <div v-for="i in minusList">
            <div class="t_line_ue2">
              <div class="tline_ue2_inner">
                <span>{{i['date_add'].toLocaleString().split('T')[0]}}</span>
                <span>{{i['naming']}}</span>
                <span>{{i['value']}}</span>
                <span>{{i['old'] ? 'ДА' : 'Нет'}}</span>
                <span>{{i['allTime'] ? 'До' : 'После'}}</span>
                <div @click="deleteMinus(i['id'])">&#215;</div>
              </div>
            </div>
          </div>
          <div class="t_line_ue2">

            <div class="tline_ue2_inner">
              <span></span>
              <span><input type="text" v-model="minus.naming"></span>
              <span><input type="text" v-model="minus.value"></span>
              <span class="sel_tue2">
                                <select v-model="minus.old">
                                    <option>Да</option>
                                  <option>Нет</option>
                                </select>
                                <img src="../../assets/images/arr_d.svg" alt="">
                            </span>
              <span class="sel_tue2">
                                <select v-model="minus.allTime">
                                    <option>До</option>
                                  <option>После</option>
                                </select>
                                <img src="../../assets/images/arr_d.svg" alt="">
                            </span>
              <span>&#215;</span>
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
        minusList: [],
        minus: {
          naming: '',
          value: '',
          allTime: '',
          old: '',
        },
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
        localDate = new Date(new Date().getTime() - (31 *86400000));
        localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;
        let task1 = +window.localStorage.getItem('task1'),
          token = window.localStorage.getItem('access');
        today= `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

          this.$store.dispatch('request/get_economy', {userId: this.userId, type: 4}).then((x) => {
            if(x.data.success){
              this.product = x.data['product']['products'];

            }
            console.log(this.product);
          })


      },
      addMinus(){
        let task1 = +window.localStorage.getItem('task1');
        this.minus.allTime = this.minus.allTime == 'До' ? 1 : 0;
        this.minus.old = this.minus.old == 'Да' ? 1 : 0;
        this.$store.dispatch('request/addMinus', {userId: this.userId,  value: this.minus.value, isNumber: 1, allTime: this.minus.allTime, old: this.minus.old, naming: this.minus.naming}).then((x) => {
          this.getMinus();

        })


      },
      getMinus(){
        let task1 = +window.localStorage.getItem('task1');
        this.$store.dispatch('request/getMinus', {userId: this.userId}).then((x) => {
          this.minusList = x.data['product'];
          console.log(this.minusList);
        })
        console.log(this.minus);
      },
      deleteMinus(id){
        this.$store.dispatch('request/deleteMinus', {userId: this.userId, id: id}).then((x) => {
          console.log(this.minusList);
          this.getMinus();
        })
      }
    },
    mounted() {
      this.userId = +window.localStorage.getItem("userId");
      this.getStatic();
      this.getMinus();
    },
  }
</script>
