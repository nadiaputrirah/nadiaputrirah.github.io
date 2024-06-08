import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";

import Html from "../../assets/html&css.png"
import Js from "../../assets/js.png"
import Php from "../../assets/php.png"
import Python from "../../assets/python.png"
import Laravel from "../../assets/laravel.png"
import ReactJs from "../../assets/react.png"
import Bootstrap from "../../assets/bootstrap.png"
import Flowbite from "../../assets/flowbite.png"
import Figma from "../../assets/figma.png"
import Mysql from "../../assets/mysql.png"
import Mongodb from "../../assets/mongodb.png"
import Vscode from "../../assets/vscode.png"
import Xampp from "../../assets/xampp.png"
import Laragon from "../../assets/laragon.png"

export default function Skills() {
    return (
        <div>
            <Navbars />
                <div className="pt-16 md:pt-10">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-10">
                        <div className="w-full mb-8 lg:mb-16 text-center">
                        <h2 className="mb-4 text-blue-200 text-4xl font-bold mx-auto">
                            Skills
                        </h2>
                        <p className="text-white text-lg lg:w-1/2 mx-auto">
                            Special skills, libraries and tools relevant to my field
                        </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 p-8">
                            {[
                                { src: Html, name: "Html & CSS" },
                                { src: Js, name: "Javascript" },
                                { src: Php, name: "PHP" },
                                { src: Python, name: "Python" },
                                { src: Laravel, name: "Laravel" },
                                { src: ReactJs, name: "React Js" },
                                { src: Bootstrap, name: "Bootstrap" },
                                { src: Flowbite, name: "Flowbite" },
                                { src: Mysql, name: "Mysql" },
                                { src: Mongodb, name: "MongoDB" },
                                { src: Xampp, name: "Xampp" },
                                { src: Laragon, name: "Laragon" },
                                { src: Figma, name: "Figma" },
                                { src: Vscode, name: "Visual Studio Code" },
                            ].map((item, index) => (
                                <div key={index} className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                    <div className="px-5 py-4 flex flex-col items-center">
                                        <img className="p-4 rounded-t-lg" src={item.src} alt={item.name} />
                                        <h3 className="text-white text-lg font-semibold mt-2">{item.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}
