
const PurchasePaymentTableRow = (props) => {
    const {name, unit_title, price, quantity, subtotal} = props.product;
    return (
        < tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" >
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
            </th>
            <td className="px-6 py-4">
                {unit_title}
            </td>
            <td className="px-6 py-4">
                {price}
            </td>
            <td className="px-6 py-4">
                {quantity}
            </td>
            <td className="px-6 py-4 text-end">
                {subtotal}
            </td>
            
        </tr >
    );
};

export default PurchasePaymentTableRow;