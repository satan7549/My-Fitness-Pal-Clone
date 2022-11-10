import {Button, Center, Container, FormControl, Heading, Input, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function SignUp(){
    return(
        <Container
        width={{
          base: "full",
          sm: "full",
          md: "container.xl",
          lg: "container.lg",
        }}
        centerContent={true}
      >
        <VStack
          width="full"
          boxShadow="lg"
          py={{ base: 4, sm: 4, md: 4, lg: 6 }}
          my={{ base: 24, sm: 24, md: 28, lg: 40 }}
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
    )
};

export default SignUp