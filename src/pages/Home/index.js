import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Jumbotron from "../../components/jumbotron";
import EducationSection from "../../components/education";
import Interest from "../../components/interest";
import InternshipSection from "../../components/internship";
import OrganitionSection from "../../components/organition";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <Navbars />
      <Jumbotron />
      <Interest/>
      <EducationSection />
      <InternshipSection />
      <OrganitionSection />
      <Footer />
    </div>
  );
}
