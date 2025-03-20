import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const attackLocations = [
  { id: 1, lat: 40.7128, lng: -74.0060, type: "DDoS", ip: "192.168.1.1" }, // Example data
  { id: 2, lat: 37.7749, lng: -122.4194, type: "SQL Injection", ip: "192.168.1.2" },
];

export default function ThreatMap() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Live Threat Map</h2>
      <MapContainer center={[20, 0]} zoom={2} className="h-[300px] w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {attackLocations.map((attack) => (
          <Marker key={attack.id} position={[attack.lat, attack.lng]}>
            <Popup>
              <strong>{attack.type}</strong> <br /> IP: {attack.ip}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}