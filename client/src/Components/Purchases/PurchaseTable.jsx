
import PurchaseTableRow from "./PurchaseTableRow";


const PurchaseTable = (props) => {
    const toPurchaseProducts = props.toPurchaseProducts;

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            {console.log(toPurchaseProducts)}
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-6 w-3/12">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-6 w-1/12">
                            Unit
                        </th>
                        <th scope="col" class="px-6 py-6 w-1/12">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-6 w-1/12">
                            Quantity
                        </th>

                        <th scope="col" class="px-6 py-6 w-2/12 text-end">
                            Sub Total
                        </th>
                        <th scope="col" class="px-6 py-6 w-1/12">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toPurchaseProducts.length
                            ? toPurchaseProducts.map(toPurchaseProduct => (<PurchaseTableRow
                                key={toPurchaseProduct.id}
                                toPurchaseProduct={toPurchaseProduct}
                                updatePurchasedList={props.updatePurchasedList}
                                removeFromPurchasedList={props.removeFromPurchasedList}
                            />))
                            : <tr><th>No product purchased.</th></tr>
                    }
                </tbody>
                <tfoot>
                    <tr class="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" colspan="3" class="px-6 py-3 text-lg text-amber-500">Total</th>
                        <td colspan="2" class="px-6 py-3 text-end">Tk. {props.total}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default PurchaseTable;