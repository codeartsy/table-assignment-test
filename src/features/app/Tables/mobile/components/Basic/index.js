import React from "react";
import "./MobileBasic.css";
import MergedTableLayout from "../MergedTableLayout";
import BasicTableLayout from "../BasicTableLayout";

const Basic = ({ BasicJson }) => {
  const isLayout1 = Object.keys(BasicJson[0])?.length > 3;
  const tableHead = isLayout1 ? (
    <th align="left" colspan={Object.keys(BasicJson[0])?.length}>
      Contract Details
    </th>
  ) : (
    Object.keys(BasicJson[0]).map((title) => {
      return <th align="left">{title}</th>;
    })
  );
  const columnValues = Object.keys(BasicJson[0]);

  const tableData = BasicJson.map((data, indexKey) => {
    return (
      <tr id={`row-${indexKey}`}>
        {isLayout1 ? (
          <MergedTableLayout data={data} columnValues={columnValues} />
        ) : (
          <BasicTableLayout data={data} columnValues={columnValues} />
        )}
      </tr>
    );
  });

  return (
    <>
      <table width="100%" cellspacing="0" cellpadding="0">
        <thead>{tableHead}</thead>
        <tbody style={{ padding: "0 16px" }}>{tableData}</tbody>
      </table>
    </>
  );
};

export default Basic;
