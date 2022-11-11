<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/sales" class="btn_more_a">Назад</NuxtLink>
                <div class="win_title_s"><span>Главная /</span> Продажи
                </div>
            </div>
            <div class="l2_sales">
                <div class="l2_title_btn">
                    <div class="sales_title">Продажи товаров</div>
                    <div class="btn_more_a">Выгрузить Excel</div>
                </div>
                <div class="sales_params">
                    <div class="today">За сегодня</div>
                    <div class="yesterday">Вчера</div>
                    <div class="week">7 дней</div>
                    <div class="month">Месяц</div>
                </div>
                <div class="sales_sup">В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>дней, за неделю, за месяц
                </div>
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
                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span><img class="bur_sh" src="../../assets/images/shest.svg" alt=""></span>
                    </label>
                    <ul class="menu__box">
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
<style scoped>
#menu__toggle {
            opacity: 0;
        }
    
        #menu__toggle:checked~.menu__btn>span {
            transform: rotate(0);
        }
    
        #menu__toggle:checked~.menu__btn>span::before {
            transform: rotate(0);
        }
    
        #menu__toggle:checked~.menu__btn>span::after {
            transform: rotate(0);
        }
    
        #menu__toggle:checked~.menu__box {
            visibility: visible;
            right: 0;
        }
    
        .menu__btn {
            display: flex;
            align-items: center;
            position: fixed;
            top: 20px;
            right: 20px;
    
            width: 26px;
            height: 26px;
    
            cursor: pointer;
            z-index: 1;
        }
    
        
    
        .menu__btn>span::before {
            content: '';
            top: -8px;
        }
    
        .menu__btn>span::after {
            content: '';
            top: 8px;
        }
    
        .menu__box {
            display: block;
            position: fixed;
            visibility: hidden;
            top: 0;
            right: -100%;
    
            width: 300px;
            height: 100%;
    
            margin: 0;
            padding: 8rem 2rem;
    
            list-style: none;
    
            background-color: #ffffff;
            box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
            border-left: 1px solid grey;
    
            transition: all .3s;
        }

        .menu__box span{
            padding-left: 1rem;
            font-size: 13px;
            font-weight: 700;
        }
    
        .menu__item {
            display: block;
            padding: 12px 24px;
    
            color: #333;
    
            font-size: 20px;
            font-weight: 600;
    
            text-decoration: none;
    
            transition: all .3s;
        }

        .bur_sh{
            height: 1.5rem;
            width: 1.5rem;
        }
</style>
