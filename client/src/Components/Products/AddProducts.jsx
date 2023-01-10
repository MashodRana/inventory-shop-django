import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddProducts = () => {
  return (
    <>
      <h1 className="text-start sm:text-3xl text-xl font-medium title-font text-gray-900">
        New Product
      </h1>
      <p className="text-md text-start">
        Add new products with details information.
      </p>
      <div class="container px-5 py-6 mx-auto">
        {/* product selection */}
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Name
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product name"
            />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 py-4">
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Brand
            </span>
            <select
              id="underline_select"
              class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose brand</option>
              <option value="kg">Uniliver</option>
              <option value="l">RFL</option>
              <option value="p">Akiz</option>
            </select>
          </div>

          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              Unit
            </span>
            <select
              id="underline_select"
              class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose brand</option>
              <option value="kg">KG</option>
              <option value="l">Litter</option>
              <option value="p">Pices</option>
            </select>
          </div>
          
        </div>
        <div >
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
            >
              Product Details
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 md:w-1/2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
      </div>

      <div className="py-4 flex justify-center items-center">
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-amber-200 hover:bg-amber-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <FontAwesomeIcon
            className="text-xl text-gray-500 hover:cursor-pointer"
            icon={faPlus}
          />{" "}
          Add Product
        </button>
      </div>
    </>
  );
};

export default AddProducts;
