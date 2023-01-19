import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const PurchasePaymentTableRow = (props) => {
    const {name, unit_title, price, quantity, subtotal} = props.product;
    return (
        < tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" >
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
            </th>
            <td class="px-6 py-4">
                {unit_title}
            </td>
            <td class="px-6 py-4">
                {price}
            </td>
            <td class="px-6 py-4">
                {quantity}
            </td>
            <td class="px-6 py-4 text-end">
                {subtotal}
            </td>
            
        </tr >
    );
};

export default PurchasePaymentTableRow;