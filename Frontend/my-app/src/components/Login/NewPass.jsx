import { useState, useEffect } from "react";
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
  useColorModeValue,
  FormLabel,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import "./Login.css";
import "../Registration/Reg.css";
import FgLogo from "../img/fg-logo.png";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const NewPassword = ({
  page,
  setPage,
  onClose,
  setForgotPage,
  setIsNewPass,
  setOtpComp,
}) => {
  const [load, setLoad] = useState(false);
  const toast = useToast();

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const data = JSON.parse(localStorage.getItem("otpDetails"));

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result);
    setValidPwd(result);
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handleNewPass = async () => {
    setLoad(true);
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_URL}/user/updatePassword`,
        {
          email: data.email,
          newPassword: pwd,
        }
      );
      console.log(res);
      setLoad(false);
      toast({
        position: "top",
        title: "Password reset successful!",
        description:
          "Your new password has been saved. You can now log in to your account.",
        status: "success",
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => {
          setForgotPage(false);
          setIsNewPass(false);
          setOtpComp(false);
        },
      });
    } catch (err) {
      setLoad(false);
      toast({
        position: "top",
        title: "Something Went Wrong",
        description:
          "Password update failed. Please check your inputs and try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <Box className="container">
          <Box className="left_col">
            <Box display={"flex"} flexDirection="column" gap={"10px"}>
              <Heading>New Password</Heading>
              <Text color={"#d7d8dc"} fontWeight="500">
                Secure Your Account with a New Password
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
                Password Reset
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                color={useColorModeValue("gray.800", "gray.400")}
              >
                Please enter your new password below.
              </Text>
              <FormControl id="password">
                <FormLabel display={"flex"} alignItems="center">
                  Password
                  <FaCheck className={validPwd ? "valid" : "hide"} />
                  <ImCross className={validPwd || !pwd ? "hide" : "invalid"} />
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    name="pass"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    onBlur={() => setPwdFocus(true)}
                    required
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text
                  display={"flex"}
                  alignItems="start"
                  gap={"4px"}
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <BsFillExclamationTriangleFill size={"18px"} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters: ! @ # $ %
                </Text>
              </FormControl>
              <FormControl>
                <FormLabel display={"flex"} alignItems="center">
                  Confirm Password
                  <FaCheck
                    className={validMatch && matchPwd ? "valid" : "hide"}
                  />
                  <ImCross
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  />
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPwd ? "text" : "password"}
                    placeholder="Enter your password"
                    name="pass"
                    value={matchPwd}
                    onChange={(e) => setMatchPwd(e.target.value)}
                    onBlur={() => setMatchFocus(true)}
                    required
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowConfirmPwd((showConfirmPwd) => !showConfirmPwd)
                      }
                    >
                      {showConfirmPwd ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text
                  display={"flex"}
                  alignItems="center"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <BsFillExclamationTriangleFill />
                  Password does not match the confirm password.
                </Text>
              </FormControl>
              <Stack spacing={6}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleNewPass}
                  isLoading={load}
                  loadingText="Saving Password..."
                >
                  Save Password
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
                    setForgotPage(false);
                    setIsNewPass(false);
                    setOtpComp(false);
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

export default NewPassword;
