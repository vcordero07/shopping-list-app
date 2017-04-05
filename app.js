let shoppingList = {
    items: []
};

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
