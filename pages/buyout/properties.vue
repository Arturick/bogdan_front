<template>
    <div class="md:container md:mx-auto">
        <div class="card_container">
            <div class="up_cards_props">
                <div class="card_inner">
                    <div class="card_pr">
                        <div class="card_title">💳 1 000 000 ₽</div>
                        <img src="../../static/images/questions.svg" alt="">
                    </div>
                    <div class="card_sup">Баланс на выкупы</div>
                    <button class="btn_l2_add">Пополнить</button>
                </div>
            </div>
            <div class="up_cards_props">
                <div class="card_inner">
                    <div class="card_pr">
                        <div class="card_title">👤 23 560 ₽</div>
                        <img src="../../static/images/questions.svg" alt="">
                    </div>
                    <div class="card_sup">Баланс ЛК</div>
                    <button class="btn_l2_add">Пополнить</button>
                </div>
            </div>
            <div class="up_cards_props">
                <div class="card_inner">
                    <div class="card_pr">
                        <div class="card_title">🛒 998 шт.</div>
                        <img src="../../static/images/questions.svg" alt="">
                    </div>
                    <div class="card_sup">Доступно выкупов</div>
                    <button class="btn_l2_add">Пополнить</button>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="history_title">История операций</div>
            <div class="history_lines">
                <div class="hi_line1">
                    <div class="hi_line1_inner">
                        <div class="hi_day">
                            <span>20.07.2022</span> 
                        </div>
                        <div class="hi_info">
                            <img src="../../assets/images/pr_img.svg" alt="">
                            <div class="hi_info_txt">
                                <span>Наименование</span>
                                <span>Артикул</span>
                                <span>Цвет</span>
                            </div>
                        </div>
                        <div class="hi_price1">-3 977 ₽</div>
                        <div class="hi_btn">
                            Детали
                            <img src="../../static/images/minus_det.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="hi_line2">
                    <div class="hi_line2_inner">
                        <div class="hi_day">
                            <span>20.07.2022</span> 
                        </div>
                        <div class="hi_info">
                            <span>Покупка товара</span>
                        </div>
                        <div class="hi_price1">-3 977 ₽</div>
                        <div class="hi_btn">
                            Детали
                            <img src="../../static/images/plus_det.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="hi_line2">
                    <div class="hi_line2_inner">
                        <div class="hi_day">
                            <span>20.07.2022</span> 
                        </div>
                        <div class="hi_info">
                            <span>Покупка товара</span>
                        </div>
                        <div class="hi_price1">-15 950 ₽</div>
                        <div class="hi_btn">
                            Детали
                            <img src="../../static/images/plus_det.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="hi_line4">
                    <div class="hi_line2_inner">
                        <div class="hi_day">
                            <span>20.07.2022</span> 
                        </div>
                        <div class="hi_info">
                            <span>Покупка товара</span>
                        </div>
                        <div class="hi_price1">23 666₽</div>
                        <div class="hi_btn">
                            Детали
                            <img src="../../static/images/plus_det.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="hi_line2">
                    <div class="hi_line2_inner">
                        <div class="hi_day">
                            <span>20.07.2022</span> 
                        </div>
                        <div class="hi_info">
                            <span>Покупка товара</span>
                        </div>
                        <div class="hi_price1">-4 725 ₽</div>
                        <div class="hi_btn">
                            Детали
                            <img src="../../static/images/plus_det.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="hi_line2">
                    <div class="hi_line2_inner">
                        <div class="hi_day">
                            <span>20.07.2022</span> 
                        </div>
                        <div class="hi_info">
                            <span>Покупка товара</span>
                        </div>
                        <div class="hi_price1">-16 635 ₽</div>
                        <div class="hi_btn">
                            Детали
                            <img src="../../static/images/plus_det.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal1">
            <div class="modal_content1">
                <div class="modal_content1_inner">
                    <div class="md1_title">Пополнить средств<br> на выкупы</div>
                    <input type="text" class="md1_input" placeholder="Сумма" value="10 000 ₽">
                    <div class="md1_pay">Способы оплаты</div>
                    <button class="btn_back">Счет для юр.лиц</button>
                </div>
            </div>
        </div>
        <div class="modal2">
            <div class="modal_content1">
                <div class="modal_content1_inner">
                    <div class="md1_title">Пополнить баланс<br> на услуги</div>
                    <input type="text" class="md1_input" placeholder="Сумма" value="10 000 ₽">
                    <input type="text" class="md1_input" placeholder="Промокод" value="">
                    <div class="md1_pay">Способы оплаты</div>
                    <button class="btn_l2_add">Пополнить</button>
                    <button class="btn_back">Счет для юр.лиц</button>
                    <img src="../../static/images/cards_icons.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    
</template>