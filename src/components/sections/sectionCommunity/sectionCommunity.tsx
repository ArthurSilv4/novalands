import Image from 'next/image'
import Link from 'next/link'
import styles from './sectionCommunity.module.css'

export function SectionCommunity() {
  return (
    <section className={styles.section} id="community">
      <div className="container">
        <Link href="https://discord.gg/hDxyZ7A">
          <Image height={150} width={700} src={'/Discord.png'} alt="Discord" />
        </Link>
      </div>
    </section>
  )
}
