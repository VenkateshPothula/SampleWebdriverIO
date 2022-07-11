const addcartPage = require('../pageobjects/addcart.page');

const { Given, When, Then } = require('@cucumber/cucumber');
const { addSyntheticTrailingComment } = require('typescript');


const pages = {
   Addcart: addcartPage
}

Given(/^click on any product$/,async function (){
//click on home buttton

await addcartPage.clickhombutton();

   });
   
When(/^selected on product$/, async function(){
//click on first product on the page
await addcartPage.clickonProduct();

});

Then (/^Add that product into cart$/,async function(){
//click on cart button 
await addcartPage.clickonAddtoCart();

});
