import { useState } from "react";
import Xlogo from "../../images/X.png"

const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", 
   "September", "October", "November", "December"
];

const days = Array.from({length: 31}, (_,i) => i + 1);

const currentYear = new Date().getFullYear();
const years = Array.from ({length: currentYear - 1899}, (_,i) => currentYear - i)

const validate = (values) => {
   const errors = {}
   if (!values.name) {
      errors.name = 'Name cannot be empty';
   } 
   if (!values.email) {
      errors.email = "Email is required"
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "invalid email address";
   }
      return errors
}

function StepOne({formData, handleChange, nextStep}) {
   const [errors, setErrors] = useState({})
   
   const handleNext = () => {
      const validationErrors = validate(formData)
      setErrors(validationErrors)

      if (Object.keys(validationErrors).length === 0) {
         nextStep();
      }
   }
   const isDisabled = 
   !formData.name ||
   !formData.email ||
   !formData.dobMonth ||
   !formData.dobDay ||
   !formData.dobYear

  return (
    <div className="px-4 flex flex-col items-center !space-y-4">
      <div className="w-[400px]">
         <div className="flex items-center justify-center">
            <img src={Xlogo} alt="Xlogo-icon" className="w-[50px] h-[50px]" />
         </div>
         <h2 className="text-white md:text-3xl font-bold !py-4">Create your account</h2>
         <input type="text"
         name="name"
         placeholder="Name"
         value={formData.name}
         onChange={handleChange}
         className="border border-gray-600 w-full h-[50px] p-2 rounded-md  placeholder:text-gray-500"  
         />
         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

         <div className="!py-4">
         <input type="email"
         placeholder="Email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         className="border border-gray-600 w-full h-[50px] p-2 rounded-md placeholder:text-gray-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
         </div>

         <div >
            <p className="text-white font-semibold !pt-2">Date of birth</p>
            <p className="text-gray-500 !pb-2 text-sm">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>


           <div className="flex gap-4 mb-6 py-4">
            <select 
           name="dobMonth" 
           value={formData.dobMonth}
           onChange={handleChange}
           className="w-[170px] h-[50px] border border-gray-600 rounded hover:border-blue-600 text-gray-500"
           >
            <option value="" className="hover:text-blue-600 bg-transparent">Month</option>
            {months.map((month) => (
               <option value={month} key={month} className="text-white bg-black">{month}</option>
            ))}
            
           </select>

           <select name="dobDay" 
           value={formData.dobDay}
           onChange={handleChange}
           className="w-[70px] h-[50px] border border-gray-400 text-gray-400 rounded hover:border-blue-600"
           >
            <option value="">Day</option>
            {days.map((day) => (
               <option value={day} key={day} className="text-white bg-black">{day}</option>
            ))}
           </select>
            
            <select name="dobYear"
               value={formData.dobYear}
               onChange={handleChange}
               className="w-[130px] h-[50px] border border-gray-400 text-gray-400 rounded hover:border-blue-600"
             >
               <option value="" className="hover:text-blue-600">Year</option>
               {years.map((year) => (
                  <option value={year} key={year} className="text-white bg-black">{year}</option>
               ))}
             </select>
           </div>
            
         </div>
       
      </div>
       <div className="flex items-center justify-center">
         <button onClick={handleNext}
         disabled={isDisabled} 
         className={`rounded-full !p-2 font-semibold min-w-md hover:cursor-pointer ${isDisabled
            ? "bg-gray-200 cursor-not-allowed" : "bg-white cursor-pointer"
         }`}>Next</button>
       </div>
    </div>
  )
}

export default StepOne