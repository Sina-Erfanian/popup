import { useState } from "react";
import "./App.css";
import Btn from "./components/Button";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div
      className="container"
      style={{ backgroundColor: modal ? "rgba(0,0,0,0.3)" : null }}
    >
      {modal ? <Modal /> : <Btn modal={modal} setModal={setModal} />}
    </div>
  );
}

export default App;
