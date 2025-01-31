import React from "react";

const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory.</p>
      <img src="http://xyz.com/person.jpg" alt="A person with laptop"/>
      <span title="close">X</span>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Fullname" value="Akash" onChange={() => {}}/>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
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
    </>
  );
};

export default Application;
