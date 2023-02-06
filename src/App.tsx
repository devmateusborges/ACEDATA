import { useState } from "react";
import reactLogo from "./assets/react.svg";
import AppAtividade1 from "./Components/Atividade1/AppAtividade1";
import AppAtividade2 from "./Components/Atividade2/AppAtividade2";
import AppAtividade3 from "./Components/Atividade3/AppAtividade3";
import "./styles/global.css";
function App() {
  return (
    <div className="Card">
      <div className="Card-Items">
        <AppAtividade2 />
        <AppAtividade1 />
        <AppAtividade3 />
      </div>
    </div>
  );
}

export default App;
