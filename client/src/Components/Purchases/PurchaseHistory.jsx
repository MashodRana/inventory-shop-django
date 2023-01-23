import { useState, useEffect } from "react";
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PurchaseHistory = (props) => {
  const purchasedUrl = `http://127.0.0.1:8000/purchase/`;
  const [purchasedProducts, setPurchasedProudcts] = useState([]);

  useEffect(() => {
    fetch(purchasedUrl)
      .then((res) => res.json())
      .then((data) => setPurchasedProudcts(data));
  }, [purchasedUrl]);
  return (
    <>
      {console.log('purchase history: ', JSON.stringify(purchasedProducts))}
      <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">
        Purchase History
      </h1>
      <p className="text-sm text-start">See the sales details information.</p>
      <div class="container px-5 py-6 mx-auto">
        {/* Sales Table */}
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-6 w-1/12">
                  Bill No.
                </th>
                <th scope="col" class="px-6 py-6 w-2/12">
                  Date
                </th>
                <th scope="col" class="px-6 py-6 w-1/12">
                  Supplier
                </th>
                <th scope="col" class="px-6 py-6 w-4/12 text-center">
                  Remarks
                </th>
                <th scope="col" class="px-6 py-6 w-2/12 text-end">
                  Paid
                </th>
                <th scope="col" class="px-6 py-6 w-2/12 text-center">
                  Due
                </th>
                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {purchasedProducts.length ? (
                purchasedProducts.map((purchasedProduct) => (
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {purchasedProduct.bill_no}
                    </th>
                    <td class="px-6 py-4">
                      <span>Purchased: {new Date(purchasedProduct.created_at).toDateString()}</span> <br /><br />
                      <span>Updated: {new Date(purchasedProduct.updated_at).toDateString()}</span>
                    </td>
                    <td class="px-6 py-4">{purchasedProduct.supplier}</td>
                    <td class="px-6 py-4">{purchasedProduct.note}</td>
                    <td class="px-6 py-4 text-end">
                      {purchasedProduct.paid_amount}
                    </td>
                    <td class="px-6 py-4 text-end">
                      {purchasedProduct.due_amount}
                    </td>
                    <td class="px-6 py-4 text-center">
                      <Link className="p-2" to={`${purchasedProduct.bill_no}`}>
                        <FontAwesomeIcon
                          className="text-xl text-yellow-500 hover:cursor-pointer"
                          icon={faPencilSquare}
                        />
                      </Link>
                      <button
                        className="p-2"
                        onClick={() => props.removeProduct(2)}
                      >
                        <FontAwesomeIcon
                          className="text-xl text-red-500 hover:cursor-pointer"
                          icon={faTrash}
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td class="px-6 py-4 text-center text-red-500" colSpan={`7`}>
                    No product purchased yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistory;
