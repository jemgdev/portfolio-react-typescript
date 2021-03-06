import { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import { 
  SimpleGrid,
  Text,
  Flex,
  Image
} from '@chakra-ui/react'
import scrollReveal from 'scrollreveal'
import skills from '../services/skills'

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
        <SimpleGrid columns={[2, 3, 4]} columnGap={{ base: '10vh', md: '15vh', lg: '25vh' }} rowGap={{ base: '5vh', md: '5vh', lg: '5vh' }} ref={skillsRef}>
          {
            skills.map(skill => <Image key={skill.alt} src={skill.src} alt={skill.alt} />)
          }
        </SimpleGrid>
      </Flex>
    </Element>
  )
}