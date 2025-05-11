const infoString = document.querySelector('.btn_memo');
const infoConteiner = document.querySelector('#mem');
const infoSchedule = document.querySelector('.button_content_info');
const schedulePoligon = document.querySelector('#poligon');

infoString.addEventListener('click', () => {
  infoConteiner.classList.toggle('memo');
  infoConteiner.classList.toggle('hidden');
})

infoSchedule.addEventListener('click', () => {
  schedulePoligon.classList.toggle('schedule');
  schedulePoligon.classList.toggle('hidden');
})
