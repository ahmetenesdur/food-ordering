import React from 'react'
import Input from './form/Input'
import Title from './ui/Title'

function Reservation() {
    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Your Phone Number",
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Your Email Address",
        },
        {
            id: 4,
            name: "persons",
            type: "number",
            placeholder: "How Many Persons?",
        },
        {
            id: 5,
            name: "persons",
            type: "datetime-local",
            placeholder: "Date & Time",
        },
    ];

    return (
        <div className="container mx-auto py-12">
            <Title addClass="text-[40px] mb-10">Book A Table</Title>
            <div className="flex justify-between flex-wrap-reverse gap-10">
                <div className="lg:flex-1 w-full">
                    <div className="flex flex-col gap-y-3">
                        {inputs.map((input) => (
                            <Input
                                key={input.id}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                            />
                        ))}
                    </div>
                    <button className="btn-primary mt-4">BOOK NOW</button>
                </div>
                <div className="lg:flex-1 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.5922336784515!2d36.24544035047878!3d49.99968351447303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0c201eba8df%3A0x4847f00cec333b6!2sNTU%20%22KhPI%22!5e0!3m2!1str!2str!4v1669991818683!5m2!1str!2str"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-full w-full"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Reservation