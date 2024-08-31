import { useState } from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from 'react-icons/bs';
import Like from "./components/Like";

function App() {

  return (
    <div>
      <Like onClick={() => console.log('Clicked...')} />
    </div>
  );
}

export default App;
