import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Bill = () => {
    return (
        <>
            <h1 className="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Bill</h1>
            <p className="text-sm text-start">Create bill for the customer.</p>
            <div class="container px-5 py-6 mx-auto">
                {/* Bill form */}
                <div class="grid grid-rows gap-1">
                    <div class="md:flex md:items-center md:justify-start mb-6">
                        <div class="md:w-1/6">
                            <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Customer
                            </label>
                        </div>
                        <div class="md:w-2/6">
                            <select class="inline appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        <div className="md:w-1/6">
                            <Link to=''
                                class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
                            >
                                <FontAwesomeIcon icon={faUserPlus} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Bill;