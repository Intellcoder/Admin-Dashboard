import { useState, type ChangeEvent } from "react";
import LinkDisplay from "../components/LinkDisplay";
import InputBox from "../components/InputBox";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    Address1: "",
    Address2: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="p-2">
      <LinkDisplay title="CREATE USER" text="Create a New User Profile" />
      <div className="p-2">
        <div className=" md:grid grid-cols-2 gap-3 w-full mt-5 ">
          <InputBox
            name="firstName"
            onchange={handleChange}
            value={userDetails.firstName}
            placeholder="First Name"
          />
          <InputBox
            name="lastName"
            value={userDetails.lastName}
            onchange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <div>
          <InputBox
            name="email"
            onchange={handleChange}
            value={userDetails.email}
            placeholder="Email"
          />
          <InputBox
            name="contact"
            onchange={handleChange}
            value={userDetails.contact}
            placeholder="Contact Number"
          />
          <InputBox
            name="address1"
            onchange={handleChange}
            value={userDetails.Address1}
            placeholder="Address 1"
          />
          <InputBox
            onchange={handleChange}
            name="address2"
            value={userDetails.Address2}
            placeholder="Address 1"
          />
        </div>
        <div className=" flex justify-center md:justify-end ">
          <button className=" bg-greenAccent-600 text-grey-100 p-1 rounded">
            CREATE NEW USER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
