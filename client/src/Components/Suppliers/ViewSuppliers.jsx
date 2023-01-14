import { useEffect } from "react";
import { useState } from "react";
import SupplierTableRow from "./SupplierTableRow";

const ViewSuppliers = () => {
    const [suppliers, setSuppliers] = useState([]);

    const removeSupplier = (supplierId) => {
        const url = `http://127.0.0.1:8000/suppliers/${supplierId}/`;
        fetch(url, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                const newSuppliers = suppliers.filter(supplier => supplier.id !== supplierId);
                setSuppliers(newSuppliers);
            });
    }

    useEffect(() => {
        const url = `http://127.0.0.1:8000/suppliers/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSuppliers(data));
    }, []);
    return (
        <>
            <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Suppliers</h1>
            <p className="text-md text-start">See the supplier details and update if require.</p>
            <div class="container px-5 py-6 mx-auto">
                {/* Product Table */}
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Supplier Code
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Designation
                                </th>
                                <th scope="col" class="px-6 py-6 w-2/12 text-center">
                                    Contact
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Contact 2
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Company
                                </th>
                                <th scope="col" class="px-6 py-6 w-2/12">
                                    Address
                                </th>
                                <th scope="col" class="px-6 py-6 w-1/12">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                suppliers.length
                                    ? suppliers.map(supplier => (
                                        <SupplierTableRow
                                            key={supplier.id}
                                            supplier={supplier}
                                            removeSupplier={removeSupplier}
                                        />
                                    ))
                                    : <tr><td colSpan="9" className="p-4 text-center">There is no supplier.</td></tr>
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default ViewSuppliers;