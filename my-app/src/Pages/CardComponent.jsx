import { Box, Flex, Heading,Image ,Text} from "@chakra-ui/react"



function CardComp({src,id,h,p}){
    return(
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Flex direction="Column"  justifyContent="space-around" gap={3} >
                <Box>
                <Image src={src} alt={id} />
                </Box>
                <Box>
                <Heading as="h3" fontWeight="bold" fontSize="xl" >{h}</Heading>
                </Box>
                <Box>
                <Text as="p" textAlign="left" color="blue" >{p}</Text>
                </Box>
            </Flex>
        </Box>
    )
}
export default CardComp