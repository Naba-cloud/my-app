import React from "react";
import {Menu,MenuButton,MenuList,MenuItem,Button,Stack, HStack, VStack, SimpleGrid,Box, Spacer,Flex,Heading,Center} from "@chakra-ui/react";
import ChevronDownIcon from "@chakra-ui/icon";

const Navbar=()=>{
    return(<>
    
   <Flex mt={4}>
  <Box p='2' ml={3}>
    <Heading size='md' >Veed.io</Heading>
  </Box>
  <Menu>
     
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} p='2' ml='4'>
   Tools
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
  </Menu>
  <Menu>
     
     <MenuButton as={Button} rightIcon={<ChevronDownIcon />} p='2' ml='4'>
      Tools
     </MenuButton>
     <MenuList>
      <Heading>Video Editor</Heading>
     </MenuList>
     </Menu>
     <Box >
     <Menu>
     
     <MenuButton as={Button} rightIcon={<ChevronDownIcon />} p='2' ml='4'>
      Blogs
     </MenuButton>
     <MenuList shadow='lg'>
       <MenuItem>Veed Blog</MenuItem>
       <MenuItem>Video Guidelines</MenuItem>
      </MenuList>
     </Menu>
     </Box>
  <Spacer />
  <Box>
    <Button colorScheme='teal' mr='4'>
      Sign Up
    </Button>
    <Button colorScheme='teal'>Log in</Button>
  </Box>
</Flex>

    </>)
}
export default Navbar;