import { useEffect, useState } from "react";
import axios from "axios";
import StationCard from "../component/StationCard";
import { useNavigate } from "react-router-dom"; 
function StationsPage() {

    const [stations, setStations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        axios
            .get(`http://localhost:8081/stations`)
            .then((response) => {
                setStations(response.data);
            });

    }, []);

    return (
     
    <div className="stations-page">

        <h1>EV Charging Stations</h1>

        <button className="view-bookings-btn"
            onClick={() =>
                navigate("/bookings")
            }
        >
            View Bookings
        </button>

        {
            stations.map((station) => (

                <StationCard
                    key={station.id}
                    station={station}
                />

            ))
        }

    </div>

       
        
    );
}

export default StationsPage;