import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

function Search({ setIsSearch }) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:bg-white grid after:opacity-30">
            <OutsideClickHandler onOutsideClick={() => setIsSearch(false)}>
                <div className="w-full h-full flex justify-center items-center">
                    <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 rounded-3xl p-10">
                        <Title addClass='text-[40px] text-center'>Search</Title>
                        <input type="text" placeholder="Search..." className="w-full h-[50px] border-2 border-gray-300 rounded-lg my-5" />
                        <div>
                            <ul className="mt-5">
                                <li className="flex items-center justify-between gap-4 p-1 hover:bg-primary transition-all">
                                    <div className="relative flex">
                                        <Image
                                            src="/images/f1.png"
                                            alt=""
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <span className='font-bold'>Good Pizza</span>
                                    <span className='font-bold'>$10</span>
                                </li>
                                <li className="flex items-center justify-between gap-4 p-1 hover:bg-primary transition-all">
                                    <div className="relative flex">
                                        <Image
                                            src="/images/f1.png"
                                            alt=""
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <span className='font-bold'>Good Pizza</span>
                                    <span className='font-bold'>$10</span>
                                </li>
                                <li className="flex items-center justify-between gap-4 p-1 hover:bg-primary transition-all">
                                    <div className="relative flex">
                                        <Image
                                            src="/images/f1.png"
                                            alt=""
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <span className='font-bold'>Good Pizza</span>
                                    <span className='font-bold'>$10</span>
                                </li>
                            </ul>
                            <button>
                                <GiCancel
                                    className="text-2xl absolute top-5 right-5 cursor-pointer hover:text-primary"
                                    onClick={() => setIsSearch(false)}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default Search