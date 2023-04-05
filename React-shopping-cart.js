const searchBarVeg = "Potato";
const searchBarSomethingDoNotExist = "2121";

describe('Testing Veggy Shopping Cart', () => {
    // Testing Webpage load
    it("Webpage loading", () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');

        cy.get('.logo').should('exist');
    });

    // Testing the search bar
    it('Search for a product', () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');

        // Type in search bar for something
        cy.get('.search-keyword').type(searchBarVeg);

        // Click on the search button
        cy.get('.search-button').click();

        // Verify if item exist
        cy.get('.product > .product-name').contains(searchBarVeg);

    });

    // Testing to search for a product that do not exist
    it('Search for a product that do not exist', () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');

        // Type in search bar for something that do not exist
        cy.get('.search-keyword').type(searchBarSomethingDoNotExist);

        // Click on the search button
        cy.get('.search-button').click();

        // Verify if I got an error
        cy.get('.no-results > h2').contains('Sorry');
    });

    // Add every product in the basket
    it('Add every product in the cart', () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');

        //Add every product
        for (let i = 1; i <= 30; i++) {
            cy.get(`:nth-child(${i}) > .product-action > button`).click();
          }

        // Verify that the cart has 30 products
        cy.get(':nth-child(1) > :nth-child(3) > strong').contains('30');
    });

    // Remove a product from the basket
    it('Remove a product from the cart', () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');
    
        //Add a product
        cy.get(`:nth-child(2) > .product-action > button`).click();

        // Click on the basket
        cy.get('.cart-icon > img').click();

        // Remove the product
        cy.get(`:nth-child(1) > .product-remove`).click();

        // Verify the cart is 0
        cy.get(':nth-child(1) > :nth-child(3) > strong').contains('0');
    });

    // Verify if every product has an image
    it('Verify if every product has an image', () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');

        //Loop on each product
        for (let i = 1; i <= 30; i++) {
            cy.get(`:nth-child(${i}) > .product-image > img`).should('exist');
          }

    });

    // Check if price for the first product is the same with the subtotal
    it('Verify the price for the first product is the same with the subtotal', () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');
        

        let productPrice;
        let totalPrice;
        
        // Add an item to the cart
        cy.get(':nth-child(1) > .product-action > button').click();

        // Get the product price
        cy.get(':nth-child(1) > .product-price').invoke('text').then((text) => {
            productPrice = text;
          });

        // Get the subtotal price
        cy.get(':nth-child(2) > :nth-child(3) > strong').invoke('text').then((text) => {
            totalPrice = text;
          });
        
        // Check for the price
        cy.wrap(null).should(() => {
            expect(productPrice).to.equal(totalPrice);
          });

        // Remove the product from cart
        cy.get('.cart-icon > img').click();
        cy.get(`:nth-child(1) > .product-remove`).click();
        cy.get('.cart-icon > img').click();

      });
    
    // Check if the + button works to add quantity on each product
    it("Verify if quantity increase if you press +", () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');
      
        // Add and check each item
        for (let i = 1; i <= 30; i++) {
          cy.get(`:nth-child(${i}) > .stepper-input > .increment`).click();
      
          // Verify the quantity
          cy.get(`:nth-child(${i}) > .stepper-input > .quantity`)
            .should('have.value', '2');
        }
      });

    // Check if the - button works to add quantity on each product
    it("Verify if quantity decrease if you press -", () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');
      
        // Add and 2 for each item
        for (let i = 1; i <= 30; i++) {
          cy.get(`:nth-child(${i}) > .stepper-input > .increment`).click();

          // Remove the item
          cy.get(`:nth-child(${i}) > .stepper-input > .decrement`).click();
      
          // Verify the quantity
          cy.get(`:nth-child(${i}) > .stepper-input > .quantity`)
            .should('have.value', '1');
        }
      });
    
    // Check if the zoom in function works
    it("Verify the zoom function", () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');

        // Click on the image
        cy.get(':nth-child(9) > .product-image > img').click();

        // Verify if the image exist
        cy.get('.quick-view-image > img').should('exist')
    });

    // Check if you can close the zoom in image
    it("Verify the zoom function", () => {
        cy.visit('https://sivadass.github.io/react-shopping-cart/');

        // Click on the image
        cy.get(':nth-child(9) > .product-image > img').click();

        // Verify if the image exist
        cy.get('.quick-view-image > img').should('exist');

        // Close the image
        cy.get('.close').click();

        // Verify if logo is display
        cy.get('.logo').should('be.visible');

    });
});