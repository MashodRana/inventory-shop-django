import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Stock = () => {
  return <>
    <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Product Stock</h1>
    <p className="text-sm text-start">See the product details with quantity and price.</p>
    <div class="container px-5 py-6 mx-auto">
      {/* Product Table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-6 w-4/12">
                Name
              </th>
              <th scope="col" class="px-6 py-6 w-1/12">
                Price
              </th>
              <th scope="col" class="px-6 py-6 w-1/12 text-center">
                Purchased Quantity
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
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">
                $1000
              </td>
              <td class="px-6 py-4">
                3
              </td>
              <td class="px-6 py-4">
                4
              </td>
              <td class="px-6 py-4 text-center">
                3
              </td>
              <td class="px-6 py-4 text-end">
                $10000
              </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">
                $1000
              </td>
              <td class="px-6 py-4">
                3
              </td>
              <td class="px-6 py-4">
                4
              </td>
              <td class="px-6 py-4 text-center">
                3
              </td>
              <td class="px-6 py-4 text-end">
                $10000
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">
                $1000
              </td>
              <td class="px-6 py-4">
                3
              </td>
              <td class="px-6 py-4">
                4
              </td>
              <td class="px-6 py-4 text-center">
                3
              </td>
              <td class="px-6 py-4 text-end">
                $10000
              </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Google Pixel Phone
              </th>
              <td class="px-6 py-4">
                $1000
              </td>
              <td class="px-6 py-4">
                3
              </td>
              <td class="px-6 py-4">
                4
              </td>
              <td class="px-6 py-4 text-center">
                3
              </td>
              <td class="px-6 py-4 text-end">
                $10000
              </td>
            </tr>
            <tr>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple Watch 5
              </th>
              <td class="px-6 py-4">
                $1000
              </td>
              <td class="px-6 py-4">
                3
              </td>
              <td class="px-6 py-4">
                4
              </td>
              <td class="px-6 py-4 text-center">
                3
              </td>
              <td class="px-6 py-4 text-end">
                $10000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </>;
};

export default Stock;
