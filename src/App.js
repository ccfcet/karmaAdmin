import React from 'react';

import Topnav from './components/Topnav'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  return (
    <div>
      <Topnav />
      <div class="container-fluid">
        <div class="row">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
