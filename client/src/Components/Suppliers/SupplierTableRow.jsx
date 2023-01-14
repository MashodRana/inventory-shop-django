import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SupplierTableRow = (props) => {
    const { supplier_code, name, designation, primary_phone, secondary_phone, email, company, address } = props.supplier;
    console.log('supplier id is :', props.supplier.id)
    return (
        <>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">


                    <p>
                        {supplier_code}
                    </p>
                </th>
                <td class="px-6 py-4">
                    {name}
                </td>
                <td class="px-6 py-4">
                    {designation}
                </td>
                <td class="px-6 py-4 text-center">
                    {primary_phone}
                </td>
                <td class="px-6 py-4">
                    {secondary_phone}
                </td>
                <td class="px-6 py-4">
                    {email}
                </td>
                <td class="px-6 py-4">
                    {company}
                </td>
                <td class="px-6 py-4">
                    {address}
                </td>
                <td class="px-6 py-4 text-center">
                    <Link className="p-2" to={`${props.supplier.id}`} >
                        <FontAwesomeIcon
                            className="text-xl text-yellow-500 hover:cursor-pointer"
                            icon={faPencilSquare}
                        />
                    </Link>
                    <button
                        className="p-2"
                        onClick={() => props.removeSupplier(props.supplier.id)}
                    >
                        <FontAwesomeIcon
                            className="text-xl text-red-500 hover:cursor-pointer"
                            icon={faTrash}
                        />
                    </button>
                </td>
            </tr>
        </>
    );
}

export default SupplierTableRow;