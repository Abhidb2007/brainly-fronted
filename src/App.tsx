import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button
        variant="primary"
        size="md"
        text="Share"
        onClick={() => alert("Shared!")}
      />
      <Button
        variant="secondary"
        size="md"
        text="Add Content"
        onClick={() => alert("Content Added!")}
      />
    </>
  );
}

export default App;
