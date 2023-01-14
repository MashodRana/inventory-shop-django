import ProductTableRow from "./ProductTableRow";

const ViewProducts = () => {
  return (
    <>
      <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Products</h1>
      <p className="text-md text-start">See the product details</p>
      <div className="container px-5 py-6 mx-auto">
        {/* Product Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-6 w-2/12">
                  Code
                </th>
                <th scope="col" className="px-6 py-6 w-2/12">
                  Name
                </th>
                <th scope="col" className="px-6 py-6 w-2/12">
                  Brand
                </th>
                <th scope="col" className="px-6 py-6 w-1/12 text-center">
                  Unit
                </th>
                <th scope="col" className="px-6 py-6 w-4/12">
                  Details
                </th>
                <th scope="col" className="px-6 py-6 w-1/12">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <ProductTableRow />
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
};

export default ViewProducts;