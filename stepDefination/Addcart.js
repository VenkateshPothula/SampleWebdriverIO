const { Given, When,Then } = require('@cucumber/cucumber');

var globalVariable="GlobalVaraible";

Given(/^click on any product$/,async function(){
//click on home buttton
await browser.$('//*[@class="active menu_home"]').click();


   });
   
When(/^selected on product$/, async function(){
//click on first product on the page
await browser.$('(//*[@class="prdocutname"])[1]').click();

});

Then (/^Add that product into cart$/,async function(){
//click on cart button 
await browser.$('//*[@class="cart"]').click();

});
