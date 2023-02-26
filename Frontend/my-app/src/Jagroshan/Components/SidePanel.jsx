import {
  Container,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PriceSlider from "./PriceSlider";
import { useSearchParams } from "react-router-dom";
import { Sort } from "./Sort";

export const SidePanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setprice] = React.useState("2000");

  let initial = searchParams.getAll("categories");
  const [categories, setCategory] = React.useState(initial || []);

  let initialColor = searchParams.getAll("color");
  const [color, setColor] = React.useState(initialColor || []);

  let initialOrder = searchParams.get("order");
  const [order, setOrder] = React.useState(initialOrder || []);

  const handleCheckbox=(el)=>{
    let updateCategory=[...categories]
    if(updateCategory.includes(el.target.value)){
        updateCategory.splice(updateCategory.indexOf(el.target.value),1);
    }
    else{
        updateCategory.push(el.target.value);
    }
    setCategory(updateCategory)
}

  const handleColors=(el)=>{
    let updateColor=[...color]
    if(updateColor.includes(el.target.value)){
        updateColor.splice(updateColor.indexOf(el.target.value),1);
    }
    else{
        updateColor.push(el.target.value);
    }
    setColor(updateColor)
  }

  React.useEffect(() => {
    const params = {
      categories,
      color
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [categories, order, color]);

  return (
    <div>
      <VStack border={"1px"} alignItems={"start"} paddingX={"3"}>

        <Sort setOrder={setOrder} orderval={order} />

        <h3>Category</h3>
        <div>
          <input
            type="checkbox"
            value="shirts"
            onChange={handleCheckbox}
            checked={categories.includes("shirts")}
          />
          <label>  Shirt</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="jacket"
            onChange={handleCheckbox}
            checked={categories.includes("jacket")}
          />
          <label>  Jacket</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="coatpant"
            onChange={handleCheckbox}
            checked={categories.includes("coatpant")}
          />
          <label>  Coat-Pant</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="tshirts"
            onChange={handleCheckbox}
            checked={categories.includes("tshirts")}
          />
          <label>  T-Shirt</label>
        </div>

        <Text>Price</Text>
        <Container flexDirection={"row"}>
          <PriceSlider setprice={setprice} />
        </Container>

        <h3>Color</h3>
        <div>
          <input
            type="checkbox"
            value="black"
            onChange={handleColors}
            checked={color.includes("black")}
          />
          <label>  Black</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="blue"
            onChange={handleColors}
            checked={color.includes("blue")}
          />
          <label>  Blue</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="grey"
            onChange={handleColors}
            checked={color.includes("grey")}
          />
          <label>  Grey</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="white"
            onChange={handleColors}
            checked={color.includes("white")}
          />
          <label>  White</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="red"
            onChange={handleColors}
            checked={color.includes("red")}
          />
          <label>  Red</label>
        </div>
      </VStack>
    </div>
  );
};
