<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/">
                    <div class="btn_more_a">Назад</div>
                </NuxtLink>
                <div class="win_title_s">
                    <NuxtLink to="/competition"><span>Главная /</span></NuxtLink> Конкуренция
                </div>
            </div>
          <div v-if="loadingResultsInSearch == false">
            <div class="sales_title">Сравните свои товары</div>
              <div class="comp_sup">В данном разделе вы можете 4 сравнить свои товары с<br> товарами конкурентов (по цене, по позициям в выдаче и<br>  отображению в ключевых запросах).
              </div>
              <div class="yPr_title">Ваш товар</div>
              <div class="yPr_block">
                  <img :src="this.img1" alt="">
                  <div class="yPr_txt">

                      <span>SKU: {{this.product1.article}}</span>
                      <span>Бренд: {{this.product1.brand}}</span>
                      <span>Тип продаж: FBS</span>
                  </div>
              </div>
                  <div class="table_c2">
                      <div class="table_cont_md" style="overflow: auto">
                          <div class="tcomp_con">
                              <div class="tc2_params">

                                  <span>Фото</span>
                                  <span>Артикул</span>
                                  <span>Цена</span>
                                  <span>Запрос</span>
                                  <span>Частотность Товаров на WB</span>

                              </div>
                              <div class="tablec2">
                                  <div class="table_c2_inner">
                                      <div class="table_c2_line">
                                          <div>
                                              <img :src="this.img1" alt="">
                                          </div>
                                          <div>{{this.product1.article}}</div>
                                          <div>{{this.product1.price}} ₽</div>
                                          <div>{{this.product1.naming}}</div>
                                          <div></div>
                                          <div></div>
                                      </div>
                                      <div class="table_c2_line"  v-for="pr in Object.keys(product)">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div>{{pr}}</div>
                                          <div>{{product[pr][0]}}</div>
                                        <div></div>
                                      </div>


                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="table_c2">
                          <div class="yPr_title">Ваш товар</div>
                        <div class="yPr_block">
                          <img :src="this.product2.image" alt="">
                          <div class="yPr_txt">

                            <span>SKU: {{this.product2.article}}</span>
                            <span>Бренд: {{this.product2.brand}}</span>
                            <span>Тип продаж: FBS</span>
                          </div>
                        </div>
                      <div class="table_c2">
                          <div class="tcomp_con">
                              <div class="tc2_params">
                                  <span>Бренд</span>
                                  <span>Фото</span>
                                  <span>Артикул</span>
                                  <span>Цена</span>
                                  <span>Запрос</span>
                                  <span>Частотность Товаров на WB</span>
                                <div></div>

                              </div>
                              <div class="tablec2">
                                <div class="table_c2_inner">
                                  <div class="table_c2_line">
                                    <div>
                                        <img :src="this.product2.image" alt="">
                                    </div>
                                    <div>{{this.product2.article}}</div>
                                    <div>{{this.product2.price}} ₽</div>
                                    <div>{{this.product2.naming}}</div>
                                    <div></div>
                                    <div></div>

                                  </div>
                                  <div class="table_c2_line"  v-for="pr in Object.keys(product)">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div>{{pr}}</div>
                                    <div>{{product[pr][1]}}</div>
                                    <div></div>
                                  </div>


                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
          </div>
          <div v-else style="width: 200px; margin: 50px auto;">
            <v-progress-circular
              :size="200"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </div>
        </div>
        <div class="modal1">
            <div class="modal_content1">
                <div class="modal_content1_inner">
                    <div class="close_md_in">
                        <span class="close_md">&#215;</span>
                    </div>
                    <div class="md1_title">Выберите товар</div>
                    <div class="md_inBtn">
                        <input type="text" class="md1_input" placeholder="Поиск по баркоду, артикулу поставщика, бренду">
                        <div class="btn_more_a">Выбрать</div>
                    </div>
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
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img2.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>XS</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>L</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img3.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>M</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img2.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>M</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
                                </div>
                            </div>
                            <div class="tmd_line">
                                <span><input type="checkbox"></span>
                                <div class="tmd_line_inner">
                                    <span>
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </span>
                                    <span>BRAND</span>
                                    <span>78858215</span>
                                    <span>S</span>
                                    <span>7885821511582</span>
                                    <span>artikul_12941529</span>
                                    <span>271 ₽</span>
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
                </div>
            </div>
        </div>
      <v-dialog
      v-model="isModal"
      transition="dialog-bottom-transition"
      max-width="450"
      >
      <v-card>
        <div class="bg-white rounded-3xl p-2.5 md:p-7">
          <form action="">

          </form>
        </div>
      </v-card>
      </v-dialog>
    </div>

</template>
<script>
  export default {
    components: {},
    data() {
      return {
        isModal: false,
        product: {},
        article1: this.$route.query.article1,
        article2: this.$route.query.article2,
        product1: {},
        product2: {},
        loadingResultsInSearch: true,
        img1: `https://images.wbstatic.net/c246x328/new/${Math.floor(+this.$route.query.article1 / 10000)}0000/${String(this.$route.query.article1)}-1.jpg`,
        userId: 0,

      }
    },
    methods: {
      getStatic(){
        let localDate = new Date();
        let today = new Date();
        localDate = new Date(new Date().getTime() - (31 *86400000));
        localDate = `${localDate.getFullYear()}-${localDate.getMonth()}-${localDate.getDate()}`;
        today= `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

          this.$store.dispatch('request/get_economy', {userId: this.userId, type: 4}).then((x) => {
            if(x.data.success){
              this.product = x.data['product']['products'];
            }
            console.log(this.product);
          })

      },
      getProduct(type, article){

          this.$store.dispatch('request/getCompetition', {userId: this.userId, article1: this.article1, article2: this.article2}).then((x) => {
            if(x.data.success){
              this.product = x.data.product
              if(this.product == {}){

                }
              this.loadingResultsInSearch = false;
            }

          })
          this.$store.dispatch('request/getByArticle', {userId: this.userId, article: this.article1}).then((x) => {

              this.product1 = x.data.product;

          })
          this.$store.dispatch('request/getByArticle', {userId: this.userId, article: this.article2}).then((x) => {

              this.product2 = x.data.product;

          })



      }
    },
    mounted() {
      this.userId = +window.localStorage.getItem("userId");
      this.getStatic();
      this.getProduct();
    },
  }
</script>
