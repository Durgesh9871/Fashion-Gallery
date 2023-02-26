import { useState } from "react";
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
  Center,
  useToast,
} from "@chakra-ui/react";
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { Link as RouteLink } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import ForgotPassword from "./ForgotPassword";
import FgLogo from '../img/fg-logo.png';

const Login = ({ setPage, onClose }) => {
  const [load, setLoad] = useState(false);

  const toast = useToast();
  const [forgotPage, setForgotPage] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");


  const handleLogin = async () => {
    setLoad(true);
    try {
      let res=await axios.post(`${process.env.REACT_APP_URL}/users/login`,{
        email,
        password:pwd
      });
      console.log(res)
      setLoad(false);
      toast({
        position: "top",
        title: "Login Successful.",
        description: "Congratulation you've successfully Loged in.",
        status: "success",
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => onClose(),
      });
    } catch (e) {
      console.log(e)
      setLoad(false)
      if (e.response.data === "Incorrect password") {
        toast({
          position: "top",
          title: "Wrong Password",
          description:
            "Incorrect Password. Please try again or click on Forgot Password to reset it",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (e.response.data === "User not found") {
        toast({
          position: "top",
          title: "Wrong Email",
          description:
            "Sorry, we couldn't find an account associated with that email.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } 
      else {
        toast({
          position: "top",
          title: "Something Went Wrong",
          description: "Please fill in your email and password correctly.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  const signInWithGoogle = (e) => {
    // setLoad(true);
   
  };

  return forgotPage ? (
    <ForgotPassword setForgotPage={setForgotPage} />
  ) : (
    <>
      <ModalOverlay />
      <ModalContent>
        <Box className="container" >
          <Box className="left_col">
            <Box display={"flex"} flexDirection="column" gap={"10px"}>
              <Heading>Login</Heading>
              <Text color={"#d7d8dc"} fontWeight="500">
                Get access to your Orders, WishList and Recommendations
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
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Enter your password"
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
                <Box
                  mt="10px"
                  color={"blue.500"}
                  onClick={() => setForgotPage(true)}
                  cursor="pointer"
                >
                  <Text _hover={{textDecoration:"underline"}}>Forgot your Password?</Text>
                </Box>
              </FormControl>
              <Stack spacing={6}>
                <Box>
                  <Button
                    w={"100%"}
                    onClick={handleLogin}
                    isLoading={load}
                    loadingText="Logging in..."
                    colorScheme={"blue"}
                    variant={"solid"}
                  >
                    Login
                  </Button>
                </Box>
              </Stack>
              <Center>or</Center>
              <Center>
                <Button
                  w={"full"}
                  maxW={"md"}
                  isLoading={load}
                  loadingText="Signing in with Google..."
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                  onClick={signInWithGoogle}
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Center>
              <Box
                mt={"60px"}
                color={"blue.500"}
                display={["grid","grid",'flex']}
                gap={1}
                justifyContent="center"
              >
                <Text color={'black'}>New to Fashion Gallary?</Text>
                <RouteLink to={"#"}>
                  <Text onClick={() => setPage(true)} _hover={{textDecoration:"underline"}}>Create an account</Text>
                </RouteLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </ModalContent>
      {/* <ModalCloseButton /> */}
    </>
  );
};

export default Login;
