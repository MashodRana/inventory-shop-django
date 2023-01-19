import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddUnitModal = () => {
    const [unitInfo, setUnitInfo] = useState({})

    const handleOnChange = (evnt) => {
        let newUnitInfo = { ...unitInfo }
        newUnitInfo[evnt.target.name] = evnt.target.value;
        setUnitInfo(newUnitInfo);
    }

    const addUnit = async () => {
        const url = `http://127.0.0.1:8000/units/`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(unitInfo)
        })

        if (response.status === 201) {
            toast.success('Unit successfully added!', {
                position: toast.POSITION.TOP_RIGHT
            });
            setUnitInfo({});
        }
        else {
            toast.error('Unit adding failed!', {
                position: toast.POSITION.TOP_RIGHT
            });
            setUnitInfo(unitInfo);
        }
    }
    return (
        <>
            {/* <!-- Main modal --> */}
            <div id="addUnitModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div class="relative w-full h-full max-w-2xl md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Add New Unit
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="addUnitModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div class="p-6 space-y-6">
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    Short form
                                </span>
                                <input required
                                    name='short_form'
                                    value={unitInfo.short_form}
                                    onChange={handleOnChange}
                                    type="text"
                                    id="website-admin"
                                    class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="kg" />
                            </div>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    Title
                                </span>
                                <input required
                                    name='title'
                                    value={unitInfo.title}
                                    onChange={handleOnChange}
                                    type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kilogram" />
                            </div>
                            <div>

                                <label for="message" class="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea
                                    name='detail'
                                    value={unitInfo.detail}
                                    onChange={handleOnChange}
                                    id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                            </div>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div class="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="addUnitModal"
                                onClick={addUnit}
                                type="button" class="text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">Submit</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* Toaster to show confirmation message */}
            <ToastContainer />


        </>
    );
}

export default AddUnitModal;