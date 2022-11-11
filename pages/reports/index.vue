<template>
    <section class="content">
        <div class="wrap content__wrap">
            <div class="content__group content__group_1">
                <div class="reports content-box">
                    <div class="reports__group reports__group_0">
                        <div class="content-action">
                            <ul class="breadcrumbs">
                                <li class="breadcrumbs__item">
                                    <nuxt-link to="/" class="but but_3">Назад</nuxt-link>
                                </li>
                                <li class="breadcrumbs__item">
                                    <nuxt-link to="/" class="breadcrumbs__link">Главная</nuxt-link>
                                </li>
                                <li class="breadcrumbs__item">
                                    Отчёты
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="reports__group reports__group_1">
                        <ul class="reports__items reports__items_content">
                            <li class="report-box report-box_content report-box_color_1">
                                <nuxt-link to="reports/report_1" class="report-box__link">Отчет о выкупленных товарах ></nuxt-link>
                                <span class="report-box__desc">ВЫКУПЫ</span>
                            </li>
                            <li class="report-box report-box_content report-box_color_2">
                                <nuxt-link to="reports/report_1" class="report-box__link">Отчет о забраных товарах ></nuxt-link>
                                <span class="report-box__desc">ОТЗЫВЫ</span>
                            </li>
                            <li class="report-box report-box_content report-box_color_3">
                                <nuxt-link to="reports/report_1" class="report-box__link">Отчет об опубликованных отзывах ></nuxt-link>
                                <span class="report-box__desc">ЗАКАЗЫ</span>
                            </li>
                            <li class="report-box report-box_content report-box_color_4">
                                <nuxt-link to="reports/report_1" class="report-box__link">Товары на нашем складе ></nuxt-link>
                                <span class="report-box__desc">СКЛАД</span>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>