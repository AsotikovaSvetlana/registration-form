export const days = Array.from(new Array(31), (el, index) => ++index);

export const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export const years = Array.from(new Array(120), (el, index) => (new Date()).getFullYear() - index);