import {
    Box,
    Flex,
    Text,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    
    useDisclosure,
    Grid,
  } from '@chakra-ui/react';
  import {

    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function M() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
        <Box>
        <Grid
        w={["95%","95%","85%","60%"]}
          justifyContent={"center"}
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          margin="auto"
          align={'center'}>
              
              <DesktopNav />
            
          
        </Grid>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Grid 
      templateColumns={['repeat(5, 1fr)','repeat(5, 1fr)','repeat(7, 1fr)','repeat(12, 1fr)']}
      spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  pb={0}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  borderBottomColor="green"
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                    borderBottom:["none","none","none","4px solid teal"],
                
                  }}
                  // border="1px solid red"

                  
                  >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  w="100%"
                  
                  >
                  <Grid 
                  w={"100%"}
                  columnGap={'2%'}
                  templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']}
                  
                 
                  >
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Grid>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Grid>
    );
  };
  
  const DesktopSubNav = ({ label, href,subLabel }) => {
    return (
      <Box zIndex={"2"} w={["100%","100%","10vw","10vw"]}
      boxSizing='border-box'
      p={3}
      shadow={"2xl"}
      // border={"1px solid"}
      >
        
          <Box w="100%">
            <Text
              transition={'all .3s ease'}
              color="pink.500"
              textAlign={"start"}
              // border="10px solid red"
              fontWeight={500}>
              {label}
            </Text>
            <Box textAlign={"start"}>
                {
                    subLabel.length>0&&subLabel.map((el)=>{
                        return (
                            <Box
                            textDecoration={"none"}
                            // border="1px solid red"
                            >
                                <Link href={href}
                                textDecoration="none"
                                linkColor='red'
                                _hover={{fontWeight:"600"}}
                                >{el}</Link>
                            </Box>
                        )
                    })
                }
            </Box>
          </Box>
          
      </Box>
    );
  };
  
  
  
  
  
  
  
  const NAV_ITEMS = [
    
    {
        label: 'NEW!',
        children: [
          {
            label: 'FEATURED',
            subLabel:["Womens Training","Mens Training","Womens Travel","Mens Travel","Gender Neutral"],
            href: '#',
          },
          {
            label: 'SHOP BY CATEGORY',
            subLabel:["Women","Men","Outerwear","Footwear","Kids","Gear","Home"],
            href: '#',
          },
          
        ],
      },{
        label: 'WOMEN',
        children: [
            {
              label: 'TOPS',
              subLabel:["T-Shirt","Shirt","Sweaters","Performance Top","Tank Top","Shirt Jackets"],
              href: '#',
            },
            {
              label: 'BOTTOMS',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'OUTERWEAR',
              subLabel:["Jackets","Insulated","Rainwear","Parkas","Vests","Shoftsheell &Jackets","Pants"],
              href: '#',
            },
            {
              label: 'ACCESSORIES',
              subLabel:["Gloves","Hats","Belts","Beanies","Scarves","Sunglasses","Socks"],
              href: '#',
            },
            {
              label: 'FLEECE',
              subLabel:["Casual","Technical",],
              href: '#',
            },
            {
              label: 'COZY',
              subLabel:["Sleep","Loungewear","Slippers","Blankets & Throws"],
              href: '#',
            },
          ],
      },
      {
        label: 'MEN',
        children: [
            {
              label: 'TOPS',
              subLabel:["T-Shirt","Shirt","Sweaters","Performance Top","Polos","Flannels","Shirt Jacket","Thirmals"],
              href: '#',
            },
            {
              label: 'Bottom',
              subLabel:["Jeans","Pants","Shorts","Lined Bottoms","Boxer","Pant & Shorts Guide","Denim Shop"],
              href: '#',
            },
            {
              label: 'OUTERWEAR',
              subLabel:["Jackets","Insulated","Rainwear","Parkas","Vets","Softshell & Wind Jackets","Pants","Baselayers"],
              href: '#',
            },
            {
              label: 'ACCESSORIES',
              subLabel:["Gloves","Hats","Belts","Beanies","Scarves","Sunglasses","Socks"],
              href: '#',
            },
            {
              label: 'FLEECE',
              subLabel:["Loungewear","","Sleep","Slippers","Blankets & Throws"],
              href: '#',
            },
            {
              label: 'FOOTWEAR',
              subLabel:["Casual","Hiking","Boots","Sandals"],
              href: '#',
            },
          ],
      },
      {
        label: 'KIDS',
        children: [
            {
              label: 'BOYS',
              subLabel:["Jackets","Fleece","Tops","Bottoms","Swim","Accessories"],
              href: '#',
            },
            {
              label: 'GIRLS',
              subLabel:["Jackets","Fleece","Tops","Bottoms","Swim","Accessories"],
              href: '#',
            },
            {
              label: 'INFANT & TODDLER',
              subLabel:["Jackets","Fleece","Sleep"],
              href: '#',
            },
            
          ],
      },
      {
        label: 'OUTERWEAR',
        children: [
            {
              label: 'WOMEN',
              subLabel:["Parkas","Jackets","Insulated","Pants","Rainwear","Vets","Baselayers","Softshell & Wind Jackets","First Ascent"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Parkas","Jackets","Insulated","Pants","Rainwear","Vets","Baselayers","Softshell & Wind Jackets","First Ascent"],
              href: '#',
            },
            {
              label: 'KIDS',
              subLabel:["Boys Jackets & Vests","Girls Jackets and Vests","Infant & Toddler Jackets & Vests"],
              href: '#',
            },
           
          ],
      },
      {
        label: 'GEAR',
        children: [
            {
              label: 'PACKS & LUGGAGE',
              subLabel:["Backpacks","Technical Packs","Duffels & Luggage","Tots Bags","Crossbody Bags",],
              href: '/home',
            },
            {
              label: 'COMPING',
              subLabel:["Tents","Sleeping Bags","Chairs","Outdoor Blankets"],
              href: '#',
            },
            {
              label: 'ACCESSORIES',
              subLabel:["Travel","Outdoor","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'oversffh',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'top wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
          ],
      },
      {
        label: 'FOOTWEAR',
        children: [
            {
              label: 'top wear',
              subLabel:["T-Shirt","Shirt","Sweaters","Performance Top","Tank Top","Shirt Jackets"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'tourt',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'oversffh',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'top wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
          ],
      },
      {
        label: 'HOME',
        children: [
            {
              label: 'top wear',
              subLabel:["T-Shirt","Shirt","Sweaters","Performance Top","Tank Top","Shirt Jackets"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'tourt',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'oversffh',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'top wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
          ],
      },
      {
        label: 'SALE',
        children: [
            {
              label: 'top wear',
              subLabel:["T-Shirt","Shirt","Sweaters","Performance Top","Tank Top","Shirt Jackets"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'tourt',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'oversffh',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'top wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
          ],
      },
      {
        label: 'CLEARANCE',
        children: [
            {
              label: 'top wear',
              subLabel:["T-Shirt","Shirt","Sweaters","Performance Top","Tank Top","Shirt Jackets"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'tourt',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'oversffh',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'top wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
          ],
      },
      {
        label: 'RESALE',
        children: [
            {
              label: 'top wear',
              subLabel:["T-Shirt","Shirt","Sweaters","Performance Top","Tank Top","Shirt Jackets"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'tourt',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'oversffh',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'top wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
          ],
      },
      {
        label: 'GUIDEPOST',
        children: [
            {
              label: 'top wear',
              subLabel:["T-Shirt","Shirt","Sweaters","Performance Top","Tank Top","Shirt Jackets"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'tourt',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'oversffh',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'top wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
            {
              label: 'bottom wear',
              subLabel:["Jeans","Pants","Shorts","Jogger","Leggiges","Capris","Denim Shop"],
              href: '#',
            },
          ],
      },
  ];