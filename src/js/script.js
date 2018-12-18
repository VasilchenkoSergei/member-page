$(document).ready(function(){

$('.page-header__toggle').on('click', function() {
  $('.main-nav').toggleClass('.active');
  $('.main-nav').toggle();
});

 const loadData = function(data, path) {
    const list = $('.account-list__items')
    
    data.forEach(item => {
      const card =
        `<div class="bank-account">
            <p class="bank-account__item bank-account__num">${item.number}</p>
            <p class="bank-account__item bank-account__date">${item.date}</p>
            <p class="bank-account__item bank-account__org">${item.counterparty}<br><span>${item.bank_bik}</span></p>
            <p class="bank-account__item bank-account__reason">${item.appointment}</p>
            <div id="bank-account__summ" class="bank-account__item bank-account__summ">${item.credit} <span>kzt</xpan></div>
        </div>`
      list.append(card)
    })
  }

  $.ajax('https://api.myjson.com/bins/x1x8c')
    .done(data => {
    loadData(data);
  })
    .fail(function() {
    console.log('error');
  })

document.querySelector('.time-block__btn-week').onclick = function() {

  let loadData = function(data) {
    let list = $('.account-list__items')

    list.empty();
    data.forEach(item => {
      let card =
        `<div class="bank-account">
            <p class="bank-account__item bank-account__num">${item.number}</p>
            <p class="bank-account__item bank-account__date">${item.date}</p>
            <p class="bank-account__item bank-account__org">${item.counterparty}<br><span>${item.bank_bik}</span></p>
            <p class="bank-account__item bank-account__reason">${item.appointment}</p>
            <div id="bank-account__summ" class="bank-account__item bank-account__summ">${item.credit} <span>kzt</xpan></div>
        </div>`
      list.append(card)
    })
  }

  $.ajax('https://api.myjson.com/bins/x1x8c')
    .done(data => {
    loadData(data);
  })
    .fail(function() {
    console.log('error');
  })
};

document.querySelector('.time-block__btn-month').onclick = function() {

  let loadData = function(data) {
    let list = $('.account-list__items')

    list.empty();
    data.forEach(item => {
      let card =
        `<div class="bank-account">
            <p class="bank-account__item bank-account__num">${item.number}</p>
            <p class="bank-account__item bank-account__date">${item.date}</p>
            <p class="bank-account__item bank-account__org">${item.counterparty}<br><span>${item.bank_bik}</span></p>
            <p class="bank-account__item bank-account__reason">${item.appointment}</p>
            <div id="bank-account__summ" class="bank-account__item bank-account__summ">${item.credit} <span>kzt</xpan></div>
        </div>`
      list.append(card)
    })
  }

  $.ajax('https://api.myjson.com/bins/fq4io')
    .done(data => {
    loadData(data)
  })
    .fail(function() {
    console.log('error');
  })
};

document.querySelector('.time-block__btn-year').onclick = function() {

  let loadData = function(data) {
    let list = $('.account-list__items')

    list.empty();
    data.forEach(item => {
      let card =
        `<div class="bank-account">
            <p class="bank-account__item bank-account__num">${item.number}</p>
            <p class="bank-account__item bank-account__date">${item.date}</p>
            <p class="bank-account__item bank-account__org">${item.counterparty}<br><span>${item.bank_bik}</span></p>
            <p class="bank-account__item bank-account__reason">${item.appointment}</p>
            <div id="bank-account__summ" class="bank-account__item bank-account__summ">${item.credit} <span>kzt</xpan></div>
        </div>`
      list.append(card)
    })
  }

  $.ajax('https://api.myjson.com/bins/1gp56o')
    .done(data => {
    loadData(data)
  })
    .fail(function() {
    console.log('error');
  })
};



});
