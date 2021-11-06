import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/Approuter";
import "antd/dist/antd.css";
import { DropDownProvider } from "./context";

function App() {
  return (
    <DropDownProvider>
    <Router>
      <AppRouter />
    </Router>
    </DropDownProvider>
  );
}

export default App;
