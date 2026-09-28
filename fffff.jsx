import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSortUp, faCaretDown, faLayerGroup, faShield, faWifi } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../img/1.png'
import imgwyze1 from '../../img/card img/1.1.png'
import imgwyze2 from '../../img/card img/1.2.png'
import imgwyze3 from '../../img/card img/1.3.png'
import img2 from '../../img/2.png'
import imgwyze4 from '../../img/card img/2.1.png'
import imgwyze5 from '../../img/card img/2.2.png'
import img3 from '../../img/3.png'
import imgwyze6 from '../../img/card img/3.1.png'
import imgwyze7 from '../../img/card img/3.2.png'
import img4 from '../../img/4.png'
import img5 from '../../img/5.png'
import img6 from '../../img/6.png'
import img7 from '../../img/7.png'
import img8 from '../../img/8.png'
import img9 from '../../img/9.png'
import img10 from '../../img/10.png'
import img11 from '../../img/11.png'


export default function Slide() {
    return (
        <>
            <div className='container p-16 '>
                {/* Section1 */}
                {/* Header */}
                <div className='my-1 mx-8 grid  lg:grid-cols-5 ' >
                    <div className="col-span-5 p-3 rounded bg-[#EDF4FF]">
                        <h5>Step 1 of 4</h5>
                        <div className="w-full h-px mb-2 bg-gray-600 "></div>
                        <div>
                            <div className='flex pb-5 justify-between'>
                                <div className='flex items-center gap-1  font-medium'>
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="text-2xl"
                                    />
                                    <p className='text-2xl'>Choose your cameras</p>
                                </div>
                                <div className='flex items-center text-[#4E2FD2] justify-center'>
                                    <button className=''>2 Selcted</button>
                                    <FontAwesomeIcon
                                        icon={faSortUp}
                                        className="text-2lg   translate-y-[7px]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-5 gap-4">
                                {/* CARD1 */}

                                <div className="card relative flex min-h-[260px] flex-col rounded-xl border-2 border-[#7659e8] bg-white p-3">

                                    {/* Save */}
                                    <span className="absolute left-2 top-2 rounded-2xl bg-[#5636df] px-2 py-1 text-[15px] font-bold text-white">
                                        Save 22%
                                    </span>

                                    {/* Image */}
                                    <div className="flex h-[120px] items-center justify-center">
                                        <img
                                            src={img1}
                                            alt=""
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="my-3">
                                        <h3 className="text-xl font-semibold text-[#171717]">
                                            Wyze Cam v4
                                        </h3>

                                        <p className="mt-1 text-lg leading-4 py-3 text-gray-500">
                                            The clearest Wyze Cam ever made.
                                            <a
                                                href="#"
                                                className="ml-1 font-medium text-[#5536df] underline"
                                            >
                                                Learn More
                                            </a>
                                        </p>
                                    </div>

                                    {/* Colors */}
                                    <div className="mt-3 flex gap-2">
                                        <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-[10px]">
                                            <img src={imgwyze1} alt="" />
                                            White
                                        </button>
                                        <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-[10px]">
                                            <img src={imgwyze2} alt="" />
                                            Gray
                                        </button>

                                        <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-[10px]">
                                            <img src={imgwyze3} alt="" />

                                            Black
                                        </button>
                                    </div>

                                    {/* Bottom */}
                                    <div className="mt-auto flex items-center justify-between pt-3">

                                        {/* Quantity */}
                                        <div className="flex  items-center rounded border border-gray-200">
                                            <button className="flex h-6 w-6 items-center justify-center text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                1
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-red-500 line-through">
                                                $35.98
                                            </span>

                                            <span className="text-l font-medium text-gray-600">
                                                $27.98
                                            </span>
                                        </div>

                                    </div>
                                </div>


                                {/* CARD2 */}


                                <div className="card relative flex min-h-[260px] flex-col rounded-xl border-2 border-[#7659e8] bg-white p-3">

                                    {/* Save */}
                                    <span className="absolute left-2 top-2 rounded-2xl bg-[#5636df] px-2 py-1 text-[15px] font-bold text-white">
                                        Save 12%
                                    </span>

                                    {/* Image */}
                                    <div className="flex h-[120px] items-center justify-center">
                                        <img
                                            src={img2}
                                            alt=""
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="my-3">
                                        <h3 className="text-xl font-semibold text-[#171717]">
                                            Wyze Cam Pan v4
                                        </h3>

                                        <p className="mt-1 text-lg leading-4 py-3 text-gray-500">
                                            360° pan and 180° tilt security camera. Learn More
                                            <a
                                                href="#"
                                                className="ml-1 font-medium text-[#5536df] underline"
                                            >
                                                Learn More
                                            </a>
                                        </p>
                                    </div>

                                    {/* Colors */}
                                    <div className="mt-3 flex gap-2">
                                        <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-[10px]">
                                            <img src={imgwyze4} alt="" />
                                            White
                                        </button>


                                        <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-[10px]">
                                            <img src={imgwyze5} alt="" />

                                            Black
                                        </button>
                                    </div>

                                    {/* Bottom */}
                                    <div className="mt-auto flex items-center justify-between pt-3">

                                        {/* Quantity */}
                                        <div className="flex items-center rounded border border-gray-200">
                                            <button className="flex h-6 w-6 items-center justify-center text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                2
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-red-500 line-through">
                                                $39.98
                                            </span>

                                            <span className="text-l font-medium text-gray-600">
                                                $34.98
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* CARD3 */}


                                <div className="card relative flex min-h-[260px] flex-col rounded-xl border-2 border-[#7659e8] bg-white p-3">

                                    {/* Save */}
                                    <span className="absolute left-2 top-2 rounded-2xl bg-[#5636df] px-2 py-1 text-[15px] font-bold text-white">
                                        Save 22%
                                    </span>

                                    {/* Image */}
                                    <div className="flex h-[120px] items-center justify-center">
                                        <img
                                            src={img3}
                                            alt=""
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="my-3">
                                        <h3 className="text-xl font-semibold text-[#171717]">
                                            Wyze Cam Floodlight v2
                                        </h3>

                                        <p className="mt-1 text-lg leading-4 py-3 text-gray-500">
                                            360° pan and 180° tilt security camera. Learn More
                                            <a
                                                href="#"
                                                className="ml-1 font-medium text-[#5536df] underline"
                                            >
                                                Learn More
                                            </a>
                                        </p>
                                    </div>

                                    {/* Colors */}
                                    <div className="mt-3 flex gap-2">
                                        <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-[10px]">
                                            <img src={imgwyze6} alt="" />
                                            White
                                        </button>


                                        <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-[10px]">
                                            <img src={imgwyze7} alt="" />

                                            Black
                                        </button>
                                    </div>

                                    {/* Bottom */}
                                    <div className="mt-auto flex items-center justify-between pt-3">

                                        {/* Quantity */}
                                        <div className="flex items-center rounded border border-gray-200">
                                            <button className="flex h-6 w-6 items-center justify-center text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                0
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-red-500 line-through">
                                                $89.98
                                            </span>

                                            <span className="text-l font-medium text-gray-600">
                                                $64.98
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* CARD4 */}


                                <div className="card relative flex min-h-[260px] flex-col rounded-xl border-2 border-[#7659e8] bg-white p-3">

                                    {/* Save */}


                                    {/* Image */}
                                    <div className="flex h-[120px] items-center justify-center">
                                        <img
                                            src={img4}
                                            alt=""
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="my-3">
                                        <h3 className="text-xl font-semibold text-[#171717]">
                                            Wyze Cam Floodlight v2
                                        </h3>

                                        <p className="mt-5 text-lg leading-4 py-3 text-gray-500">
                                            Two cameras. Two views. Double the porch protection.
                                            Learn More                                            <a
                                                href="#"
                                                className="ml-1 font-medium text-[#5536df] underline"
                                            >
                                                Learn More
                                            </a>
                                        </p>
                                    </div>

                                    {/* Colors */}


                                    {/* Bottom */}
                                    <div className="mt-auto flex items-center justify-between pt-3">

                                        {/* Quantity */}
                                        <div className="flex items-center rounded border border-gray-200">
                                            <button className="flex h-6 w-6 items-center justify-center text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                0
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-red-500 line-through">
                                                $89.98
                                            </span>

                                            <span className="text-l font-medium text-gray-600">
                                                $64.98
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* CARD5 */}


                                <div className="card relative flex min-h-[260px] flex-col rounded-xl border-2 border-[#7659e8] bg-white p-3">

                                    {/* Save */}

                                    {/* Image */}
                                    <div className="flex h-[120px] items-center justify-center">
                                        <img
                                            src={img5}
                                            alt=""
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="">
                                        <h3 className="text-xl font-semibold text-[#171717]">
                                            Wyze Cam Floodlight v2
                                        </h3>

                                        <p className="mt- text-lg leading-4 py-3 text-gray-500">
                                            Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.  Learn More                                   <a
                                                href="#"
                                                className="ml-1 font-medium text-[#5536df] underline"
                                            >
                                                Learn More
                                            </a>
                                        </p>
                                    </div>

                                    {/* Colors */}
                                    <div className=" flex gap-2">
                                        <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-[10px]">
                                            <img src={imgwyze1} alt="" />
                                            White
                                        </button>


                                        <button className="flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-[10px]">
                                            <img src={imgwyze3} alt="" />

                                            Black
                                        </button>
                                    </div>

                                    {/* Bottom */}
                                    <div className="mt-auto flex items-center justify-between pt-3">

                                        {/* Quantity */}
                                        <div className="flex items-center rounded border border-gray-200">
                                            <button className="flex h-6 w-6 items-center justify-center text-gray-400">
                                                −
                                            </button>

                                            <span className="flex h-6 min-w-7 items-center justify-center border-x border-gray-200 text-[11px]">
                                                0
                                            </span>

                                            <button className="flex h-6 w-6 items-center justify-center text-gray-500">
                                                +
                                            </button>
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <span className="mr-1 text-l text-red-500 line-through">
                                                $89.98
                                            </span>

                                            <span className="text-l font-medium text-gray-600">
                                                $64.98
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex p-6 trac justify-center">
                            <button className="flex items-center justify-center rounded-lg border border-[#7659e8] bg-transparent px-6 py-2 text-2xl font-medium text-2xl text-[#5539df]">
                                Next: Choose your sensors
                            </button>
                        </div>
                    </div>

                    {/* <div className="col-span-">
                    </div> */}
                </div>


                {/* Section2 */}
                <div>
                    <div className=' mx-8 ' >
                        <div className="">
                            <h5>Step 2 of 4</h5>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>
                            <div>
                                <div className='flex pb-5 justify-between'>
                                    <div className='flex items-center gap-2  font-medium'>
                                        <FontAwesomeIcon
                                            icon={faShield}
                                            className="text-[#6F7882] text-2xl"
                                        />
                                        <p className='text-2xl'>Choose your plan</p>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <FontAwesomeIcon
                                            icon={faCaretDown}
                                            className="text-[#7659e8]"
                                        />
                                    </div>

                                </div>

                            </div>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>

                        </div>

                    </div>
                </div>

                {/* Section3*/}
                <div>
                    <div className=' mx-8 ' >
                        <div className="">
                            <h5>Step 3 of 4</h5>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>
                            <div>
                                <div className='flex pb-5 justify-between'>
                                    <div className='flex items-center gap-2  font-medium'>
                                        <FontAwesomeIcon
                                            icon={faWifi}
                                            className="text-[#6F7882] text-2xl"
                                        />
                                        <p className='text-2xl'>Choose your sensors</p>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <FontAwesomeIcon
                                            icon={faCaretDown}
                                            className="text-[#7659e8]"
                                        />
                                    </div>

                                </div>

                            </div>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>

                        </div>

                    </div>
                </div>

                {/* Section4*/}
                <div>
                    < div className=' mx-8 ' >
                        <div className="">
                            <h5>Step 4 of 4</h5>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>
                            <div>
                                <div className='flex pb-5 justify-between'>
                                    <div className='flex items-center gap-2  font-medium'>
                                        <FontAwesomeIcon
                                            icon={faLayerGroup}
                                            className="text-[#6F7882] text-2xl"
                                        />
                                        <p className='text-2xl'>Add extra protection</p>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <FontAwesomeIcon
                                            icon={faCaretDown}
                                            className="text-[#7659e8]"
                                        />
                                    </div>

                                </div>

                            </div>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>

                        </div>

                    </div>
                </div >

                {/* Section5 */}


            </div >
        </>
    )
}
<div className="my-1 mx-8 rounded bg-[#EDF4FF]">
    <div className="m-10 grid grid-cols-2 gap-4">

        <div>
            <div className="pt-6">
                <h2 className="text-2xl font-normal">
                    Your security system
                </h2>

                <p className="font-normal text-lg">
                    Review your personalized protection system designed to keep what
                    <br />
                    matters most safe.
                </p>

                <div className="w-full h-px my-4 bg-gray-300"></div>
            </div>
            {/* Section1 */}
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
        {/* SideSection */}



        <div className="m-10 ">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <img
                    src={img11}
                    alt="30-day returns"
                    className="w-40 h-40 object-contain"
                />

                <div className="p-4">
                    <h4 className="text-lg font-semibold">
                        30-day hassle-free returns
                    </h4>

                    <p className="pt-4 max-w-md">
                        If you're not totally in love with the product, we will refund you 100%.
                    </p>
                </div>
            </div>
            <div className='flex pt-5 justify-between'>

                <div>
                    <p className='text-white border rounded px-2 bg-[#4E2FD2]'>as low as $19.19/mo</p>

                </div>
                <div className=''>
                    <span className="mr-1 text-l text-gray-500 line-through">
                        $283.81
                    </span>

                    <span className="text-xl font-bold text-[#4E2FD2]">
                        $187.98
                    </span>
                </div>
            </div>
            <div>
                <p className='text-center pt-2 text-[#0AA288]'>Congrats! You’re saving $50.92 on your security bundle!</p>
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