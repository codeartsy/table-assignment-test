import React from 'react';
import './MobileHome.css';
import Basic from 'features/app/Tables/mobile/components/Basic';
import RadioTable from 'features/app/Tables/mobile/components/RadioTable';
import CheckboxTable from 'features/app/Tables/mobile/components/CheckboxTable';
import Sortables from 'features/app/Tables/mobile/components/Sortables';


const MobileHome=()=>{
  return(
    <>
    <div className='main-container'>
      <div className='table-container'>
        <div className='table-wrapper'>
          <Basic />
        </div>
      </div>
    </div>
    <div className='main-container'>
      <div className='table-container'>
        <div className='table-wrapper'>
          <RadioTable />
        </div>
      </div>
    </div>
    <div className='main-container'>
      <div className='table-container'>
        <div className='table-wrapper'>
          <CheckboxTable />
        </div>
      </div>
    </div>
    </>
  )
}

export default MobileHome;