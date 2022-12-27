<template>
            <div class="burger_salse">
                <div class="hamburger-menu1">
                    <ul class="menu__box1">
                        <div class="b_close" @click="close_burger">
                            <span>&#215;</span>
                        </div>
                        <li><input type="checkbox" name="" @click="checkBox({'text': 'Брэнд', 'value': 'brand', 'sortable': true})"  checked><span>Бренд</span></li>
                        <li><input type="checkbox" name="" @click="checkBox({'text': 'Дата', 'value': 'date_seller', 'sortable': true})" checked><span>Дата</span></li>
                        <li><input type="checkbox" name=""  @click="checkBox({'text': 'Фото', 'value': 'img', 'sortable': false})" checked><span>Фото</span></li>
                        <li><input type="checkbox" name=""  @click="checkBox({'text': 'Наименование', 'value': 'naming', 'sortable': false})" checked><span>Наименование</span></li>
                        <li><input type="checkbox" name="" @click="checkBox({'text': 'Артикул', 'value': 'article', 'sortable': false})" checked><span>Артикул</span></li>
                        <li><input type="checkbox" name="" @click="checkBox({'text': 'Баркод', 'value': 'barcode', 'sortable': false})" ><span>Баркод</span></li>
                        <li><input type="checkbox" name="" @click="checkBox({'text': 'Категория', 'value': 'category', 'sortable': false})" ><span>Категория</span></li>
                        <li><input type="checkbox" name="" @click="checkBox( {'text': 'Размер', 'value': 'size', 'sortable': false})" ><span>Размер</span></li>
                        <li><input type="checkbox" name="" @click="checkBox( {'text': 'Заказано(шт)', 'value': 'cnt', 'sortable': false})"  checked><span>Заказано(шт)</span></li>
                        <li><input type="checkbox" name="" @click="checkBox({'text': 'Цена', 'value': 'price', 'sortable': false})"  checked><span>price</span></li>
                        <li><input type="checkbox" name="" @click="checkBox( {'text': 'Комиссия', 'value': 'coms', 'sortable': false})" ><span>Комиссия</span></li>
                        <li><input type="checkbox" name="" @click="checkBox( {'text': 'Регион', 'value': 'region', 'sortable': false})" ><span>Регион</span></li>
                        <li><input type="checkbox" name="" @click="checkBox({'text': 'ПВЗ', 'value': 'pwz', 'sortable': false})" ><span>Склад</span></li>
                        <li><input type="checkbox" name="" @click="checkBox({'text': 'Номер Поставки', 'value': 'srid', 'sortable': false})" ><span>Номер поставки</span></li>
                        <!-- <li><input type="checkbox" name=""  v-model="checkBox.brand" checked><span>Бренд</span></li>
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
                        <li><input type="checkbox" name=""  v-model="checkBox.srid"><span>Номер поставки</span></li> -->
                    </ul>
                </div>
            </div>
</template>
<script>
export default{
    name: "burger_salse",
    props: {
      checkBox: function () {}
    },
    data() {
        return{}
    },
    computed: {},
    methods: {
        close_burger(){
            this.$emit('close_burger')
        }
    }
}
</script>
<style>
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
    /* visibility: hidden; */
    bottom: 0;
    right: 0;

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

.menu__box1 span {
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

.bur_sh {
    height: 1.5rem;
    width: 1.5rem;
}

.b_close span{
    width: 20px;
    height: 20px;
    font-size: 35px;
    font-weight: 600;
    padding: 0;
    cursor: pointer;
}
</style>
