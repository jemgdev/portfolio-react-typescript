import { 
  Box, 
  Badge, 
  Image, 
  Button, 
  ButtonGroup, 
  Text, 
  SimpleGrid, 
  Center, 
  useColorModeValue 
} from '@chakra-ui/react'
import Project from '../types/Project'

export default function CardProject ({ code, description, img, languages, link, title }: Project) {
  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' shadow='md' display='flex' flexDirection='column' justifyContent='space-between'>
      <Image src={img} alt={description} shadow='sm' />
      <Box p='4'>
        <Box mb='4' fontWeight='bold' textAlign='center'>
          <Text fontWeight='bold' fontSize='2xl'>
            {title}
          </Text>
        </Box>
        <Box mb='6'>
          {
            languages.map(language => (
              <Badge key={language.name} borderRadius='full' px='2' mr='2' colorScheme={language.color}>
                {language.name}
              </Badge>
            ))
          }
        </Box>
        <Text fontWeight='normal' mb='4'>
          {description}
        </Text>
      </Box>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} py='4'>
        <Center>
          <ButtonGroup variant='ghost'>
            <SimpleGrid columns={[1, null, 2]}>
              <Button as={'a'} colorScheme='blue' href={link} target='GoClass'>Vista previa</Button>
              <Button as={'a'} colorScheme='blue' href={code} target='GoClass'>Ver código</Button>
            </SimpleGrid>
          </ButtonGroup>
        </Center>
      </Box>
    </Box>
  )
}