//-to load the items of the html into an arrary of objects, the shoppingList
//- be able to add to that list
//-pass that info in a html type into the site and load to the end of list
//-be able to check items and uncheck them
//-be able to delete item from the list
console.clear();

let shoppingList;


let addItem = shoppingItem => {
    shoppingList.unshift({
        name: shoppingItem,
        check: false
    });
};


let getArrayOfItemsComponents = () => {

    return shoppingList.map((ele, ind) => {
        const shoppingItemClass = ele.check ? 'shopping-item__checked' : null;
        return `<li>
        <span class="shopping-item ${shoppingItemClass}">${ele.name}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
        </div>
        </li>`;

    });
};


let renderList = () => {
    const list = getArrayOfItemsComponents();
    //console.log(list);
    const ele = $('.shopping-list');
    //console.log(ele);
    ele.html(list);
};


$('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let input = $('#shopping-list-entry');
    let inputValue = input.val();

    if ((inputValue !== '') && ($.trim(inputValue) !== '')) {
        addItem(inputValue);
        renderList();
        console.log(shoppingList);
    }

    input.val('');
});


$('.shopping-item-toggle').on('click', 'span', event => {
    //event.stopPropagation();
    let item = $(event.currentTarget).closest('li').find('.shopping-item').html();
    console.log(item);
    // $($(this).closest('li')[0]).find('.shopping-item').toggleClass('shopping-item__checked');
    shoppingList = shoppingList.map((ele, ind) => {
        console.log(ele);
        return {
            name: ele.name,
            check: ele.name === item ? !ele.check : ele.check
        };
    });

    //getArrayOfItemsComponents();
    renderList();
    console.log(shoppingList);
});

$('.shopping-item-delete').click(event => {
    $(this).remove();
});


let retrievePopulatedItems = () => {
    return $('.shopping-list').find('.shopping-item').map((ind, ele) => {
        return {
            name: $(ele).html(),
            check: $(ele).hasClass('shopping-item__checked')
        }
    });
};

let init = () => {
    shoppingList = retrievePopulatedItems().get();
}

$(init);

// //---------------------------
// //other version//
//
// console.clear();
//
// //let shoppingList = ['apples', 'oranges', 'bread', 'milk'];
// let shoppingList = [];
//
// let addItem = function(list, shoppingItems) {
//     console.log('list:', list);
//     //console.log(shoppingItems);
//     return list.push(shoppingItems);
// };
//
// let renderList = function(list, element) {
//     let itemsHTML = list.map(function(item) {
//         return `<li>
//       <span class="shopping-item">${item}</span>
//       <div class="shopping-item-controls">
//       <button class="shopping-item-toggle"><span class="button-label">check</span></button>
//       <button class="shopping-item-delete"><span class="button-label">delete</span></button>
//       </div>
//       </li>`;
//     });
//     element.prepend(itemsHTML);
// };
//
// $('#js-shopping-list-form').submit(function(event) {
//     event.preventDefault();
//     let input = $('#shopping-list-entry').val();
//     if ((input !== '') && ($.trim(input) !== '')) {
//         console.log('list entry value:', $('#shopping-list-entry').val());
//         addItem(shoppingList, $('#shopping-list-entry').val());
//         console.log('shopppingList: ', shoppingList);
//         renderList(shoppingList, $('.shopping-list'));
//     }
//     $('#shopping-list-entry').val('');
// });
//
// $('.shopping-item-toggle').on('click', 'span', function(event) {
//     //event.stopPropagation();
//     //event.preventDefault();
//     console.log('item-toggle: ', event);
//     $($(this).closest('li')[0]).find('.shopping-item').toggleClass('shopping-item__checked');
// });
//
//
// $('.shopping-item-delete').click(function() {
//     $(this).closest('li').remove();
// });
