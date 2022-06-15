const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddCustomer extends Page {
  get inputPhoneNumber() {
    return $("#phoneNumber");
  }
  get inputname() {
    return $("#name");
  }
  get inputaddress() {
    return $("#address");
  }
  get inputPhoneNumber() {
    return $("#phoneNumber");
  }
  get errorMessage() {
    return $("#message");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async addPhoneNumber(phoneNumber) {
    await this.inputPhoneNumber.setValue(phoneNumber);
    const btn = await $("#verify");
    await btn.click();
    console.log("HELLO");
    await browser.pause(1000);
    const message = await $("#message");
    const content = await message.getText();
    if (content === "Number is Registered" || content === "Invalid Number") {
      console.log("JAJAJAJ");
      this.changeNumber("+96171114552");
    }
  }

  async addCustomerFields(name, address) {
    await browser.pause(8000);
    const btn = await $("#add");
    await this.inputname.setValue(name);
    await this.inputaddress.setValue(address);
    await btn.click();
    await browser.pause(5000);
    console.log("BACK");
  }
  async changeNumber(number) {
    console.log("JAJAJAJ");

    await browser.pause(5000);
    this.addPhoneNumber(number);
    const btn = await $("#verify");
    await btn.click();
    console.log("BACK");
  }
  async changeEditNumber(number) {
    console.log("JAJAJAJ");

    await browser.pause(5000);
    this.EditCustomerDocument(number);
    const btn = await $("#verify");
    await btn.click();
    console.log("BACK");
  }
  async EditCustomerFields(name, address) {
    const btn = await $("#add");
    await this.inputname.setValue(name);
    await this.inputaddress.setValue(address);
    await btn.click();
    await browser.pause(15000);
    console.log("BACK");
  }
  async EditCustomerDocument(number) {
    const btn = await $("#verify");
    await btn.click();
    const message = await $("#message");
    const content = await message.getText();
    if (content === "Invalid Number") {
      console.log("JAJAJAJ");
      this.changeEditNumber("+96171114525");
    }
  }
  async EditCustomerFieldss(name, address) {
    const btn = await $("#add");
    await this.inputname.setValue(name);
    await this.inputaddress.setValue(address);
    await btn.click();
    await browser.pause(15000);
  }
  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("addCustomer");
  }
}

module.exports = new AddCustomer();
