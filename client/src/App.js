import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./pages/RequireAuth";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="home" element={<Home />}>
          <Route path="rooms" element={<Rooms />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
  );
}

export default App;
