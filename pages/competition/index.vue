<template>
    <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="l1_sales">
                <NuxtLink to="/">
                    <div class="btn_more_a">Назад</div>
                </NuxtLink>
                <div class="win_title_s"><span>Главная /</span> Конкуренция</div>
            </div>
            <div class="sales_title">Сравните свои товары</div>
            <div class="comp_sup">В данном разделе вы можете 4 сравнить свои товары с<br> товарами конкурентов (по цене, по позициям в выдаче и<br>  отображению в ключевых запросах).
            </div>
            <div class="comparison_prs">
                <div class="comp_my">
                    <div class="comp_my_title">
                        1. Выберите свои товары
                    </div>
                    <div class="btns_inps_my">
                        <input type="text" class="inp_my_comp" placeholder="Введите артикул или ссылку на товар">
                        <div class="btn_more_a">ПО API</div>
                        <div class="btn_more_a">Добавить</div>
                    </div>
                    <div class="minTable_my">
                        <div class="minTable_my_params">
                            <div class="minTable_my_param">Фото</div>
                            <div class="minTable_my_param">Бренд</div>
                            <div class="minTable_my_param">Артикул</div>
                            <div class="minTable_my_param">Цена WB</div>
                        </div>
                        <div class="line_pr_myMin">
                            <div class="myMin_inner">
                                <span><img src="../../assets/images/pr_img.svg" alt="">
                                </span>
                                <span>BRAND</span>
                                <span>78858215</span>
                                <span>271 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comp_other">
                    <div class="comp_my_title">
                        2. Выберите товары конкурентов
                    </div>
                    <div class="btns_inps_my">
                        <input type="text" class="inp_my_comp" placeholder="Введите артикул или ссылку на товар">
                        <div class="btn_more_a">Добавить</div>
                    </div>
                    <div class="minTable_my">
                        <div class="minTable_my_params">
                            <div class="minTable_my_param">Фото</div>
                            <div class="minTable_my_param">Бренд</div>
                            <div class="minTable_my_param">Артикул</div>
                            <div class="minTable_my_param">Цена WB</div>
                        </div>
                        <div class="line_pr_myMin">
                            <div class="myMin_inner">
                                <span><img src="../../assets/images/pr_img.svg" alt="">
                                </span>
                                <span>BRAND</span>
                                <span>78858215</span>
                                <span>271 ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn_cont_s3">
                <div class="btn_more_a">
                    <NuxtLink to="/competition/competition2">Далее</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>