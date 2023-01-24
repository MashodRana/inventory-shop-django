import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-dropdown-select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProductStock = () => {
    const productUrl = `http://127.0.0.1:8000/products/`;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(productUrl)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [productUrl])

    return (
        <>
            <h1 className="text-start sm:text-3xl text-xl font-medium title-font text-gray-900">
                Add Product Stock
            </h1>
            <p className="text-md text-start">
                Add new product stock with details information.
            </p>
            {/* <form onSubmit={handleAddSupplierSubmit}> */}
            <div className="container px-5 py-6 mx-auto">
                <div className="flex ">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        Product
                    </span>
                    <Select
                        // style={{ "min-width": "200px" }}
                        options={products.map((product) => ({
                            value: product.id,
                            label: product.name,
                        }))}
                        // values={[]}
                        className="text-start w-100"
                        // onChange={productPurchasing}
                    // itemRenderer={customItemRenderer}
                    />
                </div>
            </div>
            {/* </form> */}
        </>
    );
};

export default AddProductStock;
