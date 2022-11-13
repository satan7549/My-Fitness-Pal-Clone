import { Heading,Box } from "@chakra-ui/react"


function HeadingAbout({h}){
    return(
        <Box maxW="60rem" >
        <Heading as="h2" color="#0a5282" fontWeight="bolder" fontSize="2xl" >{h}</Heading>
        </Box>
    )
}

export default HeadingAbout