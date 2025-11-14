import { useState } from "react";

export default function Resources() {
  const [resources, setResources] = useState(["Water", "Food", "Medicine"]);
  const [newResource, setNewResource] = useState("");

  const addResource = () => {
    if (newResource) setResources([...resources, newResource]);
    setNewResource("");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      <ul className="list-disc pl-5 mb-4">
        {resources.map((res, idx) => <li key={idx}>{res}</li>)}
      </ul>
      <input
        type="text"
        value={newResource}
        onChange={(e) => setNewResource(e.target.value)}
        placeholder="Add resource"
        className="border px-2 py-1 mr-2 rounded"
      />
      <button onClick={addResource} className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
    </div>
  );
}
