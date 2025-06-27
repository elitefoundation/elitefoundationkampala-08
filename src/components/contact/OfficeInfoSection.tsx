
const OfficeInfoSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Main Office</h3>
        <p className="text-gray-600 mb-2">
          Our main office is located in the heart of Kampala, making it easily accessible 
          for visitors, volunteers, and partners.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Address:</strong> Kampala Road, Central Division<br />
          Kampala, Uganda<br />
          P.O. Box 12345
        </p>
        <p className="text-gray-600">
          <strong>Public Transport:</strong> Accessible by taxi, boda-boda, and public buses. 
          Near the main taxi park and central business district.
        </p>
      </div>
    </div>
  );
};

export default OfficeInfoSection;
