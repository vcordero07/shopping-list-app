// let shoppingList = {
//     items: []
// };
//
// let addItem = function(list, shoppingItems) {
//     return list.items.push(shoppingItems);
// };
//
// let renderList = function(list, element) {
//     let itemsHTML = list.items.map(function(item) {
//         return `<li>
//       <span class="shopping-item">${item}</span>
//       <div class="shopping-item-controls">
//       <button class="shopping-item-toggle"><span class="button-label">check</span></button>
//       <button class="shopping-item-delete"><span class="button-label">delete</span></button>
//       </div>
//       </li>`;
//     });
//     element.html(itemsHTML);
// };
//
// $('#js-shopping-list-form').submit(function(event) {
//     event.preventDefault();
//     addItem(shoppingList, $('#shopping-list-entry').val());
//     renderList(shoppingList, $('.shopping-list'));
//
// });
//
// $(".shopping-item-toggle").click(function() {
//     $(this).addClass('shopping-item__checked');
// });


let shoppingList = 0;

let addItem = function(list, shoppingItems) {
    return list.items.push(shoppingItems);
};

let renderList = function(list, element) {
    let itemsHTML = list.items.map(function(item) {
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
    addItem(shoppingList, $('#shopping-list-entry').val());
    renderList(shoppingList, $('.shopping-list'));

});

$(".shopping-item-toggle").click(function() {
    $(this).addClass('shopping-item__checked');
});

let retrievePopulatedItems = () => {
    //get item from html list
    //console.log( $('.shopping-list').find('.shopping-item'));

    $('.shopping-list').find('.shopping-item').map((ele, ind) => {
        //console.log(ele, ind);
        //console.log($(ind));
        //console.log($(ind)[0].classList.value);


        console.log($(ind)[0].innerHTML);
        console.log($(ind)[0].classList.value.length === 36 && $(ind)[0].classList.value.slice(-22) === 'shopping-item__checked' ? true : false);
        return shoppingList = {
            name: $(ind)[0].innerHTML,
            check: $(ind)[0].classList.value.length === 36 && $(ind)[0].classList.value.slice(-22) === 'shopping-item__checked' ? true : false
        }
    });

};

let init = () => {
    $(retrievePopulatedItems);
    console.log("test", shoppingList);
}

$(init);
