import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Modal,
  useToast,
} from "@chakra-ui/react";
import {  BsHandbagFill } from "react-icons/bs";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import image from "./4.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Reg from "../components/Registration/Reg";
import Login from "../components/Login/Login";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";





export default function MainNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const toast=useToast()
  // const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
const isAdmin=true

  let token = JSON.parse(localStorage.getItem("token")) || null;

  const [page, setPage] = useState(false);

  // manage modal useDisclosure
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
   

  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_URL}/user/logout`);
      localStorage.removeItem("token");
      openModal();
    } catch (err) {
      console.log(err);
    }
  };

   const location = useLocation()
 
   const checking=()=>{
    if(!token)
    {
      toast({
        position: "top",
        title: "Kindly Sign-In/Sign-UP first",
        status: "warning",
        duration: 3000,
        isClosable: true,
      })
    }
   }

  return (
    <Box
      boxSizing="border-box"
      background={"transparent"}
      maxW="98vw"
      m="auto"
      zIndex={"2"}
      position="sticky"
      top={'0px'}
     
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        pr={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        background={(location.pathname == "/adminPage" || location.pathname == "/customerPageAdmin" || location.pathname == "/deltePageAdmin" || location.pathname == "/stat" || location.pathname == "/addPageAdmin"  || location.pathname == "/orderPageAdmin" || location.pathname == "/cartPageAdmin") ? "#171923" : "#ffffff"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            // border="2px solid red"
          />
        </Flex>
        <Flex justify={{ base: "center", md: "center" }}>
          <Link to="/">
            <Image src={image} h="50px" w="60px" borderRadius={"50%"}></Image>
          </Link>
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "center" }}>
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={5}
            align="center"
            justify={"center"}
          >
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex align="center" mr={"20px"}>
          <Link to={token?"/cart":null} onClick={()=>checking()}>
            <BsHandbagFill style={{fontSize:"25px" , color:"#f56902"}} />
          </Link>
        </Flex>
        {token && (
  <>
    {isAdmin ? (
      <Box>
        <Button
          as="a"
          href="/adminPage"
          bgColor="white"
          color="#4e8cf3"
          variant="outline"
          fontWeight="bold"
          mr="7px"
        >
          Admin
        </Button>
      </Box>
    ) : null}
    <Button
      bgColor="white"
      color="#4e8cf3"
      variant="outline"
      onClick={handleLogout}
      fontWeight="bold"
    >
      Logout
    </Button>
  </>
)}
{!token && (
  <Stack
    flex={{ base: 1, md: 0 }}
    justify="flex-end"
    direction="row"
    spacing={6}
  >
    <Button
      fontSize="sm"
      fontWeight={400}
      variant="link"
      onClick={openModal}
    >
      Sign In
    </Button>
  </Stack>
)}

      </Flex>
      {/* login modal */}
      <Modal size="4xl" isOpen={modalIsOpen} onClose={closeModal}>
        {page ? (
          <Reg page={page} setPage={setPage} />
        ) : (
          <Login onClose={closeModal} page={page} setPage={setPage} />
        )}
      </Modal>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const location = useLocation()
 


  return (
    <Stack direction={"row"} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                //   p={2}
                to="/products"
                fontSize={"sm"}
                fontWeight={500}
                color={ location.pathname === "/adminPage" ? "#ffff" : linkColor}
                
                _hover={{
                  textDecoration: "none",
                  color: "#a49288" ,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "NEW!",
    children: [
      {
        label: "FEATURED",
        href: "/products",
      },
      {
        label: "SHOP BY CATEGORY",
        href: "/products",
      },
    ],
  },

  {
    label: "MEN",
    children: [
      {
        label: "TOPS",
        href: "/products",
      },
      {
        label: "BOTTOMS",
        href: "/products",
      },
      {
        label: "OUTERWEAR",
        href: "/products",
      },
      {
        label: "ACCESSORIES",
        href: "/products",
      },
      {
        label: "FLEECE",
        href: "/products",
      },
      {
        label: "FOOTWEAR",
        href: "/products",
      },
    ],
  },
  {
    label: "KIDS",
    children: [
      {
        label: "BOYS",
        href: "/products",
      },
      {
        label: "GIRLS",
        href: "/products",
      },
      {
        label: "INFANT & TODDLER",
        href: "/products",
      },
    ],
  },
  {
    label: "OUTERWEAR",
    children: [
      {
        label: "WOMEN",
        href: "/products",
      },
      {
        label: "MEN",
        href: "/products",
      },
      {
        label: "KIDS",
        href: "/products",
      },
    ],
  },
  
  // {
  //   label: 'HOME',
  //   children: [
  //     {
  //       label: 'BLANKETS & THROWS',
  //       href: '/products',
  //     },
  //     {
  //       label: 'SHEETS & PIlLLOWCASES',
  //       href: '/products',
  //     },
  //     {
  //       label: 'DUVET COVERS & SHAMsS',
  //       href: '/products',
  //     },
  //     {
  //       label: 'COMFORTERS',
  //       href: '/products',
  //     },
  //     {
  //       label: 'PILLOWS',
  //       href: '/products',
  //     },

  //   ],
  // },
 
  
  {
    label: "GUIDEPOST",
    children: [
      {
        label: "ABOUT",
        href: "/products",
      },
      {
        label: "PARTNERS",
        href: "/products",
      },
      {
        label: "STORIES",
        href: "/products",
      },
      {
        label: "HOME",
        href: "/products",
      },
    ],
  },
];
