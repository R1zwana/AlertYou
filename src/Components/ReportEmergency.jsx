export default function ReportEmergency() {
  const callEmergency = () => { window.location.href = "tel:911"; };
  const textEmergency = () => { window.location.href = "sms:911?body=Emergency! Need help!"; };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Report Emergency</h2>
      <button onClick={callEmergency} className="bg-red-600 text-white px-4 py-2 rounded">Call Emergency</button>
      <button onClick={textEmergency} className="bg-yellow-500 text-white px-4 py-2 rounded">Text Emergency</button>
    </div>
  );
}
