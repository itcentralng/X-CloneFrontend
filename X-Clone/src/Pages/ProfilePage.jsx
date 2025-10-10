import XLogo from "../../src/images/Ninja-x.png"
import Grok from "../../src/images/grok-png.png"
import Xpng from "../../src/images/X.png"
import { Search, ArrowLeft } from 'lucide-react'




function ProfilePage() {

const user = {name: "John", userName:"@john01", 
   Bio:"Frontend Developer", website: 'https://devjohn.com', 
   Location: "Nigeria", DOB: "Born January 01, 2000", 
   Joined: "Joined March 2020", followersCount: "200 Following", 
   followingCount: "500 Follwers"
}
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center">
      <div className="w-[900px] bg-gray-800">
        <div className="w-[550px] bg-black">
        {/* Header */}
         <div className="bg-black fixed top-0 z-50 w-[550px] h-[50px]">
            <div className="flex justify-between !p-2">
            <div className=" flex gap-4">
               <div className="!p-2">
                  <ArrowLeft/>
               </div>
               <div>
                  <h2 className="font-bold text-xl">{user.name}</h2>
               <p className="text-gray-400 text-xs">30 Post</p>
               </div>
            </div>
            <div className="flex gap-4">
               <img src={Grok} alt="" className="w-[20px] h-[20px]"/>
               <Search />
            </div>
         </div>
         </div>
         <div className="!pt-2">
            <div className="relative">
               <img src={XLogo} alt="header-img" className="w-[550px] h-[250px] bg-gray-400 object-cover" />
           <div className="flex justify-between !p-2 items-start">
             <img src={Xpng} alt="profile-pic"  className="w-[130px] h-[130px] rounded-full z-40 border-4 border-white"/>
            <button className="!py-1.5 !px-2 border rounded-3xl border-gray-300 font-bold hover:bg-gray-900 text-sm hover:cursor-pointer">Edit Profile</button>
           </div>
            </div>
          <section>
            <div className="!p-2">
               <h2 className="font-bold">{user.name}</h2>
               <p className="text-gray-600 text-sm">{user.userName}</p>
            </div>
          </section>

         </div>
          
         
        </div>
      </div>
    </div>
  )
}

export default ProfilePage