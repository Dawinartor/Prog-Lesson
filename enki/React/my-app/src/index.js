import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Box from './Box';
import HookExample from './HookExample';
import HookWithManyStates from './HookWithManyStates';
import MyHeader from './Komponenten/MyHeader';
import MyImageDiashow from './Komponenten/MyImageDiashow';


ReactDOM.render(
  <React.StrictMode>
    <MyHeader />
    <MyImageDiashow />
  </React.StrictMode>,
  document.getElementById('root')
);


