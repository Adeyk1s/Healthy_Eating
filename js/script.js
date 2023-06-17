require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modalWindow from './modules/modalWindow';
import slider from './modules/slider';
import timer from './modules/timer';
import { openWindow } from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {   

    const modalTimerId = setInterval(()=> openWindow('.modal', modalTimerId), 360000)

    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    calc();
    timer('.timer', '2023-02-10');
    cards();
    forms('form',modalTimerId);
    modalWindow('[data-modal]','.modal', modalTimerId);
    slider({
        container:'.offer__slider',
        slide:'.offer__slide',
        nextSlide:'.offer__slider-next',
        prevSlide:'.offer__slider-prev',
        totalCounter:'#total',
        currentCounter:'#current',
        wrapper:'.offer__slider-wrapper',
        field:'.offer__slider-inner',
    });
});