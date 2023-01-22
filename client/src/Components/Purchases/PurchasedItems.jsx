import { useEffect } from "react";
import { useState } from "react";

const PurchasedItems = () => {
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const purchasedProductsUrl = `http://127.0.0.1:8000/purchased-products/`;

  useEffect(() => {
    fetch(purchasedProductsUrl)
      .then((res) => res.json())
      .then((data) => setPurchasedProducts(data));
  }, [purchasedProductsUrl]);

  return (
    <>
      {console.log('purchased products', JSON.stringify(purchasedProducts))}
      <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">
        Purchased Items
      </h1>
      <p className="text-sm text-start">See the sales details information.</p>
      <div className="container px-5 py-6 mx-auto">
        {/* Sales Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-6 w-1/12">
                  Bill No.
                </th>
                <th scope="col" className="px-6 py-6 w-1/12">
                  Date
                </th>
                <th scope="col" className="px-6 py-6 w-1/12">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-6 w-2/12 text-center">
                  Proudct
                </th>
                <th scope="col" className="px-6 py-6 w-2/12 text-center">
                  Price
                </th>
                <th scope="col" className="px-6 py-6 w-2/12 text-center">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-6 w-2/12 text-center">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {purchasedProducts.length ? (
                purchasedProducts.map((purchasedProduct) => (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {purchasedProduct.bill_no}
                    </th>
                    <td className="px-6 py-4">
                      <span>Purchased: {new Date(purchasedProduct.created_at).toDateString()}</span> <br /><br />
                      <span>Updated: {new Date(purchasedProduct.updated_at).toDateString()}</span>
                    </td>
                    <td className="px-6 py-4">Abul-Uniliver</td>
                    <td className="px-6 py-4">
                      Lotion - 1 box - 2000 tk <br />
                      Shampoo - 1 box - 2000 tk <br />
                    </td>
                    <td className="px-6 py-4 text-center">
                      {purchasedProduct.price}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {purchasedProduct.quantity}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {purchasedProduct.total_price}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-6 py-4 text-center" colSpan={`7`}>
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

export default PurchasedItems;
