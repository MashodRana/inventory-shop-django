import Select from "react-dropdown-select";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import PurchaseTable from "./PurchaseTable";

const AddPurchase = () => {
  const productUrl = ` http://127.0.0.1:8000/products/`;
  const suppliersUrl = `http://127.0.0.1:8000/suppliers/`;
  const [products, setProducts] = useState([]);
  const [toPurchaseProducts, setToPurchasProducts] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [suppliers, setSuppliers] = useState([]);
  const [purchasedDetail, setPurchasedDetail] = useState({});

  const productPurchasing = (singleProductArray) => {
    // This will update the state which is used to track the products which will be purchased.

    const productId = singleProductArray[0].value;
    let willPurchaseProduct = products.find(
      (product) => product.id === productId
    );
    willPurchaseProduct["price"] = 0.0;
    willPurchaseProduct["quantity"] = 0;
    willPurchaseProduct["subtotal"] = 0.0;
    const newPurchansingProducts = [
      ...toPurchaseProducts,
      { ...willPurchaseProduct },
    ];
    setToPurchasProducts(newPurchansingProducts);
  };
  const getSupplier = (singleSupplierArray) => {
    const supplierId = singleSupplierArray[0].value;
    const newData = { ...purchasedDetail };
    newData["supplier"] = supplierId;
    setPurchasedDetail(newData);
  };

  const removeFromPurchasedList = (productId) => {
    setToPurchasProducts(toPurchaseProducts.filter((p) => p.id !== productId));
    const filteredProducts = purchasedProducts.filter(
      (p) => p.id !== productId
    );
    const totalCost = filteredProducts.reduce((t, p) => t + p.subtotal, 0);
    setPurchasedProducts(filteredProducts);
    setTotal(totalCost);
  };

  const handleOnChange = (evnt) => {
    let newData = {...purchasedDetail};
    newData[evnt.target.name] = evnt.target.value;
    setPurchasedDetail(newData);
  };
  const updatePurchasedList = (purchasedProductInfo) => {
    let newPurchasedProducts = purchasedProducts.filter(
      (pp) => pp.id !== purchasedProductInfo.id
    );
    newPurchasedProducts.push(purchasedProductInfo);
    const totalCost = newPurchasedProducts.reduce((t, p) => t + p.subtotal, 0);
    setPurchasedProducts(newPurchasedProducts);
    setTotal(totalCost);
    console.log(
      "In updatePurchasedList after: ",
      JSON.stringify(purchasedProducts)
    );
  };

  const getPurhasedDetail = ()=>{
    const newData = {...purchasedDetail};
    newData['products'] = [...purchasedProducts];

  }
  useEffect(() => {
    fetch(productUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch(suppliersUrl)
      .then((res) => res.json())
      .then((data) => setSuppliers(data));
  }, [productUrl, suppliersUrl]);

  return (
    <>
      <h1 className="text-start sm:text-3xl text-xl font-medium title-font text-gray-900">
        Add Purchase
      </h1>
      <p className="text-md text-start">
        Purchase new products and entry them here to track.
      </p>
      <div class="container px-5 py-6 mx-auto">
        {/* product selection */}

        <div className="flex ">
          <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            Product
          </span>
          <Select
            // style={{ "min-width": "200px" }}
            options={products.map((product) => ({
              value: product.id,
              label: product.name,
            }))}
            // values={[]}
            className="text-start w-100"
            onChange={productPurchasing}
            // itemRenderer={customItemRenderer}
          />
        </div>
        <div class="grid grid-cols-3 gap-4 py-4">
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Supplier
            </span>
            <Select
              //   style={{ "min-width": "200px" }}
              options={suppliers.map((supplier) => ({
                value: supplier.id,
                label: supplier.name,
              }))}
              // values={[]}
              className="text-start rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={getSupplier}
              // itemRenderer={customItemRenderer}
            />
          </div>

          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Date
            </span>
            <input
              name="date"
              value={purchasedDetail.date}
              onChange={handleOnChange}
              type="datetime-local"
              id="purchase-date"
              class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Product Table */}
      <PurchaseTable
        toPurchaseProducts={toPurchaseProducts}
        updatePurchasedList={updatePurchasedList}
        removeFromPurchasedList={removeFromPurchasedList}
        total={total}
      />

      <div className="py-4 flex justify-center items-center">
        <button
          type="button"
          onClick={getPurhasedDetail}
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-amber-200 hover:bg-amber-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <span className="mr-2">
            <FontAwesomeIcon icon={faMoneyBill} />
          </span>
          Payment
        </button>
      </div>
    </>
  );
};

export default AddPurchase;
