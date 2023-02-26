import React, { useState } from "react";
import {AiFillDelete, AiFillHome, AiOutlineCaretDown} from "react-icons/ai";
import {HiShoppingCart} from "react-icons/hi"
import {FaUserAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Menu, MenuButton, MenuItem, MenuList, Text , Button  , Image} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons"
import "./styles.css"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <>
       <Box background="#171923" height="10vh"  borderBottom="1px solid white" display="flex" justifyContent="space-between" alignItems="center" padding="0px 6%" >
      
       <Box display={{ base: "block", sm: "block", md: "block", lg: "block" , xl:  "none" , '2xl': "none" }}>
        <Menu  >
  {({ isOpen }) => (
    <> 
    <Box display="flex" alignItems="center">
      <MenuButton   color="#fff" mr="2px"  fontSize="20px"> DashBoard  </MenuButton>
      <AiOutlineCaretDown  color="#fff" fontSize="10px" style={{marginTop:"10px"}} />
      </Box>
      <MenuList background="#171923" border="1px solid #fff" padding="10px">
      <Link to="/adminPage">  <MenuItem background="#171923"  color="#fff">Dashboard</MenuItem></Link>
      <Link to="/customerPageAdmin">  <MenuItem background="#171923"  color="#fff">  <FaUserAlt style={{marginRight:"6px"}}  /> Customer</MenuItem> </Link>
      <Link to="/deltePageAdmin">  <MenuItem background="#171923"  color="#fff">  <AiFillDelete style={{marginRight:"6px"}}  /> Delete Products</MenuItem> </Link>

      
      </MenuList> 
      
    </>
  )}
</Menu>
</Box>  

{/*  This Box for empty space ------------ */}
<Box></Box>


{/* --------------------------------------- */}
{/*  Second option  */}
<Menu >
  {({ isOpen }) => (
    <> 
    <Box display="flex" alignItems="center">
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7hUxA0hBjTCU1gDqz8RoPeOScEcwN-oq0idlRExLh-TXNIrDs7YPQzlticXdn-b02ExMDKkXGik&usqp=CAU&ec=48600112" width="35px" borderRadius="100%" border="2px solid white" />
      <MenuButton   color="#fff" mr="2px" ml="10px" fontSize="20px">   Durgesh  </MenuButton>
      {/* <AiOutlineCaretDown  color="#fff" fontSize="10px" style={{marginTop:"10px"}} /> */}
      </Box>
      {/* <MenuList background="#171923" border="1px solid #fff" padding="10px">
        <MenuItem background="#171923"  color="#fff">Download</MenuItem>
        <MenuItem background="#171923"  color="#fff" >Create a Copy</MenuItem>
      </MenuList>  */}
      
    </>
  )}
</Menu>

       </Box>
       {/*  Side Bar is here ------------- */}

       <Box display={{ base: "none", sm: "none", md: "none", lg: "none" , xl:  "block" , '2xl': "block" }} >
      <SidebarNav isOpen={true} >
        <SidebarWrap>
          <NavIcon >
           <Link to="/adminPage">  <Text>Dashboard</Text> </Link>
      
          </NavIcon>
      <Link to="/">  <SidebarLink> <AiFillHome style={{marginRight:"6px"}} /> Home </SidebarLink> </Link>  
          <Link to="/customerPageAdmin"> <SidebarLink> <FaUserAlt style={{marginRight:"6px"}}  /> Customers</SidebarLink> </Link>
          <Link to="/addPageAdmin"> <SidebarLink> <HiShoppingCart style={{marginRight:"6px"}}  /> Add Products</SidebarLink> </Link>
          <Link to="/deltePageAdmin"> <SidebarLink> <AiFillDelete style={{marginRight:"6px"}}  /> Delete Products</SidebarLink> </Link>


          
          
         

        </SidebarWrap>
      </SidebarNav>
      </Box>
    </>
  );
};

export {Sidebar}



const NavIcon = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff ;
 
`;

const SidebarNav = styled.nav`
  background: #171923;
  width: 18% ;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  border-right:1px solid white ; 
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarLink = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #00bffe;
   
    cursor: pointer;
   
  }
`;



