import { Box, Badge, Image, Button, ButtonGroup, useColorModeValue, Text, Flex, SimpleGrid } from '@chakra-ui/react'
import Project from '../models/Project'

export default function CardProject ({ code, description, img, language, link, title }: Project) {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' shadow='md' >
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p='4'>
        <Box mb='4' fontWeight='bold' textAlign='center'>
          <Text fontWeight='bold' fontSize='2xl'>
            GoClass
          </Text>
        </Box>
        <Box>
          <Badge borderRadius='full' px='2' mr='2' colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' mr='2' colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' mr='2' colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' mr='2' colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' mr='2' colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' mr='2' colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' mr='2' colorScheme='teal'>
            New
          </Badge>
        </Box>
        <Box display='flex' my='4' alignItems='center'>
          <Text fontWeight='normal'>
            Bot para la plataforma discord enfocado en contestar preguntas programadas y consumo de APIs gratuitas.
          </Text>
        </Box>
      </Box>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} py='2vh' >
        <Flex justifyContent='center' alignItems='center' >
          <ButtonGroup variant='ghost'>
            <SimpleGrid columns={[1, null, 2]}>
              <Button as={'a'} colorScheme='blue' href='http://google.com' target='GoClass'>Ver proyecto</Button>
              <Button as={'a'} colorScheme='blue' href='http://google.com' target='GoClass'>Ver código</Button>
            </SimpleGrid>
          </ButtonGroup>
        </Flex>
      </Box>
    </Box>
  )
}