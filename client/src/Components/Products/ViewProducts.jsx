const ViewProducts = ()=>{
    return (
        <>
    <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Products</h1>
    <p className="text-md text-start">See the product details</p>
    <div class="container px-5 py-6 mx-auto">
      {/* Product Table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-6 w-2/12">
                Code
              </th>
              <th scope="col" class="px-6 py-6 w-2/12">
                Name
              </th>
              <th scope="col" class="px-6 py-6 w-2/12">
                Brand
              </th>
              <th scope="col" class="px-6 py-6 w-1/12 text-center">
                Unit
              </th>
              <th scope="col" class="px-6 py-6 w-4/12">
                Details
              </th>
              <th scope="col" class="px-6 py-6 w-1/12">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                o-10001
              </th>
              <td class="px-6 py-4">
                Oil
              </td>
              <td class="px-6 py-4">
                Teer
              </td>
              <td class="px-6 py-4 text-center">
                Litter
              </td>
              <td class="px-6 py-4">
               product details
              </td>
              <td class="px-6 py-4">
               edit
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                o-10001
              </th>
              <td class="px-6 py-4">
                Oil
              </td>
              <td class="px-6 py-4">
                Teer
              </td>
              <td class="px-6 py-4 text-center">
                Litter
              </td>
              <td class="px-6 py-4">
               product details
              </td>
              <td class="px-6 py-4">
               edit
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                o-10001
              </th>
              <td class="px-6 py-4">
                Oil
              </td>
              <td class="px-6 py-4">
                Teer
              </td>
              <td class="px-6 py-4 text-center">
                Litter
              </td>
              <td class="px-6 py-4">
               product details
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                o-10001
              </th>
              <td class="px-6 py-4">
                Oil
              </td>
              <td class="px-6 py-4">
                Teer
              </td>
              <td class="px-6 py-4 text-center">
                Litter
              </td>
              <td class="px-6 py-4">
               product details
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </>
    );
};

export default ViewProducts;