import React from 'react';

export default function Interest() {
    return (
        <div>
            <section className="mb-10">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h1 className="text-3xl text-center font-bold mb-5 text-blue-200">Topics of Interest</h1>
                    <p className="text-center text-white text-lg mb-10">My focus is on creating innovative and user-friendly technology solutions.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 p-8 flex items-center justify-center">
                        <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="px-5 py-4 flex items-center justify-center">
                                <p className="text-center text-white text-xl p-6">Front-end Developer</p>
                            </div>
                        </div>

                        <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="px-5 py-4 flex items-center justify-center">
                                <p className="text-center text-white text-xl p-6">Back-end Developer</p>
                            </div>
                        </div>

                        <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="px-5 py-4 flex items-center justify-center">
                                <p className="text-center text-white text-xl p-6">UI/UX Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
