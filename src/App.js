import React, { useState } from "react";
import "./App.css";
import ReactSS, { ReactNoJSX } from "./components/ReactJSX";
import CompAndProps from "./components/CompAndProps";
import Button from "./elements/Button";
import TextInput from "./elements/TextInput";

function App() {
  const onClickButton = (e) => {
    alert("Haii");
  };

  const [data, setData] = useState();
  const onChange = (e) => {
    setData(e.target.value);
  };
  return (
    <div className="App">
      <div className="App-header">
        <ReactSS />
        {/* <ReactNoJSX /> */}
        <div className="Components">
          <CompAndProps bgcolor="#66ccff" />
          <TextInput border="green" value={data} onChange={onChange} />
          <Button background="red" onClick={onClickButton}>
            Hello
          </Button>
          <p>{data}</p>
        </div>
        x
      </div>
    </div>
  );
}

export default App;
