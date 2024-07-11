class CartPage {
    verifyItemInCart(itemName: string) {
        cy.get('.inventory_item_name').should('have.text', itemName);
    }

    checkout() {
        cy.get('.btn_action.checkout_button').click();
    }
}

export default CartPage;
