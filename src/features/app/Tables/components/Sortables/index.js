import React from "react";
import { useSortableData } from "features/app/utils";
import { ReactComponent as Sortingup } from "assets/icons/sortingup.svg";
import { ReactComponent as Sortingdown } from "assets/icons/sortingdown.svg";
import { ReactComponent as Sortingneutral } from "assets/icons/sortingneutral.svg";
import "./Sortables.css";

const Sortables = ({ BasicJson }) => {
  const { items, requestSort, sortConfig } = useSortableData(BasicJson);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const tableHead = Object.keys(BasicJson[0]).map((title, index) => {
    return (
      <th align="left" key={title + index} className="sorting-style">
        <div
          onClick={() => requestSort(title)}
          className={getClassNamesFor(title)}
        >
          {title}
          <div className="sorting-container">
            {sortConfig &&
            sortConfig.key === title &&
            sortConfig.direction &&
            sortConfig.direction === "asc" ? (
              <Sortingup />
            ) : sortConfig &&
              sortConfig.direction &&
              sortConfig.key === title &&
              sortConfig.direction === "desc" ? (
              <Sortingdown />
            ) : (
              <Sortingneutral />
            )}
          </div>
        </div>
      </th>
    );
  });

  const keyValues = Object.keys(items[0]);

  const tableData = items.map((data) => {
    return (
      <tr key={`${Math.random()}`}>
        {keyValues.map((v) => {
          return <td key={v}>{data[v]}</td>;
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

export default Sortables;
