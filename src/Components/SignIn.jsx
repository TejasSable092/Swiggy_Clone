import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  const [login, setLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\+91\d{10}$/;
    return phoneRegex.test(number);
  };

  const handleLogin = () => {
    if (validatePhoneNumber(phoneNumber)) {
      // Proceed with login
      setError('');
      console.log('Login successful');
    } else {
      setError('Please enter a valid phone number');
    }
  };

  return (
    <>
      <div className='h-screen mt-[52px]'>
        <div className='bg-[#f5f6f9] w-[300px] ml-auto h-full'>
          <span>
            <RxCross2 className='ml-2 cursor-pointer' onClick={() => setLogin(!login)} aria-label="Close" />
          </span>
          <div className='flex justify-around items-center mt-4'>
            <div>
              <h3 className='font-semibold'>Login</h3>
              <p className='text-[10px]'>
                or <NavLink to={"/NewAcc"}><span className='text-[#e67e22] cursor-pointer'>create an account</span></NavLink>
              </p>
            </div>
            <div className='w-[70px]'>
              <img src={"/src/assets/Image-login_btpq7r.avif"} alt="Login Illustration" />
            </div>
          </div>

          <div className='outline-none mt-5 px-10'>
            <input
              type="text"
              placeholder='+91----'
              className='border-2 placeholder:text-[#2c3e50] px-4 py-2 w-full'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              aria-label="Phone Number"
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>

          <div className='bg-[#e67e22] w-[220px] mt-3 mx-auto'>
            <button
              className='outline-none text-center w-[200px] py-1 font-semibold text-white rounded-lg'
              onClick={handleLogin}
              aria-label="Login"
            >
              Login
            </button>
          </div>

          <div className='px-10 mt-2'>
            <p className='text-[10px]'>
              By clicking on Login, I accept the
              <span className='cursor-pointer font-semibold'> Terms & Conditions & Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
