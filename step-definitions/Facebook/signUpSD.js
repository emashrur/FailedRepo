const { Given, When, Then } = require ("@wdio/cucumber-framework");
const { expect } = require("chai");
const LoginPage = require("../../POM/FaceBook/LoginPage");
const CreateNewAccPage = require("../../POM/FaceBook/CreateNewAccPage");

const loginPage = new LoginPage();
const createPage = new CreateNewAccPage();

Given(/^I am on facebook$/, async function () {
    await browser.url('/');
    await browser.pause(5000);
})

Given(/^I click on Create New Accountk$/, async function () {
    await browser.url('/');
    await browser.pause(5000);
})
