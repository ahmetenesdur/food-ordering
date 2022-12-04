import React from 'react'
import Title from './../ui/Title';

function Footer() {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto py-20">
        <div>
          <div>
            <Title addClass="text-[30px]">Contact Us</Title>
          </div>
          <div></div>
          <div></div>
        </div>
        <div>
          <p className="text-center mt-10">
            © 2022 All Rights Reserved By Free Html Templates
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer