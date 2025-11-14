import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = { width: "100%", height: "500px" };
const center = { lat: 40.7128, lng: -74.0060 };

export default function SafeRoute() {
  const [directions, setDirections] = useState(null);

  const origin = { lat: 40.7128, lng: -74.0060 };
  const destination = { lat: 40.73061, lng: -73.935242 };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <DirectionsService
          options={{ origin, destination, travelMode: "DRIVING" }}
          callback={(res) => { if (res && res.status === "OK") setDirections(res); }}
        />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
}
