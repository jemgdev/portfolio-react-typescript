import { 
  Box, 
  SkeletonText, 
  Skeleton, 
  useColorModeValue 
} from '@chakra-ui/react'

export default function CardProjectSkeleton () {
  return (
    <>
      <Box padding='6' bg={useColorModeValue('white.100', 'white.900')}>
        <Skeleton height='200' />
        <SkeletonText mt='10' noOfLines={6} spacing='6' />
        <Skeleton mt='10' height='50' />
      </Box>
      <Box padding='6' bg={useColorModeValue('white.100', 'white.900')}>
        <Skeleton height='200' />
        <SkeletonText mt='10' noOfLines={6} spacing='6' />
        <Skeleton mt='10' height='50' />
      </Box>
      <Box padding='6' bg={useColorModeValue('white.100', 'white.900')}>
        <Skeleton height='200' />
        <SkeletonText mt='10' noOfLines={6} spacing='6' />
        <Skeleton mt='10' height='50' />
      </Box>
      <Box padding='6' bg={useColorModeValue('white.100', 'white.900')}>
        <Skeleton height='200' />
        <SkeletonText mt='10' noOfLines={6} spacing='6' />
        <Skeleton mt='10' height='50' />
      </Box>
      <Box padding='6' bg={useColorModeValue('white.100', 'white.900')}>
        <Skeleton height='200' />
        <SkeletonText mt='10' noOfLines={6} spacing='6' />
        <Skeleton mt='10' height='50' />
      </Box>
      <Box padding='6' bg={useColorModeValue('white.100', 'white.900')}>
        <Skeleton height='200' />
        <SkeletonText mt='10' noOfLines={6} spacing='6' />
        <Skeleton mt='10' height='50' />
      </Box>
    </>
  )
}