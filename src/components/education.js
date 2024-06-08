import React from "react";

export default function EducationSection() {
  return (
    <div>
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-10">
          <div class="w-full mt-10 text-center">
            <h2 class="mb-4 text-4xl font-bold text-blue-200">
              Education
            </h2>
            <p class="text-white text-lg mx-auto lg:w-1/2">
            My educational history and what I have learned.
            </p>
          </div>
        
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="w-full mb-8 lg:mb-10">
              <p class="my-4 text-lg text-blue-400">Jun 2022 – Sekarang</p>
              <h2 class="text-2xl font-bold dark:text-white mb-4">Institut Teknologi Telkom Purwokerto</h2>
              <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">S1 Software Engineering, Faculty of Informatics. GPA 3.97 out of 4.00</p>
              <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Relevant courses: Programming, Software Engineering Models and Methods, 
                Software Requirements Engineering, Interaction Design. Able to maintain a high GPA with multiple bootcamps and involvement in organizations.</p>
            </div>

            <div class="w-full mb-8 lg:mb-10">
              <p class="my-4 text-lg text-blue-400">Jul 2019 – Jun 2022</p>
              <h2 class="text-2xl font-bold dark:text-white mb-4">SMK Telkom Purwokerto</h2>
              <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Software Engineering</p>
              <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Relevant couseworks : Leadership and 
                Communication Skills, Technology Literacy, Computational Thinking, Basic Programming, Database, Software 
                Requirements Engineering, Graphic Design, Entrepreneurship, Programming with Frameworks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
