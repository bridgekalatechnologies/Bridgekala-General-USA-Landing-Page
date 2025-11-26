import React, { useState } from "react";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", e.target.fullName.value);
    formDataToSend.append("email", e.target.email.value);
    formDataToSend.append("businessName", e.target.businessName.value);
    formDataToSend.append("service", e.target.service.value);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz0G7f2tjbryb27gmNYvrcmnTN4KzHt4I44hEHwH5-PqAth_F3AD7UnpotBcclBWnIX/exec",
        {
          method: "POST",
          body: formDataToSend, // NO JSON, NO HEADERS → bypasses CORS
        }
      );

      const text = await res.text(); 
      console.log("Raw response:", text);

      // Apps Script returns plain text, not JSON
      if (text.includes("success")) {
        setMessage("Your call is booked! We’ll contact you shortly.");
        e.target.reset();
      } else {
        setMessage("Something went wrong. Try again!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error submitting form.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-5 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center mb-6">
        Book a Free Strategy Call
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            name="fullName"
            required
            placeholder="Johan Terner"
            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Business Email</label>
          <input
            name="email"
            required
            type="email"
            placeholder="@gmail.com"
            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Business Name</label>
          <input
            name="businessName"
            required
            placeholder="Business Name"
            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100"
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            What service are you looking for?
          </label>
          <select
            name="service"
            required
            className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100"
          >
            <option value="">Select</option>
            <option value="Facebook Ads">Facebook Ads</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Sales Funnels">Sales Funnels</option>
            <option value="Marketing Consultation">
              Marketing Consultation
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full text-sm py-3 bg-purple-600 text-white font-semibold rounded-full"
        >
          {loading ? "Booking..." : "Book a Call and Get Answers"}
        </button>
      </form>

      {message && (
        <p className="text-center mt-4 font-medium text-green-600">{message}</p>
      )}
    </div>
  );
}
