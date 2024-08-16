import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Newacc = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    password: ''
  });

  const [error, setError] = useState('');

  const validateForm = () => {
    const { name, phoneNumber, password } = formData;
    const phoneRegex = /^\+91\d{10}$/;
    
    if (!name || !phoneNumber || !password) {
      return "All fields are required";
    }

    if (!phoneRegex.test(phoneNumber)) {
      return "Phone number must be in +91XXXXXXXXXX format";
    }
    return '';
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
    } else {
      setError('');
      console.log('Signup successful:', formData);
      // Proceed with the signup process
    }
  };

  return (
    <div className='h-screen mt-[52px]'>
      <div className='bg-[#f5f6f9] w-[300px] ml-auto h-full'>
        <span>
          <RxCross2 className='ml-2 cursor-pointer' />
        </span>
        <div className='flex justify-around items-center mt-4'>
          <div>
            <h3 className='font-semibold'>Sign Up</h3>
            <p className='text-[10px]'>
              or
              <NavLink to={"/SignIn"}>
                <span className='text-[#e67e22] cursor-pointer'> allready have an account</span>
              </NavLink>
            </p>
          </div>
          <div className='w-[70px]'>
            <img src={"src/assets/Image-login_btpq7r.avif"} alt="Signup Illustration" />
          </div>
        </div>

        <div className='outline-none mt-5 px-10'>
          <input
            type="text"
            name="name"
            placeholder='Name'
            className='border-2 placeholder:text-[#2c3e50] px-4 py-2 w-full mb-3'
            value={formData.name}
            onChange={handleChange}
            aria-label="Name"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder='+91----'
            className='border-2 placeholder:text-[#2c3e50] px-4 py-2 w-full mb-3'
            value={formData.phoneNumber}
            onChange={handleChange}
            aria-label="Phone Number"
          />
          <input
            type="password"
            name="password"
            placeholder='Password'
            className='border-2 placeholder:text-[#2c3e50] px-4 py-2 w-full'
            value={formData.password}
            onChange={handleChange}
            aria-label="Password"
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <div className='bg-[#e67e22] w-[220px] mt-3 mx-auto'>
          <button
            className='outline-none text-center w-[200px] py-1 font-semibold text-white rounded-lg'
            onClick={handleSignUp}
            aria-label="Sign Up"
          >
            Sign Up
          </button>
        </div>

        <div className='px-10 mt-2'>
          <p className='text-[10px]'>
            By clicking on Sign Up, I accept the
            <span className='cursor-pointer font-semibold'> Terms & Conditions & Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newacc;
