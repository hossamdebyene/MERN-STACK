/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import AddCustomer from "../Component/AddCustomer";
import { useLocation } from "react-router-dom";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import Home from "../Component/Home";
import { MemoryRouter as Router } from "react-router-dom";

test("renders react component", () => {
  render(<App />);
  screen.debug();
});

test("customer Header Render", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const customerHeader = screen.getByTestId("customerHeader");
  expect(customerHeader.textContent).toBe("All Customers");
});
test("Add customer Button", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const addcustomerButton = screen.getByTestId("addCustomer");
  expect(addcustomerButton.textContent).toBe("Add Customer");
});
test("Add Customer Button Click", async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const btn = screen.getByTestId("addCustomer");
  fireEvent.click(btn);
  expect(window.location.pathname).toBe("/");
});

test("Add Customer Component", async () => {
  render(
    <Router>
      <AddCustomer />
    </Router>
  );

  const numberValue = screen.getByTestId("mobilevalue");
  console.log(numberValue.textContent);
  expect(numberValue.textContent).toBe("");
});
test("Phone number value change", async () => {
  render(
    <Router>
      <AddCustomer />
    </Router>
  );
  const numberValue = screen.getByTestId("mobilevalue");
  userEvent.type(numberValue, "+96170010654");
  console.log(numberValue.value);
  expect(isPossiblePhoneNumber(numberValue.value)).toBe(true);
});
