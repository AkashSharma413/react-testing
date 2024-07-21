import React from "react";

const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="job-location">Job Location</label>
        <select id="job-location" role="listbox">
          <option value="">Select Country</option>
          <option value="us">USA</option>
          <option value="IN">India</option>
          <option value="CA">Canada</option>
        </select>
      </div>
      <div>
        <label htmlFor="terms">
          <input type="checkbox" id="terms" /> Accept the terms and condition
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Application;
