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

let deleteItem = shoppingItem => {
    shoppingList.shift({
        name: shoppingItem
    })
}

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
    const ele = $('.shopping-list');
    ele.html(list);
};

$('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let input = $('#shopping-list-entry');
    let inputValue = input.val();

    if ((inputValue !== '') && ($.trim(inputValue) !== '')) {
        addItem(inputValue);
        renderList();
    }

    input.val('');
});

$('body').on('click', '.shopping-item-toggle', event => {
    //$('body').delegate( '.shopping-item-toggle', 'click', function(event) {
    //event.stopPropagation();
    let item = $(event.currentTarget).closest('li').find('.shopping-item').html();

    shoppingList = shoppingList.map((ele, ind) => {
        return {
            name: ele.name,
            check: ele.name === item ? !ele.check : ele.check
        };
    });
    renderList();
}); //.change();

$('body').on('click', '.shopping-item-delete', event => {
    let item = $(event.currentTarget).closest('li').find('.shopping-item').html();
    deleteItem(item);
    $(event.currentTarget).closest('li').remove();
});

let retrievePopulatedItems = () => {
    return $('.shopping-list').find('.shopping-item').map(function(ind, ele) {
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
