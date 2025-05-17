const infoString = document.querySelector('.btn_memo');
const infoConteiner = document.querySelector('#mem');
const infoSchedule = document.querySelector('.button_content_info');
const schedulePoligon = document.querySelector('#poligon');
const btnAvailability = document.querySelector('#btnAvailability');
const infoAvailability = document.querySelector('#availability');

infoString.addEventListener('click', () => {
  infoConteiner.classList.toggle('memo');
  infoConteiner.classList.toggle('hidden');
})

infoSchedule.addEventListener('click', () => {
  schedulePoligon.classList.toggle('schedule');
  schedulePoligon.classList.toggle('hidden');
})

btnAvailability.addEventListener('click', () => {
  infoAvailability.classList.toggle('schedule');
  infoAvailability.classList.toggle('hidden');
})
