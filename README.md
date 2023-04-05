# React-Shopping-Cart-Testing

This repository contains automated tests for the Veggy Shopping Cart web application. These tests were written using Cypress, a JavaScript end-to-end testing framework.

## Prerequisites

Node.js installed on your local machine.
A web browser compatible with the Veggy Shopping Cart web application.

## Setup

1. Clone this repository to your local machine.
2. Install the dependencies by running **npm install** in the project directory.
3. Open the Cypress Test Runner by running **npx cypress open**.
4. Click on any of the test files in the **integration** folder to run them.

## Test Cases

**Webpage loading**: Tests if the webpage loads successfully.
**Search for a product**: Tests if a product can be found using the search bar.
**Search for a product that do not exist**: Tests if the appropriate message is displayed when searching for a product that does not exist.
**Add every product in the cart**: Tests if all products can be added to the cart.
**Remove a product from the cart**: Tests if a product can be removed from the cart.
**Verify if every product has an image**: Tests if every product has an associated image.
**Verify the price for the first product is the same with the subtotal**: Tests if the price of the first product in the cart matches the subtotal.
**Verify if quantity increase if you press +**: Tests if the quantity of each product increases when the + button is pressed.
**Verify if quantity decrease if you press -**: Tests if the quantity of each product decreases when the - button is pressed.

Each test file is located in the **cypress/integration** folder and named after the test case it covers.

## Variables

**searchBarVeg**: A string containing the name of a product that exists in the Veggy Shopping Cart.
**searchBarSomethingDoNotExist**: A string containing a value that does not exist in the Veggy Shopping Cart.

## Usage

This repository contains automated tests for the Veggy Shopping Cart web application. These tests can be run using Cypress. To run the tests, follow the setup instructions above and run **npx cypress open**. Click on any of the test files in the **integration** folder to run them.
