import React, { useState } from 'react';
import './App.css';
import ReactSS, {ReactNoJSX} from './components/ReactJSX';
import CompAndProps from './components/CompAndProps';
// import Button from './elements/Button';
import TextInput from './elements/TextInput';
import {notification, Button} from 'antd'


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <ReactSS />
        {/* <ReactNoJSX /> */}
        <div className="Components">
          <CompAndProps bgcolor="#66ccff"/>
          <TextInput border="red"/>
        </div>
      </div>
    </div>
  );
}

export default App;
