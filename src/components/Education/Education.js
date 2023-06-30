import React from 'react'

const Education = () => {
  return (
    <div>
      <div className="antialiased bg-gray-100 text-gray-800">
        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div
                className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
            ></div>
            <div className="relative z-10">
                <img
                   src={require("../../utils/utd_logo.png")}
                    alt=""
                    className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0;"
                />
                <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-0 md:mr-auto md:pl-0 md:pr-16;">
                    <div
                        className="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-gray-300 xs:top-11 xs:left-26 md:left-14; md:left-auto md:right-14"
                        aria-hidden="true"
                    ></div>
                    <div className="bg-gray-300 p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >Aug 2021-May 2023</span
                        >
                        <h1 className="text-2xl font-bold pt-1">The University of Texas at Dallas</h1>
                        <h1 className="text-2xl font-bold pt-1">USA</h1>
                        
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <img
                    src={require("../../utils/vesit_logo.jpeg")}
                    alt="VESIT"
                    className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0;"
                />
                <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16;">
                    <div className="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-gray-300 xs:top-11 xs:left-26 md:left-14;" aria-hidden="true"></div>
                    <div className="bg-gray-300 p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >Aug 2016-Oct 2020</span
                        >
                        <h1 className="text-2xl font-bold pt-1">
                            VES Institute of technology-University of Mumbai
                        </h1>
                        <h1 className="text-2xl font-bold pt-1">India</h1>
                        
                    </div>
                </div>
            </div>
            <div className="relative z-10">
              <img
                    src={require("../../utils/stnms_logo.jpeg")}
                    alt="STNMS"
                    className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0;"
                />
                <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-0 md:mr-auto md:pl-0 md:pr-16;">
                    <div
                        className="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-gray-300 xs:top-11 xs:left-26 md:left-14; md:left-auto md:right-14"
                        aria-hidden="true"
                    ></div>
                    <div className="bg-gray-300 p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            >March 2012</span
                        >
                        <h1 className="text-2xl font-bold pt-1">Sant Tukaram National Model School (CBSE)</h1>
                        <h1 className="text-2xl font-bold pt-1">India</h1>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Education