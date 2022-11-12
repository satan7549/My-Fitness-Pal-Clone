import { Box,Heading,Text} from "@chakra-ui/react"

function HeadingComp({H,P}){
    return(
        <Box mt={50} width="full" alignItems="center" justifyContent="center" maxW="40rem">
        <Heading as="h1" fontWeight="bold" fontSize="7xl" >{H}</Heading>
        <Text as="p"  textAlign="center" fontSize="xl"  >{P}</Text>
      </Box>
    )
}

export default HeadingComp