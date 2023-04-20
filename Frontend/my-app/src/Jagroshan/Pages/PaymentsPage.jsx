import { CloseIcon } from "@chakra-ui/icons";
import {
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tab,
  useColorModeValue,
  Heading,
  Text,
  Input,
  Box,
  HStack,
  VStack,
  Button,
  useDisclosure,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../Components/Alert";
import PinModal from "../Components/PinModal";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, getCartDelete } from "../../Redux/Cart_Reducer/action";






export default function PaymentsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

  let cardInitial = {
    cardNumber: "",
    cardName: "",
    cardExp: "",
    cvv: "",
  };
  const [card, setCard] = useState(cardInitial);

  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  let entered;
  const random = Math.floor(Math.random() * 10000);
  const handleChange = (el) => {
    entered = el.target.value;
  };

  const handleCash = () => {
    handleDel()
    let alertdata = {
      title: " Incorrect Capcha",
      description: "Please try again",
      status: "warning",
    };

    if (random != entered) toast(Alert(alertdata));
    else navigate("/successPayment");
  };

  const handlePayment = (type) => {
    handleDel()
    if (type == "card") 
    {
      let alertdata = {
        title: "Fill the complete details",
        description: "Payment details can't be Empty",
        status: "warning",
      };
      let flag = false;
      for (let key in card) {
        if (card[key] == "") {
          toast(Alert(alertdata));
          flag = true;
          break;
        }
      }
      if (!flag) onOpen();
    }
    else
    {
        onOpen()
    }

   
  };

  const handlePin = () => {
    onClose();
    navigate("/loader");
  };

  const handleCard = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };
  // console.log(card);
 
  //  for removing data from cart --------------------
  const dispatch = useDispatch()

  const {cartData} = useSelector((state)=>{
    return {
      cartData:state.CartReducer.cartData
    }
  })

 
  const handleDel = ()=>{
    if(cartData?.length > 0){
      cartData.map((ele)=>{
        // console.log(ele.productId._id ,"ele")
        dispatch(getCartDelete(ele._id))
      })
    }
  }
  

  useEffect(()=>{
    dispatch(getCartData)
  },[])



  return (
    <div style={{ margin: "5%" }}>
      <Tabs
        isFitted
        variant="solid-rounded"
        onChange={(index) => setTabIndex(index)}
        bg={bg}
        orientation="horizontal"
        w="80%"
        margin="auto"
        textAlign={'center'}
      >
        <TabList mb="1em" borderBlockEnd="1px" borderBlockEndColor="gray.300">
          <Tab>Cash on Delivery</Tab>
          <Tab>UPI</Tab>
          <Tab>Debit/Credit Card</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack>
              <Heading size="md">Pay during delivery (Cash/UPI/Card)</Heading>
              <Text>Capcha</Text>
              <Text border="1px solid" padding="2%" as="s">
                {random}
              </Text>
              <Input
                placeholder="Enter above code"
                w="auto"
                type="number"
                onChange={handleChange}
              />
            </VStack>
            <VStack>
              <Text>
                You can pay via Cash, UPI or Card at the time of delivery.
              </Text>
              <Button bg="red.500" onClick={handleCash}>
                PLACE ORDER
              </Button>
            </VStack>
          </TabPanel>
          <TabPanel marginBottom="180px">
            <VStack>
              <Heading size="md">UPI ID ( GooglePay / PhonePay / BHIM )</Heading>
              <Input placeholder="Enter your UPI ID here" w={'50%'}/>
              <Button bg="red.500" onClick={() => handlePayment("upi")}>
                PLACE ORDER
              </Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack>
              <Heading size="md">CREDIT/DEBIT CARD</Heading>
              <Text>
                Please ensure your card can be used for online transactions.
              </Text>
              <VStack margin="auto">
                <Input
                  placeholder="Card Number"
                  type="text"
                  name="cardNumber"
                  onChange={(e) => handleCard(e)}
                  maxLength={"12"}
                />
                <Input
                  placeholder="Name on Card"
                  type="text"
                  name="cardName"
                  onChange={(e) => handleCard(e)}
                />
                <HStack>
                  <Input
                    placeholder="Valid Thru(MM/YY)"
                    name="cardExp"
                    onChange={(e) => handleCard(e)}
                  />
                  <Input
                    placeholder="CVV"
                    type="text"
                    name="cvv"
                    onChange={(e) => handleCard(e)}
                    maxLength={"3"}
                  />
                </HStack>
              </VStack>
              <Button bg="red.500" onClick={() => handlePayment("card")}>
                PLACE ORDER
              </Button>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <PinModal
        handlePin={handlePin}
        isOpen={isOpen}
        onClose={onClose}
        device={"mobile number"}
      />
    </div>
  );
}
