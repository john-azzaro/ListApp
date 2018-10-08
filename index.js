"use strict";

function generateAppPage() {
    return `
    <div class="css-container">
        <h2>The Original Shopping List App</h2>
        <form id="js-form">
            <label for="list-entry">Add an Item: </label>
            <input type="text" name="list-entry" class="js-list-entry" placeholder="e.g., kale">
            <button type="submit">Add Item</button>
        </form>
        <ul class="css-shopping-list js-list">
        <p>Shopping items go here</p>
        </ul>
        <button id="goback">Go back</button>
    </div>
    `
}

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

function renderStartPage() {
    $('main').html(generateStartPage);
}

function renderAppPage() {
    $('main').html(generateAppPage);
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

function setUpEventHandlers() {
    handleStartPage();
    handleGoBack();
}

function initializeApp() {
    setUpEventHandlers();
    renderStartPage();
}

$(initializeApp)