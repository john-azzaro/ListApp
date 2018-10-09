"use strict";

// start page to app page (done)
// list generates (done)
// add to list

const STORE = [
    {name: "apples"},
    {name: "pears"},
    {name: "oranges"},
    {name: "berries"},
];

function generateStartPage() {
    return `
    <div class="css-container">
        <h2>Welcome to the Original Shopping List App!</h2>
        <p>Are you finding it hard to keep track of all the grocery items you need to buy? </p>
        <p>With the Original Shopping App, you'll never forget a thing!</p>
        <p>Some of the amazing features of this app include:</p>
        <ul>        
            <li>Store and keep track of unlimited items.</li>
            <li>Add items to your grocery list</li>
        </ul>
        <p>So what are you waiting for?  Start the shopping app now!</p>
        <button id="start">Get Started!</button>
    </div>
    `
}

function generateAppPage() {
    return `
    <div class="css-container">
        <form id="js-shopping-list-form">
            <label for="shopping-list-entry">Add an item</label>
            <input type="text" name="shopping-list-entry" class="js-shopping-list-entry" placeholder="e.g., broccoli">
            <button type="submit">Add item</button>
        </form>
        <ul class="css-shopping-list js-list">   
        </ul>
    </div>

    `
}

function generateItemElement(item) {
    return `
        <li>
            <span>${item.name}</span>
        </li>
    `
}

function generateListItems(shoppingList) {
    const items = shoppingList.map((item) => generateItemElement(item));
    return items.join("");
}

function renderShoppingList() {
    const listItems = generateListItems(STORE);
    $(".js-list").html(listItems);
}

function renderStartPage() {
    const startPage = generateStartPage();
    $('main').html(startPage);
}

function renderAppPage() {
    const appPage = generateAppPage();
    $('main').html(appPage);
    renderShoppingList();
}

function handleStartPage() {
    $('main').on('click', '#start', function(event) {
        renderAppPage();
    });
}

function handleGoBack() {
    $('main').on('click', '#goback', function(event) {
        renderStartPage();
    });
}
/////// ADD ITEM ////////////////////////////////////////////////////////

function addItemToList(itemName) {
    STORE.push({name: itemName});
  }

function handleNewItemSubmission() {
    $('main').submit('#js-shopping-list-form', function(event) {
      event.preventDefault();
      const newItemName = $('.js-shopping-list-entry').val();
      $('.js-shopping-list-entry').val('');
      addItemToList(newItemName);
      renderShoppingList();
    });
  }
  
///////////////////////////////////////////////////////////////////////

function setUpEventHandlers() {
    handleStartPage();
    handleGoBack();
    handleNewItemSubmission();
}

function initializeApp() {
    setUpEventHandlers();
    renderStartPage();

}

$(initializeApp)