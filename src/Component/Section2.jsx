import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSortUp, faCaretDown, faLayerGroup, faShield, faWifi } from '@fortawesome/free-solid-svg-icons'

export default function Section2() {
    return (
        <>
            <div>
                <h2 className='p-5 text-center text-4xl md:hidden font-bold'>Let’s get started!</h2>
                <div>
                    <div className=' md:mx-8 md:hidden ' >
                        <div className="">
                            <h5 className='sm:px-5'>Step 1 of 4</h5>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>
                            <div>
                                <div className='flex pb-5 sm:px-5 justify-between'>
                                    <div className='flex items-center gap-2  font-medium'>
                                        <FontAwesomeIcon
                                            icon={faYoutube}
                                            className="text-2xl"
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
                {/* Section2 */}
                <div>
                    <div className=' md:mx-8 ' >
                        <div className="">
                            <h5 className='sm:px-5 md:px-0'>Step 2 of 4</h5>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>
                            <div>
                                <div className='flex sm:px-5 md:px-0 pb-5 justify-between'>
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
                    <div className=' md:mx-8 ' >
                        <div className="">
                            <h5 className='sm:px-5 md:px-0'>Step 3 of 4</h5>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>
                            <div>
                                <div className='flex sm:px-5 md:px-0 pb-5 justify-between'>
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
                    < div className=' md:mx-8 ' >
                        <div className="">
                            <h5 className='sm:px-5 md:px-0'>Step 4 of 4</h5>
                            <div className="w-full h-px mb-2 bg-gray-600 "></div>
                            <div>
                                <div className='flex sm:px-5 md:px-0 pb-5 justify-between'>
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
            </div>
        </>
    )
}
