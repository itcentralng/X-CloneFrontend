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
  
  const [step, setStep] = useState(1);

  const nextStep = () => setStep (step + 1)
  const prevStep = () => setStep (step - 1)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  
  
  return (
    <div>
      <div>
         <div className="w-full h-full">
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