'use client'

import { SectionCommunity } from 'components/sections/sectionCommunity/sectionCommunity'
import { SectionGameInfo } from 'components/sections/sectionGameInfo/sectionGameInfo'
import { SectionHome } from 'components/sections/sectionHome/sectionHome'
import { SectionNews } from 'components/sections/sectionNews/sectionNews'
import { SectionSocials } from 'components/sections/sectionSocials/sectionSocials'
import { useEffect } from 'react'

export default function Home() {
  const Alert = () => {
    alert('Esse site não é o oficial, é apenas um site feito por fã')
  }

  useEffect(() => {
    Alert()
  }, [])

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
