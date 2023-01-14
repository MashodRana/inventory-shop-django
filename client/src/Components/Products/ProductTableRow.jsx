import { Link } from "react-router-dom";
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProductTableRow = () => {
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                o-10001
            </th>
            <td className="px-6 py-4">
                Oil
            </td>
            <td className="px-6 py-4">
                Teer
            </td>
            <td className="px-6 py-4 text-center">
                Litter
            </td>
            <td className="px-6 py-4">
                product details
            </td>
            <td className="px-6 py-4">
                <Link className="p-2" to='23' >
                    <FontAwesomeIcon className="text-xl text-yellow-500 hover:cursor-pointer" icon={faPencilSquare} />
                </Link>
                <button
                    className="p-2"
                    // onClick={() => props.removeSupplier(props.supplier.id)}
                >
                    <FontAwesomeIcon className="text-xl text-red-500 hover:cursor-pointer" icon={faTrash} />
                </button>
            </td>
        </tr>
    );
};

export default ProductTableRow;