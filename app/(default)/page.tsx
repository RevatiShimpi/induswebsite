
export const metadata = {
  title: 'IndusConnect',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Team1 from '@/components/team'
import TeamPred from '@/components/teamPresident'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      
      <TeamPred />
      {/*<Zigzag /> */}
      <Testimonials /> 
      {/*<Newsletter /> */}
    </>
  )
}
