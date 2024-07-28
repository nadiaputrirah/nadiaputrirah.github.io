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

    const [result, setResult] = React.useState("");

        const onSubmit = async (event) => {
            event.preventDefault();
            setResult("Sending....");
            const formData = new FormData(event.target);
        
            formData.append("access_key", "ccbace9e-8333-40d6-ba87-81a08c9a925a");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
        
            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        };

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
                            <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-white sm:text-xl">
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

            <section>
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-blue-200 text-4xl font-bold text-center">Contact Me</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-white dark:text-white sm:text-xl">Have questions or want to collaborate? I'd love to hear from you. Please fill out the form below to get in touch.</p>
                    <form onSubmit={onSubmit} class="space-y-8">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full name</label>
                            <input type="text" name="name" id="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name" required />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
                    </form>
                </div>
            </section>
            <Footer className="fixed bottom-0 w-full" />
        </div>
    );
}
