import { SectionCommunity } from 'components/sections/sectionCommunity/sectionCommunity'
import { SectionGameInfo } from 'components/sections/sectionGameInfo/sectionGameInfo'
import { SectionHome } from 'components/sections/sectionHome/sectionHome'
import { SectionNews } from 'components/sections/sectionNews/sectionNews'
import { SectionSocials } from 'components/sections/sectionSocials/sectionSocials'

export default function Home() {
  return (
    <main>
      <SectionHome />
      <SectionGameInfo />
      <SectionNews />
      <SectionSocials />
      <SectionCommunity />
    </main>
  )
}
