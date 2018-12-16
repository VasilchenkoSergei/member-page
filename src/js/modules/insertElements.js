import createElement from './createElement.js'
import bookCardTemplate from './bookCardTemplate.js'

function insertElements(booksArr, template) {

        booksArr.forEach(book => {
          const card = createElement(book, template);
          const wrap = document.querySelector(bookCardTemplate.wrap);

          wrap.appendChild(card);
        })
      }

export default insertElements;