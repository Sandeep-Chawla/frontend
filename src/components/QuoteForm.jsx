import React from "react";
import Select from "react-select";
function QuoteForm({
  loading,
  selectedOption,
  handleChange,
  selectedOption2,
  selectedOption3,
  selectedOption4,
  handleChange2,
  handleChange3,
  handleChange4,
  customStyles,
  options,
  cities,
  propertyType,
  budget
}) {
  return (
    <>
    <h3 className="text-xl md:text-2xl my-3 border-b-[1px] border-gray-400 mb-4 pb-2">Request a CallBack</h3>    
    <div className="grid grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto,auto] justify-items-start mx-auto w-[90vw] md:w-[80vw] relative items-center gap-3 py-5 shadow-2xl bg-white rounded-lg px-6 ">
      <Select
        className="city w-full cursor-pointer text-primary rounded-s-full z-20 bg-white text-2xl font-bold "
        classNamePrefix="react-select"
        value={selectedOption2}
        onChange={handleChange2}
        options={cities}
        placeholder="CITY"
        styles={customStyles}
        menuPortalTarget={document.body}
      />
      <Select
        className="locality w-full cursor-pointer text-primary z-20 bg-white md:text-2xl  font-bold "
        classNamePrefix="react-select"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="LOCALITY"
        styles={customStyles}
        menuPortalTarget={document.body}
      />
      <Select
        className="locality w-full cursor-pointer text-primary z-20 bg-white text-sm md:text-2xl font-bold "
        classNamePrefix="react-select"
        value={selectedOption3}
        onChange={handleChange3}
        options={propertyType}
        placeholder="PROPERTY TYPE"
        styles={customStyles}
        menuPortalTarget={document.body}
      />
      <Select
        className="locality w-full cursor-pointer text-primary z-20 bg-white md:text-2xl font-bold "
        classNamePrefix="react-select"
        value={selectedOption4}
        onChange={handleChange4}
        options={budget}
        placeholder="BUDGET"
        styles={customStyles}
        menuPortalTarget={document.body}
      />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your Name"
        className="md:w-3/4 outline-none my-2 px-3 h-6 md:h-10"
      />
      <input
        type="tel"
        name="mobile"
        id="mobile"
        placeholder="Enter Your Mobile Number"
        className=" outline-none my-2  px-3 h-6 md:h-10"
      />
      <input
        type="text"
        name="note"
        id="node"
        placeholder="Enter a Note"
        className=" outline-none my-2  px-3 h-6 md:h-10"
      />
      <div className="flex justify-center bg-primary text-center w-full px-12 py-2 md:h-14 font-semibold text-white text-sm  items-center cursor-pointer rounded-lg">
        Submit
      </div>
    </div>
    </>
  );
}

export default QuoteForm;
