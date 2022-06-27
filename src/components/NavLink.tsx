import { Link, useColorModeValue } from '@chakra-ui/react'
import { scroller } from 'react-scroll'

type Props = {
  href: string,
  text: string,
  scrollToElement?: string,
  onClose: () => void
}

export default function NavLink ({ href, text, scrollToElement, onClose }: Props) {
  const scrolling = () => {
    scroller.scrollTo(scrollToElement || 'home', {
      duration: 450,
      delay: 0,
      smooth: true,
    })
    onClose()
  }

  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={href}
      onClick={scrolling} >
      {text}
    </Link>
  )
}