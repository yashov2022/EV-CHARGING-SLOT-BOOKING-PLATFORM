import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import StationsPage from "./pages/StationsPage";
import SlotsPage from "./pages/SlotsPage";
import "./App.css";
import BookingsPage from "./pages/BookingsPage";

function App() {

  const [stations, setStations] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8081/stations")
    .then((response)=>{
      setStations(response.data);
    })
  }, []);
  return (
     <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<StationsPage />}
        />

        <Route
          path="/slots/:stationId"
          element={<SlotsPage />}
        />
         <Route
    path="/bookings"
    element={<BookingsPage />}
/>
      </Routes>
    </BrowserRouter>
  
     
  );
}
export default App;