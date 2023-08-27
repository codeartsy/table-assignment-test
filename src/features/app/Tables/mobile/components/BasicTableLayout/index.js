import React from "react";

const BasicTableLayout=({ data, columnValues })=>{
  const basicTableData = columnValues.map((v)=>{
    return <td>{data[v]}</td>
  });

  return(
    <>
      { basicTableData }
    </>
  );
}

export default BasicTableLayout;