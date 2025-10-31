import { useState } from "react";
import Axios from "axios";


function Home({size= 20, thickness= 2, maxChars= 280}) {
  const [content, setContent] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  

  const charsUsed = content.length
  const remaining = maxChars - charsUsed;
  
  
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(charsUsed/ maxChars, 1)
  const offset = circumference - progress * circumference

  let color = '#3b82f6' // blue
  if (remaining <= 20) {
    color = '#facc15'
  } 
  if (remaining < 0) {
    color = '#ef4444'
  }
  
  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    
    try {
          const response = await Axios.post('https://x-clonebackend-tyqz.onrender.com/tweet/create', {content})
          setData(response.data)
          setContent('')

        } catch(error) {
          setError(error.message || "an error occur while posting")
}
 
  }
  
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center"> 
     <div className="w-full max-w-[900px]">
      <div className="w-full max-w-[550px] mx-auto bg-black border border-gray-700 !pt-4">

      {/* Header */}
      <div className="bg-black fixed top-0 z-50 w-full max-w-[550px] h-[55px] border-b-* border-b border-gray-700">
      <div className="">
        <div className="flex gap-4 text-gray-500 text-sm !py-4 !px-6">
          <p className="hover:text-white hover:cursor-pointer hover:font-bold">For you </p>
          <p className="hover:text-white hover:cursor-pointer hover:font-bold">Following</p>
        </div>
      </div>
      </div>

      <div className="!mt-[80px] !p-2">
        <form onSubmit={handleSubmit}>
          <textarea name ="content"
           onChange={handleChange} value={content} 
           placeholder="What's happening?" className="!px-4 text-lg  w-full focus:outline-none">
          </textarea>
        {/* show ring only when user type */}
         
          
        <div className="flex justify-end gap-4"> 
            <div className="flex justify-end !mt-4 ">
             {charsUsed > 0 && (
            <svg width={size} height={size}>
        {/* gray background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#374151"
          strokeWidth={thickness}
        />

        {/* blue/yellow/red progress ring */}
        
          <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            transition: "stroke 0.1s ease, stroke-dashoffset 0.1s ease",
          }}
        />
        

        {/* Remaining number in center */} 
        {/* add the logic so that text become visible from when is <=20 */}
        {remaining  <= 20 && (
         <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={color}
          fontSize={size * 0.2}
          fontWeight="600"
        >
          {remaining}
        </text>
        )}
        
      </svg>
          )}
          </div>
         <div className="flex justify-end">
          
          
          <button disabled={!content.trim()} className={`!my-2 !px-4 !py-1.5 rounded-full 
    ${content.trim() 
      ? 'bg-white text-black'
      : 'bg-gray-400 text-black'}`}>Post</button>
         </div>
        </div>
        </form>
        {error && <p className="text-red-700">{error}</p>}
        {data && (
          <div>Tweet posted successfully</div>
        )}
        <div className="border-b-* border-b border-gray-700 !my-4">

        </div>

      </div>





      </div>
     </div>
    </div>
  )
}

export default Home