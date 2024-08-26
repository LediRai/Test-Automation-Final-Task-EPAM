# Saucedemo Login Automation Testing Final Task

This project automates the testing of the login functionality on the [Saucedemo](https://www.saucedemo.com/) website using WebDriverIO. The tests are designed to validate the behavior of the login form under various conditions.

## Technologies and Tools Used

- **Test Automation Tool:** WebDriverIO
- **Browsers Supported:**
  - Google Chrome
  - Mozilla Firefox
- **Locators:** data-test attributes
- **Design Patterns:** Page Object Model
- **Assertions & Loggers:** Integrated with the selected framework (WebDriverIO).

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- WebDriverIO set up in the project.

### Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:LediRai/Test-Automation-Final-Task-EPAM.git
    ```
2. Navigate to the project directory:
    ```bash
    cd epam-test-automation-final-task
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Tests

- To run all tests in parallel:
    ```bash
    npm run wdio
    ```

## Task Description

### Use Cases

1. **UC-1: Test Login Form with Empty Credentials**
    - **Steps:**
        1. Enter any credentials into the "Username" and "Password" fields.
        2. Clear the inputs.
        3. Click the "Login" button.
        4. **Expected Result:** The error message "Username is required" should be displayed.

2. **UC-2: Test Login Form with Credentials by Passing Username**
    - **Steps:**
        1. Enter any credentials in the "Username" field.
        2. Enter a password.
        3. Clear the "Password" input.
        4. Click the "Login" button.
        5. **Expected Result:** The error message "Password is required" should be displayed.

3. **UC-3: Test Login Form with Valid Username and Password**
    - **Steps:**
        1. Enter a valid username listed under the "Accepted usernames" section.
        2. Enter the password as "secret_sauce".
        3. Click on "Login".
        4. **Expected Result:** The title "Swag Labs" should be visible on the dashboard.
