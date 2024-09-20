import { useState, useEffect } from 'react';
import PersonalInfo from './components/personal information/PersonalInfo';
import AddressInfo from './components/Address/AddressInfo';
import Confirmation from './components/Confirmation/Confirmation';
import './App.css'
import Navbar from './components/navbar/Navbar';
import image2 from './assets/image2.jpg'

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [loader, setloader] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    // console.log(formData)
  }, []);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const saveFormData = (data) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    localStorage.setItem('formData', JSON.stringify(updatedData));
  };

  const submitForm = () => {
    setloader(true)
    setTimeout(() => {
      
      console.log('Form Submitted', formData);
      localStorage.removeItem('formData');
      nextStep()
      setloader(false)
    }, 4000);
  };

  switch (step) {
    case 1:
      return <div><img src={image2} /> <Navbar step={step} setstep={setStep}/> <PersonalInfo data={formData} nextStep={nextStep} setFormData={saveFormData} /></div>;
    case 2:
      return <div><img src={image2} /> <Navbar step={step} setstep={setStep}/> <AddressInfo data={formData} nextStep={nextStep} prevStep={prevStep} setFormData={saveFormData} /></div>;
    case 3:
      return <div><img src={image2} />  <Navbar step={step} setstep={setStep}/> <Confirmation data={formData} prevStep={prevStep} submitForm={submitForm} loader={loader}/></div>;
    case 4: 
    return <div className="submittion-container"><img src={image2} /> <h1 className="submittion-text">Form Submitted Successfully</h1></div>
    default:
      return <h1>Multi-step Form</h1>;
  }
}

export default App
