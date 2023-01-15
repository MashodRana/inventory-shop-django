import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProducts = () => {
  const [productInfo, setProductInfo] = useState({});
  const [units, setUnits] = useState([]);
  const { productId } = useParams();
  const unitUrl = `http://127.0.0.1:8000/units/`;
  const productsUrl = `http://127.0.0.1:8000/products/`

  const handleOnChange = (evnt) => {
    const field = evnt.target.name;
    const value = evnt.target.value;
    let newData = { ...productInfo };
    newData[field] = value;
    setProductInfo(newData);
  }

  const handleAddProduct = async () => {
    const response = await fetch(productsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productInfo)
    })

    if (response.status === 201) {
      setProductInfo({ 'name': "", 'brand': '', "unit": 1, 'detail': '' })
      toast.success('Product adding successfull!', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else {
      toast.error('Prodcut adding failed!', {
        position: toast.POSITION.TOP_RIGHT
      });
      setProductInfo(productInfo)
    }
  }

  const handleUpdateProduct = async () => {
    // Send the updated data to update
    const response = await fetch(`${productsUrl}${productId}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productInfo)
    })

    // Check for succesfull request
    if (response.status === 200) {
      toast.success('Product update successfull!', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    else {
      toast.error('Prodcut update failed!', {
        position: toast.POSITION.TOP_RIGHT
      });
      setProductInfo(productInfo)
    }
  }

  useEffect(() => {
    // Load units from the server
    fetch(unitUrl)
      .then(res => res.json())
      .then(data => setUnits(data))

    if (productId) {
      fetch(`${productsUrl}${productId}/`)
        .then(res => res.json())
        .then(data => setProductInfo(data))
    }
  }, [unitUrl, productId])

  return (
    <>
      <h1 className="text-start sm:text-3xl text-xl font-medium title-font text-gray-900"> New Product</h1>
      <p className="text-md text-start">
        Add new products with details information.
      </p>
      <div className="container px-5 py-6 mx-auto">
        {/* product selection */}
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Name
            </span>
            <input
              type="text"
              id="website-admin"
              name='name'
              value={productInfo.name}
              onChange={handleOnChange}
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product name"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Brand
            </span>
            <input
              type="text"
              id="website-admin"
              name='brand'
              value={productInfo.brand}
              onChange={handleOnChange}
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product brand"
            />
          </div>

          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Unit
            </span>
            <select
              id="underline_select"
              name='unit'
              value={productInfo.unit}
              onChange={handleOnChange}
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {units.length ? units.map((unit, idx) => (<option key={idx} value={unit.id}>{unit.title}</option>)) : ""}
            </select>
          </div>

        </div>
        <div >
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
          >
            Product Details
          </label>
          <textarea
            id="message"
            name="detail"
            value={productInfo.detail}
            onChange={handleOnChange}
            rows="4"
            className="block p-2.5 md:w-1/2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      </div>

      <div className="py-4 flex justify-center items-center">
        <button
          onClick={productId ? handleUpdateProduct : handleAddProduct}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-amber-200 hover:bg-amber-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {
            productId ? 'Update' : <><FontAwesomeIcon className="text-xl text-gray-500 hover:cursor-pointer" icon={faPlus} />Add Product</>
          }
        </button>
      </div>

      {/* Toaster to show confirmation message */}
      <ToastContainer />
    </>
  );
};

export default AddProducts;
