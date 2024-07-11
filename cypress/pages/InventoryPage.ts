class InventoryPage {
    addItemToCart(index: number) {
        cy.get('.inventory_item').eq(index).find('button').click();
    }

    goToCart() {
        cy.get('[href="./cart.html"]').click();
    }
}

export default InventoryPage;
