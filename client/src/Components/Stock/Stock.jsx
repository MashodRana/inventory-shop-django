import React from "react";
import { useState, useEffect } from "react";
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stock = () => {
  const stockUrl = `http://127.0.0.1:8000/stock/`;
  const [stockProducts, setStockProducts] = useState([]);

  useEffect(() => {
    fetch(stockUrl)
      .then((res) => res.json())
      .then((data) => setStockProducts(data));
  }, [stockUrl]);

  return (
    <>

      <div>
        <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Product Stock
        </h1>
        <p className="text-sm text-start">
          See the product details with quantity and price.
        </p>
      </div>
      <div class="container px-5 py-6 mx-auto">
        {/* Product Table */}
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-6 w-2/12">
                  Name
                </th>
                <th scope="col" class="px-6 py-6 w-1/12">
                  P Price
                </th>
                <th scope="col" class="px-6 py-6 w-1/12">
                  S Price
                </th>
                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                  Sold Quantity
                </th>
                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                  Returned Quantity
                </th>
                <th scope="col" class="px-6 py-6 w-2/12 text-center">
                  Sell Value
                </th>
                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {stockProducts.length ? (
                stockProducts.map((stockProduct) => (
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {stockProduct.product_name}
                    </th>
                    <td class="px-6 py-4">{stockProduct.unit_purchase_price}</td>
                    <td class="px-6 py-4">{stockProduct.unit_selling_price}</td>
                    <td class="px-6 py-4">{stockProduct.quantity}</td>
                    <td class="px-6 py-4 text-center">3</td>
                    <td class="px-6 py-4 text-end">$10000</td>
                    <td>
                      <button
                        className="p-2"
                      // onClick={() => props.removeProduct(props.product.id)}
                      >
                        <FontAwesomeIcon
                          className="text-xl text-red-500 hover:cursor-pointer"
                          icon={faPencilSquare}
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td colSpan={`8`} class="px-6 py-4 text-center text-red-500">No product added to the stock yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Stock;
