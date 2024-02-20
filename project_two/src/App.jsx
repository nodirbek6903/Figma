import { Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Register from "./components/Register";
function App() {
  return (
    <div className="container">
      <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/register-form" element={<Register />} />
    </Routes>
    </div>
  );
}

export default App;
