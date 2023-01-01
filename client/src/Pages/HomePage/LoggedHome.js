import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Bill from "../../Components/Bill/Bill";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Products from "../../Components/Products/Products";
import Purchase from "../../Components/Purchase";
import Sales from "../../Components/Sales";
import SaleHistory from "../../Components/Sales/SaleHistory";
import SalesReturn from "../../Components/Sales/SalesReturn";
import SideMenu from "../../Components/SideMenu";
import Stock from "../../Components/Stock/Stock";

const LoggedHome = () => {
  return (
    <>
      <div class="flex flex-wrap  w-full h-screen">
        <div class="w-2/12 bg-white rounded p-3 ">
          <SideMenu />
        </div>
        <div class="w-8/12">
          <div class="p-4 text-gray-500">
            <Routes>
              <Route path="" element={<Dashboard />} />
              <Route path="bill" element={<Bill />} />
              <Route path="stock" element={<Stock />} />
              <Route path="sale-history" element={<SaleHistory />} />
              <Route path="sales-return" element={<SalesReturn />} />
              <Route path="products/" element={<Products />} />
              <Route path="sales/" element={<Sales />} />
              <Route path="purchase/" element={<Purchase />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedHome;
