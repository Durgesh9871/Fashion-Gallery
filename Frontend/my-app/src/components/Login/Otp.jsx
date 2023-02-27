import { useState, useEffect } from "react";
import {
  ModalContent,
  ModalOverlay,
  Box,
  Heading,
  Text,
  Image,
  FormControl,
  Button,
  Stack,
  Center,
  HStack,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import "./Login.css";
import FgLogo from "../img/fg-logo.png";
import axios from "axios";
import NewPassword from "./NewPass";

const OtpPage = ({ page, setPage, onClose, setForgotPage, setOtpComp }) => {
  const [load, setLoad] = useState(false);
  const [otpLoad,setOtpLoad]=useState(false)
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(120);
  const [intervalId, setIntervalId] = useState(null);
  const [isNewPass, setIsNewPass] = useState(false);

  const data = JSON.parse(localStorage.getItem("otpDetails"));

  const toast = useToast();

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);
    setIntervalId(newIntervalId);
    return () => clearInterval(newIntervalId);
  }, []);

  const sendOtpAgain = async () => {
    setOtpLoad(true)
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/users/sendOtp`,
        {
          email: data.email,
        }
      );
      setOtpLoad(false)
      console.log(res);
      setTimer(120);
      toast({
        position:'top',
        title: 'Email Sent Successful',
        description: "Password reset OTP sent! Please check your email for further instructions.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => setOtpComp(true)
      })
      localStorage.setItem("otpDetails", JSON.stringify(res.data));
    } catch (err) {
      setOtpLoad(false)
      console.log(err);
      if(err.response.data==="Email is not registered"){
        toast({
          position:'top',
          title: 'Wrong Email',
          description: "Sorry, we couldn't find an account associated with that email.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    }
  };

  data.otp = otp;
  const handleOtpVerify = async () => {
    setLoad(true);
    console.log(otp);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/users/verifyOtp`,
        data
      );
      console.log(res);
      setLoad(false);
      toast({
        position: "top",
        title: "OTP verified successfully",
        description:
          "OTP Verified Successfully. You're one step closer to securing your account with a new password.",
        status: "success",
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => setIsNewPass(true),
      });
    } catch (e) {
      setLoad(false);
      console.log(e.response.data);
      if (e.response.data === "Invalid OTP") {
        toast({
          position: "top",
          title: "Invalid OTP",
          description:
            "The OTP you entered is incorrect. Please check and try again.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (e.response.data === "OTP expired") {
        toast({
          position: "top",
          title: "OTP expired",
          description: "Sorry, your OTP has expired. Please request a new one.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top",
          title: "Something Went Wrong",
          description: "OTP not sent yet",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return isNewPass ? (
    <NewPassword
      setOtpComp={setOtpComp}
      setForgotPage={setForgotPage}
      setIsNewPass={setIsNewPass}
    />
  ) : (
    <>
      <ModalOverlay />
      <ModalContent>
        <Box className="container">
          <Box className="left_col">
            <Box display={"flex"} flexDirection="column" gap={"10px"}>
              <Heading>Reset your Password</Heading>
              <Text color={"#d7d8dc"} fontWeight="500">
                Unlock your account with a new password
              </Text>
            </Box>
            <Box display="grid" alignItems={"end"}>
              <Image src={FgLogo}></Image>
            </Box>
          </Box>

          {/* right side */}
          <Box className="right_col">
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent="space-between"
              gap="20px"
              p={"20px 40px"}
              my={10}
            >
              <Center>
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                  Verify your Email
                </Heading>
              </Center>
              <Center
                fontSize={{ base: "sm", sm: "md" }}
                // color={useColorModeValue("gray.800", "gray.400")}
              >
                We have sent code to your email
              </Center>
              <Center
                fontSize={{ base: "sm", sm: "md" }}
                fontWeight="bold"
                // color={useColorModeValue("gray.800", "gray.400")}
              >
                {data.email}
              </Center>
              <Center
                fontSize={{ base: "sm", sm: "md" }}
                // color={useColorModeValue("gray.800", "gray.400")}
              >
                {timer > 0 ? (
                  <Box display={"flex"} gap="5px">
                    <Text>OTP will expire in</Text>
                    <Text color={"blue.500"}>
                      {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
                      {timer % 60}
                    </Text>
                  </Box>
                ) : (
                  <HStack justify={"center"} mt={5}>
                    <Text fontSize={{ base: "sm", sm: "md" }}>
                      Didn't receive the code?{" "}
                    </Text>
                    <Button
                      size="sm"
                      variant="link"
                      onClick={sendOtpAgain}
                      isDisabled={timer > 0}
                      isLoading={otpLoad}
                      loadingText="Sending OTP..."
                    >
                      Send again
                    </Button>
                  </HStack>
                )}
              </Center>
              <Box textAlign={"center"}>
                <FormControl>
                  <PinInput
                    isDisabled={timer <= 0}
                    focusBorderColor="brand.500"
                    size="lg"
                    type="number"
                    otp={otp}
                    onChange={(value) => {
                      setOtp(value);
                    }}
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </FormControl>
              </Box>
              <Stack spacing={6}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleOtpVerify}
                  isLoading={load}
                  loadingText="Verifying..."
                >
                  Verify OTP
                </Button>
              </Stack>
              <Box
                color={"blue.500"}
                display={"flex"}
                gap={1}
                justifyContent="center"
                cursor={"pointer"}
              >
                <Text
                  onClick={() => {
                    setOtpComp(false);
                    setForgotPage(false);
                  }}
                  _hover={{ textDecoration: "underline" }}
                >
                  Click here to login
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </ModalContent>
      {/* <ModalCloseButton /> */}
    </>
  );
};

export default OtpPage;
