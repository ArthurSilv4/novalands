'use client'

import { Logo } from 'components/logo/logo'
import styles from './footer.module.css'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { PageLinks } from 'components/links/pageLinks/pageLinks'
import { SocialMedia } from 'components/links/socialMedia/socialMedia'
import { BackTop } from 'components/buttons/backTop/backTop'
import { Credits } from 'components/links/credits/credits'
import { Subscribe } from 'components/forms/subscribe/subscribe'

export function Footer() {
  return (
    <footer>
      <div className="container">
        <NavigationMenu.Root className={styles.navigationRoot}>
          <div className={styles.links}>
            <Logo />
            <PageLinks navigationList={styles.navigationList} />
            <SocialMedia
              navigationListSocialMedia={styles.navigationListSocialMedia}
              icon={styles.iconSocialMedia}
            />
          </div>
          <div className={styles.inputAndButton}>
            <Subscribe />
            <BackTop />
          </div>

          <div className={styles.line} />
          <Credits />
        </NavigationMenu.Root>
      </div>
    </footer>
  )
}
