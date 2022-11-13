
import {Text,Box} from "@chakra-ui/react"


function PTag({P}){
    return(
        <Box  maxW="40rem" mt={4} alignItems="center" >
        <Text as="p"   textAlign="justify" fontWeight="100px" fontSize="smaller" >{P}</Text>
        </Box>
    )
}

export default PTag