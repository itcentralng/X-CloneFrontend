import XLogo from "../../src/images/Ninja-x.png"
import Grok from "../../src/images/grok-png.png"
import Xpng from "../../src/images/X.png"
import Profile from "../images/bg2.jpg"
import { Search, ArrowLeft, MapPin, CalendarDays } from 'lucide-react'
import { useState } from "react"
import ModalEdit from "../components/modals/ModalEdit"



function ProfilePage() {

const [isEditModalOpen, setIsEditModalOpen] = useState(false)
function editModal (){
   setIsEditModalOpen(true);
}
function closeEditModal (){
   setIsEditModalOpen (false);
}
// const openEditModal = () => setIsEditModalOpen(true) && setIsEditModalOpen(false)
// const closeEditModal = () => setIsEditModalOpen(false)
// const [closeModal, setCloseModal] = useState(false)

//   function closeEditModal() {
//     setCloseModal(false);
//   }

const user = {name: "John", userName:"@john01", 
   Bio:"Frontend Developer", website: 'https://devjohn.com', 
   Location: "Nigeria", DOB: "Born January 01, 2000", 
   Joined: "Joined March 2020", followersCount: "Following", 
   followingCount: "Followers"
}
const posts = [
   {id:1, title: "The Emerging world of Technology", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde esse aliquid explicabo similique asperiores in libero necessitatibus quos, porro labore ad quaerat molestiae"},
   {id:2, title: "AI the new trend in 2025", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde esse aliquid explicabo similique asperiores in libero necessitatibus quos, porro labore ad quaerat molestiae"}
]
  return (
    <div className={`w-full h-screen bg-black text-white flex justify-center ${isEditModalOpen && 'fixed'}`}>
      <div className="w-full max-w-[900px]">
        <div className="w-full max-w-[550px] mx-auto bg-black border border-gray-700">
        {/* Header */}
         <div className="bg-black fixed top-0 z-50 w-full  max-w-[550px] h-[55px]">
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
            <div className="flex gap-4 items-center">
               <img src={Grok} alt="" className="w-[15px] h-[15px]"/>
               <Search size={15} />
            </div>
         </div>
         </div>
         <div className="!pt-2">
            <div className="relative">
               <img src={XLogo} alt="header-img" className="w-[550px] h-[250px] bg-gray-400 object-cover" />
            <div className="absolute bottom-0 left-4 transform translate-y-2/12 z-40">
                <img src={Profile} alt="profile-pic"  className="w-[130px] h-[130px] rounded-full border-4 border-black"/>
            </div>
           <div className="flex justify-end !p-2">
             <button className="!py-1.5 !px-2 border rounded-3xl border-gray-300 font-bold hover:bg-gray-900 text-sm hover:cursor-pointer" onClick={editModal} >Edit Profile</button>
           </div>
            {isEditModalOpen &&                
                  <ModalEdit  closeEditModal={closeEditModal}
                              isEditModalOpen={isEditModalOpen}
                  />
              }
          
            </div>
            {/* User Info  */}
          <section className="!pt-[30px]">
            <div className="!p-2">
               <h2 className="font-bold text-lg">{user.name}</h2>
               <p className="text-gray-600 text-sm">{user.userName}</p>
            </div>
            <p  className="!p-2">{user.Bio}</p>
            <div className="flex flex-wrap text-gray-500 text-sm gap-4 !p-2">
               <div className="flex ">
                  <MapPin size={15}/>
                  <p>{user.Location}</p>
               </div>
               <div className="flex gap-2">
                  <p>{user.DOB}</p>
               </div>
               <div className="flex gap-1.5">
               <CalendarDays  size={15}/>
               <p>{user.Joined}</p>
               </div>
            </div>
          </section>
            <section className="flex text-sm gap4 !p-2 gap-2">
               <p>50 <span className="text-gray-500 text-sm hover:cursor-pointer">{user.followersCount}</span></p>
               <p>123 <span className="text-gray-500 text-sm hover:cursor-pointer">{user.followingCount}</span></p>
              
            </section>
            {/* Post section */}
            <section>
               <div className="!p-2">
                  <p className="font-bold !py-4 border-b-* border-b border-b-gray-600">Posts</p>
                  {posts.map((post => (
                     <div key={post.id} className="text-sm !py-4">
                        <p>{post.title}</p>
                        <p>{post.content}</p>
                     </div>

                  )))}
               </div>
            </section>

         </div>
          
         
        </div>
      </div>
    </div>
  )
}

export default ProfilePage