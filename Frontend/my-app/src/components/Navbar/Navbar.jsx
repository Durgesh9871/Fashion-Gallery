import "./Navbar.css";
// colorScheme
import { Box, Button, Modal } from "@chakra-ui/react";
import { useState } from "react";
import Login from "../Login/Login";
import Reg from "../Registration/Reg";

const Navbar = () => {
  // current user data

  const [page, setPage] = useState(false);

  // manage modal useDisclosure
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

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
      <Button
        bgColor="white"
        color="#4e8cf3"
        variant="outline"
        onClick={openModal}
        fontWeight="bold"
      >
        Login
      </Button>

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

export default Navbar;
