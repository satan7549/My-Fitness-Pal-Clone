import {Box,Input, Center,Image, Flex} from "@chakra-ui/react";
import HeadingAbout from "../About/Heading";
import CardData from "../CardComp";
import CardComp from "../CardComponent";
import Footer from "../Footer/Footer";
import HeadingComp from "../HeadingComponent";


function FoodPage(){
    return(
        <Box width="full"  >
            <Box maxW="60%" size='lg' p={4} >
            <Input   placeholder='Search for a food, brand, or restaurent ' />
            <Center mt="50px" >
                <Image src="https://www.myfitnesspal.com/_next/static/media/food-search.ca9350e8.svg" />
            </Center>
            <HeadingComp H="Food Analysis" P="Understand how the food you’re eating contributes to your daily calories, macronutrients, and micronutrients." />
            <Center mt="50px" >
                <Flex direction="column" >
                <Box>
                <HeadingAbout h="Recipes & Inspiration" />
                </Box>
                <Box mt={10} >
                <Flex direction="row" gap={6} >
                {
                CardData.map((ele,i)=>(<CardComp key={i+1} src={ele.src} id={i+1} h={ele.h} p={ele.p} />))
                }

                </Flex>
                </Box>
                </Flex>
            </Center>
           
            </Box>
            <Footer />
        </Box>
    )
}

export default FoodPage