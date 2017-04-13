console.clear();

const classes = {
    SHOPPING_ITEM: '.shopping-item',
    SHOPPING_ITEM_CHECKED: 'shopping-item__checked',
    SHOPPING_LIST: '.shopping-list'
};

let shoppingList;

let addItem = shoppingItem => {
    shoppingList.unshift({
        name: shoppingItem,
        check: false
    });
};

let deleteItem = shoppingItem => {
    shoppingList = shoppingList.filter((ele, ind) => ele.name !== shoppingItem);
}

let renderList = () => {
    const list = getArrayOfItemsComponents();
    const ele = $(classes.SHOPPING_LIST);
    ele.html(list);
};

let getArrayOfItemsComponents = () => {
    return shoppingList.map((ele, ind) => {
        const shoppingItemClass = ele.check ? classes.SHOPPING_ITEM_CHECKED : null;
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

let getPopulatedItems = () => {
    return $(classes.SHOPPING_LIST).find(classes.SHOPPING_ITEM).map(function(ind, ele) {
        return {
            name: $(ele).html(),
            check: $(ele).hasClass(classes.SHOPPING_ITEM_CHECKED)
        }
    });
};

let initializeEvents = () => {
    $('body').on('click', '.shopping-item-toggle', event => {
        let item = $(event.currentTarget).closest('li').find(classes.SHOPPING_ITEM).html();

        shoppingList = shoppingList.map((ele, ind) => {
            return {
                name: ele.name,
                check: ele.name === item ? !ele.check : ele.check
            };
        });
        renderList();
    });

    $('body').on('click', '.shopping-item-delete', event => {
        let item = $(event.currentTarget).closest('li').find(classes.SHOPPING_ITEM).html();
        deleteItem(item);
        renderList();
    });

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

};


let init = () => {
    shoppingList = getPopulatedItems().get();
    initializeEvents();
}

$(init);
