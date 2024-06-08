import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";

import Pkl from "../../assets/pkl.png"
import Digitalent from "../../assets/digitalent.png"
import Inxubix from "../../assets/incubix.png"
import Ngoprek from "../../assets/ngoprek.png"
import NgoprekAndro from "../../assets/ngoprek-andro.png"
import Aws from "../../assets/aws.png"
import Ui from "../../assets/uiux.png"
import Smartpath from "../../assets/smartpath.jpg"
import Finalist from "../../assets/finalist.png"

export default function Certificate() {
  return (
    <div>
      <Navbars />
      <div className="pt-16 md:pt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-10">
            <div className="w-full mb-8 lg:mb-16 text-center">
            <h2 className="mb-4 text-blue-200 text-4xl font-bold mx-auto">
                Certification
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
                        src={Finalist}
                        alt="Certificate smartpath"
                    />
                    </a>
                    <div className="px-5 pb-5">
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                        <p>GEMASTIK Finalist Certificate - Software Development Division</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                            Universitas Brawijaya
                        </span>
                        <a
                            href="https://www.linkedin.com/in/nadiaputrirah/overlay/1717825435795/single-media-viewer/?profileId=ACoAADF4bA0Ben4eUfD_q3RMr1o2tSFOEC0NxVo"
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
                        src={Smartpath}
                        alt="Certificate smartpath"
                    />
                    </a>
                    <div className="px-5 pb-5">
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                        <p>Participants of Web Developer Career Planning and Preparation Bootcamp organized by Smartpath.id</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                            Online Learning
                        </span>
                        <a
                            href="https://www.linkedin.com/posts/nadiaputrirah_hi-everyone-i-am-happy-to-receive-activity-7205121420157190144-KFKn?utm_source=share&utm_medium=member_desktop"
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
                        src={Ui}
                        alt="Certificate UI/UX"
                    />
                    </a>
                    <div className="px-5 pb-5">
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                        <p>Participants of the UI/Ux Design Bootcamp organized by the Software Engineering Student Association of ITTP. </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                            Online Learning
                        </span>
                        <a
                            href="https://www.linkedin.com/posts/nadiaputrirah_hi-everyone-i-am-happy-to-receive-a-activity-7205118535121928192-Tp3z?utm_source=share&utm_medium=member_desktop"
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
                        src={NgoprekAndro}
                        alt="Certificate Ngoprek"
                    />
                    </a>
                    <div className="px-5 pb-5">
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                        <p>Participants of the Android Development Bootcamp organized by the Software Engineering Student Association of ITTP. </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                            Hybrid
                        </span>
                        <a
                            href="https://www.linkedin.com/posts/nadiaputrirah_hi-everyone-with-great-joy-i-received-activity-7205110431697252353-Ctqn?utm_source=share&utm_medium=member_desktop"
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
                        src={Ngoprek}
                        alt="Certificate Ngoprek"
                    />
                    </a>
                    <div className="px-5 pb-5">
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                        <p>Participants of the Website Development Bootcamp organized by the Software Engineering Student Association of ITTP. </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                            Hybrid
                        </span>
                        <a
                            href="https://www.linkedin.com/posts/nadiaputrirah_hi-everyone-i-am-happy-to-receive-a-certificate-activity-7205103320934330368-w7h9?utm_source=share&utm_medium=member_desktop"
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
                        src={Inxubix}
                        alt="Certificate Inxubix"
                    />
                    </a>
                    <div className="px-5 pb-5">
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                        <p>Mentoring Frontend Web Developer with Tailwind CSS as Participant</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                            Online Learning
                        </span>
                        <a
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7205098422494752768/"
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
                        src={Digitalent}
                        alt="Certificate Digitalent"
                    />
                    </a>
                    <div className="px-5 pb-5">
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                        <p>VSGA Junior Web Development Bootcamp participants digitalent kominfo</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                            Online Learning
                        </span>
                        <a
                            href="https://www.linkedin.com/in/nadiaputrirah/overlay/1635527315088/single-media-viewer/?profileId=ACoAADF4bA0Ben4eUfD_q3RMr1o2tSFOEC0NxVo"
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
                        src={Aws}
                        alt="Certificate AWS"
                    />
                    </a>
                    <div className="px-5 pb-5">
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                        <p>Certificate for participating in the “Learn AWS Cloud Basics” online class at Dicoding. </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                            Online class
                        </span>
                        <a
                            href="https://www.linkedin.com/posts/nadiaputrirah_hello-everyone-i-proudly-received-a-activity-7205114243694616576-hSjn?utm_source=share&utm_medium=member_desktop"
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
                        src={Pkl}
                        alt="Certificate PKL"
                    />
                    </a>
                    <div className="px-5 pb-5">
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex text-white items-center space-x-1 rtl:space-x-reverse">
                        <p>Web Developer Apprentice at PT Metafora Indonesia Teknologi (IDMETAFORA)</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                            Sleman, Yogyakarta
                        </span>
                        <a
                            href="https://www.linkedin.com/in/nadiaputrirah/overlay/1635527312057/single-media-viewer/?profileId=ACoAADF4bA0Ben4eUfD_q3RMr1o2tSFOEC0NxVo"
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
      <Footer/>
    </div>
  );
}
