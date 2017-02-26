import HeaderModule from './modules/HeaderModule.js';
import CloudModule from './modules/CloudModule.js';
import MapModule from './modules/MapModule.js';
import PopularModule from './modules/PopularModule.js';
import ContactModule from './modules/ContactModule.js';
import FooterModule from './modules/FooterModule.js';
import ToTopModule from './modules/ToTopModule.js';
import MsgModule from './modules/MsgModule.js';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <HeaderModule />
    <CloudModule />
    <MapModule />
    <PopularModule />
    <ContactModule />
    <FooterModule />
    <ToTopModule />
    <MsgModule />
  </div>,
  document.getElementById('app')
);
