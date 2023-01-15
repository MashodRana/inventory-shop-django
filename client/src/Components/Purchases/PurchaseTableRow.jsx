import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PurchaseTableRow = (props) => {
    const { id, name, unit, unit_title, price, quantity, subtotal } = props.toPurchaseProduct;

    return (
        < tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" >
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
            </th>
            <td class="px-6 py-4">
                {unit_title}
            </td>
            <td class="px-6 py-4">
                <input required
                    type="number"

                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </td>
            <td class="px-6 py-4">
                <input required

                    type="number"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </td>
            <td class="px-6 py-4 text-end">
                <input required
                    disabled
                    type="number"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </td>
            <td class="px-6 py-4 text-center">
                <FontAwesomeIcon className="text-xl text-red-500 hover:cursor-pointer" icon={faXmark} />
            </td>
        </tr >
    );
};

export default PurchaseTableRow;