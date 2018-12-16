import bookCardTemplate from './bookCardTemplate.js'

function createElement(book) {
          const card = document.createElement('div');
          card.classList.add('bank-account');

          card.innerHTML = bookCardTemplate.setContent(book);
                    
          return card;
      }

export default createElement;