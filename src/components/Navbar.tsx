import NavLink from './NavLink'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Container,
  Collapse,
  Button,
  Text
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Simple() {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} className='mix'>
        <Container maxW='container.xl'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={onToggle}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Text as={'a'} fontSize='2xl' fontWeight='semibold' href='https://portfolio-jemgdev.vercel.app'>jemgdev</Text>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                <NavLink href='#home' text='Inicio' scrollToElement='home' onClose={onClose} />
                <NavLink href='#projects' text='Proyectos' scrollToElement='projects' onClose={onClose}/>
                <NavLink href='#github-projects' text='Proyectos de github' scrollToElement='github-projects' onClose={onClose}/>
                <NavLink href='#skills' text='Skills' scrollToElement='skills' onClose={onClose}/>
                <NavLink href='#contact-me' text='Contáctame' scrollToElement='contact-me' onClose={onClose}/>
              </HStack>
            </HStack>
            <Flex alignItems='end'>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>
        </Container>
        <Collapse in={isOpen}>
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink href='#home' text='Inicio' scrollToElement='home' onClose={onClose}/>
              <NavLink href='#projects' text='Proyectos' scrollToElement='projects' onClose={onClose}/>
              <NavLink href='#github-projects' text='Proyectos de github' scrollToElement='github-projects' onClose={onClose}/>
              <NavLink href='#skills' text='Skills' scrollToElement='skills' onClose={onClose}/>
              <NavLink href='#contact-me' text='Contáctame' scrollToElement='contact-me' onClose={onClose}/>
            </Stack>
          </Box>
        </Collapse>
      </Box>
    </>
  )
}