import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from 'react-icons/bs';

function App() {
 const items = ["New york" , "Los Angles", "San Francisco"]

  return (
    <div>
      <BsFillCalendarFill color="red" size={40} />
    </div>
  );
}

export default App;
