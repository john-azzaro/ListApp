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
        <p>Ever gone to grocery store and forgot that critical item for your spaghetti meatsauce?</p>
        <p>With the Original Shopping App, you can do many amazing things, such as:</p>
        <ul>        
            <li>Keep track of your necessary grocery items.</li>
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