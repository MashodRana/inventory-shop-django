import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Bill from "../../Components/Bill/Bill";
import Dashboard from "../../Components/Dashboard/Dashboard";
import AddProducts from "../../Components/Products/AddProducts";
import ViewProducts from "../../Components/Products/ViewProducts";
import Purchase from "../../Components/Purchase";
import AddPurchase from "../../Components/Purchases/AddPurchase";
import PurchaseHistory from "../../Components/Purchases/PurchaseHistory";
import PurchaseReturn from "../../Components/Purchases/PurchaseReturn";
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
              <Route path="purchase-history" element={<PurchaseHistory />} />
              <Route path="add-purchase" element={<AddPurchase />} />
              <Route path="return-purchase" element={<PurchaseReturn />} />
              <Route path="view-products" element={<ViewProducts />} />
              <Route path="add-products" element={<AddProducts />} />
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
