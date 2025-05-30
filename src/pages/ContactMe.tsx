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
    <Element name='contact-me'>
      <Flex align="center" justify="center" id="contact">
        <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 4, lg: 8 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
              <Heading textAlign='center' fontWeight='semibold' fontSize={{ base: '2xl', md: '3xl' }}>
                Contáctame
              </Heading>
              <Stack
                spacing={{ base: 4, md: 8, lg: 8 }}
                direction={'column'}>
                <Stack
                  align="center"
                  justify="space-around"
                  direction={'row'}>
                  <Tooltip
                    label={hasCopied ? '¡Email copiado!' : 'Copiar email'}
                    closeOnClick={false}
                    hasArrow>
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
                  <Link href="https://github.com/jemgdev" target='github'>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/in/jemgdev/" target='linkedin'>
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>
                <Box
                  bg={useColorModeValue('white', 'gray.700')}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                  shadow="base">
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Nombre</FormLabel>
                      <InputGroup>
                        <InputLeftAddon >
                          <BsPerson/>
                        </InputLeftAddon > 
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
                        <InputLeftAddon >
                          <MdOutlineEmail />
                        </InputLeftAddon >
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
                      _hover={{
                        bg: 'blue.500',
                      }}
                      onClick={handleSendEmail}>
                      Enviar mensaje
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Element>
  )
}