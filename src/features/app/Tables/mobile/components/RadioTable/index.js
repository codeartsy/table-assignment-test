import React from "react";
import "./RadioTable.css";
import MergedTableLayout from "../MergedTableLayout";
import BasicTableLayout from "../BasicTableLayout";

const RadioTable = ({ RadioJson }) => {
  const [selectedrow, setSelectRow] = React.useState(0);
  const isLayout1 = Object.keys(RadioJson[0])?.length > 3;
  const tableHead = isLayout1 ? (
    <th align="left" colspan={Object.keys(RadioJson[0])?.length}>
      Contract Details
    </th>
  ) : (
    Object.keys(RadioJson[0]).map((title) => {
      return <th align="left">{title}</th>;
    })
  );
  const columnValues = Object.keys(RadioJson[0]);

  const onChangeRow = (e) => {
    const checkedrow = e.target.value ? parseInt(e.target.value) : 0;
    setSelectRow(checkedrow);
  };

  const tableData = RadioJson.map((data, indexKey) => {
    return (
      <tr
        id={`row-${indexKey}`}
        className={indexKey === selectedrow ? "active" : ""}
      >
        <td width="80px">
          <label htmlFor={indexKey} className="radio-label">
            <input
              className="single-select"
              type="radio"
              name="single-select"
              value={indexKey}
              id={indexKey}
              checked={indexKey === selectedrow}
              onChange={onChangeRow}
            />
            <span className="custom-radio" />
          </label>
        </td>
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
        <thead>
          <th></th>
          {tableHead}
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </>
  );
};

export default RadioTable;
