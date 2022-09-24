import React from "react";
import desktop from "../images/desktop.jpeg";
import {
  Box,
  Heading,
  Flex,
  Button,
  Image,
  Icon,
  Text,
  Stack,
} from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import Map from "./Map";

function Home() {
  return (
    <div>
      <Box mx="3">
        <Box
          as="section"
          m={200}
          maxW="994px"
          mt="80px"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
          textAlign="center"
        >
          <Flex direction={["column", "column", "row"]}>
            <Box bg="#F7FAFC" >
              <Image src={desktop} alt="logo" />
            </Box>

            <Box p="60px" fontSize="18px" bg="white">
              <Stack spacing={4}>
                <Text as="samp">Perfume</Text>
                <Heading fontSize="xl">Gabrielle Essence Eau De Parfum</Heading>

                <Box>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    A floral, solar and volluptuous interpretation composed by
                    Olivier Polge, Perfumer-Creator for the House of CHANEL
                  </Box>
                </Box>
                <br />
                <Box>
                  <Text fontSize="30px" color="green">
                    $149.99{" "}
                  </Text>
                  <Text as="s">$169.99</Text>
                  <br />
                </Box>
                <br />
                <Button borderRadius="full" px="100" colorScheme="whatsapp">
                  <Icon as={MdShoppingCart} /> Add to Cart
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Map />
    
    </div>
  );
}
export default Home