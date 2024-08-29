import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, SetAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => SetAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => SetAlertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
