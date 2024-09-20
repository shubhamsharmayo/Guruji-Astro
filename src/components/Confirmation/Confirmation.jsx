import React from 'react';
import Loader from '../loading/Loader';
import './confirm.css';

function Confirmation({ data, prevStep, submitForm, loader }) {
  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">Confirm your details</h2>
      <p className="confirmation-info"><strong>Name:</strong> {data.name}</p>
      <p className="confirmation-info"><strong>Email:</strong> {data.email}</p>
      <p className="confirmation-info"><strong>Phone:</strong> {data.phone}</p>
      <p className="confirmation-info"><strong>Address:</strong> {data.address1}, {data.address2}, {data.city}, {data.state}, {data.zip}</p>

      <div className="confirmation-buttons">
        <button className="confirmation-back-button" type="button" onClick={prevStep}>Back</button>
        {loader ? (
          <button className="confirmation-submit-button" type="submit">Submitting<Loader /></button>
        ) : (
          <button className="confirmation-submit-button" type="button" onClick={submitForm}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Confirmation;
