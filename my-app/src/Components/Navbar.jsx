import { Box, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      minWidth="full"
      minHeight="60px"
      alignItems="center"
      gap="2"
      py={2}
      px={12}
      bg="gray.300"
    >
      <Link to="/">
        <Box>
          <Heading as="h3" size="lg" color="blue">
            myFitnesspal
          </Heading>
        </Box>
      </Link>
      <Spacer />
      <HStack>
        <Link to="/login">
          <Text fontSize="lg" fontWeight="bolder">
            LOG IN
          </Text>
        </Link>
        <Link to="/signup" >
          <Text fontSize="lg" fontWeight="bolder" >SIGN UP</Text>
        </Link>
      </HStack>
    </Flex>
  );
}

export default Navbar;
