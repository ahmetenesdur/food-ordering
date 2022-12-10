import Image from 'next/image'
import { useState } from "react";
import Products from './../../components/admin/Products';


function Profile() {
    const [tabs, setTabs] = useState(0);

    return (
        <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10">
            <div className="lg:w-80 w-100 flex-shrink-0">
                <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
                    <Image
                        src="/images/admin.png"
                        alt=""
                        width={100}
                        height={100}
                        className='w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg'
                    />
                    <b className='text-2xl'>Admin</b>
                </div>
                <ul className="text-center font-semibold">
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 0 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(0)}>
                        <i className="fa-solid fa-utensils"></i>
                        <button className='ml-1'>Products</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 1 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(1)}>
                        <i className="fa-solid fa-truck-fast"></i>
                        <button className='ml-1'>Orders</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 2 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(2)}>
                        <i className="fas fa-th-large"></i>
                        <button className='ml-1'>Categories</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 3 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(3)}>
                        <i className="fas fa-wrench"></i>
                        <button className='ml-1'>Footer</button>
                    </li>
                    <li
                        className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${tabs === 4 && "bg-primary text-white"
                            }`}
                        onClick={() => setTabs(4)}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <button className='ml-1'>Exit</button>
                    </li>
                </ul>
            </div>
            {tabs === 0 && <Products />}
        </div>
    )
}

export default Profile