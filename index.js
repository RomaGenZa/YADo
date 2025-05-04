const infoString = document.querySelector('.btn_memo');
const infoConteiner = document.querySelector('#mem');

infoString.addEventListener('click', () => {
  infoConteiner.classList.toggle('memo');
})
