
window.onload = function() {

  const loadData = function(data) {
    const list = getElementById('account-list__items')
    
    data.forEach(item => {
      const card =
        `<article class="appartments-item" tabindex="0">

        </article>`
      list.appendChild(card)
    })
  }

  $.ajax('https://api.myjson.com/bins/6dbie!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    .done(data => {
    loadData(data)
  })
    .fail(function() {
    alert('error');
  })

};



document.querySelector('.time-block__btn').onclick = function() {

  const loadData = function(data) {
    const list = getElementById('account-list__items')
    
    data.forEach(item => {
      let card =
        `<article class="appartments-item" tabindex="0">

        </article>`
      list.appendChild(card)
    })
  }

  $.ajax('https://api.myjson.com/bins/6dbie!!!!!!!!!!')
    .done(data => {
    loadData(data)
  })
    .fail(function() {
    alert('error');
  })

};

function outcomeCount() {
  const incomeNum = getElementById('details-total__income').innerHTML.parseFloat;
  const plusNum = getElementById('details-total__plus').innerHTML.parseFloat;
  const minusNum = getElementById('details-total__minus').innerHTML.parseFloat;

  const outcome = incomeNum + plusNum + minusNum;

  document.getElementById('details-total__outcome').innerHTML(outcome);

}


const accountSumm = document.querySelectorAll('.bank-account__summ')

