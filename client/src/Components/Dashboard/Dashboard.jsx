const Dashboard = () => {
    return (
        <>
            <h1 class="text-start sm:text-3xl text-2xl font-medium title-font text-gray-900">Dashboard</h1>

            <div class="container px-5 py-6 mx-auto">
                <div class="flex flex-wrap justify-between text-center">
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                            </svg>
                            <h2 class="title-font font-medium text-3xl text-gray-900">100000 Tk</h2>
                            <p class="leading-relaxed">Today Sale</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                            </svg>
                            <h2 class="title-font font-medium text-3xl text-gray-900">40000 Tk</h2>
                            <p class="leading-relaxed">Today Purchase</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-yellow-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                            </svg>
                            <h2 class="title-font font-medium text-3xl text-gray-900">3000 Tk</h2>
                            <p class="leading-relaxed">Today Profit</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap">
                    <div className="w-1/2 ">
                        <div className="m-4 p-2 bg-amber-100">
                            <h2 class="title-font font-medium text-3xl text-gray-900">40000 Tk</h2>
                            <p class="leading-relaxed text-amber-500">Total Receiveable</p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="m-4 p-2 bg-amber-100">
                            <h2 class="title-font font-medium text-3xl text-gray-900">40000 Tk</h2>
                            <p class="leading-relaxed text-amber-500">Total Payable</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap justify-between text-center">
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border border-amber-200 bg-amber-100 px-4 py-6 rounded-lg">
                            <h2 class="title-font font-medium text-3xl text-gray-900">100000 Tk</h2>
                            <p class="leading-relaxed text-amber-500">Total Sale</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border border-amber-200 bg-amber-100 px-4 py-6 rounded-lg">
                            <h2 class="title-font font-medium text-3xl text-gray-900">40000 Tk</h2>
                            <p class="leading-relaxed text-amber-500">Total Purchase</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border border-amber-200 bg-amber-100 px-4 py-6 rounded-lg">

                            <h2 class="title-font font-medium text-3xl text-gray-900">3000 Tk</h2>
                            <p class="leading-relaxed text-amber-500">Total Profit</p>
                        </div>
                    </div>

                </div>

                <div class="flex flex-wrap text-center justify-between">
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
                        <p class="leading-relaxed"># Total Products</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                        <p class="leading-relaxed"># Total Suppliers</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;