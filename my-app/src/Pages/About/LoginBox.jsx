import {Box,Button,Container,Center,FormControl,VStack,Heading,Input,Link} from "@chakra-ui/react"
function LoginBox(){
    return(
        <Box>
            <Container
        centerContent={true}
      >
        <VStack
          width="full"
          boxShadow="lg"
          py={{ base: 4, sm: 4, md: 4, lg: 6 }}
          my={{ base: 28, sm: 28, md: 30, lg: 35 }}
          px={{ base: 2, sm: 1, md: 4, lg: 6 }}
        >
          <FormControl p={2}>
            <Heading fontWeight="bolder" fontSize="20px" mt="-20px" mb="20px" >Member Login</Heading>
            <Input
              name="email"
            //   value={email}
            //   onChange={handleChange}
              type="email"
              placeholder="Email address"
            />
          </FormControl>
          <FormControl p={2}>
              <Input
                name="password"
                // value={password}
                // onChange={handleChange}
                pr="4.5rem"
                type="password"
                placeholder="Enter password"
              />
          </FormControl>
          <FormControl >
          <Link  >Forgot Password ?</Link>
          </FormControl>
          <FormControl>
            <Center>
              <Button
              width="full"
              colorScheme="blue"
              mt={4}
            //   onClick={handlelogin}
            //   isLoading={state.isLoading}
              >
                LOGIN
              </Button>
            </Center>
          </FormControl>
        </VStack>
      </Container>
        </Box>
    )
}

export default LoginBox