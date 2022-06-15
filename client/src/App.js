import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./pages/RequireAuth";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="rooms" element={<Home />}>
          <Route path="bookings" element={<Bookings />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
  );
}

export default App;
