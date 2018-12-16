const bookCardTemplate = {
  wrap: '.account-list__items',
  tag: 'div',
  tagClass: '.bank-account',
  setContent: function(data) {
    return `<div class="bank-account">
            <p class="bank-account__item bank-account__num">${data.number}</p>
            <p class="bank-account__item bank-account__date">${data.date}</p>
            <p class="bank-account__item bank-account__org">${data.counterparty}<br><span>${data.bank_bik}</span></p>
            <p class="bank-account__item bank-account__reason">${data.appointment}</p>
            <div id="bank-account__summ" class="bank-account__item bank-account__summ">${data.credit}</div>
        </div>`;
  }
}

export default bookCardTemplate;

