const { Given, When,Then } = require('@cucumber/cucumber');
//const { isAssertClause } = require('typescript');

Given(/^click on checkout Button$/,async function(){
//click on home buttton
await browser.$('(//*[@title="Checkout"])[2]').click();


   });
   
When(/^Hit Confirm order$/, async function(){
//click on first product on the page
await browser.$('//*[@title="Confirm Order"]').click();

});

Then (/^verify your ORDER has been Proceed and click continue$/,async function(){
//click on cart button 
await browser.$('//*[@title="Continue"]').click();

});
