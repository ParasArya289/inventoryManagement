import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Departments } from "./Pages/Departments/Departments";
import { Products } from "./Pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
