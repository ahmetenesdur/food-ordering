import React from 'react'
import Image from 'next/image'
import Title from './../../components/ui/Title';

function index() {
    return (
        <div className="flex items-center h-screen gap-20 py-20 flex-wrap ">
            <div className="relative md:flex-1 w-[80%] h-[80%] mx-20">
                <Image
                    src="/images/f1.png"
                    alt="" layout="fill"
                    objectFit="contain"
                    sizes="(max-width: 768px) 80%, 100%"
                />
            </div>
            <div className="md:flex-1 md:text-start text-center">
                <Title addClass="text-6xl">Good Pizza</Title>
                <span className="text-primary text-2xl font-bold underline underline-offset mt-6 inline-block">
                    $10
                </span>
                <p className="text-sm my-4 md:pr-24">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque id odit labore magnam qui, perferendis earum facilis architecto voluptas deleniti voluptate nostrum suscipit molestiae dolores provident autem tenetur nam laboriosam.
                    Consequuntur quasi autem maiores ipsum cum! Culpa earum nostrum numquam porro. Ipsam fuga sapiente ex perspiciatis mollitia, saepe aliquid. Laboriosam, sequi accusamus repellat consequatur amet totam cupiditate ipsum facilis saepe?
                </p>
                <div>
                    <h4 className="text-xl font-bold">Choose the size</h4>
                    <div className="flex items-center gap-x-20 md:justify-start justify-center">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/images/size.png"
                                alt=""
                                layout="fill"
                                sizes='(max-width: 768px) 8px, 8px'
                            />
                            <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                                Small
                            </span>
                        </div>
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/size.png"
                                alt=""
                                layout="fill"
                                sizes='(max-width: 768px) 12px, 12px'
                            />
                            <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                                Medium
                            </span>
                        </div>
                        <div className="relative w-16 h-16">
                            <Image
                                src="/images/size.png"
                                alt=""
                                layout="fill"
                                sizes='(max-width: 768px) 16px, 16px'
                            />
                            <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                                Large
                            </span>
                        </div>
                    </div>
                </div>
                <h4 className="text-xl font-bold mt-4">Choose additional ingredients</h4>
                <div className="flex gap-x-4 my-6 md:justify-start justify-center">
                    <label className="flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" />
                        <span className="text-sm font-semibold">Ketchup</span>
                    </label>
                    <label className="flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" />
                        <span className="text-sm font-semibold">Mayonnaise</span>
                    </label>
                    <label className="flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" />
                        <span className="text-sm font-semibold">Bitter sauce</span>
                    </label>
                </div>
                <button className="btn-primary">Add to Cart</button>
            </div>
        </div>
    );
};


export default index