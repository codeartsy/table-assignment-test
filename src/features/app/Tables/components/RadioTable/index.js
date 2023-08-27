import React from "react";
import RadioJson from 'features/mockjson/radio.json';
import './RadioTable.css';

const RadioTable = ()=>{
  const [selectedrow, setSelectRow] = React.useState(0);
  const tableHead = Object.keys(RadioJson[0]).map(title=>{
    return <th align='left'>{ title }</th>
  });
const keyValues = Object.keys(RadioJson[0]);

const onChangeRow =(e)=>{
  const checkedrow = e.target.value ? parseInt(e.target.value): 0;
  setSelectRow(checkedrow);
}

 const tableData = RadioJson.map((data, indexKey)=>{
    return(
        <tr id={`row-${indexKey}`} className={indexKey===selectedrow ? 'active': ''}>
            <td>
              <label htmlFor={indexKey} className="radio-label">
                <input
                  className="single-select"
                  type="radio"
                  name='single-select'
                  value={indexKey}
                  id={indexKey}
                  checked={indexKey===selectedrow}
                  onChange={onChangeRow}
                />
                <span className="custom-radio" />
              </label>
            </td>
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
          <th></th>
          { tableHead }
        </thead>
        <tbody>
          { tableData }
        </tbody>
      </table>  
    </>
  );
}

export default RadioTable;