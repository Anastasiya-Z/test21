export let formSubmit = document.querySelector('form');
export let itemsArray = [];
export let todoList = document.querySelector('.toDoContent')
export let itemIdNumber = 0;

export class TodoItem {

    constructor(name) {
        this.name = name;
        let oneItem = document.createElement('li');
        this.oneItem = oneItem;

        let itemText = document.createElement('span');

        itemText.innerHTML = this.name;
        todoList.append(this.oneItem);
        this.oneItem.classList.add('item');
        this.oneItem.append(itemText);
        itemIdNumber++;
        let itemCheck = document.createElement('input');

        this.itemCheck = itemCheck;

        this.itemCheck.setAttribute('id', itemIdNumber);
        this.itemCheck.setAttribute('type', 'checkbox');
        this.itemCheck.classList.add('checkThis');
        this.oneItem.prepend(this.itemCheck);

        let closeBlock = document.createElement('div');

        this.closeBlock = closeBlock;
    }


    createClose(closeBlock) {
        this.closeBlock.classList.add('close');
        this.oneItem.append(this.closeBlock);
        console.log(this.closeBlock)
        this.closeBlock.addEventListener('click', function() {
            this.closest('li').style.display = "none"
        })
    }

    craeteDone() {
        this.itemCheck.addEventListener('click', function() {

            if (this.closest('.item').classList.contains('checkd')) {
                this.closest('.item').classList.remove('checkd');
                console.log('remove class')
            } else {
                this.closest('.item').classList.add('checkd');
                console.log('add class')
            }
        });

    }
}

// import {default} from './second.js';