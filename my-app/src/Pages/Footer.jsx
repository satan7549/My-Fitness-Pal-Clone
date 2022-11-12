import { Box, Center, Flex, HStack, Link, Text } from "@chakra-ui/react";

function Footer() {
  const TextStyle = {
    color: "Black"
  };

  return (
    <Box width="full" mt={10} bg="gray.100" maxH="200px" p={10} >
      <Center>
        <Flex minHeight="30px" alignItems="center" gap="2" py={2} px={12}>
          <HStack gap={7} alignItems="center" justifyContent="space-around">
            {/* <Flex direction="row" gap={7} alignItems="center" justifyContent="space-around"> */}
            <Link to="/login">
              <Text style={{ TextStyle }}>ABOUT</Text>
            </Link>
            <Link to="/signup">
              <Text style={{ TextStyle }}>FOOD</Text>
            </Link>
            <Link to="/signup">
              <Text style={{ TextStyle }}>EXERCISE</Text>
            </Link>
            <Link to="/signup">
              <Text style={{ TextStyle }}>APPS</Text>
            </Link>
            <Link to="/signup">
              <Text style={{ TextStyle }}>COMMUNITY</Text>
            </Link>
            <Link to="/signup">
              <Text style={{ TextStyle }}>BLOGS</Text>
            </Link>
            <Link to="/signup">
              <Text style={{ TextStyle }}>PREMIUM</Text>
            </Link>
            {/* </Flex> */}
          </HStack>
        </Flex>
      </Center>
      <Center>
        <Flex maxW="40rem" minHeight="30px" alignItems="center" gap="2">
          <HStack gap={3} alignItems="center" justifyContent="space-around">
            {/* <Flex direction="row" gap={7} alignItems="center" justifyContent="space-around"> */}
            <Link to="">
              <Text
                as="p"
                fontWeight="smaller"
                fontSize="x-small"
                style={{ color: "blue" }}
              >
                Calorie Count
              </Text>
            </Link>
            <Link to="">
              <Text
                as="p"
                fontWeight="smaller"
                fontSize="x-small"
                style={{ color: "blue" }}
              >
                Blog
              </Text>
            </Link>
            <Link to="">
              <Text
                as="p"
                fontWeight="smaller"
                fontSize="small"
                style={{ color: "blue" }}
              >
                Terms
              </Text>
            </Link>
            <Link to="">
              <Text
                as="p"
                fontWeight="smaller"
                fontSize="small"
                style={{ color: "blue" }}
              >
                Privacy
              </Text>
            </Link>
            <Link to="">
              <Text
                as="p"
                fontWeight="smaller"
                fontSize="small"
                style={{ color: "blue" }}
              >
                Contact Us
              </Text>
            </Link>
            <Link to="">
              <Text
                as="p"
                fontWeight="smaller"
                fontSize="small"
                style={{ color: "blue" }}
              >
                API
              </Text>
            </Link>
            <Link to="">
              <Text
                as="p"
                fontWeight="smaller"
                fontSize="small"
                style={{ color: "blue" }}
              >
                Jobs
              </Text>
            </Link>
            <Link to="">
              <Text
                as="p"
                fontWeight="smaller"
                fontSize="small"
                style={{ color: "blue" }}
              >
                Feedback
              </Text>
            </Link>
            <Link to="">
              <Text
                as="p"
                fontWeight="smaller"
                fontSize="small"
                style={{ color: "blue" }}
              >
                Community Guidlines
              </Text>
            </Link>
            {/* </Flex> */}
          </HStack>
        </Flex>
      </Center>
    </Box>
  );
}

export default Footer;
