
/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkout  {
    /**
     * define selectors using getter methods
     */

     get checkoutbutton () {
        return $('(//*[@title="Checkout"])[2]');
    }
    get confrmorder () {
        return $('//*[@title="Confirm Order"]');
    }

    get continuebutton () {
        return $('//*[@title="Continue"]');
    }

   

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkoutB () {
        await this.checkoutbutton.click();
       
    }
    async confrmOrdrB () {
        await this.confrmorder.click();
       
    }

    async continueB () {
        await this.continuebutton.click();
       
    }
    /**
     * overwrite specific options to adapt it to page object
     */
   
}

module.exports = new checkout();