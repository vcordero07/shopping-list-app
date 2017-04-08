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

let shoppingList = ['apples', 'oranges', 'bread', 'milk'];


// console.log(shoppingList);
// console.log(Object.keys(shoppingList));
// console.log(Object.keys(shoppingList)[0]);

let addItem = function(list, shoppingItems) {
    console.log(list);
    console.log(shoppingItems);
    return list.push(shoppingItems);
};

let renderList = function(list, element) {
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
    //$('.shopping-item').closest('span.shopping-item').toggleClass('shopping-item__checked');
    //$(this).closest('span.shopping-item').toggleClass('shopping-item__checked');
    //console.log($(event.currentTarget)[0].parentElement.previousElementSibling);
    $(this).closest('li').find('shopping-item').toggleClass('shopping-item__checked');
    //$(this).parentElement.previousElementSibling.toggleClass('shopping-item__checked');
    //console.log($(this));
    //console.log($( 'button.shopping-item-toggle').closest( 'span' ).toggleClass('shopping-item__checked'));
});


$('.shopping-item-delete').on('click', 'li', event => {
    //event.stopPropagation();
    //$(this).closest('li').remove();
    $(this).remove();
});


// let retrievePopulatedItems = () => {

//   //get item from html list
//   //console.log( $('.shopping-list').find('.shopping-item'));
//    let obj;
//   $('.shopping-list').find('.shopping-item').map((ele, ind) => {
//     //console.log(ele, ind);

//     //console.log($(ind));
//     //console.log($(ind)[0]);
//     console.log(ele);

//     //console.log($(ind)[0].classList.value);

//     obj = {
//       name: $(ind)[0].innerHTML,
//       check: $(ind)[0].classList.value.length === 36 && $(ind)[0].classList.value.slice(-22) === 'shopping-item__checked' ? true : false
//     };

//     console.log($(ind)[0].innerHTML);
//     console.log($(ind)[0].classList.value.length === 36 && $(ind)[0].classList.value.slice(-22) === 'shopping-item__checked' ? true : false  );

//   }) ;
//   console.log(obj);
//          return obj;
// };

// let init = () => {

//   $(retrievePopulatedItems);
//   console.log(`test: ${shoppingList}`);
// }

// $(init);
