import { useState } from "react";

export default function NearbyShelters() {
  const [shelters, setShelters] = useState([
    { name: "Shelter 1", registered: false },
    { name: "Shelter 2", registered: false },
  ]);

  const registerShelter = (index) => {
    const updated = [...shelters];
    updated[index].registered = true;
    setShelters(updated);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Nearby Shelters</h2>
      <ul className="space-y-2">
        {shelters.map((shelter, idx) => (
          <li key={idx} className="flex justify-between items-center border p-2 rounded">
            {shelter.name}
            {shelter.registered ? (
              <span className="text-green-600 font-bold">Registered</span>
            ) : (
              <button onClick={() => registerShelter(idx)} className="bg-blue-600 text-white px-3 py-1 rounded">Register</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
