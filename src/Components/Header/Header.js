import React from "react";
import {Center, Container,Heading,Box,Text ,VStack,Grid,GridItem,Image,Circle,HStack,Square,Link, Spacer,Flex,Button} from "@chakra-ui/react";
import {PhoneIcon} from "@chakra-ui/icons"
import Img1 from "../Header/illustrationhero.svg"
import Img2 from "../Header/icon-music.svg";

const Header=()=>{
    return(
    <Container  width={480} height={600}  >
    <Center >
    <VStack mt={10}  bg="white" borderRadius="lg">
        <Box  >
   <Image width={500} borderRadius="lg" src={Img1} ></Image>
   </Box>
<Box mt={10} >
 
      <Heading as ="h3">
      <Center> Order Summary</Center>
      </Heading>
     

  </Box>
  <Box mt={5} >

      < Text color='gray.500' fontSize='lg' >
     <Center> You can now listen to millions of songs ,</Center> 
     <Center>audiobooks and podcasts on any device anywhere</Center><Center>you like!</Center> 
      </Text>
  
      </Box>
   
      <Grid templateColumns='repeat(3, 1fr)' gap={6}  isTruncated bg='#CBD5E0' p={5} borderRadius='lg' >
          <GridItem colStart={1} colEnd={3} >
      <HStack>
      
  <Circle spacing={5} size='40px' bg='#E2E8F0' ml={3} color='white'>
    <Image src ={Img2}/>
  </Circle>
 <VStack>
     <Text fontSize="lg" spacing={5} mt={3}>
         Annual Plan<br/>
         5.99$/year
     </Text>
    
 </VStack>

 

</HStack>
  </GridItem>
<GridItem colStart={4} colEnd={6} mt={4}>
<Link  color='blue.600' href='#' >
    Change
  </Link>
</GridItem>
          </Grid>
    <VStack mt={5}>
      <Button
  size='lg'
  width='350px'
  shadow='xl'
  backgroundColor='blue.500'
  color='white'
>
 Proceed To Payment
</Button>
<Link p={5} color="darkblue" fontSize="lg" textDecoration="underline">Cancel</Link>
</VStack>
</VStack>
     </Center>
    </Container>
    )
}
export default Header;