// src/data/dashboardData.js

import StudentLogo from "../../utilities/logos&Images/graduated.png";
import TeacherLogo from "../../utilities/logos&Images/teacher.png";
import ParentLogo from "../../utilities/logos&Images/family.png";
import StaffLogo from "../../utilities/logos&Images/teamwork.png";

const dashboardBoxesData = [
  {
    name: "Students",
    subtitle: "Total Students",
    count: 1000,
    logo: StudentLogo,
    colors: ["#C5E1A5", "#E6EE9C"], // Light green combination
  },
  {
    name: "Teachers",
    subtitle: "Total Teachers",
    count: 250,
    logo: TeacherLogo,
    colors: ["#4DB6AC", "#B2DFDB"], // Light blue-green combination
  },
  {
    name: "Parents",
    subtitle: "Total Parents",
    count: 800,
    logo: ParentLogo,
    colors: ["#FFAB91", "#FFCCBC"], // Light peach combination
  },
  {
    name: "Staff",
    subtitle: "Total Staff",
    count: 150,
    logo: StaffLogo,
    colors: ["#F06292", "#F8BBD0"], // Light pink combination
  },
];

export default dashboardBoxesData;
