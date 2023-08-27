import React from 'react';
import './Home.css';
import Basic from 'features/app/Tables/components/Basic';
import RadioTable from 'features/app/Tables/components/RadioTable';
import CheckboxTable from 'features/app/Tables/components/CheckboxTable';
import Sortables from 'features/app/Tables/components/Sortables';


const Home=()=>{
  return(
    <>
    <div className='main-container'>
      <div className='filter-container'>
        <p>Basic design, with grey header</p>
      </div>
      <div className='table-container'>
        <div className='table-wrapper'>
          <Basic />
        </div>
      </div>
    </div>
    <div className='main-container'>
      <div className='filter-container'>
      <p>Table with Sorting</p>
      </div>
      <div className='table-container'>
        <div className='table-wrapper'>
          <Sortables />
        </div>
      </div>
    </div>
    <div className='main-container'>
      <div className='filter-container'>
      <p>Table with radio button</p>
      </div>
      <div className='table-container'>
      <div className='table-wrapper'>
          <RadioTable />
        </div>
      </div>
    </div>
    <div className='main-container'>
      <div className='filter-container'>
      <p>Table with checkbox</p>
      </div>
      <div className='table-container'>
      <div className='table-wrapper'>
          <CheckboxTable />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;