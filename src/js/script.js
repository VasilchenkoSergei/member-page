$(document).ready(function(){

$('.page-header__toggle').on('click', function() {
  $('.main-nav').toggleClass('.active');
  $('.main-nav').toggle();
});

 const loadData = function(data) {
    const list = $('.account-list__items')
    
    data.forEach(item => {
      const card =
        `<div class="bank-account">
            <p class="bank-account__item bank-account__num">${item.number}</p>
            <p class="bank-account__item bank-account__date">${item.date}</p>
            <p class="bank-account__item bank-account__org">${item.counterparty}<br><span>${item.bank_bik}</span></p>
            <p class="bank-account__item bank-account__reason">${item.appointment}</p>
            <div id="bank-account__summ" class="bank-account__item bank-account__summ">${item.credit}</div>
        </div>`
      list.append(card)
    })
  }

  $.ajax('https://api.myjson.com/bins/x1x8c')
    .done(data => {
    loadData(data)
  })
    .fail(function() {
    alert('error');
  })

});



// function outcomeCount() {
//   const incomeNum = parseFloat(document.getElementById('details-total__income').innerHTML.replace(/\s/g, ''));
//   const plusNum = parseFloat(document.getElementById('details-total__plus').innerHTML.replace(/\s/g, ''));
//   const minusNum = parseFloat(document.getElementById('details-total__minus').innerHTML.replace(/\s/g, ''));

//   const outcome = incomeNum + plusNum + minusNum;

// return  document.getElementById('details-total__outcome').innerHTML = outcome;

// }
// outcomeCount();


// function addCount() {
//   if (document.readyState === "complete") {
//   const bankNum = parseFloat(document.getElementById('bank-account__summ').innerHTML.replace(/\s/g, ''));

//   return console.log(bankNum);
// }

// else {
//   alert('pepe');
// }
//   // if (bankNum > 0) {
//   //   bankNum.style.color="red";
//   // }
//   // else if (bankNum < 0) {

//   // }
//   // else {}
// return console.log(bankNum);

// }

// addCount();



//   let xhr = new XMLHttpRequest;
//   xhr.open('GET', 'https://api.myjson.com/bins/1b06bs');
//   xhr.send();

//   xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status === 200) {
      
//       // const item = 0;

//       const request = JSON.parse(xhr.responseText);
//       const template = `<div class="bank-account">
//             <p class="bank-account__item bank-account__num">${item.number}</p>
//             <p class="bank-account__item bank-account__date">${item.date}</p>
//             <p class="bank-account__item bank-account__org">${item.counterparty}<br><span>${item.bank_bik}</span></p>
//             <p class="bank-account__item bank-account__reason">${item.appointment}</p>
//             <div id="bank-account__summ" class="bank-account__item bank-account__summ">${item.credit}</div>
//         </div>`

//         document.getElementById('account-list__items').innerHTML = template;
//   }
// }
























// import insertElements from './modules/insertElements.js';
// import bookCardTemplate from './modules/bookCardTemplate.js';
// import sendRequest from './modules/sendRequest.js';


// //////////////////////NEW/////////////
// sendRequest(createDataAjax());

// //Вешаем слушатель на табы
// const btn = document.getElementById('.details__btn-save');

// function click() {

//   btn.addEventListener('click', function(event) {
//     event.preventDefault();

//     const dataAjax = createDataAjax();
//     sendRequest(dataAjax);
//   });

// };

// // Функция подготовки url для GET запроса
// function createDataAjax() {
//   return `https://api.myjson.com/bins/x1x8c`;
// }