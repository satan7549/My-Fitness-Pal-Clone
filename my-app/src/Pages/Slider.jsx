import { Box,Container,Flex, Heading,Image,Text } from "@chakra-ui/react";


function SliderDiv(){
return(
    <Container  
    width={{
        base: "full",
        sm: "full",
        md: "container.xl",
        lg: "container.lg",
      }}
      centerContent={true}
    mt="50px"
    >
        <Flex direction="row" height="full" >
            <Box height="full" >
            <Image src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-3.jpg&w=1920&q=75" alt="Clint_pic" />
            </Box>
            <Box>
                <Flex direction="column">
                   <Heading as="h1" fontWeight="bold" fontSize="xl" > Education helped her lose 30 pounds.</Heading>
                   <Text as="p" textAlign="center" fontSize="xl" >
                   MyFitnessPal gave me a wake up call to the way I was eating and made things clear what I needed to change.
                   </Text>
                   <Text as="p" > - Stephanie</Text>
                </Flex>
            </Box>
        </Flex>
    </Container>
)
}
export default SliderDiv