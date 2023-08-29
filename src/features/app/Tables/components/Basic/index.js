import React from "react";
const Basic = ({ BasicJson }) => {
  const tableHead = Object.keys(BasicJson[0]).map((title, index) => {
    return (
      <th key={`${title}-${index}`} align="left">
        {title}
      </th>
    );
  });
  const keyValues = Object.keys(BasicJson[0]);
  // get table row data
  const tableData = BasicJson.map((data, index) => {
    return (
      <tr key={`uni-${index}${Math.random()}}`}>
        {keyValues.map((v) => {
          return <td>{data[v]}</td>;
        })}
      </tr>
    );
  });

  return (
    <>
      <table width="100%" cellspacing="0" cellpadding="0">
        <thead>{tableHead}</thead>
        <tbody>{tableData}</tbody>
      </table>
    </>
  );
};

export default Basic;
