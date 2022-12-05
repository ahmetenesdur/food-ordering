import React from 'react'
import Title from './../ui/Title';

function Footer() {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <a
                href="https://www.google.com/maps?ll=49.999029,36.248372&z=15&t=m&hl=tr&gl=TR&mapclient=embed&cid=325524714523145142"
                className="hover:text-primary"
              >
                <div>
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  <span className="inline-block ml-2">Location</span>
                </div>
              </a>
              <a
                href="tel:PHONE_NUM"
                className="hover:text-primary"
              >
                <div>
                  <i className="fa fa-phone"></i>
                  <span className="inline-block ml-2">Call +01 1234567890</span>
                </div>
              </a>
              <a
                href="mailto:demo@gmail.com"
                className="hover:text-primary"
              >
                <div>
                  <i className="fa fa-envelope"></i>
                  <span className="inline-block ml-2">demo@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Feane</Title>
            <p className="mt-3">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-primary"
              >
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 Feane. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer