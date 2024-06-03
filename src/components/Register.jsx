import React from "react";
import { useState } from "react";

function Register() {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    const regex = /^[0-9\b]+$/;
    if (value === "" || (regex.test(value) && value.length <= 10)) {
      setPhoneNumber(value);
    }
  };
  return (
    
    <div className="flex w-[90vw] md:w-[80vw] mx-auto">
      <div className="w-1/3"></div>
      <div className="w-1/3"></div>
      <div className="w-1/3 px-6">
        <h3>Let's get you started</h3>
        <div className="mt-6">
          <h6 className="mb-4">You are:</h6>
          <input
            type="radio"
            className="hidden"
            value="1"
            name="youAre"
            id="owner"
            checked={selected === "1"}
            onChange={() => setSelected("1")}
          />
          <input
            type="radio"
            className="hidden"
            value="2"
            name="youAre"
            id="agent"
            checked={selected === "2"}
            onChange={() => setSelected("2")}
          />
          <input
            type="radio"
            className="hidden"
            value="3"
            name="youAre"
            id="builder"
            checked={selected === "3"}
            onChange={() => setSelected("3")}
          />
          <div className="flex gap-6">
            <label
              className={`cursor-pointer px-4 py-2 border rounded-full transition-colors ${
                selected === "1"
                  ? "bg-[#1b557730] border-primary"
                  : "border-gray-300"
              }`}
              htmlFor="owner"
            >
              Owner
            </label>
            <label
              className={`cursor-pointer px-4 py-2 border rounded-full transition-colors ${
                selected === "2"
                  ? "bg-[#1b557730] border-primary"
                  : "border-gray-300"
              }`}
              htmlFor="agent"
            >
              Agent
            </label>
            <label
              className={`cursor-pointer px-4 py-2 border rounded-full transition-colors ${
                selected === "3"
                  ? "bg-[#1b557730] border-primary"
                  : "border-gray-300"
              }`}
              htmlFor="builder"
            >
              Builder
            </label>
          </div>
        </div>

        <div className="mt-6">
          <h6 className="mb-4">You are here to:</h6>
          <input
            type="radio"
            className="hidden"
            value="1"
            name="youArehere"
            id="sell"
            checked={selected2 === "1"}
            onChange={() => setSelected2("1")}
          />
          <input
            type="radio"
            className="hidden"
            value="2"
            name="youArehere"
            id="rent"
            checked={selected2 === "2"}
            onChange={() => setSelected2("2")}
          />
          <input
            type="radio"
            className="hidden"
            value="3"
            name="youArehere"
            id="pg"
            checked={selected2 === "3"}
            onChange={() => setSelected2("3")}
          />
          <div className="flex gap-6">
            <label
              className={`cursor-pointer px-4 py-2 border rounded-full transition-colors ${
                selected2 === "1"
                  ? "bg-[#1b557730] border-primary"
                  : "border-gray-300"
              }`}
              htmlFor="sell"
            >
              Sell
            </label>
            <label
              className={`cursor-pointer px-4 py-2 border rounded-full transition-colors ${
                selected2 === "2"
                  ? "bg-[#1b557730] border-primary"
                  : "border-gray-300"
              }`}
              htmlFor="rent"
            >
              Rent/Lease
            </label>
            <label
              className={`cursor-pointer px-4 py-2 border rounded-full transition-colors ${
                selected2 === "3"
                  ? "bg-[#1b557730] border-primary"
                  : "border-gray-300"
              }`}
              htmlFor="pg"
            >
              List as PG
            </label>
          </div>
        </div>
        <div className="mt-6">
          <h6>Your Contact number</h6>
          <input
            type="tel"
            placeholder="WhatsApp Number"
            className="mt-4 border-b-2 py-2"
            value={phoneNumber}
            onChange={handleChange}
            maxLength="10"
          />
        </div>
        <div className="border-2 my-4 bg-[#1b557720]  border-primary px-4 py-2 font-semibold rounded-lg">
          Enter your WhatsApp No. to get enquiries from Buyer/Tenant
        </div>
        <button className="w-full rounded-full bg-primary font-medium py-3 text-white">
          Start Now
        </button>
      </div>
    </div>
  );
}

export default Register;
