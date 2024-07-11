class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/v1/');
    }

    enterUsername(username: string) {
        cy.get('#user-name').type(username);
    }

    enterPassword(password: string) {
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('#login-button').click();
    }
}

export default LoginPage;
