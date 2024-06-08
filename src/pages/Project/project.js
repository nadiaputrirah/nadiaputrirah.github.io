import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";

import Warkop from "../../assets/warkop.png"
import Ukm from "../../assets/ukm.png"
import Btv from "../../assets/btv.png"
import Disa from "../../assets/disa.png"
import Medifo from "../../assets/medifo.png"
import OnlineCourse from "../../assets/online-course.png"
import Chicken from "../../assets/chichicken.png"
import Agromix from "../../assets/agromix.png"
import Doctormo from "../../assets/doctormo.png"

export default function Project() {
  return (
    <div>
      <Navbars />
      <div className="pt-16 md:pt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-10">
          <div className="w-full mb-8 lg:mb-16 text-center">
            <h2 className="mb-4 text-blue-200 text-4xl font-bold mx-auto">
              Projects & Achievements
            </h2>
            <p className="text-white text-lg lg:w-1/2 mx-auto">
              A collection of projects I have worked on
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 p-8">
            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={Warkop}
                  alt="Portofolio design warkop"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Web Profile Design of Warkop Bahenol
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                    <p>In this coursework, I act as a UI/UX designer in a collaborative team and according to the client's request.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    Academic Project
                  </span>
                  <a
                    href="https://dribbble.com/shots/24312522-WarkopBahenol-Coffee-Shop-Profile-Website?utm_source=Clipboard_Shot&utm_campaign=nadiapp&utm_content=WarkopBahenol%20-%20Coffee%20Shop%20Profile%20Website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nadiapp&utm_content=WarkopBahenol%20-%20Coffee%20Shop%20Profile%20Website&utm_medium=Social_Share"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={Ukm}
                  alt="Portofolio design UKM"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    SME Center Website App IT Telkom Purwokerto
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center text-white space-x-1 rtl:space-x-reverse">
                    <p>In this coursework, I acted as a UI/UX designer in a team collaboration and based on valid data from questionnaires.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    Academic Project
                  </span>
                  <a
                    href="https://dribbble.com/shots/24312433-UKM-Center-SME-Center-Website-App-IT-Telkom-Purwokerto?utm_source=Clipboard_Shot&utm_campaign=nadiapp&utm_content=UKM%20Center%20-%20SME%20Center%20Website%20App%20IT%20Telkom%20Purwokerto&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=nadiapp&utm_content=UKM%20Center%20-%20SME%20Center%20Website%20App%20IT%20Telkom%20Purwokerto&utm_medium=Social_Share"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={Btv}
                  alt="Portofolio design BTV"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Tourism Village Website App
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center text-white space-x-1 rtl:space-x-reverse">
                    <p>In the Innovillage competition, I acted as a UI/UX designer in a collaborative team. Based on valid data from surveys and interviews.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    Project Innovillage
                  </span>
                  <a
                    href="https://dribbble.com/shots/24312335-Bridge-to-Village-Tourism-Village-Website-App"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={Disa}
                  alt="Portofolio design disa"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Tourism Digitalization Website Application
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center text-white space-x-1 rtl:space-x-reverse">
                    <p>In the Gemastik 2023 competition, I acted as UI/UX & Front-end in a collaborative team. Based on valid data from surveys and interviews.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                  <a
                    href="https://github.com/nadiaputrirah/WebDisa-Frontend"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Code
                  </a>
                  </span>
                  <a
                    href="https://dribbble.com/shots/24312115-Disa-Tourism-Digitalization-Website-Application"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Design
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={Medifo}
                  alt="Portofolio design Medifo"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Feed Design of HMSE IT Telkom Purwokerto
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center text-white space-x-1 rtl:space-x-reverse">
                    <p>As a staff of the graphic design division, I collaborate with teams from other divisions in developing feed designs. </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    Staff Media Informasi
                  </span>
                  <a
                    href="https://www.instagram.com/hmseittelkom?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={OnlineCourse}
                  alt="Portofolio design online course"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Mobile App Technology Online Course
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center text-white space-x-1 rtl:space-x-reverse">
                    <p>This is the final project of UI/UX Design bootcamp to get a certificate by designing a mobile-based application for online technology learning.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    Personal Project
                  </span>
                  <a
                    href="https://dribbble.com/shots/24311855-DigitalLearn-Mobile-App-Technology-Online-Course"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={Chicken}
                  alt="Portofolio design chischicken"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Korean spicy chicken online shop website
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center text-white space-x-1 rtl:space-x-reverse">
                    <p>This is a design for a school assignment! This design is the result of my exploration in creating an online food buying and selling website.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    Personal Project
                  </span>
                  <a
                    href="https://dribbble.com/shots/24311720-ChiChicken-Korean-spicy-chicken-online-shop-website"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={Agromix}
                  alt="Portofolio design agromix"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Agromix Website Redesign
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center text-white space-x-1 rtl:space-x-reverse">
                    <p>This is a redesign for an internship assignment! This design is the result of my exploration in creating an agricultural business website.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    Personal Project
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm border border-gray-200 shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={Doctormo}
                  alt="Portofolio design doctormo"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Online Health Consultation Website Design
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center text-white space-x-1 rtl:space-x-reverse">
                    <p>This is my first design for a school assignment! This design is the result of my exploration in creating a health website or online pharmacy.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    Personal Project
                  </span>
                  <a
                    href="https://www.behance.net/gallery/122744657/DokterMo-Website"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
