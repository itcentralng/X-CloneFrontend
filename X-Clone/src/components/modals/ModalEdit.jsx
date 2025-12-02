import { Camera, X } from "lucide-react";
import { useState } from "react";

export default function EditProfileModal({ closeEditModal, isEditModalOpen }) {
  const [profileImg, setProfileImg] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");

  const uploadImage = (e, setter) => {
    const file = e.target.files[0];
    if (file) setter(URL.createObjectURL(file));
  };

  return (
    isEditModalOpen && (
      
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="w-full max-w-xl bg-black rounded-2xl border border-gray-800 shadow-xl max-h-[90vh] overflow-y-auto">
          
          {/* HEADER */}
          <div className="flex items-center p-3 gap-4">
            <button
              type="button"
              onClick={closeEditModal}
              aria-label="Close edit profile"
              className="text-white hover:bg-gray-950 rounded-full w-10 h-10 flex items-center justify-center text-3xl"
            >
              <X color="#ffffff" strokeWidth={1.25} />
            </button>

            <h1
              id="edit-profile-title"
              className="font-bold flex-1 text-lg "
            >
              Edit profile
            </h1>

            <button className="bg-white text-sm md:text-base px-2 py-1 text-black rounded-full font-semibold hover:bg-gray-200">
              Save
            </button>
          </div>

          {/* BANNER */}
          <div className="relative h-48 mt-4 md:mt-6">
            <input
              type="file"
              id="bannerInput"
              className="hidden"
              accept="image/*"
              onChange={(e) => uploadImage(e, setBannerImg)}
            />
            <label
              htmlFor="bannerInput"
              className="absolute inset-0 cursor-pointer group rounded-lg overflow-hidden"
            >
              {bannerImg ? (
                <img src={bannerImg} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 ">
                  <Camera
                    color="#f4f4f4"
                    strokeWidth={2}
                    className="w-12 h-12"
                  />
                </div>
              )}

              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <Camera color="#ffffff" strokeWidth={3} className="w-10 h-10" />
              </div>
            </label>
          </div>

          {/* PROFILE PICTURE */}
          <div className="relative px-6 -mt-6 flex justify-start">
            <input
              type="file"
              id="profileInput"
              className="hidden"
              accept="image/*"
              onChange={(e) => uploadImage(e, setProfileImg)}
            />
            <label
              htmlFor="profileInput"
              className="relative inline-block cursor-pointer group"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-black">
                {profileImg ? (
                  <img
                    src={profileImg}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
                    <Camera
                      color="#f4f4f4"
                      strokeWidth={2}
                      className="w-8 h-8 md:w-10 md:h-10"
                    />
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <Camera
                  color="#ffffff"
                  strokeWidth={3}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
            </label>
          </div>

          {/* FORM FIELDS */}
          <div className="px-6 md:px-8 pt-6 pb-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm md:text-base">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl focus:border-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm md:text-base">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl h-28 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm md:text-base">
                Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl focus:border-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm md:text-base">
                Website
              </label>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full bg-black border border-gray-700 p-4 rounded-xl focus:border-blue-500 outline-none "
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
