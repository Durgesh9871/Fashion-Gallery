import {
  ModalContent,
  ModalOverlay,
  Box,
  Heading,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  InputRightElement,
  InputGroup,
  Link,
  Checkbox,
  useToast,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import "./Reg.css";

import FgLogo from "../img/fg-logo.png";

import { Link as RouteLink } from "react-router-dom";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";

import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import axios from "axios";

const EMAIL_REGEX = /^[\w]+@([\w-]+\.)+[\w-]{3}$/g;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Reg = ({ page, setPage }) => {
  const [load, setLoad] = useState(false);

  const toast = useToast();

  const [gender, setGender] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    setValidName(name.length >= 3 && name.length <= 20);
    // console.log(validName)
  }, [name]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    // console.log(result);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    // console.log(result);
    setValidPwd(result);
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const handleSubmit = async () => {
    setLoad(true);
    try {
      // logic for regester api
      await axios.post("http://localhost:8080/users/register",{
        name,
        email,
        password:pwd,
        gender
      })
      setLoad(false);
      toast({
        position: "top",
        title: "Sign Up Successful.",
        description: "Congratulation you've successfully Signed Up.",
        status: "success",
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => setPage(false),
      });
    } catch (error) {
      setLoad(false);
      toast({
        position: "top",
        title: "Something Went Wrong",
        description: `${error.code}`,
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
              <Heading>Looks like you're new here!</Heading>
              <Text color={"#d7d8dc"} fontWeight="500">
                Sign up with your email address to get started
              </Text>
            </Box>
            <Box display="grid" alignItems={"end"}>
              <Image src={FgLogo}></Image>
            </Box>
          </Box>

          {/* right side */}
          <Box className="right_col">
            <Box p={"20px 40px"}>
              <FormControl id="user">
                <FormLabel display={"flex"} alignItems="center">
                  Name
                  <FaCheck className={validName ? "valid" : "hide"} />
                  <ImCross
                    className={validName || !name ? "hide" : "invalid"}
                  />
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sumit Pokhriyal"
                  onBlur={() => setNameFocus(true)}
                />
                <Text
                  className={
                    nameFocus && !validName ? "instructions" : "offscreen"
                  }
                  display={"flex"}
                  alignItems="center"
                >
                  <BsFillExclamationTriangleFill />
                  User name allowed from 3-20 characters.
                </Text>
              </FormControl>
              <FormControl id="email">
                <FormLabel display={"flex"} alignItems="center">
                  Email
                  <FaCheck className={validEmail ? "valid" : "hide"} />
                  <ImCross
                    className={validEmail || !email ? "hide" : "invalid"}
                  />
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  // onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(true)}
                  required
                />
                <Text
                  display={"flex"}
                  alignItems="center"
                  className={
                    emailFocus && !validEmail ? "instructions" : "offscreen"
                  }
                >
                  <BsFillExclamationTriangleFill />
                  The email address format is invalid.
                </Text>
              </FormControl>
              <RadioGroup mt={"10px"} mb="10px" onChange={setGender} value={gender}>
                <Box fontWeight={"500"} fontSize="l">
                  Gender
                </Box>
                <Stack direction="row">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </Stack>
              </RadioGroup>
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
             
              <Stack mt={"10px"} spacing={3}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"start"}
                >
                  <Checkbox onChange={() => setIsChecked(!isChecked)}>
                    I accept
                  </Checkbox>
                  <Link color={"blue.500"}>Terms of Service</Link>
                </Stack>
                <Box>
                  <Button
                    isDisabled={
                      !validName ||
                      !validEmail ||
                      !validPwd ||
                      !validMatch ||
                      !isChecked
                        ? true
                        : false
                    }
                    onClick={handleSubmit}
                    isLoading={load}
                    loadingText="Submitting"
                    w={"100%"}
                    colorScheme={"blue"}
                    variant={"solid"}
                  >
                    Sign Up
                  </Button>
                </Box>
                <Box
                  color={"blue.500"}
                  display={"flex"}
                  gap={1}
                  justifyContent="center"
                >
                  <Text color={"black"}>Existing User?</Text>
                  <RouteLink to={"#"}>
                    <Text
                      _hover={{ textDecoration: "underline" }}
                      onClick={() => setPage(false)}
                    >
                      Log in
                    </Text>
                  </RouteLink>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </ModalContent>
      {/* <ModalCloseButton /> */}
    </>
  );
};

export default Reg;
