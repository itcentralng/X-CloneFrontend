import { useState } from "react"
import { MoveLeft } from 'lucide-react';

function StepTwo({formData, handleChange, prevStep, nextStep}) {
  const [error, setError] = useState ({})
  const validate = () => {
    const error = {}
    if (!formData.verificationCode) {
      error.verificationCode = "Verification code is required"
    } else if (!/^\d{6}$/.test(formData.verificationCode)) {
      error.verificationCode = "code must be 6 digits"
    }
    return error
  }
    const handleNext = () => {
      const verificationErrors = validate()
      if (Object.keys (verificationErrors).length === 0) {
        nextStep()
      } else {
        setError(verificationErrors)
      }
    }

    const isDisabled = !formData.verificationCode
  
  return (
    <div>
      <div className="">
        <button onClick={prevStep} className="text-white pt-4 absolute"><MoveLeft size={15}/> </button>
      </div>
      <div className="py-4">
        <div className="">
        <h2 className="text-white md:text-3xl font-bold pt-6">We sent you a code</h2>
        <p className="text-gray-500 text-sm py-2">Enter it below to verify{formData.email}</p>

        <div className="py-4">
        <input type="text"
        name="verificationCode"
        value={formData.verificationCode}
        placeholder="verification code"
        onChange={handleChange}
        className="border border-gray-600 w-full h-[50px] p-2 rounded-md placeholder:text-gray-500 text-sm hover:border-blue-600 hover:placeholder:text-blue-600" />
        {error.verificationCode && <p className="text-red-500 text-sm">{error.verificationCode}</p>}

        </div>
      </div>
      </div>
      <div className="flex justify-center mt-36">
        <button onClick={handleNext}
        disabled = {isDisabled}
        className={`rounded-full p-2 font-semibold min-w-md hover:cursor-pointer ${isDisabled
            ? "bg-gray-200 cursor-not-allowed" : "bg-white cursor-pointer"
         }`}
        >Next</button>
      </div>
    </div>
  )
}

export default StepTwo