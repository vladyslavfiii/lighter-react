import React from 'react';
import '../../index.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

export default function Content(props){

  const [mode, setMode] = useState(props.mode);

  return(
    <div className='main-block' id='main-block'>
      <div className='container'>
        <div className='block'>
          <h1>Mobile App</h1>
          <h6>Control light by your phone from everywhere</h6>
          <div className='phone'>
            <div className='phone-screen'></div>
          </div>
        </div>
      </div>
    </div>
  );
}