import Select from "react-dropdown-select";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

import PurchaseTable from "./PurchaseTable";


const AddPurchase = () => {
    const productUrl = ` http://127.0.0.1:8000/products/`
    const [products, setProducts] = useState([]);
    const [toPurchaseProducts, setToPurchasProducts] = useState([])

    const productPurchasing = (singleProductArray) => {
        // This will update the state which is used to track the products which will be purchased.

        const productId = singleProductArray[0].value;
        let willPurchaseProduct = products.find(product => product.id === productId);
        willPurchaseProduct['price'] = 0.0;
        willPurchaseProduct['quantity'] = 0;
        willPurchaseProduct['subtotal'] = 0.0;
        const newPurchansingProducts = [...toPurchaseProducts, { ...willPurchaseProduct }]
        setToPurchasProducts(newPurchansingProducts);
    }
    useEffect(() => {
        fetch(productUrl)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [productUrl])
    return (
        <>
            <h1 className="text-start sm:text-3xl text-xl font-medium title-font text-gray-900">Add Purchase</h1>
            <p className="text-md text-start">Purchase new products and entry them here to track.</p>
            <div class="container px-5 py-6 mx-auto">
                {/* product selection */}

                <div className="flex ">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Product
                    </span>
                    <Select
                        style={{ 'min-width': '200px' }}
                        options={products.map(product => ({ value: product.id, label: product.name }))}
                        // values={[]}
                        className='text-start'
                        onChange={productPurchasing}
                    // itemRenderer={customItemRenderer}
                    />
                </div>
                <div class="grid grid-cols-3 gap-4 py-4">
                    <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            Supplier
                        </span>
                        <select id="underline_select" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose supplier</option>
                            <option value="kg">Mamun</option>
                            <option value="l">Abul</option>
                            <option value="p">Babul</option>
                        </select>
                    </div>

                    <div class="flex">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            Date
                        </span>
                        <input type="datetime-local" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
                    </div>

                </div>
            </div>

            {/* Product Table */}
            <PurchaseTable toPurchaseProducts={toPurchaseProducts}  />

            <div className="py-4 flex justify-center items-center">
                <button
                    type="button"
                    class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-amber-200 hover:bg-amber-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    <span className="mr-2"><FontAwesomeIcon icon={faMoneyBill} /></span>
                    Payment
                </button>
            </div>
        </>
    );
};

export default AddPurchase;