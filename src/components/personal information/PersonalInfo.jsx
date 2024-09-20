import { useForm } from 'react-hook-form';
import React from 'react';
import './personalinfo.css'

function PersonalInfo({ data, nextStep, setFormData }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: data,
  });

  const onSubmit = (formData) => {
    setFormData(formData);
    nextStep();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          className="form-input"
          {...register('name', { required: 'Name is required' })}
          placeholder="Name"
        />
        {errors.name && <p className="form-error">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          className="form-input"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Invalid email format',
            },
          })}
          placeholder="Email"
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label className="form-label">Phone No.</label>
        <input  type="tel"
          className="form-input"
          {...register('phone', { required: 'Phone number is required', pattern: {
            value: /^[0-9]{10}$/,  
            message: "Phone number must be 10 digits"
          }})}
          placeholder="Phone"
        />
        {errors.phone && <p className="form-error">{errors.phone.message}</p>}
      </div>

      <button className="form-button" type="submit">Next</button>
    </form>
  );
}

export default PersonalInfo;
