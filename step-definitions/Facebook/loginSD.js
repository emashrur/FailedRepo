const { Given, When, Then } = require ("@wdio/cucumber-framework");
const LoginPage = require('../../POM/FaceBook/LoginPage');
const LoginErrorPage = require('../../POM/FaceBook/LoginErrorPage');

const loginPage = new LoginPage();
const errorPage = new LoginErrorPage();
/**
 * Glue Code : 
 * Glue code is a regular expression which helps to map Scenario-steps
 */
Given (/^I am on facebook$/, async function () {
    await browser.url('./');
    await browser.pause(5000);
})

When(/^I type '.*' as '.*'$/, async function (data, fieldname) {
    switch (fieldname.toLowerCase()) {
        case value: 'username'
            await loginPage.emailField(data);
            break;
        case value: 'password'
            await loginPage.passField(data);
            break;
    
        default:
            break;
    }
})

When(/^I click login button$/, async function () {
    await loginPage.clickLoginButton();
})

When(/^I verify error is displayed$/, async function (username) {
    await errorPage.isLoginErrorDisplayed();
})

When(/^I verify login email is enabled$/, async function () {

})

When(/^I verify login password is enabled$/, async function () {
    
})

When(/^I verify the login button is enabled$/, async function () {
    
})