import React from "react";
import CheckboxJson from 'features/mockjson/checkbox.json'; 
import './CheckboxTable.css';

const CheckboxTable = ()=>{ 
  const [selectedrow, setSelectRow] = React.useState([]);
  const tableHead = Object.keys(CheckboxJson[0]).map(title=>{
    return <th align='left'>{ title }</th>
  });
  const keyValues = Object.keys(CheckboxJson[0]);
  
  const onChangeRow =(e)=>{
    const checkedrow = [...selectedrow];
    if(e.target.checked && !checkedrow?.includes(e.target.value)){
      checkedrow.push(e.target.value);
    } else if(!e.target.checked){
      const index = checkedrow.indexOf(e.target.value);
      if (index > -1) { 
        checkedrow.splice(index, 1); 
      }
    }
    setSelectRow(checkedrow);
  }
  
   const tableData = CheckboxJson.map((data, indexKey)=>{
      return(
          <tr id={`row-${indexKey}`} className={selectedrow?.includes('chk-'+indexKey) ? 'active': ''}>
              <td width="9%">
                <div className="check-box-td">
                  <input
                    className="multi-select"
                    type="checkbox"
                    name={`multi-select-${indexKey}`}
                    value={`chk-${indexKey}`}
                    id={`${indexKey}-id`}
                    checked={selectedrow?.includes('chk-'+indexKey)}
                    onChange={onChangeRow}
                  />
                  <label htmlFor={indexKey} className="checkbox-label" />
                </div>
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

export default CheckboxTable;