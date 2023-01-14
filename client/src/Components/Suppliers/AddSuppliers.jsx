import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddSuppliers = () => {
  const [supplierData, setSupplierData] = useState({});
  const { supplierId } = useParams();

  const handleOnChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    let newData = { ...supplierData };
    newData[field] = value;
    setSupplierData(newData);
  };

  const handleAddSupplierSubmit = async (event) => {
    console.log(" I am in the handleAddSupplierSubmit")
    const url = `http://127.0.0.1:8000/suppliers/`
    try {
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(supplierData) // body data type must match "Content-Type" header
      });
      if (response.status === 201) {
        window.location.href = "http://localhost:3000/dashboard/view-suppliers";
      }
    }
    catch (err) {
      console.log(err)
    }

  };

  const handleSupplierUpdate = () => {
    const url = `http://127.0.0.1:8000/suppliers/${supplierId}/`;
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(supplierData) // body data type must match "Content-Type" header
    })
      .then(res => res.json())
      .then(data => {
        setSupplierData(data);
        toast.success('Supplier data updated', {
          position: toast.POSITION.TOP_RIGHT
        });
      })

  };

  useEffect(() => {
    if (supplierId) {
      const url = `http://127.0.0.1:8000/suppliers/${supplierId}/`
      fetch(url)
        .then(res => res.json())
        .then(data => setSupplierData(data))
    }
    else {
      setSupplierData({})
    }
  }, [supplierId])

  return (
    <>
      <h1 className="text-start sm:text-3xl text-xl font-medium title-font text-gray-900">
        New Supplier
      </h1>
      <p className="text-md text-start">
        Add new supplier with details information.
      </p>
      {/* <form onSubmit={handleAddSupplierSubmit}> */}
      <div className="container px-5 py-6 mx-auto">
        {/* product selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Code
            </span>
            <input
              name="supplier_code"
              type="text"
              id="website-admin"
              onChange={handleOnChange}
              value={supplierData.supplier_code}
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier code"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Name
            </span>
            <input
              name="name"
              onChange={handleOnChange}
              value={supplierData.name}
              id="website-admin"
              type="text"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product name"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Designation
            </span>
            <input
              name="designation"
              onChange={handleOnChange}
              value={supplierData.designation}
              type="text"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier designation"
            />
          </div>

          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Contact
            </span>
            <input
              name="primary_phone"
              onChange={handleOnChange}
              value={supplierData.primary_phone}
              type="number"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Primary contact number"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Contact 2
            </span>
            <input
              name="secondary_phone"
              onChange={handleOnChange}
              value={supplierData.secondary_phone}
              type="number"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Secondary contact number"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Email
            </span>
            <input
              name="email"
              onChange={handleOnChange}
              value={supplierData.email}
              type="email"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email address"
            />
          </div>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Company Title
            </span>
            <input
              name="company"
              onChange={handleOnChange}
              value={supplierData.company}
              type="text"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email address"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
          >
            Address
          </label>
          <textarea
            id="message"
            name="address"
            onChange={handleOnChange}
            value={supplierData.address}
            rows="4"
            className="block p-2.5 md:w-1/2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      </div>

      <div className="py-4 flex justify-center items-center">
        <button
          type="button"
          onClick={supplierId ? handleSupplierUpdate : handleAddSupplierSubmit}
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-amber-200 hover:bg-amber-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {supplierId ? 'Update' : <><FontAwesomeIcon
            className="text-xl text-gray-500 hover:cursor-pointer"
            icon={faPlus}
          /> Add Supplier</>}
        </button>
        <ToastContainer />
      </div>
      {/* </form> */}
    </>
  );
};

export default AddSuppliers;
