
import { Flex, HStack, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function Navbar1() {

  return (
    <Flex
      minWidth="full"
      minHeight="30px"
      alignItems="center"
      gap="2"
      py={2}
      px={12}
      bg="blue"
    >
      <HStack gap={7} alignItems="center" justifyContent="space-around" >
        {/* <Flex direction="row" gap={7} alignItems="center" justifyContent="space-around"> */}
        <Link to="/login">
          <Text color="white" fontSize="lg" fontWeight="bolder">ABOUT</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >FOOD</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >EXERCISE</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >APPS</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >COMMUNITY</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >BLOGS</Text>
        </Link>
        <Link to="/signup" >
          <Text color="white" fontSize="lg" fontWeight="bolder" >PREMIUM</Text>
        </Link>
        {/* </Flex> */}
      </HStack>
    </Flex>
  );
}

export default Navbar1;