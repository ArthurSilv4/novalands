'use client'

import { Dowload } from 'components/buttons/dowload/dowload'
import styles from './sectionGameInfo.module.css'
import Image from 'next/image'
import { i18n } from 'translate/i18n'

export function SectionGameInfo() {
  return (
    <section className={styles.section} id="gameInfo">
      <div className="container">
        <div>
          <h1>{i18n.t('titles.title1')}</h1>
          <p>{i18n.t('messages.discover')}</p>
          <iframe
            width="700"
            height="300"
            src="https://www.youtube.com/embed/_XwT7L-0KMo"
            title="Nova Islands - Reveal Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <Dowload />
        </div>

        <div>
          <h2>{i18n.t('titles.baseConstruction')}</h2>
          <p>{i18n.t('messages.task')}</p>
          <Image
            width={500}
            height={250}
            src={'/gifs/Building_cropped.gif'}
            alt="building"
          />
        </div>

        <div>
          <h2>{i18n.t('titles.combat')}</h2>
          <p>{i18n.t('messages.combat')}</p>
          <p>{i18n.t('messages.creatures')}</p>
          <p>{i18n.t('messages.bosses')}</p>

          <Image
            width={500}
            height={250}
            src={'/gifs/combat_cropped.gif'}
            alt="Combat"
          />
        </div>
        <Dowload />
      </div>
    </section>
  )
}
