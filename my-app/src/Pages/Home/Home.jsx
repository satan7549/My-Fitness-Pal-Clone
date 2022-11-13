import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  VStack,
  Text,
  Heading,
  Button,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import CardComp from "../CardComponent";
import SliderDiv from "../Slider";
import CardData from "../CardComp"
import HeadingComp from "../HeadingComponent";
import Footer from "../Footer/Footer";



function Home() {




  return (
    <Center 
    width={{
      base:"full",
      sm:"full",
      lg:"full"
    }}
    >
      <VStack width={{
        base:"full",
        sm:"full",
        lg:"full"
      }}>
        <Grid 
        w="full"
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        gap={30}
        mt="20px"
        >
          <Box width="50%">
            <Heading as="h1">Good health starts with what you eat.</Heading>
            <Text as="p">
              Want to eat more mindfully? Track meals, learn about your habits,
              and reach your goals with MyFitnessPal.
            </Text>
            <Button>SEE FOR FREE</Button>
          </Box>
          <Box width="50%">
            <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" />
          </Box>
        </Grid>
        <HStack spacing="10px">
          <Box width="50%">
            <Image src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=1080&q=75" />
          </Box>
          <Box width="50%">
            <Heading as="h2">Log from over 14 million foods.</Heading>
            <Text as="p">
              See a breakdown of calories and nutrients, compare serving sizes,
              and discover how the food you eat supports your goals.
            </Text>
          </Box>
        </HStack>
        <VStack spacing="10px"  >
          <Box mt={50} width="full" alignItems="center" justifyContent="center">
            <Heading as="h1" fontWeight="bold" fontSize="6xl" >The Tools for Your Goals</Heading>
            <Text as="p" textAlign="center" fontSize="xl" >
              Trying to lose weight, tone up, lower your BMI, or invest in your
              overall <br/> health? We give you the right features to get there.
            </Text>
          </Box>
          <Box width="full" p={5} > 
            <Grid
              w="full"
              templateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
              }}
              gap={30}
              mt="20px"
            >
              <GridItem>
                <Container>
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="space-around"
                    gap={50}

                  >
                    <Box >
                      <Image
                        src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"
                        alt="Static"
                      />
                    </Box>
                    <Box >
                      <Heading as="h3" fontSize="x-large" >Learn. Track. Improve.</Heading>
                      <Text as="p" textAlign="justify" mt={5}>
                        Keeping a food diary helps you understand your habits
                        and increases your likelihood of hitting your goals.
                      </Text>
                    </Box>
                  </Flex>
                </Container>
                
              </GridItem>
              <GridItem>
                <Container>
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={50}
                  >
                    <Box>
                      <Image
                        src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"
                        alt="barcode"
                      />
                    </Box>
                    <Box>
                      <Heading as="h3" fontSize="x-large">Logging Simplified.</Heading>
                      <Text as="p" textAlign="justify" mt={5}>
                        Scan barcodes, save meals and recipes, and use Quick
                        Tools for fast and easy food tracking.
                      </Text>
                    </Box>
                  </Flex>
                  </Container>
              </GridItem>
              <GridItem>
                <Container>
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={50}
                  >
                    <Box >
                      <Image
                        src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"
                        alt="shoe"
                      />
                    </Box>
                    <Box>
                      <Heading as="h3" fontSize="x-large">Stay Motivated.</Heading>
                      <Text as="p" textAlign="justify" mt={5} >
                        Join the World’s Largest Fitness Community for advice,
                        tips, and support 24/7.
                      </Text>
                    </Box>
                  </Flex>
                </Container>
              </GridItem>
            </Grid>
          </Box>
          <HeadingComp H="Victory Stories" P=" Every day, more than 3,000 members reach their goals with 
             MyFitnessPal. Get inspired for the journey ahead." />
          <Box width="full"  >
            <SliderDiv />
            <Button bg="blue" color="white" mt="50px"  >START YOUR JURNY TODAY</Button>
          </Box>
          <HeadingComp H="Recipes & Inspiration" P=" Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts. "/>
          <Box p={30} >
            <Grid templateColumns="repeat(3,1fr)" gap={6}>
              {
                CardData.map((ele,i)=>(<CardComp key={i+1} src={ele.src} id={i+1} h={ele.h} p={ele.p} />))
              }
            </Grid>
          </Box>
          <HeadingComp H="Connect with over 50 apps." P="Easily link your MyFitnessPal account with apps that support your healthier lifestyle. It’s not just about calories. It’s about feeling better, looking better, and living better." />
          <Center >
            <Image w="60%"  mt="50px" src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75" alt="last" />
          </Center>
          <Center>
            <Text mt="50px" as="p" maxW="40rem" >MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. Members use it as a calories tracker and calorie counter to log their foods, and take advantage of the app’s food database that contains over 14 million foods. It’s not just a free calorie counter app — it’s also the best calorie counter app for people who are looking to take back control of their health and fitness.</Text>
          </Center>
        </VStack>
        <Footer />
      </VStack>
    </Center> 
  );
}

export default Home;
