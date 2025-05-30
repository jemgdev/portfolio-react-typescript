import { useState, ChangeEvent } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  InputLeftAddon,
  VStack
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'
import Contact from '../types/Contact'
import sendEmail from '../services/sendEmail'
import { useToast } from '@chakra-ui/react'

export default function ContactMe() {
  const initValues = { email: '', name: '', message: '' }
  const { hasCopied, onCopy } = useClipboard('jemgdev@gmail.com')
  const [ email, setEmail ] = useState<Contact>(initValues)
  const toast = useToast()

  const handleChage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail({
      ...email,
      [event.target.name]: event.target.value
    })
  }

  const handleSendEmail = () => {
    sendEmail(email)
      .then(emailResponse => {
        const { message, ok, status } = emailResponse
        if (ok) setEmail(initValues)
        toast({
          title: 'Envio de email',
          description: message,
          status,
          duration: 3000,
          variant: 'top-accent',
          position: 'top-right',
          isClosable: true,
        })
      })
  }

  return (
    <Element name="contact-me">
      <Flex align="center" justify="center" id="contact" py={{ base: 10, md: 16 }}>
        <Box
          borderRadius="lg"
          maxW="800px"
          w="full"
          p={{ base: 4, md: 8 }}
          bg={useColorModeValue('gray.50', 'gray.800')}
          boxShadow="md"
        >
          <VStack spacing={8}>
            <Heading textAlign="center" fontWeight="semibold" fontSize={{ base: '2xl', md: '3xl' }}>
              Contáctame
            </Heading>
            <Stack direction="row" spacing={6} justify="center">
              
              <Link href="https://www.linkedin.com/in/jemgdev/" isExternal>
                <IconButton
                  aria-label="linkedin"
                  icon={<BsLinkedin size="24px" />}
                  variant="ghost"
                  size="lg"
                  isRound
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                />
              </Link>
              <Link href="https://github.com/jemgdev" isExternal>
                <IconButton
                  aria-label="github"
                  icon={<BsGithub />}
                  variant="ghost"
                  size="lg"
                  fontSize="2xl"
                  isRound
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                />
              </Link>
              <Tooltip label={hasCopied ? '¡Email copiado!' : 'Copiar email'} hasArrow>
                <IconButton
                  aria-label="email"
                  icon={<MdEmail />}
                  variant="ghost"
                  size="lg"
                  fontSize="2xl"
                  onClick={onCopy}
                  isRound
                  _hover={{
                    bg: 'blue.500',
                    color: useColorModeValue('white', 'gray.700'),
                  }}
                />
              </Tooltip>
            </Stack>

            {/* Formulario */}
            <Box
              w="full"
              bg={useColorModeValue('white', 'gray.700')}
              borderRadius="lg"
              p={6}
              boxShadow="base"
            >
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children={<BsPerson />} />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Ingrese su nombre"
                      value={email.name}
                      onChange={handleChage}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children={<MdOutlineEmail />} />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Ingrese su email"
                      value={email.email}
                      onChange={handleChage}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Ingrese su mensaje"
                    rows={6}
                    resize="none"
                    value={email.message}
                    onChange={handleChage}
                  />
                </FormControl>

                <Button
                  colorScheme="blue"
                  bg="blue.400"
                  color="white"
                  w="full"
                  _hover={{ bg: 'blue.500' }}
                  onClick={handleSendEmail}
                >
                  Enviar correo
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Element>

  )
}