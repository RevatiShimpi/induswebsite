'use client'
import Image from 'next/image'

import Rohit from '../public/next/images/Rohit.jpg'


export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h2 mb-4">President</h3>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-1 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col w-25 h-auto p-3 bg-gray-800" data-aos="fade-up">
              <div className="IMG mb-4 mx-auto">
                <Image src={Rohit} alt="rohit" className="w-23 h-auto"/>
              </div>
              <div className="text-gray-700 text-center font-medium mt-6 pt-5 border-t border-gray-700 mx-auto">
                <cite className="text-gray-200 not-italic text-3xl ">Rohitashva Kumawat (TY CS AI&ML)</cite><br></br> - <a className="text-purple-600  text-2xl hover:text-gray-200 transition duration-150 pd-2 ease-in-out" href="#0">President</a>
              </div>
              <p className="text-gray-400 mb-4 text-2xl mx-auto">
              Ambitious, Skilled and Responsible
              </p>
              <p className="text-gray-400 mb-4 text-1xl mx-auto">
              Previously worked with Codewits Solutions Pvt.Ltd. and presently working with Bosch company on a industry project.
              </p>
              
            </div>
            <div className="max-w-3xl mx-auto text-center pb-6  pt-8">
            <h3 className="h2 ">Vice President</h3>
          </div>
            {/* 2nd testimonial */}
            <div className="flex flex-col  h-full p-3 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
            <div className="IMG mb-4 mx-auto">
                <Image src={Rohit} alt="rohit" className="w-23 h-auto"/>
              </div>
              <div className="text-gray-700 text-center font-medium mt-6 pt-5 border-t border-gray-700 mx-auto">
                <cite className="text-gray-200 not-italic text-3xl ">Soham Raskar (TY ENTC)</cite> <br></br>- <a className="text-purple-600 text-2xl hover:text-gray-200 transition duration-150 ease-in-out" href="#0"> Vice President</a>
              </div>
              <p className="text-gray-400 text-2xl mb-4 mx-auto">
              Punctual, Persistent and Curious
              </p>
              <p className="text-gray-400 mb-4 mx-auto">
              Working with Bosch Company and CAPL Automation Simplified on industry Projects. </p>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
