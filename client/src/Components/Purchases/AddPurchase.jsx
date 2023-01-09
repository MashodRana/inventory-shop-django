const AddPurchase = () => {
    return (
        <>
            <h1 className="text-start sm:text-3xl text-xl font-medium title-font text-gray-900">Add Purchase</h1>
            <p className="text-md text-start">Purchase new products and entry them here to track.</p>
            <div class="container px-5 py-6 mx-auto">
                {/* product selection */}
                <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="flex">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            Product
                        </span>
                        <select id="underline_select" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a product</option>
                            <option value="US">Rice</option>
                            <option value="CA">Oil</option>
                            <option value="FR">Biscuits</option>
                            <option value="DE">Egg</option>
                        </select>
                    </div>
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
        </>
    );
};

export default AddPurchase;