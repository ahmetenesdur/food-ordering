import Image from 'next/image';
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function customersItem({ imgSrc }) {
    return (
        <div className="mt-5 mx-4">
            <div className="p-6 bg-secondary text-white rounded-md">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam perspiciatis, id ad animi aspernatur explicabo in dignissimos aliquam, voluptates ea numquam iste consectetur! Perspiciatis similique aspernatur voluptas necessitatibus illo eligendi.</p>
                <div className="flex flex-col mt-4">
                    <span className='text-lg font-semibold'>Moana Michelle</span>
                    <span className='text-[15px]'>magna aliqua</span>
                </div>
            </div>

            <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5 ">
                <Image
                    src={imgSrc}
                    alt="customer"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                    sizes="(max-width: 768px) 36px, 44px"
                />
            </div>
        </div>
    )
}

export default customersItem