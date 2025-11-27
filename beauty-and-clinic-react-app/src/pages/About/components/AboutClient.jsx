import React from 'react'
import TitleAndDesc from '../../../components/TitleAndDesc'
import client_logo_1 from '../../../assets/img/about/client-logo-1.png'
import client_logo_2 from '../../../assets/img/about/client-logo-2.png'
import client_logo_3 from '../../../assets/img/about/client-logo-3.png'
import client_logo_4 from '../../../assets/img/about/client-logo-4.png'
import client_logo_5 from '../../../assets/img/about/client-logo-5.png'

function AboutClient() {
  return (
    <section id='about-client' className='flex flex-col items-center pt-26 mb-12 max-sm:mb-8'>
      <TitleAndDesc className={'flex flex-col items-center text-center pt-[0.5rem] mb-12 max-sm:mb-8 pr-6'} p1={'Our Clients'} h1={'Well-known agencies'} p2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
      <div id='clients-logo' className='grid grid-cols-2 md:flex md:flex-row max-w-[60.125rem] items-center justify-items-center w-full pt-9 pb-[4.6rem]'>
        <img src={client_logo_1} alt="client-logo-1" className='w-40 md:w-full'/>
        <img src={client_logo_2} alt="client-logo-2" className='w-40 md:w-full'/>
        <img src={client_logo_3} alt="client-logo-3" className='w-40 md:w-full'/>
        <img src={client_logo_4} alt="client-logo-4" className='w-40 md:w-full'/>
        <img src={client_logo_5} alt="client-logo-5" className='w-40 md:w-full'/>
      </div>
    </section>
  )
}

export default AboutClient
