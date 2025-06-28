
const OfficeInfoSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Main Office</h3>
        <p className="text-gray-600 mb-2">
          Our main office is located in Nansana, Wakiso District, making it easily accessible 
          for visitors, volunteers, and partners.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Address:</strong> Nansana Wakiso Uganda
        </p>
        <p className="text-gray-600">
          <strong>Public Transport:</strong> Accessible by taxi, boda-boda, and public buses. 
          Located along major routes in Nansana with easy access from Kampala.
        </p>
      </div>
    </div>
  );
};

export default OfficeInfoSection;
