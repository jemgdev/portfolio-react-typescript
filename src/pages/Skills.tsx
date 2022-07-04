import { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import { 
  SimpleGrid,
  Text,
  Flex,
  Image
} from '@chakra-ui/react'
import scrollReveal from 'scrollreveal'

export default function Skills () {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (skillsRef.current) {
      scrollReveal().reveal(skillsRef.current, {
        delay: 120,
        distance: '2em',
        origin: 'bottom',
        opacity: 0,
        reset: true
      })
    }
  }, [])
  return (
    <Element name='skills'>
      <Text align='center' fontSize={{ base: '3xl', md: '4xl' }} fontWeight='semibold' mt='10vh' mb='4vh'>Mis Skills</Text>
      <Flex justifyContent='center'>
        <SimpleGrid columns={[2, 3, 4]} gap={{ base: 90, md: 120, lg: 160 }} ref={skillsRef}>
          <Image src='https://img.icons8.com/ultraviolet/80/000000/react--v2.png' alt='react' />
          <Image src='https://img.icons8.com/color/96/000000/javascript--v1.png' alt='javasrcipt' />
          <Image src='https://img.icons8.com/color/96/000000/mongodb.png' alt='mongodb' />
          <Image src='https://img.icons8.com/color/96/000000/nodejs.png' alt='nodejs' />
          <Image src='https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png' alt='java' />
          <Image src='https://img.icons8.com/color/96/000000/tomcat.png' alt='tomcat' />
          <Image src='https://img.icons8.com/color/96/000000/html-5--v1.png' alt='html' />
          <Image src='https://img.icons8.com/color/96/000000/css3.png' alt='css' />
          <Image src='https://img.icons8.com/color/96/000000/linux--v1.png' alt='linux' />
          <Image src='https://img.icons8.com/color/96/000000/mysql-logo.png' alt='mysql' />
          <Image src='https://img.icons8.com/offices/80/000000/php-logo.png' alt='php' />
          <Image src='https://img.icons8.com/color/96/000000/git.png' alt='git' />     
          <Image src='https://img.icons8.com/color/96/000000/android-studio--v2.png' alt='android-studio' />
          <Image src='https://img.icons8.com/fluency/96/000000/azure-1.png' alt='azure' />
          <Image src='https://img.icons8.com/color/96/000000/heroku.png' alt='heroku' />
          <Image src='https://img.icons8.com/color/96/000000/typescript.png' alt='typescript' />
        </SimpleGrid>
      </Flex>
    </Element>
  )
}