import React from 'react'
import Title from './../ui/Title';
import CustomersItem from './customersItem';

function Customers() {
    return (
        <div className="container mx-auto">
            <Title addClass={"text-[40px] text-center"}>What Says Our Customers</Title>
            <div className='flex gap-x-10'>
                <CustomersItem imgSrc="/images/client1.jpg" />
                <CustomersItem imgSrc="/images/client2.jpg" />
            </div>
        </div>
    )
}

export default Customers