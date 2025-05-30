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
    <Box
  borderWidth="1px"
  borderRadius="xl"
  overflow="hidden"
  boxShadow="md"
  display="flex"
  flexDirection="column"
  justifyContent="space-between"
  bg={useColorModeValue('white', 'gray.800')}
>
  <Image
    src={img}
    alt={description}
    objectFit="cover"
    w="100%"
    h={{ base: '200px', md: '250px' }}
    borderTopRadius="xl"
  />

  <Box p={6} flex="1">
    <Text fontWeight="bold" fontSize="2xl" textAlign="center" mb={4}>
      {title}
    </Text>

    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} mb={4}>
      {languages.map((language) => (
        <Badge
          key={language.name}
          borderRadius="full"
          px={2}
          colorScheme={language.color}
          fontSize="sm"
        >
          {language.name}
        </Badge>
      ))}
    </Box>

    <Text fontSize="md" textAlign="center" color={useColorModeValue('gray.700', 'gray.300')}>
      {description}
    </Text>
  </Box>

  {(link || code) && (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} py={4} px={6} borderBottomRadius="xl">
      <Center>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
          {link && (
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
              w="full"
            >
              Ver proyecto
            </Button>
          )}
          {code && (
            <Button
              as="a"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
              w="full"
            >
              Código
            </Button>
          )}
        </SimpleGrid>
      </Center>
    </Box>
  )}
</Box>

  )
}