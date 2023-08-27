import React from "react";
import './MergedTableLayout.css';

const MergedTableLayout=({ data, columnValues })=>{
  const mergedTabledata = columnValues.map((indexname)=>{
    return (
      <>
        <div style={{display: "flex"}}>
          <div className="title-name">{indexname}: </div>
          <div>{data[indexname]}</div>
        </div>
      </>
    )
})
  return(
    <td>
      { mergedTabledata }
    </td>
  );
}

export default MergedTableLayout;