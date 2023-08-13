'use client'

import { SocialMedia } from 'components/links/socialMedia/socialMedia'
import Link from 'next/link'
import styles from './sectionSocials.module.css'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export function SectionSocials() {
  return (
    <section>
      <div className="container" id="socials">
        <NavigationMenu.Root className={styles.navigationRoot}>
          <div>
            <span>Follow us:</span>
            <SocialMedia
              navigationListSocialMedia={styles.navigationListSocialMedia}
              icon={styles.iconSocialMedia}
            />

            <NavigationMenu.Link href="https://press.behemutt.com">
              PressKit
            </NavigationMenu.Link>
          </div>
        </NavigationMenu.Root>
      </div>
    </section>
  )
}
