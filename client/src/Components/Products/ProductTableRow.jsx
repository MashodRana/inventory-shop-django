import { Link } from "react-router-dom";
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProductTableRow = (props) => {
    const { id, name, brand, unit_title } = props.product;
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {id}
            </th>
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4">
                {brand}
            </td>
            <td className="px-6 py-4 text-center">
                {unit_title}
            </td>
            <td className="px-6 py-4">
                product details
            </td>
            <td className="px-6 py-4">
                <Link className="p-2" to={`${props.product.id}`} >
                    <FontAwesomeIcon className="text-xl text-yellow-500 hover:cursor-pointer" icon={faPencilSquare} />
                </Link>
                <button
                    className="p-2"
                    onClick={() => props.removeProduct(props.product.id)}
                >
                    <FontAwesomeIcon className="text-xl text-red-500 hover:cursor-pointer" icon={faTrash} />
                </button>
            </td>
        </tr>
    );
};

export default ProductTableRow;