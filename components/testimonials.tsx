// 'use client'
// import Image from 'next/image'

// import Raj from '../public/next/images/Raj.jpg'
// import Renuka from '../public/next/images/Renuka.jpg'
// import Lead3 from '../public/next/images/Lead3.jpg'
// import Lead4 from '../public/next/images/Lead4.jpg'

// export default function Testimonials() {
//   return (
//     <section>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20 border-t border-gray-800">

//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h2 className="h2 mb-4">Leads</h2>
//           </div>

//           {/* Testimonials */}
//           <div className="max-w-sm text-2xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

//             {/* 1st testimonial */}
//             <div className="flex flex-col h-full p-3 bg-gray-800" data-aos="fade-up">
//               <Image src={Raj} alt="raj" className="w-13 h-auto"></Image>
//               <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                 <cite className="text-gray-200 not-italic">Rajnandini Dharashive</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Tech Lead</a>
//               </div>
//             </div>

//             {/* 2nd testimonial */}
//             <div className="flex flex-col h-full p-3 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
//               <Image src={Renuka} alt="Renuka" className="w-13 h-auto"></Image>
//               <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                 <cite className="text-gray-200 not-italic">Renuka Pawar</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" >Management Lead</a>
//               </div>
//             </div>
//             <div className="flex flex-col h-full p-3 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
//               <Image src={Lead3} alt="Lead3" className="w-13 h-auto"></Image>
//               <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                 <cite className="text-gray-200 not-italic">Shreya Mantri</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" >Creatives Lead</a>
//               </div>
//             </div>
//             <div className="flex flex-col h-full p-3 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
//               <Image src={Lead4} alt="Lead4" className="w-13 h-auto"></Image>
//               <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                 <cite className="text-gray-200 not-italic">Chaitrali Ghule</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" >Project Lead</a>
//               </div>
//             </div>
            
            

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


'use client'
import Image from 'next/image'

import Raj from '../public/next/images/Raj.jpg'
import Renuka from '../public/next/images/Renuka.jpg'
import Lead3 from '../public/next/images/Lead3.jpg'
import Lead4 from '../public/next/images/Lead4.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Leads</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm text-2xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-3 bg-gray-800" data-aos="fade-up">
              <Image src={Raj} alt="Raj" className="w-full h-auto" />
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center lg:text-center">
                <cite className="text-gray-200 not-italic block">Rajnandini Dharashive</cite>
                <span className="block"><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Tech Lead</a></span>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-3 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <Image src={Renuka} alt="Renuka" className="w-full h-auto" />
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center lg:text-center">
                <cite className="text-gray-200 not-italic block">Renuka Pawar</cite>
                <span className="block"><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Management Lead</a></span>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-3 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <Image src={Lead3} alt="Shreya" className="w-full h-auto" />
              <div className="text-gray-700 font-medium mt-6 pt-5  border-t border-gray-700 text-center text-center">
                <cite className="text-gray-200 text-center not-italic block">Shreya Mantri</cite>
                <span className="block"><a className="text-purple-600 text-center hover:text-gray-200 transition duration-150 ease-in-out">Creatives Lead</a></span>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="flex flex-col h-full p-3 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <Image src={Lead4} alt="Chaitrali" className="w-full h-auto" />
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center lg:text-center">
                <cite className="text-gray-200 not-italic block">Chaitrali Ghule</cite>
                <span className="block"><a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Project Lead</a></span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
