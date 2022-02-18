import React from "react";
import ExtraDetails from "./component/ExtraDetails";
import ExperienceDetails from "./component/ExperienceDetail";
import ProjectDeveloped from "./component/ProjectDeveloped";
import EducationDetails from "./component/EducationDetails";
import PersonalDetails from "./component/PersonalDetails";
import ReactPaginate from "react-paginate";


function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <PersonalDetails/>
      <EducationDetails/>
      <ProjectDeveloped/>
      <ExperienceDetails/>
      <ExtraDetails/>
    </div>
  );
}

export default App;
