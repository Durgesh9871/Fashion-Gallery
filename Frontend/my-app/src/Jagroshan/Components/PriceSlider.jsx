import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function PriceSlider({setprice}) {
  const [sliderValue, setSliderValue] = useState(50);
  // console.log(sliderValue)  
  return (
    <>
      <Box pt={6} pb={2}>
        <Slider
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
          onChangeEnd={() => setprice(sliderValue * 10)}
          color="red"
        >
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="#ffff"
            color="#3b464c"
            fontSize="17px" fontWeight="500" 
            mt="-10"
            ml="-5"
            w="12"
          >
            {sliderValue * 10}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </>
  );
}
