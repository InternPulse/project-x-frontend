import React, { useState } from "react";
import profile from "../../../../assets/icons/profile-image.png";
import MobileNavbar from "../../components/mobilenav";

const Profile = ({ profileImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <MobileNavbar />
      <div className="flex justify-between items-center mt-[12px]">
        <h1 className=" lg:ml-[84px] text-4xl">My Profile</h1>
      </div>

      <hr
        className="hidden lg:block"
        style={{
          width: "100%",
          marginTop: "8px",
          marginBottom: "8px",
        }}
      />
      {/*  body*/}

      <div className="lg:ml-[84px]">
        <div className="mb-[50px] mt-[40px]">
          <p className="  text-3xl font-bold">Daniel Harry</p>
          <p>Role: Project Manager</p>
        </div>
        <div>
          <p className="text-3xl mb-[45px]">Edit your profile</p>
          <div>
            <label htmlFor="imageInput">
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="profileImage"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                />
              ) : (
                <img
                  src={profile}
                  alt="Profile"
                  style={{ cursor: "pointer" }}
                />
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="imageInput"
            />
          </div>
          <div className=" flex gap-[15px] mt-[27px]">
            <p className=" my-[auto] font-bold text-2xl">Photo</p>
            <label
              htmlFor="imageInput"
              className="block mt-2 cursor-pointer border border-solid  border-gray-300 w-[10%] pl-[10px] rounded-[5px]"
            >
              Choose File
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
