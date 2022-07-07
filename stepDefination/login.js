const { Given, When, Then } = require('@cucumber/cucumber');
const { addSyntheticTrailingComment } = require('typescript');
//const { isAssertClause } = require('typescript');


Given(/^I am on the login page$/,async function(){
await browser.url("https://automationteststore.com/");
browser.maximizeWindow();
   });
   
When(/^I login with existing user$/, async function(){

   var userID="test68681";
   var Paswd="test12345";
   
await  browser. $('//*[@id="customer_menu_top"]').click();
await browser.$("//*[@id='loginFrm_loginname']").setValue(userID);
await browser.$("//*[@id='loginFrm_password']").setValue(Paswd);
await browser.$("//button[@title='Login']").click();
console.log("login success");
});

Then (/^I should see a welcome message$/,async function(){
   var Customer_Name="CapGeminiUse";
   var assert = require('assert');

  const UserName= await browser.$("//span[@class='subtext']").getText();

console.log("UserName ::- "+UserName);


assert.equal(Customer_Name, UserName, 'UserName Name NOT matched');




});