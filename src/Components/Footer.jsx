import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-10 mt-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-evenly">
            <div className=' flex justify-start items-start'>
            <img src={"src/assets/Swiggy-logo.png"} alt="Logo" className=' size-10' />
                <div className='flex flex-col'>
                <h4 className=' font-bold'>Swiggy</h4>
                    <p className=' text-[10px] w-[70px]'>© 2024 Bundl Technologies Pvt. Ltd</p>
                </div>
            </div>
          {/* Company Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">

            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Team</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Swiggy One</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Swiggy Instamart</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Swiggy Genie</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
          {/* Help & Support Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-4">Help & Support</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Partner with us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Ride with us</a></li>
            </ul>
          </div>
          {/* Legal Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Investor Relations</a></li>
            </ul>
          </div>
          {/* We deliver to Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h4 className="text-lg font-bold mb-4">We deliver to:</h4>
            <ul className="flex flex-wrap">
              <li className="mb-2 w-1/2"><a href="#" className="hover:underline">Bangalore</a></li>
              <li className="mb-2 w-1/2"><a href="#" className="hover:underline">Gurgaon</a></li>
              <li className="mb-2 w-1/2"><a href="#" className="hover:underline">Hyderabad</a></li>
              <li className="mb-2 w-1/2"><a href="#" className="hover:underline">Delhi</a></li>
              <li className="mb-2 w-1/2"><a href="#" className="hover:underline">Mumbai</a></li>
              <li className="mb-2 w-1/2"><a href="#" className="hover:underline">Pune</a></li>
            </ul>
            <p className="mt-4 text-sm">589 cities</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">&copy; 2024 Bundl Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
