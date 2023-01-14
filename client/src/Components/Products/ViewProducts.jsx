import { useState, useEffect } from "react";
import ProductTableRow from "./ProductTableRow";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  const removeProduct = async (productId) => {
    if (window.confirm("Are you sure that you want to remove the product?") === false) return;

    // Send product remove request in the server
    const response = await fetch(`http://127.0.0.1:8000/products/${productId}/`, { method: 'DELETE' })

    if (response.status === 204) {
      // Show message that product removed.
      toast.success('Product removed!', {
        position: toast.POSITION.TOP_RIGHT
      });

      // Update state after removing product.
      const filteredProducts = products.filter(product => product.id !== productId);
      setProducts(filteredProducts);
    }


  }

  useEffect(() => {
    // Load data from the server
    const url = `http://127.0.0.1:8000/products/`
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [])

  return (
    <>
      <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Products</h1>
      <p className="text-md text-start">See the product details</p>
      <div className="container px-5 py-6 mx-auto">
        {/* Product Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-6 w-2/12">
                  Code
                </th>
                <th scope="col" className="px-6 py-6 w-2/12">
                  Name
                </th>
                <th scope="col" className="px-6 py-6 w-2/12">
                  Brand
                </th>
                <th scope="col" className="px-6 py-6 w-1/12 text-center">
                  Unit
                </th>
                <th scope="col" className="px-6 py-6 w-4/12">
                  Details
                </th>
                <th scope="col" className="px-6 py-6 w-1/12">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                products.length
                  ? products.map(product => (<ProductTableRow
                    key={product.id}
                    product={product}
                    removeProduct={removeProduct} />))
                  : <tr className="p-2"><th>There is no product.</th></tr>
              }

            </tbody>
          </table>
        </div>

      </div>

      {/* Toaster to show confirmation message */}
      <ToastContainer />

    </>
  );
};

export default ViewProducts;