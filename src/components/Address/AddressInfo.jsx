import { useForm } from "react-hook-form";
import React from 'react';
import './address.css';

function AddressInfo({ data, nextStep, prevStep, setFormData }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: data,
    });

    const onSubmit = (formData) => {
      setFormData(formData);
      nextStep();
    };

    return (
      <form className="address-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="address-group">
          <input className="address-input" {...register('address1', { required: 'Address Line 1 is required' })} placeholder="Address " />
          {errors.address1 && <p className="address-error">{errors.address1.message}</p>}
        </div>

        <div className="address-group">
          <input className="address-input" {...register('address2')} placeholder="Street/Landmark" />
        </div>

        <div className="address-group">
          <input className="address-input" {...register('city', { required: 'City is required' })} placeholder="City" />
          {errors.city && <p className="address-error">{errors.city.message}</p>}
        </div>

        <div className="address-group">
          <input className="address-input" {...register('state', { required: 'State is required' })} placeholder="State" />
          {errors.state && <p className="address-error">{errors.state.message}</p>}
        </div>

        <div className="address-group">
          <input className="address-input" {...register('zip', { required: 'Zip Code is required' })} placeholder="Zip Code" />
          {errors.zip && <p className="address-error">{errors.zip.message}</p>}
        </div>

        <div className="button-group">
          <button className="address-back-button" type="button" onClick={prevStep}>Back</button>
          <button className="address-next-button" type="submit">Next</button>
        </div>
      </form>
    );
}

export default AddressInfo;
