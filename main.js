import './style.scss';

import  {formSubmit} from './js/utils/base.js';
import  {itemsArray} from './js/utils/base.js';
import  {todoList} from './js/utils/base.js';
import  {itemIdNumber} from './js/utils/base.js';

import {TodoItem} from './js/utils/base.js';

formSubmit.addEventListener('submit', function(e) {

    let newItem = document.querySelector('input').value

    if (newItem.length < 1) {
        e.preventDefault();
    } else {
        e.preventDefault();
        let toItem = new TodoItem(newItem);
        toItem.createClose();
        toItem.craeteDone();
        document.querySelector('input').value = ''
    }

});

console.log(123);