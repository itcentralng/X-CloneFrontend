import { useState } from "react";
import StepOne from "./SignUp-steps/StepOne";
import StepTwo from "./SignUp-steps/StepTwo.jsx";
import StepThree from "./SignUp-steps/StepThree.jsx"


function SignUp() {
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    dobDay:'',
    dobMonth: '',
    dobYear:'',
    verificationCode: '',
    password: '',
  });
  
  const [step, setStep] = useState(2);

  const nextStep = () => setStep (step + 1)
  const prevStep = () => setStep (step - 1)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  
  
  return (
    <div className='w-full h-screen bg-gray-800 flex items-center justify-center'>
      <div className="w-[550px] min-h-[450px] shadow bg-black rounded-xl">
         <div className="flex items-center justify-center">
      {step === 1 && (
        <StepOne
        formData = {formData}
        handleChange = {handleChange}
        nextStep = {nextStep}
        />
      )}

      {step === 2 && (
          <StepTwo 
          formData = {formData}
          handleChange = {handleChange}
          nextStep = {nextStep}
          prevStep = {prevStep}
          />
        )}

        {step === 3 && (
          <StepThree
          formData={formData}
          handleChange = {handleChange}
           />
        )}
         </div>
      </div>
    </div>
  )
}

export default SignUp