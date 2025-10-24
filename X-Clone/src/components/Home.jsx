import { useState } from "react";
import Axios from "axios";


function Home() {
  const [content, setContent] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
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
          <textarea name="teweetcontent"
           onChange={handleChange} value={content} 
           placeholder="What's happening?" className="!px-4 text-lg  w-full focus:outline-none">
          </textarea>

         <div className="flex justify-end">
          <button disabled={!content.trim()} className={`!my-2 !px-4 !py-1.5 rounded-full 
    ${content.trim()
      ? 'bg-white text-black'
      : 'bg-gray-400 text-black'}`}>Post</button>
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