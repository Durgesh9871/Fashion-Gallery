import React, { useState } from "react";
import {
  ModalContent,
  ModalOverlay,
  Box,
  Heading,
  Text,
  Image,
  FormControl,
  Input,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import "./Login.css";
import FgLogo from '../img/fg-logo.png';
import OtpPage from "./Otp";
import axios from "axios";


const ForgotPassword = ({ page, setPage, onClose,setForgotPage }) => {
  const [load, setLoad] = useState(false);

  const [email, setEmail] = useState("");
  const toast = useToast();

  const [otpComp,setOtpComp]=useState(false);

  const handleForgotPass = async() => {
    setLoad(true)
    try{
      let res=await axios.post("http://localhost:8080/users/sendOtp",{
        email
      })
      setLoad(false)
      // console.log(res);
      localStorage.setItem("otpDetails",JSON.stringify(res.data))
      toast({
        position:'top',
        title: 'Email Sent Successful',
        description: "Password reset OTP sent! Please check your email for further instructions.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => setOtpComp(true)
      })
      
    }catch(err){
      setLoad(false)
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

  return otpComp?<OtpPage setForgotPage={setForgotPage} setOtpComp={setOtpComp}/>: (
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
            >
              <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                Forgot your password?
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                // color={useColorModeValue("gray.800", "gray.400")}
              >
                You&apos;ll get an email with a reset OTP
              </Text>
              <FormControl id="email">
                <Input
                  placeholder="your-email@example.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Stack spacing={6}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  isLoading={load}
                  loadingText="Sending OTP..."
                  onClick={handleForgotPass}
                >
                  Send OTP
                </Button>
              </Stack>
              <Box color={"blue.500"} display={"flex"} gap={1} justifyContent="center" cursor={'pointer'}>
        
              <Text onClick={()=>setForgotPage(false)} _hover={{textDecoration:"underline"}}>Click here to login</Text>

          </Box>
            </Box>
          </Box>
        </Box>
      </ModalContent>
      {/* <ModalCloseButton /> */}
    </>
  );
};

export default ForgotPassword;
