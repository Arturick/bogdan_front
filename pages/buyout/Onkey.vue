<template>
     <div class="md:container md:mx-auto">
        <div class="bg-white rounded-3xl mt-2.5 mx-2.5 p-7 pb-20">
            <div class="button_inform">
                <button class="btn_back">Назад</button>
                <p><span class="black_l1">Главная&ensp;/&ensp;Выкупы&ensp;/</span> &ensp;Планирование</p>
            </div>
            <div class="buyout_title">Калькулятор выкупов для Wildberries</div>
            <div class="buy_sup">Укажите артикул и несколько поисковых запросов, по которым планируете продвигать<br> совой товар и за парцу минут получите полный отчет о конкурентах, объеме выручке в<br> ТОП и план выкупов по дням!
            </div>
            <div class="buy_sup">
                Расчет сопровождается графиком заказов по каждому поисковому запросу за последние<br>60 дней. Это поможет сделать выводы о рентабельности продвижения. А так же доступна<br> быстрая выгрузка каждого отчета в Excel
            </div>
            <div class="lower_inputs_buyout">
                <input type="text" class="art_1_buy" placeholder="Введите артикул">
                <input type="text" class="art_1_buy" placeholder="Введите артикул">
                <div class="select-wrapper">
                    <select>
                        <option>---</option>
                        <option selected>Топ 5</option>
                        <option>Топ 10</option>
                        <option>Топ 15</option>
                    </select>
                    <span>
                        <svg width="1.2rem" height="1rem" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1L7.5 7L1 0.999999" stroke="black" stroke-width="2"/>
                        </svg>
                    </span>
                </div>
                <button class="btn_l2_add">Далее</button>
            </div>
           
        </div>
     </div>
</template>

