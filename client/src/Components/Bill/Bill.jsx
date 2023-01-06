import { faBarcode, faSearch, faSquareMinus, faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Bill = () => {
    return (
        <>
            <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Bill</h1>
            <p className="text-sm text-start">Create bill for the customer.</p>
            <div class="container px-5 py-6 mx-auto">
                {/* Bill form */}
                <div class="grid grid-rows gap-1">
                    <div class="md:flex md:items-center md:justify-start mb-6">
                        <div class="md:w-1/6">
                            <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Customer
                            </label>
                        </div>
                        <div class="md:w-2/6">
                            <select class="inline appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        <div className="md:w-1/6">
                            <Link to=''
                                class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
                            >
                                <FontAwesomeIcon icon={faUserPlus} />
                            </Link>
                        </div>
                    </div>

                    {/* barcode */}
                    <div class="md:flex md:items-center md:justify-start mb-6">
                        <div class="flex md:w-3/6">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <FontAwesomeIcon icon={faBarcode} />
                            </span>
                            <input
                                type="text"
                                id="website-admin"
                                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Barcode"
                            />
                        </div>
                    </div>

                    {/* Search product */}
                    <div class="md:flex md:items-center md:justify-start mb-6">
                        <div class="flex md:w-3/6">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input
                                type="text"
                                id="website-admin"
                                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search product by Name"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Table */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-6 w-4/12">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Quantity
                                </th>
                                <th scope="col" class="px-6 py-6 w-3/12 text-end">
                                    Sub Total
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Action
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
                                <td class="px-6 py-4 text-end">
                                    $3000
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <FontAwesomeIcon className="text-xl text-red-500 hover:cursor-pointer" icon={faXmark} />
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
                                <td class="px-6 py-4 text-end">
                                    $3000
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <FontAwesomeIcon className="text-xl text-red-500 hover:cursor-pointer" icon={faXmark} />
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
                                <td class="px-6 py-4 text-end">
                                    $3000
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <FontAwesomeIcon className="text-xl text-red-500 hover:cursor-pointer" icon={faXmark} />
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
                                <td class="px-6 py-4 text-end">
                                    $3000
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <FontAwesomeIcon className="text-xl text-red-500 hover:cursor-pointer" icon={faXmark} />
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
                                <td class="px-6 py-4 text-end">
                                    $3000
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <FontAwesomeIcon className="text-xl text-red-500 hover:cursor-pointer" icon={faXmark} />
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr class="font-semibold text-gray-900 dark:text-white">
                                <th scope="row" colspan="2" class="px-6 py-3 text-lg text-amber-500">Total</th>
                                <td colspan="2" class="px-6 py-3 text-end">$ 21,000</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </>
    );
};

export default Bill;