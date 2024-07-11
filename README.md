## Running a Cypress Project

This guide outlines the steps to run a Cypress project and execute your automated tests.

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system. You can verify their installation by running `node -v` and `npm -v` (or `yarn -v`) in your terminal.
* A basic Cypress project set up. You can either create one manually or use the Cypress Test Runner ([https://docs.cypress.io/guides/overview/why-cypress](https://docs.cypress.io/guides/overview/why-cypress)).

**Steps:**

1. **Navigate to your project directory:** Open your terminal and navigate to the root directory of your Cypress project using the `cd` command.

2. **Install Dependencies:** If you haven't already, install the Cypress dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run Cypress Tests:** Once the dependencies are installed, you can run your Cypress tests using the following command:

   ```bash
   npx cypress run
   ```

   This will launch the Cypress Test Runner in your browser and execute all the tests defined in your project.

4. **View Test Results:** As the tests run, you'll see the progress in your terminal and a visual representation in the Cypress Test Runner window. The runner provides detailed information about each test, including its status (pass, fail, skipped), execution time, and screenshots (if captured).

**Additional Notes:**

* **Specifying Test Files:** You can run specific test files or directories instead of all tests by providing them as arguments to the `cypress run` command. For example, to run tests only in the `integration` folder:

   ```bash
   npx cypress run <path of the file>
   ```

* **Headless Mode:** By default, Cypress runs tests in a graphical user interface (GUI) browser. To run tests in headless mode (without a visible browser window), use the `--headless` flag:

   ```bash
   npx cypress run --headless
   ```

* **Opening Browser:** You can open the browser window at any point during test execution by clicking the "Open in Browser" button in the Cypress Test Runner.

* **Run with report:** To run with report in this project:

   ```bash
   npm run test
   ```
* **Dockerfile:** To build and run the dockerfile:

   ```bash
   docker build -t my-cypress-app .
   ```
   and
    ```bash
   docker run -it --rm -v $PWD/cypress/reports:/app/cypress/reports my-cypress-app

   ```


* **Configuration:** You can customize your Cypress project behavior by creating a `cypress.json` or `cypress.config.js/ts` file in your project root. Refer to the Cypress documentation for configuration options: [https://docs.cypress.io/guides/overview/why-cypress](https://docs.cypress.io/guides/overview/why-cypress)

**By following these steps, you can successfully run your Cypress tests and start automating your web application testing process.**
