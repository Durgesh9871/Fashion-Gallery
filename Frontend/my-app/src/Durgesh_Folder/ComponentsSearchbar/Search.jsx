import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchBar.css';
import { Box, Input, SimpleGrid } from '@chakra-ui/react';
import { DisplayProductMainData } from '../Components/DisplayProductMainData';
import { SearchIcon } from '@chakra-ui/icons';
import { LoadingIndicator } from './LoadingIndicator';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProduct } from '../../Redux/Laptop_reducer/action';


const Search = () => {
	// const [loading, setLoading] = useState(false);
	// const [post, setPost] = useState([]);
	const [searchTitle, setSearchTitle] = useState('');
    
	const {isError ,loading,post} = useSelector((state) => {
		return {
			loading: state.LaptopReducer.loading ,
		  post:state.LaptopReducer.post ,
		  isError :state.LaptopReducer.isError ,
		}
	})   
  const dispatch = useDispatch()
	useEffect(() => {
	    dispatch(getDataProduct)
	}, []);
   
	// console.log(post)
	
	return (
		<Box className="container">
			<Box className="input">
				<SearchIcon fontSize="20px" position="relative" left="30px" color="#fff"  />
				<Input
					shadow="sm"
					pl={9}
					fontSize="20px"
					type="search"
					width={{
						base: '80%',
						sm: '60%',
						md: '64%',
						lg: '50%',
						xl: '50%',
						'2xl': '50%',
					}}
					color="#fff"
					placeholder="Search the Products"
					onChange={(e) => setSearchTitle(e.target.value)}
					height="53px"
					border="2px solid #F0F0F0" focusBorderColor="#F0F0F0" 
				/>
			</Box>

			{loading && <LoadingIndicator />}

			<Box
				id="DisplayDataBox"
				style={{ border: '1px  green', height: 'auto', width: '100%' }}
			>
				<SimpleGrid
					columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3, '2xl': 3 }}
					spacingY={10}
				>
					{!loading &&
						post
							.filter((value) => {
								if (searchTitle === '') {
									return value;
								} else if (
									value.title.toLowerCase().includes(searchTitle.toLowerCase())
								) {
									return value;
								}
							})
							.map((item) => {
								return (
									
										<DisplayProductMainData
											key={item.id}
											id={item.id}
											src={item.Images}
                                            mainImage={item.mainImage}
											name={item.title}
											model={item.brand}
											price={item.price}
											review={item.rating}
											realPrice={item.realPrice}
											isLaptopLoading={true}
											allData={item}
										/>
								
								);
							})}
				</SimpleGrid>
			</Box>
		</Box>
	);
};

export { Search };
