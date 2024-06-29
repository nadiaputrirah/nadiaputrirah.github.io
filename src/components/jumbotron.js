import React from 'react';
import profile from "../assets/img-banner.png";

export default function Jumbotron() {
  return (
    <div className="pt-16 md:pt-10">
      <section>
        <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="md:mt-10">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Hello, I am <span className="text-blue-300">Nadia</span>👋🏼
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Undergraduate Software Engineering student with a deep interest in 
              programming and UI/UX design, and a strong commitment to continuous learning. 
              Proficient in back-end technologies using PHP and Laravel, 
              and front-end with React and Vue. Skilled in the use of Visual Studio Code, 
              Git, Postman, Canva, and Figma. Experienced in good time 
              management, problem-solving skills, and enjoy working in a team.
            </p>
          </div>
          <img
            src={profile}
            className="w-full items-center mb-4 rounded-lg mt-4"
            alt="Info Logo"
          />
        </div>
      </section>
    </div>
  );
}
