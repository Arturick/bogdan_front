<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/">
                    <div class="btn_more_a">Назад</div>
                </NuxtLink>
                <div class="win_title_s"><span>Главная /</span> Продажи и заказы
                </div>
            </div>
            <div class="l2_sales">
                <div class="sales_title">Продажи товаров</div>
                <div class="sales_params">
                    <div class="today">За сегодня</div>
                    <div class="yesterday">Вчера</div>
                    <div class="week">7 дней</div>
                    <div class="month">Месяц</div>
                </div>
                <div class="sales_sup">В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>дней, за неделю, за месяц
                </div>
                <div class="table_cont_md">
                    <div class="table_sales">
                        <div class="table_sales_params">
                            <div class="p_brand">Бренд</div>
                            <div class="p_date">Дата</div>
                            <div class="p_img">Фото</div>
                            <div class="p_name">Наименование</div>
                            <div class="p_art">Артикул</div>
                            <div class="p_count">Продано(шт)</div>
                            <div class="p_sale">Скидка</div>
                            <div class="p_price">Цена со скидкой</div>
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
                                    <div class="i_price">1 350 руб
                                        <NuxtLink to="/sales/sales2" class="arrow_r">
                                            <img  src="../../assets/images/arr_r.svg" alt="">
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand"></div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand"></div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand"></div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand"></div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="l3_sales">
                <div class="sales_title">Заказы товаров</div>
                <div class="sales_params">
                    <div class="today">За сегодня</div>
                    <div class="yesterday">Вчера</div>
                    <div class="week">7 дней</div>
                    <div class="month">Месяц</div>
                </div>
                <div class="sales_sup">В данном разделе вы можете увидеть свой анализ продаж,<br> есть возможные сортировки, за сегодня, за вчера, за 7<br>дней, за неделю, за месяц
                </div>
                <div class="table_cont_md">
                    <div class="table_sales">
                        <div class="table_sales_params">
                            <div class="p_brand">Бренд</div>
                            <div class="p_date">Дата</div>
                            <div class="p_img">Фото</div>
                            <div class="p_name">Наименование</div>
                            <div class="p_art">Артикул</div>
                            <div class="p_count">Продано(шт)</div>
                            <div class="p_sale">Скидка</div>
                            <div class="p_price">Цена со скидкой</div>
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
                                    <div class="i_price">1 350 руб
                                        <NuxtLink to="/sales/sales2" class="arrow_r">
                                            <img  src="../../assets/images/arr_r.svg" alt="">
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand"></div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand"></div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand"></div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                </div>
                                <div class="line_info_sales">
                                    <div class="i_brand"></div>
                                    <div class="i_date">33.03.2033</div>
                                    <div class="i_img">
                                        <img src="../../assets/images/pr_img.svg" alt="">
                                    </div>
                                    <div class="i_name">Футболка женская оверсайз....</div>
                                    <div class="i_art">12312312312</div>
                                    <div class="i_count">3 шт</div>
                                    <div class="i_sale">30%</div>
                                    <div class="i_price">1 350 руб</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>