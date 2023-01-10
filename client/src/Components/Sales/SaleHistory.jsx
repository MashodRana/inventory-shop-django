const SaleHistory = () => {
    return (
        <>
            <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Sales History</h1>
            <p className="text-sm text-start">See the sales details information.</p>
            <div class="container px-5 py-6 mx-auto">
                {/* Sales Table */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Customer
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-6 w-2/12">
                                    Products
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                                    Sold Value
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                                    Discount
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                                    Paid
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                                    Due
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                                    Purchase Cost
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                                    Profit
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Abul
                                </th>
                                <td class="px-6 py-4">
                                    12-08-2022
                                </td>
                                <td class="px-6 py-4">
                                    Laptop-3-3000
                                </td>
                                <td class="px-6 py-4">
                                    $3000
                                </td>
                                <td class="px-6 py-4 text-center">
                                    0
                                </td>
                                <td class="px-6 py-4 text-end">
                                    $2000
                                </td>
                                <td class="px-6 py-4 text-end">
                                    $1000
                                </td>
                                <td class="px-6 py-4 text-end">
                                    $2500
                                </td>
                                <td class="px-6 py-4 text-end">
                                    $500
                                </td>
                                <td class="px-6 py-4 text-end">
                                    Edit
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default SaleHistory;