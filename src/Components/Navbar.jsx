import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-center space-x-15 text-lg font-semibold shadow-md hover:shadow-lg border-b-2 border-blue-700 px-6">
      <Link to="/">Home</Link>
      <Link to="/safe-route">SafeRoute</Link>
      <Link to="/report-emergency">Report Emergency</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/shelters">Shelters</Link>
    </nav>
  );
}
