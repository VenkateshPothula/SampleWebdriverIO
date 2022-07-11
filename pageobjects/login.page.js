
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage  {
    
    /**
     * define selectors using getter methods
     */

     get btnmenu () {
        return $('//*[@id="customer_menu_top"]');
    }
    get inputUsername () {
        return $("//*[@id='loginFrm_loginname']");
    }

    get inputPassword () {
        return $("//*[@id='loginFrm_password']");
    }

    get btnSubmit () {
        return $("//button[@title='Login']");
    }

    get UserNamecheck () {
        return $("//span[@class='subtext']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.btnmenu.click();
        await this.inputUsername.setValue(username);

        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async GetTextOfUserName () {

         const UserName= await this.UserNamecheck.getText();
        console.log("UserName ::- "+UserName);

       
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    
}

module.exports = new LoginPage();
