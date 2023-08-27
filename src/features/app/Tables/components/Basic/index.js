import React from "react";
import BasicJson from 'features/mockjson/basic.json'; 

const Basic = ()=>{
  const tableHead = Object.keys(BasicJson[0]).map(title=>{
    return <th align='left'>{ title }</th>
  });
const keyValues = Object.keys(BasicJson[0]);

// get table row data

 const tableData = BasicJson.map((data)=>{
    return(
        <tr>
             {
                keyValues.map((v)=>{
                            return <td>{data[v]}</td>
                })
             }
        </tr>
    )
  });
  
  return(
    <>
      <table width="100%" cellspacing="0" cellpadding="0">
            <thead>
              { tableHead }
            </thead>
            <tbody>
              { tableData }
            </tbody>
          </table>  
    </>
  );
}

export default Basic;