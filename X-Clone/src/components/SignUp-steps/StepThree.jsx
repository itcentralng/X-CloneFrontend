import { useState } from "react"
import Xlogo from "../../images/X.png"
import  Axios  from "axios"


function StepThree({formData, handleChange}) {
  const [error, setError] = useState({})
  const [data, setData] = useState(null)
  
  
  const validate = () => {
    const error = {}
    if (!formData.password) {
      error.password = "password is required"

    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(formData.password)) {
      error.password = "Your password needs to be at least 8 characters. Please enter a longer one."
    }
    return error
  }

  const handleSumbit = async() => {
    const passwordError = validate()
    if (Object.keys (passwordError).length !== 0) {
      console.log(formData)
    } else {
      setError(passwordError)
      return 
    }
    try {
      const respone = await Axios.post ('https://x-clonebackend-tyqz.onrender.com/register', formData)
      setData(respone.data)
    } catch (error) {
      setError(error)
    }

  } 
  const isDisabled = !formData.password
  return (
    <div className="flex flex-col items-center !space-y-4">
      <div className="w-[400px]">
        <div className="flex justify-center">
          <img src={Xlogo} alt="Xlogo-icon" className="w-[50px] h-[50px]" />
        </div>
        <h2 className="text-white md:text-3xl font-bold pt-4">You'll need a password</h2>
        <p className="text-gray-500 text-sm mb-4">Make sure it's 8 characters or more </p>

        <input type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full h-[50px] border border-gray-600 p-2 mb-6 rounded-md placeholder:text-gray-500 text-sm hover:border-blue-600 hover:placeholder:text-blue-600" />
        {error.password && <p className="text-red-500 text-sm">{error.password}</p>}

        <p className="text-gray-500 text-xs pt-10">By signing up, you agree to the <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>, including <a href="#">Cookie Use</a>. X may use your contact information, 
          including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <a href="#" className="text-blue-500">Learn more</a>. Others will be able to find you by email or phone number, 
          when provided, unless you choose otherwise <a href="#" className="text-blue-500">here</a>.</p>
        <div className="flex justify-center py-6">
          <button onClick={handleSumbit} disabled = {isDisabled}
          className={`rounded-full p-2 font-semibold min-w-md hover:cursor-pointer ${isDisabled
            ? "bg-gray-200 cursor-not-allowed" : "bg-white cursor-pointer"
         }`}>Sign Up</button>
        </div>
      </div>
      {data && (
        <div>
          console.log("Sigup successful");
          
        </div>
      )}
    </div>
  )
}

export default StepThree