'use client'
import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import img1 from '../images/Presidents.png';
import img2 from '../images/Leads.png';

export default function Team() {
  return (
    <section>
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="h2 mb-4">Meet Our Team</h1>
      </div>
      <div className="max-w-3xl mx-auto text-center pb-4"> 
        <h2 className="h2 mb-2">Presidents</h2> 
      </div>
      <div className="flex justify-center items-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
        <Image src={img1} alt="Presidents" />
      </div>
      <br></br>
      <div className="max-w-3xl mx-auto text-center pb-4 pt-8"> 
        <h2 className="h2 mb-2">Leads</h2> 
      </div>
      <div className="flex justify-center items-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
        <Image src={img2} alt="Leads" />
      </div>
    </section>
  );
}
