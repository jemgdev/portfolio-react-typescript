import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  useDisclosure
} from '@chakra-ui/react'
import NavLink from './NavLink'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blue.500',
        color: useColorModeValue('white', 'gray.700'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  const { onClose } = useDisclosure()

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Text fontSize='2xl' fontWeight='semibold'>jemgdev</Text>
        <Stack direction={'row'} spacing={6}>
          <NavLink href='#home' text='Inicio' scrollToElement='home' onClose={onClose} />
          <NavLink href='#projects' text='Proyectos' scrollToElement='projects' onClose={onClose}/>
          <NavLink href='#github-projects' text='Proyectos de github' scrollToElement='github-projects' onClose={onClose}/>
          <NavLink href='#skills' text='Skills' scrollToElement='skills' onClose={onClose}/>
          <NavLink href='#contact-me' text='Contáctame' scrollToElement='contact-me' onClose={onClose}/>
        </Stack>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>2022 jemgdev. Hecho con ❤️.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'GitHub'} href={'https://github.com/jemgdev'}>
              <BsGithub />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/jemgdev/'}>
              <BsLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}