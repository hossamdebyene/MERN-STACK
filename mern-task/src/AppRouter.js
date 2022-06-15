import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import AddCustomer from "./Component/AddCustomer";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="AddCustomer" element={<AddCustomer />} />
      <Route path="EditCustomer" element={<AddCustomer />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
