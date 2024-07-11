describe('Check out an item test on Sauce Demo website', () => {
    const username = 'standard_user';
    const password = 'secret_sauce';

    beforeEach(() => {
        // Visit the website before each test
        cy.visit('https://www.saucedemo.com/v1/');
    });

    it('Logs in, adds items to cart, and verifies the cart', () => {
        // Log in as standard_user
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click();

        // Add first item to the cart
        cy.get('.inventory_item').eq(0).find('button').click();

        //verifying correct item is present on the cart
        cy.get('[href="./cart.html"]').click()
        cy.get('[class="inventory_item_name"]').should('have.text', 'Sauce Labs Backpack')

        //Complete checkout process
        cy.get('[class="btn_action checkout_button"]').click()
        cy.get('#first-name').type('Sadiqul')
        cy.get('#last-name').type('Alam')
        cy.get('#postal-code').type('4314')
        cy.get('[type="submit"]').click()
        cy.get('[href="./checkout-complete.html"]')

    });
});
