const checkoutPage = require('../pageobjects/checkout.page');

const { Given, When,Then } = require('@cucumber/cucumber');
//const { isAssertClause } = require('typescript');
const pages = {
   checkout: checkoutPage
}
Given(/^click on checkout Button$/,async function(){
//click on checkout buttton
await checkoutPage.checkoutB();


   });
   
When(/^Hit Confirm order$/, async function(){
//click on confrmorder on the page
await checkoutPage.confrmOrdrB();

});

Then (/^verify your ORDER has been Proceed and click continue$/,async function(){
//click on continue button 
await checkoutPage.continueB();

});
