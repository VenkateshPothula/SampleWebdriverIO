
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Addcart  {
    /**
     * define selectors using getter methods
     */

     get Homebutton () {
        return $('//*[@class="active menu_home"]');
    }
    get slectproduct () {
        return $('(//*[@class="prdocutname"])[1]');
    }

    get cartbutton () {
        return $('//*[@class="cart"]');
    }

    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to add to cart using first product
     */
    async clickhombutton () {
        await this.Homebutton.click();
       
       
    }
    async clickonProduct () {
        
       
        await this.slectproduct.click();

       
    }

    async clickonAddtoCart () {
        
       

        await this.cartbutton.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
   

}

module.exports = new Addcart();
