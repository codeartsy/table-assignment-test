import React from "react";
import "./MobileHome.css";
import Basic from "features/app/Tables/mobile/components/Basic";
import BasicJson from "features/mockjson/basic.json";
import RadioJson from "features/mockjson/radio.json";
import CheckboxJson from "features/mockjson/checkbox.json";
import RadioTable from "features/app/Tables/mobile/components/RadioTable";
import CheckboxTable from "features/app/Tables/mobile/components/CheckboxTable";

const MobileHome = () => {
  return (
    <>
      <div className="main-container">
        <div className="table-container">
          <div className="table-wrapper">
            <Basic BasicJson={BasicJson} />
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="table-container">
          <div className="table-wrapper">
            <RadioTable RadioJson={RadioJson} />
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="table-container">
          <div className="table-wrapper">
            <CheckboxTable CheckboxJson={CheckboxJson} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHome;
