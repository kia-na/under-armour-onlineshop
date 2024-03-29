import { Routes, Route, Navigate } from "react-router-dom";
import Payment from "./page/Payment/Payment";

function App() {
  return (
    <Routes>
      {/* http://localhost:3001 */}
      <Route path="/" element={<Navigate to="payment" />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
