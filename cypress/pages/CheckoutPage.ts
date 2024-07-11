class CheckoutPage {
    enterFirstName(firstName: string) {
        cy.get('#first-name').type(firstName);
    }

    enterLastName(lastName: string) {
        cy.get('#last-name').type(lastName);
    }

    enterPostalCode(postalCode: string) {
        cy.get('#postal-code').type(postalCode);
    }

    submit() {
        cy.get('[type="submit"]').click();
    }

    completeCheckout() {
        cy.get('[href="./checkout-complete.html"]').click();
    }
}

export default CheckoutPage;
