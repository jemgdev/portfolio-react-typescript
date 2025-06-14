import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Collapse,
  Text
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NavLink from './NavLink'

export default function Simple() {
  const { isOpen, onClose, onToggle } = useDisclosure()

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.800')}
      px={{ base: 6, md: 12, lg: 24 }}  // Más padding lateral para escritorio
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Container maxW="container.lg">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={onToggle}
          />
          <HStack spacing={8} alignItems="center">
            <Text
              as="a"
              fontSize="2xl"
              fontWeight="semibold"
              href="https://portfolio.jemgdev.click"
              _hover={{ textDecoration: 'none', color: 'blue.500' }}
            >
              jemgdev
            </Text>
            <HStack
              as="nav"
              spacing={6}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLink href="#home" text="Inicio" scrollToElement="home" onClose={onClose} />
              <NavLink href="#projects" text="Proyectos" scrollToElement="projects" onClose={onClose} />
              <NavLink href="#skills" text="Skills" scrollToElement="skills" onClose={onClose} />
              <NavLink href="#contact-me" text="Contáctame" scrollToElement="contact-me" onClose={onClose} />
            </HStack>
          </HStack>
          {/* <Flex alignItems="end">
            <Button onClick={toggleColorMode} variant="ghost" size="md" p={2}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex> */}
        </Flex>
      </Container>

      <Collapse in={isOpen}>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <NavLink href="#home" text="Inicio" scrollToElement="home" onClose={onClose} />
            <NavLink href="#projects" text="Proyectos" scrollToElement="projects" onClose={onClose} />
            <NavLink href="#github-projects" text="Proyectos de github" scrollToElement="github-projects" onClose={onClose} />
            <NavLink href="#skills" text="Skills" scrollToElement="skills" onClose={onClose} />
            <NavLink href="#contact-me" text="Contáctame" scrollToElement="contact-me" onClose={onClose} />
          </Stack>
        </Box>
      </Collapse>
    </Box>
  )
}