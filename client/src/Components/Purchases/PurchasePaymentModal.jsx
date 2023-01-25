import { useState } from "react";
import PurchasePaymentTableRow from "./PurchasePaymentTableRow";


const PurchasePaymentModal = (props) => {
    const products = props.purchasedProducts;
    const { supplier, total } = props;
    const [paidAmount, setPaidAmount] = useState(0.0);
    const [dueAmount, setDueAmount] = useState(0.0);

    const purchasingDone = () => {
        props.finalizeProductPurchaing(paidAmount, dueAmount);
    }

    return (
        <>
            {/* <!-- Main modal --> */}
            <div id="purchasePaymentModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="p-2 relative w-full h-full max-w-2xl md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Payment
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="purchasePaymentModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="relative overflow-x-auto">
                            <div className="flex mt-2 mb-5 p-2">
                                <label className=" font-semibold" htmlFor="">Supplier:</label>
                                <label className="ml-3" htmlFor="">{supplier}</label>
                            </div>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-6 w-3/12">
                                            Product name
                                        </th>
                                        <th scope="col" className="px-6 py-6 w-1/12">
                                            Unit
                                        </th>
                                        <th scope="col" className="px-6 py-6 w-1/12">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-6 w-1/12">
                                            Quantity
                                        </th>

                                        <th scope="col" className="px-6 py-6 w-2/12 text-end">
                                            Sub Total
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.length
                                            ? products.map(product => (<PurchasePaymentTableRow
                                                key={product.id}
                                                product={product}
                                            />))
                                            : <tr><th>No product purchased.</th></tr>
                                    }
                                </tbody>
                                <tfoot>
                                    <tr className="font-semibold text-gray-900 dark:text-white">
                                        <th scope="row" colspan="3" className="px-6 py-3 text-lg text-amber-500">Total</th>
                                        <td colspan="2" className="px-6 py-3 text-end">Tk. {total}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        Paid Amount
                                    </span>
                                    <input
                                        required
                                        name='paidAmount'
                                        value={paidAmount}
                                        onChange={e => setPaidAmount(e.target.value)}
                                        onBlur={e => setDueAmount(total - e.target.value)}
                                        type="number" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        Due Amount
                                    </span>
                                    <input
                                        disabled
                                        name='dueAmount'
                                        value={dueAmount}
                                        type="number" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-6">

                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="purchasePaymentModal"
                                onClick={purchasingDone}
                                type="button"
                                className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >Purchased</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PurchasePaymentModal;