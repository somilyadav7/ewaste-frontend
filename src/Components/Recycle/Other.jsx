import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtherRecyclingForm = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [recycleItemPrice, setRecycleItemPrice] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState(null);
  const [selectedFacility, setSelectedFacility] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (
      selectedBrand &&
      recycleItemPrice &&
      pickupDate &&
      pickupTime &&
      location &&
      picture &&
      phone &&
      selectedFacility 
    ) {
      // Simulate form submission
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Form submitted successfully!");
        // Reset form fields
        setSelectedBrand("");
        setRecycleItemPrice("");
        setPickupDate("");
        setPickupTime("");
        setLocation("");
        setPhone("");
        setPicture(null);
        setSelectedFacility("");
      }, 2000); // Simulating a delay for submission
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-6 text-center">Others Recycling</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="brand" className="block font-semibold mb-1">
                Device:
              </label>
              <select
                id="brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Brand</option>
                <option value="Samsung">Samsung</option>
                <option value="Apple">Apple</option>
                <option value="Mi">Mi</option>
                <option value="Motorola">Motorola</option>
                <option value="OnePlus">One Plus</option>
                <option value="Other">Other</option>
              </select>
            </div>

            

            <div>
              <label htmlFor="recycleItemPrice" className="block font-semibold mb-1">
                Recycle Item Price:
              </label>
              <input
                type="number"
                id="recycleItemPrice"
                value={recycleItemPrice}
                onChange={(e) => setRecycleItemPrice(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="pickupDate" className="block font-semibold mb-1">
                Pickup Date:
              </label>
              <input
                type="date"
                id="pickupDate"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="pickupTime" className="block font-semibold mb-1">
                Pickup Time:
              </label>
              <input
                type="time"
                id="pickupTime"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">


           

            <div>
              <label htmlFor="location" className="block font-semibold mb-1">
                Location:
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label htmlFor="facility" className="block font-semibold mb-1">
                Select Facility:
              </label>
              <select
                id="facility"
                value={selectedFacility}
                onChange={(e) => setSelectedFacility(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Facility</option>
                {/* Add options for different facilities */}
                <option value="Facility A">Facility A</option>
                <option value="Facility B">Facility B</option>
                {/* Add more facilities here */}
              </select>
            </div>

            <div>
              <label htmlFor="picture" className="block font-semibold mb-1">
                Picture:
              </label>
              <input
                type="file"
                id="picture"
                onChange={(e) => setPicture(e.target.files[0])}
                className="w-full p-2 border rounded"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          onClick={handleFormSubmit}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default OtherRecyclingForm;
