import Image from 'next/image'

function Profile() {
    return (
        <div className="flex px-10 min-h-[calc(100vh_-_433px)]">
            <div className='w-80'>
                <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
                    <Image
                        src="/images/client1.jpg"
                        alt=""
                        width={100}
                        height={100}
                        className='w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg'
                    />
                    <b className='text-2xl'>Jessica Jones</b>
                </div>
                <ul className="text-center font-semibold">
                    <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">

                        <i className="fa-solid fa-house"></i>
                        <button className='ml-1'>Account</button>
                    </li>
                    <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">

                        <i className="fa-solid fa-lock"></i>
                        <button className='ml-1'>Password</button>
                    </li>
                    <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">

                        <i className="fa-solid fa-truck-fast"></i>
                        <button className='ml-1'>Orders</button>
                    </li>
                    <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">

                        <i className="fa-solid fa-right-from-bracket"></i>
                        <button className='ml-1'>Exit</button>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Profile