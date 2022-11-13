import { Center, Flex, Box } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import HeadingAbout from "./Heading";
import LoginBox from "./LoginBox";
import PTag from "./Ptag";

function About() {
  return (
    <Box width="full">
      <Flex direction="row">
        <Box width="75%" mt="50px">
          <Center>
            <Flex
              direction="column"
              alignItems="flex-start"
              gap={6}
              justifyContent="center"
            >
              <HeadingAbout h="Lose Weight with MyFitnessPal.com — for FREE!" />
              <Box>
                <PTag P="Losing weight isn't easy - we know. But with a membership to MyFitnessPal.com, you'll get the tools you need to successfully take weight off - and keep it off. And best of all, you can signup for free, no strings attached. So put away your credit card - you'll never have to pay a cent." />
                <PTag P="Study after study has confirmed the benefits of keeping track of the food you eat and the activity you do. It's simple - the more consistently you track your food intake, the more likely you are to lose weight. That's why every successful weight management program suggests that you keep a food diary and/or an activity log. But recording everything you eat without the right tools can be tedious at best, or simply impossible at worst." />
                <PTag P="At MyFitnessPal.com, we focus on making sure you can log your meals as quickly and easily as possible. Because the easier we make it for you, the more likely you are to stay on track, and the more likely you are to succeed in your weight loss goals." />
              </Box>
              <Box>
                <HeadingAbout h="How does it work?" />
                <Box width="70%">
                  <Center>
                    <PTag P="The reason our system is so easy to use is because,it learns from you!, All of us tend to eat the same foods over time. ,MyFitnessPal.com, remembers what you've eaten and done most often in the past, and makes it easy for you to add those foods again to your log." />
                    <PTag p="So the more you track your meals, the easier it becomes!" />
                  </Center>
                </Box>
              </Box>
              <Box>
                <HeadingAbout h="With a FREE membership you get:" />
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box width="25%" >
        <LoginBox />
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}

export default About;
