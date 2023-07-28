import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <Image width={150} height={100} src={'/logo.png'} alt="Logo Nova lands" />
    </Link>
  )
}
