
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
  const incomeNum = getElementById('details-total__income').textContent.parseInt;
  const plusNum = getElementById('details-total__plus').textContent.parseInt;
  const minusNum = getElementById('details-total__minus').textContent.parseInt;

  const outcome = incomeNum + plusNum + minusNum;

  document.getElementById('details-total__outcome').innerHTML(outcome);

}



