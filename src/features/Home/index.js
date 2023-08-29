import React from "react";
import "./Home.css";
import Basic from "features/app/Tables/components/Basic";
import BasicJson from "features/mockjson/basic.json";
import RadioJson from "features/mockjson/radio.json";
import CheckboxJson from "features/mockjson/checkbox.json";
import RadioTable from "features/app/Tables/components/RadioTable";
import CheckboxTable from "features/app/Tables/components/CheckboxTable";
import Sortables from "features/app/Tables/components/Sortables";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="filter-container">
          <p>Basic design, with grey header</p>
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            <Basic BasicJson={BasicJson} />
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="filter-container">
          <p>Table with Sorting</p>
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            <Sortables BasicJson={BasicJson} />
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="filter-container">
          <p>Table with radio button</p>
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            <RadioTable RadioJson={RadioJson} />
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="filter-container">
          <p>Table with checkbox</p>
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            <CheckboxTable CheckboxJson={CheckboxJson} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
