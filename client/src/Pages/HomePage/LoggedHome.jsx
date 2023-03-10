import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerAccountBook from "../../Components/AccountBook/CustomerAccountBook";
import SupplierAccountBook from "../../Components/AccountBook/SupplierAccountBook";
import Bill from "../../Components/Bill/Bill";
import Dashboard from "../../Components/Dashboard/Dashboard";
import PayoffPayments from "../../Components/Payments/PayoffPaymetns";
import ReceivedPayments from "../../Components/Payments/ReceivedPayments";
import AddProducts from "../../Components/Products/AddProducts";
import ViewProducts from "../../Components/Products/ViewProducts";
import AddPurchase from "../../Components/Purchases/AddPurchase";
import PurchasedItems from "../../Components/Purchases/PurchasedItems";
import PurchaseHistory from "../../Components/Purchases/PurchaseHistory";
import PurchaseReturn from "../../Components/Purchases/PurchaseReturn";
import SaleHistory from "../../Components/Sales/SaleHistory";
import SalesReturn from "../../Components/Sales/SalesReturn";
import SideMenu from "../../Components/SideMenu";
import AddProductStock from "../../Components/Stock/AddProductStock";
import Stock from "../../Components/Stock/Stock";
import AddSuppliers from "../../Components/Suppliers/AddSuppliers";
import ViewSuppliers from "../../Components/Suppliers/ViewSuppliers";

const LoggedHome = () => {
  return (
    <>
      <div class="flex flex-wrap justify-between  w-full h-full">
        <div class="w-2/12 bg-white rounded pl-3">
          <SideMenu />
        </div>
        <div class="ml-2 w-9/12">
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="bill" element={<Bill />} />

            {/* Stock */}
            <Route path="view-stock" element={<Stock />} />
            <Route path="add-stock" element={<AddProductStock />} />
            <Route path="view-stock/:productStockId" element={<AddProductStock />} />
            
             {/* Purchase */}
              <Route path="purchase-history" element={<PurchaseHistory />} />
              <Route path="purchase-history/:purchasedId" element={<AddPurchase />} />

              <Route path="purchased-items" element={<PurchasedItems />} />
              <Route path="add-purchase" element={<AddPurchase />} />
              <Route path="return-purchase" element={<PurchaseReturn />} />

            {/* Sales */}
            <Route path="sale-history" element={<SaleHistory />} />
            <Route path="sales-return" element={<SalesReturn />} />

            {/* Purchase */}
            <Route path="purchase-history" element={<PurchaseHistory />} />
            <Route path="purchased-items" element={<PurchasedItems />} />
            <Route path="add-purchase" element={<AddPurchase />} />
            <Route path="return-purchase" element={<PurchaseReturn />} />

            {/* Products */}
            <Route path="products" element={<ViewProducts />} />
            <Route path="add-products" element={<AddProducts />} />
            <Route path="products/:productId" element={<AddProducts />} />


            {/* Suppliers */}
            <Route path="suppliers" element={<ViewSuppliers />} />
            <Route path="add-suppliers" element={<AddSuppliers />} />
            <Route path="suppliers/:supplierId" element={<AddSuppliers />} />


            {/* Payments */}
            <Route path="received-payments" element={<ReceivedPayments />} />
            <Route path="payoff-payments" element={<PayoffPayments />} />

            {/* Account Book */}
            <Route path="customer-account-book" element={<CustomerAccountBook />} />
            <Route path="supplier-account-book" element={<SupplierAccountBook />} />

          </Routes>
        </div>

      </div>
    </>
  );
};

export default LoggedHome;
