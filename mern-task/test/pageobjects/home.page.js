const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[id="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async addCustomer() {
    await browser.pause(5000);
    const button = await $("#addCustomer");
    await button.click();
  }
  async deleteCustomer() {
    const button = await $("#deleteCustomer");
    await button.click();
    await browser.pause(2000);
    const deleete = await $("#delete");
    await deleete.click();
    await browser.pause(2000);
  }
  async deleteCancelCustomer() {
    const button = await $("#deleteCustomer");
    await button.click();
    await browser.pause(2000);
    const cancel = await $("#cancel");
    await cancel.click();
    await browser.pause(2000);
  }
  async editCustomer() {
    const button = await $("#editCustomer");
    await button.click();
    await browser.pause(2000);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new HomePage();
