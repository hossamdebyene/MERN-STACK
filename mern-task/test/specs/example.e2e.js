const HomePage = require("../pageobjects/home.page");
const addCustomerPage = require("../pageobjects/addCustomer.page");
const numberAdd = "+96170123456";
const nameChange = "Hossam Debyaneeee";
const addressChange = "DOWNTOWN BEIRUT";
const nameAdd = "Bob Debyaneeee";
const addressAdd = "Zahle BEIRUT";


describe("HomePage", () => {
  it("Home Page Render ", async () => {
    await HomePage.open();
  });
});
describe("going to add Customer Page", () => {
  it("Home Page Render ", async () => {
    await HomePage.addCustomer();
  });
});
describe("going to add Customer Page", () => {
  it("Home Page Render ", async () => {
    await addCustomerPage.addPhoneNumber("+96103009514");
  });
});

describe("Submiting the Form of the Customer ", () => {
  it("Customer Form Render ", async () => {
    await addCustomerPage.addCustomerFields(
      "Hossam Shoker",
      "BEIRUT BEIRUT LEBANON QATAR"
    );
  });
});
describe("Cancel Delete Customer", () => {
  it("Delete Dialog Render ", async () => {
    await HomePage.deleteCancelCustomer();
  });
});
describe("Delete Customer", () => {
  it("Delete Dialog Render ", async () => {
    await HomePage.deleteCustomer();
    await browser.pause(2000);
  });
});
describe("Edit Customer", () => {
  it("Customer Form Render ", async () => {
    await HomePage.editCustomer();
    await browser.pause(2000);
  });
});
describe("Editing Customer", () => {
  it("Customer Form Render ", async () => {
    await addCustomerPage.EditCustomerDocument();
    await browser.pause(2000);
  });
});
describe("Editing Customer Fields", () => {
  it("Customer Form Render ", async () => {
    await addCustomerPage.EditCustomerFieldss("HOssam", "DD");
    await browser.pause(2000);
  });
});
