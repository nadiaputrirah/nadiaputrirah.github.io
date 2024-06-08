import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";

import Email from "../../assets/email.png"
import Linkedin from "../../assets/linkedin.png"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Dribbble from "../../assets/dribbble.png"
import Behance from "../../assets/behance.png"

export default function Certificate() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbars />
        <div className="flex-grow">
            <div className="pt-16 md:pt-10">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-10">
                    <div className="w-full mb-8 lg:mb-16 text-center">
                        <h2 className="mb-4 text-blue-200 text-4xl font-bold mx-auto">
                            Let's Connect
                        </h2>
                        <p className="text-white text-lg lg:w-1/2 mx-auto">
                            Find out more about my travels and experiences here.
                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 p-8 flex items-center justify-center">
                            {[
                                { src: Email, name: "nadiapputriirah@gamail.com", link: "mailto:nadiapputriirah@gamail.com" },
                                { src: Linkedin, name: "Nadia Putri Rahmaniar", link: "https://www.linkedin.com/in/nadiaputrirahmaniar" },
                                { src: Github, name: "@nadiaputrirah", link: "https://github.com/nadiaputrirah" },
                                { src: Behance, name: "@nadiaputrii1", link: "https://www.behance.net/nadiaputrii1" },
                                { src: Dribbble, name: "@nadiapp", link: "https://dribbble.com/nadiapp" },
                                { src: Instagram, name: "@na.nnana_", link: "https://www.instagram.com/na.nnana_" },
                            ].map((item, index) => (
                                <div key={index} className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                    <div className="px-5 py-4 flex items-center justify-center">
                                        <img className="w-10 h-10 mr-4" src={item.src} alt={item.name} />
                                        <a href={item.link} className="text-white text-lg font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                                            {item.name}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer className="fixed bottom-0 w-full" />
    </div>
  );
}
