import "./Navbar.css";
// colorScheme
import { Box, Button, Modal } from "@chakra-ui/react";
import { useState } from "react";
import Login from "../Login/Login";
import Reg from "../Registration/Reg";
import axios from "axios";

const NavbarTop = () => {
  // current user data

  let token=JSON.parse(localStorage.getItem('token'))||null;

  const [page, setPage] = useState(false);

  // manage modal useDisclosure
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleLogout=async()=>{
    try{
      await axios.get(`${process.env.REACT_APP_URL}/users/logout`);
      localStorage.removeItem('token');
      openModal();
    }catch(err){
      console.log(err);
    }
    
  }

  return (
    <Box
      bg="#2874f0"
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      gap="40px"
      w="100%"
      h="70px"
      p={4}
      position="fixed"
      zIndex={"9"}
    >
     {!token?<Button
        bgColor="white"
        color="#4e8cf3"
        variant="outline"
        onClick={openModal}
        fontWeight="bold"
      >
        Login
      </Button>:<Button
        bgColor="white"
        color="#4e8cf3"
        variant="outline"
        onClick={handleLogout}
        fontWeight="bold"
      >
        Logout
      </Button>} 

      {/* login modal */}
      <Modal size="4xl" isOpen={modalIsOpen} onClose={closeModal}>
        {page ? (
          <Reg page={page} setPage={setPage} />
        ) : (
          <Login onClose={closeModal} page={page} setPage={setPage} />
        )}
      </Modal>
    </Box>
  );
};

export default NavbarTop;
