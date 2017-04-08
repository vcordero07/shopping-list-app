//-to load the items of the html into an arrary of objects, the shoppingList
//- be able to add to that list
//-pass that info in a html type into the site and load to the end of list
//-be able to check items and uncheck them
//-be able to delete item from the list
console.clear();

// let shoppingList = {
//   apples: {
//     name: 'apples',
//     check: false
//   },
//   oranges: {
//     name: 'oranges',
//     check: false
//   },
//   bread: {
//     name: 'bread',
//     check: false
//   },
//   milk: {
//     name: 'milk',
//     check: true
//   }
// };

let shoppingList;
//let shoppingList = ['apples', 'oranges', 'bread', 'milk'];


// console.log(shoppingList);
// console.log(Object.keys(shoppingList));
// console.log(Object.keys(shoppingList)[0]);

let addItem = function(list, shoppingItems) {
    console.log(list);
    console.log(shoppingItems);
    return list.push(shoppingItems);
};

let renderList = function(list, element) {
    console.log(list, element);
    let itemsHTML = list.map(function(item) {
        return `<li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
      <button class="shopping-item-toggle"><span class="button-label">check</span></button>
      <button class="shopping-item-delete"><span class="button-label">delete</span></button>
      </div>
      </li>`;
    });
    element.html(itemsHTML);
};

$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let input = $('#shopping-list-entry');
    let inputValue = input.val();
    if ((inputValue !== '') && ($.trim(inputValue) !== '')) {
        addItem(shoppingList, inputValue);
        renderList(shoppingList, $('.shopping-list'));
    }
    input.val('');
});

$('.shopping-item-toggle').click(function(event) {
    event.stopPropagation();
    let item = $(this).closest('li').find('span.shopping-item').html()
    console.log(shoppingList);
    shoppingList = shoppingList.map((ind, ele) => {
        console.log(ind);
        console.log(ele);
        console.log({
            name: ele[ind].name,
            check: ele[ind].name === item ? !ele[ind].check : ele[ind].check
        });
        return {
            name: ele.name,
            check: ele.name === item ? !ele.check : ele.check
        };
    });
    renderList(shoppingList, $('.shopping-list')[0]);
    console.log(shoppingList);
    //$(this).closest('li').find('shopping-item').toggleClass('shopping-item__checked');
    //console.log($(this));
    //console.log($($(this).closest('li')[0]).find('.shopping-item').toggleClass('shopping-item__checked'));
});


$('.shopping-item-delete').click(event => {
    //event.stopPropagation();
    //$(this).closest('li').remove();
    console.log($(this));
    $(this).remove();
});


let retrievePopulatedItems = () => {

    //get item from html list
    //The index is only reverse when using $() in jQuery .map
    return $('.shopping-list').find('.shopping-item').map((ind, ele) => {

        return {
            name: $(ele).html(),
            //check: $(ind)[0].classList.value.length === 36 && $(ind)[0].classList.value.slice(-22) === 'shopping-item__checked' ? true : false
            check: $(ele).hasClass('shopping-item__checked')
        }
    });
};

let init = () => {
    shoppingList = retrievePopulatedItems();
    //console.log(shoppingList);
}

$(init);
