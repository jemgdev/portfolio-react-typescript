import { 
  Box, 
  Badge, 
  Button, 
  Text, 
  Center, 
  useColorModeValue, 
  ButtonGroup
} from '@chakra-ui/react'
import GitHubProject from '../types/GitHubProject'

export default function CardGitHubProject ({ description, html_url, language, name }: GitHubProject) {

  const colorByLanguage = (languageName: string): string | undefined => {
    if (languageName === 'JavaScript') return 'yellow'
    else if (languageName === 'CSS') return 'messenger'
    else if (languageName === 'Java') return 'orange'
    else if (languageName === 'HTML') return 'red'
    else if (languageName === 'Handlebars') return 'yellow'
    else if (languageName === 'TypeScript') return 'blue'
    else return 'white'
  }

  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' shadow='md' display='flex' flexDirection='column' justifyContent='space-between'>
      <Box p='4'>
        <Box mb='4' fontWeight='bold' textAlign='center'>
          <Text fontWeight='bold' fontSize='2xl'>
            {name}
          </Text>
        </Box>
        <Box mb='6'>
          <Badge borderRadius='full' px='2' mr='2' colorScheme={colorByLanguage(language)}>
            {language}
          </Badge>
        </Box>
        <Text fontWeight='normal' mb='4'>
          {description}
        </Text>
      </Box>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} py='4'>
        <Center>
          <ButtonGroup variant='ghost'>
            <Button as={'a'} colorScheme='blue' href={html_url} target={name}>Ver código</Button>
          </ButtonGroup>
        </Center>
      </Box>
    </Box>
  )
}