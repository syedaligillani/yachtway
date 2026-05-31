import { VideoHero } from '../components/hero/VideoHero'
import { IntroSection } from '../components/sections/IntroSection'
import { Portfolio } from '../components/sections/Portfolio'
import { MemberStories } from '../components/sections/MemberStories'
import { RegisterInterest } from '../components/sections/RegisterInterest'
import { Editorial } from '../components/sections/Editorial'
import { Newsletter } from '../components/sections/Newsletter'

export function HomePage() {
  return (
    <>
      <VideoHero />
      <IntroSection />
      <Portfolio />
      <MemberStories />
      <RegisterInterest />
      <Editorial />
      <Newsletter />
    </>
  )
}
