const LoginPage = require('../pageobjects/login.page');

const { Given, When, Then } = require('@cucumber/cucumber');
const { addSyntheticTrailingComment } = require('typescript');


const pages = {
   login: LoginPage
}

Given(/^I am on the login page$/,async function(){
await browser.url("https://automationteststore.com/");
    browser.maximizeWindow();
   });
   
When(/^I login with (\w+) and (.+)$/, async function(username, password){

   await LoginPage.login(username, password)
   console.log("password::- -" +password);

console.log("login success");
});

Then (/^I should see a welcome message$/,async function(){
   await LoginPage.GetTextOfUserName();


});