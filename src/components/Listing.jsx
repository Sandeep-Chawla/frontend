import React from "react";

function listing() {
  return (
    <div className="w-1/2 mx-auto">
      <div>Sell or Rent your Property</div>
      <p>You are posting this property for FREE!</p>
      <div>
        <h6>Personal Details</h6>
        {/* radio buttons */}
        <div className="flex w-1/2 gap-4 items-center">
          <p>I am</p>
          <span className="flex items-center">
            <input className="w-4 mr-2" type="radio" name="who" id="owner" />
            <label htmlFor="owner">Owner</label>
          </span>
          <span className="flex items-center">
            <input className="w-4 mr-2" type="radio" name="who" id="agent" />
            <label htmlFor="agent">Agent</label>
          </span>
          <span className="flex items-center">
            <input className="w-4 mr-2" type="radio" name="who" id="builder" />
            <label htmlFor="builder">Builder</label>
          </span>
        </div>
        {/* end radio buttons */}

        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Your Name" />
        </div>
        <div>
            <label htmlFor="mobile">mobile</label>
            <input type="tel" name="mobile" id="mobile" placeholder="WhatsApp Number" />
        </div>
        <div className="border-2 my-4 bg-[#1b557720] w-1/2 border-primary px-4 py-2 font-semibold rounded-lg">
          Enter your WhatsApp No. to get enquiries from Buyer/Tenant
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Your Email" />
        </div>
      </div>
      <div>
        <h6>Property Details</h6>
        {/* radio buttons */}
        <div className="flex w-1/2 gap-4 items-center">
          <p>For</p>
          <span className="flex items-center">
            <input className="w-4 mr-2" type="radio" name="for" id="sale" />
            <label htmlFor="sale">Sale</label>
          </span>
          <span className="flex items-center">
            <input className="w-4 mr-2" type="radio" name="for" id="rent" />
            <label htmlFor="rent">Rent/lease</label>
          </span>
          <span className="flex items-center">
            <input className="w-4 mr-2" type="radio" name="for" id="pg" />
            <label htmlFor="pg">PG/Hostel</label>
          </span>
        </div>
        {/* end radio buttons */}
        <h6>Property Location</h6>
        <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder="Enter City" />
        </div>
        <div>
            <label htmlFor="locality">Locality</label>
            <input type="tel" name="locality" id="locality" placeholder="Enter Locality" />
        </div>
      </div>
      <div>
        <div className="flex">
            <input className="w-4 mr-4 accent-primary" type="checkbox" name="term1" id="term1" />
            <label htmlFor="term1"> I am posting this property 'exclusively' on WhiteHat Realty</label>
        </div>
        <div className="flex">
            <input className="w-4 mr-4 accent-primary" type="checkbox" name="term2" id="term2" />   
            <label htmlFor="term2"> I agree to WhiteHat Realty T&C, Privacy Policy, & Cookie Policy</label>
        </div>
        <div className="flex">
            <input className="w-4 mr-4 accent-primary" type="checkbox" name="term3" id="term3" />
            <label htmlFor="term3"> I want to receive responses on  Whatsapp</label>
        </div>
      </div>
      <button className="w-fit bg-primary px-6 py-1 rounded text-white">Login & Post Property</button>
    </div>
  );
}

export default listing;
