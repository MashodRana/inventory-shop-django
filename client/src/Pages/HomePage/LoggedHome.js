import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Products from "../../Components/Products/Products";
import Purchase from "../../Components/Purchase";
import Sales from "../../Components/Sales";

const LoggedHome = () => {
    return (
        <>
            <div class="flex flex-wrap bg-gray-100 w-full h-screen">
                <div class="w-3/12 bg-white rounded p-3 shadow-lg">
                    <div class="flex items-center space-x-4 p-2 mb-5">
                        <img class="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta" />
                        <div>
                            <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">Mashod Rana</h4>
                            <span class="text-sm tracking-wide flex items-center space-x-1">
                                <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg><span class="text-gray-600">Verified</span>
                            </span>
                        </div>
                    </div>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <Link to="" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
                                <span class="text-gray-600">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="products" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                <span class="text-gray-600">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                    </svg>
                                </span>
                                <span>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="sales" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                <span class="text-gray-600">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span>Sales</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="purchase" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                <span class="text-gray-600">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </span>
                                <span>Purchase</span>
                            </Link>
                        </li>

                        <li>
                            <a href="#" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                                <span class="text-gray-600">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </span>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="w-9/12">
                    <div class="p-4 text-gray-500">
                        <Routes>
                            <Route path="" element={<Dashboard />} />
                            <Route path="products/" element={<Products />} />
                            <Route path="sales/" element={<Sales />} />
                            <Route path="purchase/" element={<Purchase />} />

                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoggedHome;