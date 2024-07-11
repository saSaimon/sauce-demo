import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Check out an item test on Sauce Demo website', () => {
    const username = 'standard_user';
    const password = 'secret_sauce';

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage(); 

    beforeEach(() => {
        loginPage.visit();
    });

    it('Logs in, adds items to cart, and verifies the cart', () => {
        // Log in as standard_user
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        loginPage.submit();

        // Add first item to the cart
        inventoryPage.addItemToCart(0);

        // Verifying the correct item is present in the cart
        inventoryPage.goToCart();
        cartPage.verifyItemInCart('Sauce Labs Backpack');

        // Complete checkout process
        cartPage.checkout();
        checkoutPage.enterFirstName('Sadiqul');
        checkoutPage.enterLastName('Alam');
        checkoutPage.enterPostalCode('4314');
        checkoutPage.submit();
        checkoutPage.completeCheckout();
    });
});
