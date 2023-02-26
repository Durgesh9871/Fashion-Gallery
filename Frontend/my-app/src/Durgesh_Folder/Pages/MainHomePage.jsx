import { Box, Button, Heading, Img , Text , Image} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Mainhomepage.css"


const MainHomePage = () => {


  const ImageBox = [
    {
      image:"https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_bottoms_V2?$a8$" ,
      text:"The most versatile pants & shorts"
    },
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_tops_V2?$a8$" ,
    text:"The season's best shirts & tees"},
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_rain_V2?$a8$" ,
    text:"Don't let the weather keep you inside"
  }
  ]

  const ImageDetails = [
    {
      image:"https://eddiebauer.scene7.com/is/image/EBContent/230131_hp_mrk3box_flyline_V1?$jpg12$&scl=1" ,
      text:"BC Flyline Adaptive Ski Kit" ,
      para:"Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards."
    },
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/230131_hp_mrk3box_high-fives_V1?$jpg12$&scl=1" ,
    text:"High Fives Foundation",
    para:"Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards."
  },
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/221227_hp_mrkt3box_TT_V1?$jpg12$&scl=1" ,
    text:"Abundance Abounds!",
    para:"Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards."

  }
  ]

   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1247 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
     laptop: {
      breakpoint: { max: 1246, min: 1025 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 723 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 723, min: 364 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 363, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  const getData = [
      {
       "id": 1,
       "rating": 3 , 
    "categories": "shirts",
    "title": "Men Regular Fit Solid Cut Away Collar Casual Shirt",
    "price": 399,
    "realPrice":600 , 
    "brand" :"CarbonnCloth" , 
    "description": "Carbonn Cloth presents to you a new range of stylish and cool new Shirts yet which are affordable for everyone .These comes in different sizes and colors, for everybody's taste",
    "color": "black",
    "discount": "42",
     "reviews" : ["Great Product" , "Value for money" ] , 
     "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/g/3/w/s-crc-den-01-carbonn-cloth-original-imag3uyxer7hbwcj-bb.jpeg?q=70" } , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/kpmy8i80/shirt/9/v/3/s-crc-den-01-carbonn-cloth-original-imag3uyx2crqr6me.jpeg?q=70"} ,{"imageFront":"https://rukminim1.flixcart.com/image/832/832/kpmy8i80/shirt/b/c/t/s-crc-den-01-carbonn-cloth-original-imag3uyxgrrxxyrq.jpeg?q=70"} ] , 
  
     "mainImage":"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/g/3/w/s-crc-den-01-carbonn-cloth-original-imag3uyxer7hbwcj-bb.jpeg?q=70"
  } ,
  
  {
    "id":2 ,
    "rating": 4  , 
  "categories": "shirts",
  "title": "Men Regular Fit Solid Cut Away Collar Casual Shirt",
  "price": 500 ,
  "realPrice":700 , 
  "brand" :"CarbonnCloth" , 
  "description": "This shirt is made from premium quality material. Durable quality with a stylish look makes it a must have on your shelves.",
  "color": "blue",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/h/3/j/m-crc-den-01-carbonn-blue-original-imafv2h7g7bvgfdz-bb.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/ked56kw0-0/shirt/a/s/l/m-crc-den-01-carbonn-blue-original-imafv2h82unperfz.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/ked56kw0-0/shirt/v/b/j/m-crc-den-01-carbonn-blue-original-imafv2h7zbhxnuna.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/h/3/j/m-crc-den-01-carbonn-blue-original-imafv2h7g7bvgfdz-bb.jpeg?q=70"
  },
  
  {
    "id":3 ,
    "rating": 3 , 
  "categories": "shirts",
  "title": "Men Regular Fit Solid Cut Away Collar Casual Shirt",
  "price": 299,
  "realPrice":600 , 
  "brand" :"CarbonnCloth" , 
  "description": "This shirt is made from premium quality material. Durable quality with a stylish look makes it a must have on your shelves.",
  "color": "grey",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/n/n/y/s-crc-den-01-carbonn-cloth-original-imag3uyxtxa2j5r2-bb.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/kpmy8i80/shirt/w/8/r/s-crc-den-01-carbonn-cloth-original-imag3uyx6k9jwjfa.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/kpmy8i80/shirt/1/r/g/s-crc-den-01-carbonn-cloth-original-imag3uyx5m67cj3q.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/n/n/y/s-crc-den-01-carbonn-cloth-original-imag3uyxtxa2j5r2-bb.jpeg?q=70"
  },
  
  {
    "id":4 ,
    "rating": 5  , 
  "categories": "shirts",
  "title": "Men Regular Fit Self Design Sports Shirt",
  "price": 499,
  "realPrice":790 , 
  "brand" :"CarbonnCloth" , 
  "description":"This shirt is made from premium quality material. Durable quality with a stylish look makes it a must have on your shelves.",
  "color": "black",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/1/4/5/l-crc-ch-01-carbonn-cloth-original-imag3uyxrg7azzhh-bb.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/kpmy8i80/shirt/m/h/c/l-crc-ch-01-carbonn-cloth-original-imag3uyx5gkvdgtt.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/kpmy8i80/shirt/2/g/u/l-crc-ch-01-carbonn-cloth-original-imag3uyxdvcq5zhp.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/1/4/5/l-crc-ch-01-carbonn-cloth-original-imag3uyxrg7azzhh-bb.jpeg?q=70"
  },
  
  {
    "id":5 ,
    "rating": 3  , 
  "categories": "jacket",
  "title": "Men Full Sleeve Printed Hooded Sweatshirt",
  "price": 350,
  "realPrice":550 , 
  "brand" :"caveofcloths" , 
  "description": "88% premium cotton which is breathable and comfortable. No color fading. Minimal shrinkage with a guarantee that it will not lose the original shape and size. 2 times softer. 4 times stronger.",
  "color": "black",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/a/n/g/l-coc0149b-cave-of-cloths-original-imaghd7hbszcpuxq.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/u/t/l/l-coc0149b-cave-of-cloths-original-imaghd7hhnhvy23f.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/3/h/x/m-coc0002hab-cave-of-cloths-original-imaggxa2vscjwvkn.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/a/n/g/l-coc0149b-cave-of-cloths-original-imaghd7hbszcpuxq.jpeg?q=70"
  },
  
  {
    "id":6 ,
    "rating": 2 , 
  "categories": "jacket",
  "title": "Men Full Sleeve Printed Hooded Sweatshirt",
  "price": 99,
  "realPrice":190 , 
  "brand" :"caveofcloths" , 
  "description": "88% premium cotton which is breathable and comfortable. No color fading. Minimal shrinkage with a guarantee that it will not lose the original shape and size. 2 times softer. 4 times stronger.",
  "color": "white",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/r/3/q/xxl-coc0151w-cave-of-cloths-original-imaghfheycshhm4s.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/4/1/s/l-coc0143haw-cave-of-cloths-original-imagh6gxfxxrkfmx.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/i/n/p/xl-coc0151b-cave-of-cloths-original-imaghfh5nnudjezx.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/r/3/q/xxl-coc0151w-cave-of-cloths-original-imaghfheycshhm4s.jpeg?q=70"
  }, 
  
  {
    "id":7 ,
    "rating": 5  , 
  "categories": "coatpant",
  "title": "Unstitched Viscose Rayon Suit Fabric Solid",
  "price": 899,
  "realPrice":999 , 
  "brand" :"lorex" , 
  "description": "CAN USE IN 5 STYLES WITH FASHION, PANTS , WAISTCOAT, PANT-WAISTCOAT, 2 PIECE ,3PIECE",
  "color": "blue",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/l5h2xe80/fabric/c/e/b/no-3-m-unstitched-na-3pieceblacksuit-lorex-original-imagg4wzdrhzfvcn.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/d/l/u/no-3-m-unstitched-na-3pieceblacksuit-lorex-original-imaghn7yzz3x6vu6.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/9/p/l/no-3-m-unstitched-na-3piece-lorex-original-imagkn5g2mq5nhxv.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/l5h2xe80/fabric/c/e/b/no-3-m-unstitched-na-3pieceblacksuit-lorex-original-imagg4wzdrhzfvcn.jpeg?q=70"
  },
  
  {
    "id":8 ,
    "rating": 5  , 
  "categories": "coatpant",
  "title": "Unstitched Viscose Rayon Suit Fabric Self Design",
  "price": 109,
  "realPrice":400 , 
  "brand" :"lorex" , 
  "description": "COMES IN CARDBOARD PACKING, GOOD FOR GIFTING ALSO, CAN USE BLAZER & PANTS SPERATELY AFTER STICHING",
  "color": "black",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/k/p/n/no-2-m-unstitched-na-black-suit-fabric-lorex-original-imaghhy9uf3xpvmc.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/l4zxn680/fabric/2/x/b/no-1-m-unstitched-na-blackwaistcoat-lorex-original-imagfs5chvgnmjwz.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/q/d/h/no-1-70-m-unstitched-na-blacklycrauit-fabric-lorex-original-imagkd4krv6mhj8t.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/k/p/n/no-2-m-unstitched-na-black-suit-fabric-lorex-original-imaghhy9uf3xpvmc.jpeg?q=70"
  },
  
  {
    "id":9 ,
    "rating": 4  , 
  "categories": "coatpant",
  "title": "Unstitched Polycotton Suit Fabric Solid",
  "price": 199,
  "realPrice":200 , 
  "brand" :"lorex" , 
  "description": "Lorex brands which deals in best quality of fabrics , we deals in finest quality of plain slub textured fabric for an ideal suit an MEN's FASHION DESIRE which comes in an3.00 meters pack contains 1.8meter for blazer or coat & 1.2 meters for pants or trouser.it is suitable for 6.5feet person & upto 42 size , content of fabric ( POLY VISCOSE ) which is best in the market with its smooth & shiny lusture and gives the soft feel after wearing, which is suitable in every season. color of the fabric is PURE BLACK which may Slightly Vary Due to Photographic Effect Lorex fabrics always gives u an stunning look and branded feeling, The Fabric is best for personal use as well as gifting in wedding , parties ,anniversary etc. with best human satisfaction.",
  "color": "black",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/l5fnhjk0/fabric/t/2/j/no-1-80-m-unstitched-na-blacksuitsb-lorex-original-imagg4a5vanbmwnx.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/l4zxn680/fabric/2/x/b/no-1-m-unstitched-na-blackwaistcoat-lorex-original-imagfs5chvgnmjwz.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/l4zxn680/fabric/s/9/f/no-1-m-unstitched-na-blackwaistcoat-lorex-original-imagfs5cgsrs4szm.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/l5fnhjk0/fabric/t/2/j/no-1-80-m-unstitched-na-blacksuitsb-lorex-original-imagg4a5vanbmwnx.jpeg?q=70"
  },
  
  {
    "id":10 ,
    "rating": 5  , 
  "categories": "coatpant",
  "title": "Unstitched Viscose Rayon Suit Fabric Solid",
  "price": 500,
  "realPrice":600 , 
  "brand" :"lorex" , 
  "description": "Lorex brands which deals in best quality of fabrics , we deals in finest quality of plain slub textured fabric for an ideal suit an MEN's FASHION DESIRE which comes in an3.00 meters pack contains 1.8meter for blazer or coat & 1.2 meters for pants or trouser.it is suitable for 6.5feet person & upto 42 size , content of fabric ( POLY VISCOSE ) which is best in the market with its smooth & shiny lusture and gives the soft feel after wearing, which is suitable in every season. color of the fabric is SKY BLUE which may Slightly Vary Due to Photographic Effect Lorex fabrics always gives u an stunning look and branded feeling, The Fabric is best for personal use as well as gifting in wedding , parties ,anniversary etc. with best human satisfaction.",
  "color": "blue",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/fabric/f/b/y/no-1-70-m-unstitched-na-sky-blue-suit-fabric-lorex-original-imagcum7tawzfpdx.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/g/x/t/no-2-m-unstitched-na-sky-blue-suit-fabric-lorex-original-imagkrqqfuzzhdyp.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/fabric/u/f/p/no-2-m-unstitched-na-sky-blue-suit-fabric-lorex-original-imagkrqqwy2jxjzn.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/l4oi4cw0/fabric/f/b/y/no-1-70-m-unstitched-na-sky-blue-suit-fabric-lorex-original-imagcum7tawzfpdx.jpeg?q=70"
  },
  
  {
    "id":11 ,
    "rating": 3 , 
  "categories": "coatpant",
  "title": "Self Design Men Waistcoat",
  "price": 399,
  "realPrice":600 , 
  "brand" :"lorex" , 
  "description": "Premium jackets wear by bran LOREX in with ROYALE quality for rich class looks best for weddings and parties , read size chart before order :- Your Chest must be between 32-36 inches & Your waist must be between 28-32 inches . best for boys with age of 18-25, WITH DETAILED STICHING",
  "color": "blue",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/waistcoat/d/e/2/m-premium-waistcoats-lorex-original-imagkpxhj6hzgck7.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/waistcoat/r/c/h/m-premium-waistcoats-lorex-original-imagkpxhvgpafxej.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/waistcoat/k/l/v/m-premium-waistcoats-lorex-original-imagkpxhyq5pejka.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/xif0q/waistcoat/d/e/2/m-premium-waistcoats-lorex-original-imagkpxhj6hzgck7.jpeg?q=70"
  },
  
  {
    "id":12 ,
    "rating": 3  , 
  "categories": "coatpant",
  "title": "Self Design Men Waistcoat",
  "price": 249,
  "realPrice": 549 , 
  "brand" :"lorex" , 
  "description": "Premium jackets wear by bran LOREX in with ROYALE quality for rich class looks best for weddings and parties , read size chart before order :- Your Chest must be between 32-36 inches & Your waist must be between 28-32 inches . best for boys with age of 18-25, WITH DETAILED STICHING",
  "color": "blue",
  "discount": "1",
  "reviews" : ["Great Product" , "Value for money" ] , 
  "Images": [  {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/waistcoat/n/6/a/m-premium-waistcoats-lorex-original-imagkpxhvfjpvgea.jpeg?q=70" }
   , {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/waistcoat/q/n/j/m-premium-waistcoats-lorex-original-imagkpxhakyfj54p.jpeg?q=70"} ,
   {"imageFront":"https://rukminim1.flixcart.com/image/832/832/xif0q/waistcoat/x/l/5/m-premium-waistcoats-lorex-original-imagkpxhktbzatzh.jpeg?q=70"} ] , 
  
  "mainImage":"https://rukminim1.flixcart.com/image/832/832/xif0q/waistcoat/n/6/a/m-premium-waistcoats-lorex-original-imagkpxhvfjpvgea.jpeg?q=70"
  },

  
  ]

  return (
    <Box>
      {/* NavBar  ------- */}
      <Box border="2px solid red" width="100%" height="10vh" display="flex" justifyContent="space-evenly" >
     <Link to="/"> <Box>Home Page</Box> </Link>
     <Link to="/adminPage"> <Box>Admin Page</Box> </Link>
      </Box> 

      {/*  Main Code started from here ---------------------- */}
         
         <Box height="auto" mb="120px" border="2px  red">
            <Box id='mainImageNav'>
              <Button color="#4C4C4C" border="1px solid #4C4C4C" borderRadius="2px" p="0px 25px" position="absolute" bottom={{base:"3%", sm: "4%", md: "8%", lg: "8%",xl: "45px",'2xl': "45px"}} left={{base:"10%", sm: "8.4%", md: "5.5%", lg: "5.5%",xl: "85px",'2xl': "85px"}}>SHOP MEN</Button>
            </Box>
          
          {/*  After MAIN IMAGE HEADING ----------------- */}
            <Box width={{base:"99%", sm: "95%", md: "75%", lg: "55%",xl: "36%",'2xl': "36%"}} border="2px  red" m="45px auto 25px auto" textAlign="center" >
              <Heading color="#333333">Spring Adventures Are Calling!</Heading>
              <Text color="#97857e">Outfit yourself with tech-enhanced essentials built for superior
performance in unpredictable conditions.</Text>
            </Box>

            {/*After heading Main Images -------------------- */}
            <Box border="2px  red" height="auto" display="flex" justifyContent="space-evenly" flexDirection={{base:"column", sm: "row", md: "row", lg: "row",xl: "row",'2xl': "row"}} p="0px"   >

              {
                ImageBox.length > 0 && ImageBox.map((item,id)=>{
                  return (
                    <Box id="mainImageBoxThree" border="2px  red"  textAlign="center" key={id}>
                      <Img src={item.image} width="100%"></Img>
                      <Text fontWeight="600" color="#343333" fontSize="15px" mt="4px">{item.text}</Text>
                    </Box>
                  )
                })
              }

            </Box>

            {/*  Sale Box started from here ------------------- */} 

            <Box  border="2px   red" height="auto"  textAlign="center" m="4%" >
              <Img src='https://github.com/Durgesh9871/ReadmeImages/blob/main/Fashion_Gallery/Sale_fashion_Galeery.png?raw=true' m="auto"></Img>
              <Button id="mensButtonHover" color="white" mt="14px" border="1px solid #333333"  backgroundColor="#333333" borderRadius="1px" p="0px 27px" >SHOP MEN</Button>
            </Box>
             

             {/* After sale box images----------- */}

             <Box border="2px  red" height="auto" display="flex" justifyContent="space-evenly" flexDirection={{base:"column", sm: "row", md: "row", lg: "row",xl: "row",'2xl': "row"}} p="0px"  mb="40px" >

{
  ImageDetails.length > 0 && ImageDetails.map((item,id)=>{
    return (
      <Box id="mainImageBoxThree" border="2px  red"  textAlign="center" key={id}>
        <Img src={item.image} width="100%"></Img>
        <Text fontWeight="600" color="#343333" fontSize="15px" mt="4px">{item.text}</Text>
        <Text fontWeight="400" color="#b2b4b7" fontSize="14px" mt="4px">{item.para}</Text>

      </Box>
    )
  })
}

</Box>


{/*  React carousel starts from here ----------------------------------- */}


      <Box>
        <Text textAlign="center" fontWeight="600" fontSize="25px" mb="40px"><u>Fashion Gallery</u></Text> 
          
        <Box ml={{base:"2px", sm: "20px", md: "20px", lg: "20px",xl: "20px",'2xl': "20px"}} >
     <Carousel responsive={responsive} > 
    
     {getData.length > 0 && getData.map((item , i)=>{
       
       const total = Math.floor(+(item.realPrice) * 100 )
       const spend = Math.floor(+(item.price) * 100 )
       const amount =  Math.floor((spend/total)*100)
       const ans = 100 - amount 

       return (
        
        <div className='image' key={i}>
       <Image className='img' src={item.mainImage} alt={item.categories} boxSize={{base:"350px", sm: "350px", md: "350px", lg: "350px",xl: "350px",'2xl': "350px"}}  shadow="2xl" cursor="pointer" />
      
       <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left" mt="12px">{item.title}</Heading>
       <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left"  >{item.categories}</Text>

       <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">${item.price}</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">${item.realPrice}</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({ans}% off)</Text>
        </Box>
       </div>
          )
     })}
    
 
   </Carousel>
     </Box>
      </Box>



         </Box>
     
    </Box>
  )
}

export  {MainHomePage}
