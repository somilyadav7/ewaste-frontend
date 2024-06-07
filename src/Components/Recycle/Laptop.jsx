import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LaptopRecyclingForm = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [recycleItemPrice, setRecycleItemPrice] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFacility, setSelectedFacility] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Dummy data for brands and models
  const brands = [
    "Dell",
    "HP",
    "Lenovo",
    "Asus",
    "Acer",
    "Apple",
    "MSI",
    "Sony",
    "LG",
  ];

  

  // Handler for brand change
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel(""); // Reset selected model when brand changes
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (
      selectedBrand &&
      recycleItemPrice &&
      pickupDate &&
      pickupTime &&
      phone &&
      address &&
      selectedFacility
    ) {
      // Proceed with form submission
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Form submitted successfully!");
        // Reset form fields
        setSelectedBrand("");
        setRecycleItemPrice("");
        setPickupDate("");
        setPickupTime("");
        setPhone("");
        setAddress("");
        setSelectedFacility("");
      }, 2000);
    } else {
      // Show error message if any required field is missing
      toast.error("Please fill in all required fields.");
    }
  };

  // Dummy data for facility
  const facilities = ["Facility A", "Facility B", "Facility C"];

  return (
    <div className="container mx-auto p-8">
     <ToastContainer />
      <h1 className="text-4xl font-bold mb-6 text-center">Laptop Recycling</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Brand Selection */}
        <div>
          <label htmlFor="brand" className="block font-semibold mb-1">
            Select Brand:
          </label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => handleBrandChange(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        

        {/* Recycle Item Price */}
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

        {/* Pickup Date */}
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

        {/* Pickup Time */}
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

        {/* Location */}
        <div>
          <label htmlFor="address" className="block font-semibold mb-1">
            Location:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Facility Selection */}
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
            {facilities.map((facility) => (
              <option key={facility} value={facility}>
                {facility}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LaptopRecyclingForm;
