const PurchaseHistory = ()=>{
    return (
        <>
            <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Purchase History</h1>
            <p className="text-sm text-start">See the sales details information.</p>
            <div class="container px-5 py-6 mx-auto">
                {/* Sales Table */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Bill No.
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Supplier
                                </th>
                                <th scope="col" class="px-6 py-6 w-4/12 text-center">
                                    Purchase Details
                                </th>
                                <th scope="col" class="px-6 py-6 w-2/12 text-center">
                                    Paid
                                </th>
                                <th scope="col" class="px-6 py-6 w-2/12 text-center">
                                    Due
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12 text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    B-001
                                </th>
                                <td class="px-6 py-4">
                                    12-08-2022
                                </td>
                                <td class="px-6 py-4">
                                    Abul-Uniliver
                                </td>
                                <td class="px-6 py-4">
                                    Lotion - 1 box - 2000 tk <br />
                                    Shampoo - 1 box - 2000 tk <br />

                                </td>
                                <td class="px-6 py-4 text-center">
                                    3000 tk
                                </td>
                                <td class="px-6 py-4 text-center">
                                    1000 tk
                                </td>
                                
                                <td class="px-6 py-4 text-center">
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

export default PurchaseHistory;