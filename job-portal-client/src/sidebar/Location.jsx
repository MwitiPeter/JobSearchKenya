import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-1g font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="Nairobi"
          title="Nairobi"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Embu"
          title="Embu"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Mombasa"
          title="Mombasa"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Nakuru"
          title="Nakuru"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
