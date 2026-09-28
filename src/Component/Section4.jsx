import React from 'react'
import imgwyze1 from '../../img/card img/1.1.png'
import img2 from '../../img/2.png'
import img6 from '../../img/6.png'
import img7 from '../../img/7.png'
import img8 from '../../img/8.png'
import img9 from '../../img/9.png'
import img10 from '../../img/10.png'
import img11 from '../../img/11.png'


export default function Section4() {
    return (
        <>
            <div className='md:hidden bg-[#EDF4FF] px-5 '>
                <h4 className='text-gray-500 font-normal'>Review</h4>
                <div className='pt-5'>
                    <div className="">
                        <h2 className="text-2xl font-normal">
                            Your security system
                        </h2>

                        <p className="font-normal text-gray-500 py-2 text-lg">
                            Review your personalized protection system designed to <br /> keep what
                            matters most safe.
                        </p>
                        <div className="w-full h-px  mb-2 bg-gray-600 "></div>


                    </div>
                    <div>
                        {/* card */}
                        <div>
                            <h4 className='uppercase font-normal text-xs text-[#A8B2BD]'>Cameras</h4>
                            {/* 1 */}
                            <div className='flex justify-between'>
                                <div className="flex items-center gap-2 py-1">
                                    <img
                                        src={imgwyze1}
                                        className="bg-white w-10 h-10 object-contain"
                                        alt="Wyze Cam v4"
                                    />
                                    <p className="text-lg font-normal">
                                        Wyze Cam v4
                                    </p>
                                </div>
                                <div>

                                    <div className="mt-auto flex gap-5 pt-3">

                                        {/* Quantity */}
                                        <div className="flex  items-center">
                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                1
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-gray-500 line-through">
                                                $35.98
                                            </span>

                                            <span className="text-l font-medium text-[#4E2FD2]">
                                                $27.98
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* 2 */}
                            <div className='flex justify-between'>
                                <div className="flex items-center gap-2 py-1">
                                    <img
                                        src={img2}
                                        className="bg-white w-10 h-10 object-contain"
                                        alt="Wyze Cam v4"
                                    />
                                    <p className="text-lg font-normal">
                                        Wyze Cam Pan v3
                                    </p>
                                </div>
                                <div>

                                    <div className="mt-auto flex gap-5 pt-3">

                                        {/* Quantity */}
                                        <div className="flex  items-center">
                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                1
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-gray-500 line-through">
                                                $57.98
                                            </span>

                                            <span className="text-l font-medium text-[#4E2FD2]">
                                                $47.98
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="w-full h-px my-2 bg-gray-300"></div>

                        </div>
                        {/* Section2 */}
                        <div>
                            <h4 className='uppercase font-normal text-xs text-[#A8B2BD]'>sensors</h4>
                            {/* 1 */}
                            <div className='flex justify-between'>
                                <div className="flex items-center gap-2 py-1">
                                    <img
                                        src={img6}
                                        className="bg-white w-10 h-10 object-contain"
                                        alt="Wyze Cam v4"
                                    />
                                    <p className="text-lg font-normal">
                                        Wyze Sense Motion Sensor
                                    </p>
                                </div>
                                <div>

                                    <div className="mt-auto flex gap-5 pt-3">

                                        {/* Quantity */}
                                        <div className="flex  items-center">
                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                2
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>

                                            <span className="text-l font-medium text-[#4E2FD2]">
                                                $59.98
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* 2 */}
                            <div className='flex justify-between'>
                                <div className="flex items-center gap-2 py-1">
                                    <img
                                        src={img7}
                                        className="bg-white w-10 h-10 object-contain"
                                        alt="Wyze Cam v4"
                                    />
                                    <p className="text-lg font-normal">
                                        Wyze Sense Hub (Required)
                                    </p>
                                </div>
                                <div>

                                    <div className="mt-auto flex gap-5 pt-3">

                                        {/* Quantity */}
                                        <div className="flex  items-center">
                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                1
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-gray-500 line-through">
                                                $29.98
                                            </span>

                                            <span className="text-l font-medium text-[#4E2FD2]">
                                                FREE
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="w-full h-px my-2 bg-gray-300"></div>

                        </div>
                        {/* Section3 */}
                        <div>
                            <h4 className='uppercase font-normal text-xs text-[#A8B2BD]'>accessories</h4>
                            {/* 1 */}
                            <div className='flex justify-between'>
                                <div className="flex items-center gap-2 py-1">
                                    <img
                                        src={img8}
                                        className="bg-white w-10 h-10 object-contain"
                                        alt="Wyze Cam v4"
                                    />
                                    <p className="text-lg font-normal">
                                        Wyze MicroSD Card (256GB)
                                    </p>
                                </div>
                                <div>

                                    <div className="mt-auto flex gap-5 pt-3">

                                        {/* Quantity */}
                                        <div className="flex  items-center">
                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                2
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center bg-white text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>

                                            <span className="text-l font-medium text-[#4E2FD2]">
                                                $41.98
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="w-full h-px my-2 bg-gray-300"></div>

                        </div>

                        {/* section4 */}
                        <div>
                            <h4 className='uppercase font-normal text-xs text-[#A8B2BD]'>plan</h4>
                            {/* 1 */}
                            <div className='flex justify-between'>
                                <div className="flex items-center gap-2 py-1">
                                    <img
                                        src={img9}
                                        className="bg-white w-10 h-10 object-contain"
                                        alt="Wyze Cam v4"
                                    />
                                    <p className="text-lg font-normal">
                                        Cam <span className='text-[#4E2FD2] font-bold'> Unlimited</span>
                                    </p>
                                </div>
                                <div>

                                    <div className="mt-auto flex gap-5 pt-3">



                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-gray-500 line-through">
                                                $19.98/mon
                                            </span>
                                            <span className="text-l font-medium text-[#4E2FD2]">
                                                $9.9
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="w-full h-px my-2 bg-gray-300"></div>

                        </div>
                        {/* Section5 */}
                        <div>
                            {/* 1 */}
                            <div className='flex justify-between'>
                                <div className="flex items-center gap-2 py-1">
                                    <img
                                        src={img10}
                                        className="bg-white w-10 h-10 object-contain"
                                        alt="Wyze Cam v4"
                                    />
                                    <p className="text-lg font-normal">
                                        Fast Shipping                                        </p>
                                </div>
                                <div>

                                    <div className="mt-auto flex gap-5 pt-3">



                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-gray-500 line-through">
                                                $5.5
                                            </span>
                                            <span className="text-l font-medium text-[#4E2FD2]">
                                                Free
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className=" ">
                        <div className='flex items-end justify-between '>

                            <div> <img
                                src={img11}
                                alt="30-day returns"
                                className="w-40 h-40 object-contain"
                            />
                            </div>
                            <div className=''>
                                <div className=''>
                                    <p className='text-white border rounded px-2 bg-[#4E2FD2]'>as low as $19.19/mo</p>

                                </div>
                                <div className=''>
                                    <span className="mr-1 text-l text-gray-500 line-through">
                                        $283.81
                                    </span>

                                    <span className="text-2xl font-bold text-[#4E2FD2]">
                                        $187.98
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='text-center pt-9 text-[#0AA288]'>Congrats! You’re saving $50.92 on your security bundle!</p>
                        </div>
                        <div className="text-center border bg-[#4E2FD2] rounded-md">
                            <button className="w-full py-2 text-white text-xl font-semibold">
                                Checkout
                            </button>
                        </div>
                        <div className="text-center pt-2 underline">
                            <p className='text-[#484848]'>Save my system for later</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
