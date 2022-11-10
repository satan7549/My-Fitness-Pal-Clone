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
} from "@chakra-ui/react";

function Home() {
  return (
    // <Container
    //   width={{
    //     base: "full",
    //     sm: "full",
    //     md: "container.xl",
    //     lg: "container.lg",
    //   }}
    //   centerContent={true}
    // >
    <VStack width="full">
      <HStack spacing="10px">
        <Box width="50%">
          <Heading as="h1">Good health starts with what you eat.</Heading>
          <Text as="p">
            Want to eat more mindfully? Track meals, learn about your habits,
            and reach your goals with MyFitnessPal.{" "}
          </Text>
          <Button>SEE FOR FREE</Button>
        </Box>
        <Box width="50%">
          <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" />
        </Box>
      </HStack>
      <HStack spacing="10px">
        <Box width="50%">
          <Image src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=1080&q=75" />
        </Box>
        <Box width="50%">
          <Heading as="h2">Log from over 14 million foods.</Heading>
          <Text as="p">
            See a breakdown of calories and nutrients, compare serving sizes,
            and discover how the food you eat supports your goals.{" "}
          </Text>
        </Box>
      </HStack>
      <VStack spacing="10px">
        <Box width="50%">
          <Heading as="h2">The Tools for Your Goals</Heading>
          <Text as="p">
            Trying to lose weight, tone up, lower your BMI, or invest in your
            overall health? We give you the right features to get there.{" "}
          </Text>
        </Box>
        <Box width="50%">
          <Grid
            w="full"
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap={24}
            mt="10px"
          >
            <GridItem>
              <Box>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box rounded="50%"  >
                    <Image  src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" />
                  </Box>
                  <Box>
                    <Heading as="h3">Learn. Track. Improve.</Heading>
                    <Text as="p">
                      Keeping a food diary helps you understand your habits and
                      increases your likelihood of hitting your goals.{" "}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box rounded="50%"  >
                    <Image  src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" />
                  </Box>
                  <Box>
                    <Heading as="h3">Learn. Track. Improve. 2</Heading>
                    <Text as="p">
                      Keeping a food diary helps you understand your habits and
                      increases your likelihood of hitting your goals.{" "}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box rounded="50%"  >
                    <Image  src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" />
                  </Box>
                  <Box>
                    <Heading as="h3">Learn. Track. Improve.3</Heading>
                    <Text as="p">
                      Keeping a food diary helps you understand your habits and
                      increases your likelihood of hitting your goals.{" "}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </VStack>
    </VStack>
    // </Container>
  );
}

export default Home;
