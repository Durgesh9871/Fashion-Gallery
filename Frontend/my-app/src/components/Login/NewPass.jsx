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
} from "@chakra-ui/react";
import "./Login.css";
import '../Registration/Reg.css'
import FgLogo from '../img/fg-logo.png';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const NewPassword = ({ page, setPage, onClose,setForgotPage,setIsNewPass,setOtpComp }) => {

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result);
    setValidPwd(result);
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handleForgotPass = () => {
    
  };

  return (
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
                color={useColorModeValue("gray.800", "gray.400")}
              >
                You&apos;ll get an email with a reset OTP
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
                  onClick={handleForgotPass}
                >
                  Request Reset
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

export default NewPassword;
