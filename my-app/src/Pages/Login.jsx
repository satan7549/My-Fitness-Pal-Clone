import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Center, Container, FormControl, Heading, Input, VStack } from "@chakra-ui/react"
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom"
import  { AuthContext } from "../Context/AuthContextProvider/AuthContextProvider";
import axios from "axios";
import { loginFailureAction, loginSucessAction } from "../Context/AuthContextProvider/action";


const initState = {
    email: "",
    password: "",
  };

function Login(){
      const { state, dispatch } = useContext(AuthContext);
      //  console.log("login",state);
      const [loginDetails, setLoginDetails] = useState(initState);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value });
      };
    
      const handlelogin = () => {
        axios({
          method: "POST",
          url: `https://reqres.in/api/login`,
          data: loginDetails,
        })
          .then((res) => {
            dispatch(loginSucessAction(res.data.token));
          })
          .catch(() => {
            dispatch(loginFailureAction());
          });
      };
    
      if (state.isAuth) {
        return <Navigate to="/" />;
      }
      if (state.isError) {
        return (
          <Container
            width={{
              base: "full",
              sm: "full",
              md: "container.xl",
              lg: "container.lg",
            }}
            centerContent={true}
          >
            <Alert
              status="error"
              py={{ base: 4, sm: 4, md: 4, lg: 6 }}
              my={{ base: 24, sm: 24, md: 28, lg: 40 }}
              px={{ base: 1, sm: 1, md: 4, lg: 6 }}
            >
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>Somthing Went Wrong.</AlertDescription>
            </Alert>
          </Container>
        );
      }
    
      const { email, password } = loginDetails;

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
              value={email}
              onChange={handleChange}
              type="email"
              placeholder="Email address"
            />
          </FormControl>
          <FormControl p={2}>
              <Input
                name="password"
                value={password}
                onChange={handleChange}
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
              onClick={handlelogin}
              isLoading={state.isLoading}
              >
                LOGIN
              </Button>
            </Center>
          </FormControl>
        </VStack>
      </Container>
    )
};

export default Login