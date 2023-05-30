import { Box,Button,Image, Grid} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons"
import { productAction } from "../../Redux/action";
import { useSelector,useDispatch } from "react-redux";
import SortingControls from "./SortingControls";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";



function Products() {
  const [sort,setSort] = useState("asc");


  const disptach = useDispatch()

  const handleSort=(val)=>{
      setSort(val)
  }
  const productType= useSelector((store)=>{
    return store.productReducer.productType
  })

  const products= useSelector((store)=>{
    return store.productReducer.products
  })
  const navigate= useNavigate();

  useEffect(()=>{
    handleProducts(productType)
  },[sort])
  // console.log(products)

  const handleProducts = (type)=>{
    disptach(productAction(type,sort))
  }
    
    //     const property = [
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //       imageAlt: 'Rear view of modern home with pool',
    //       beds: 3,
    //       baths: 2,
    //       title: 'Modern home in city center in the heart of historic Los Angeles',
    //       formattedPrice: '$1,900.00',
    //       reviewCount: 34,
    //       rating: 4,
    //     },
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    //     },
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    //     },
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    //     },
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    //     },
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    //     },
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    //     },
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    //     },
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    //     },
    //     {imageUrl: 'https://bit.ly/2Z4KKcF',
    //     imageAlt: 'Rear view of modern home with pool',
    //     beds: 3,
    //     baths: 2,
    //     title: 'Modern home in city center in the heart of historic Los Angeles',
    //     formattedPrice: '$1,900.00',
    //     reviewCount: 34,
    //     rating: 4,
    //     },

    // ]
    return (
        <Box w="90%" m="auto">
          <SortingControls handleSort={handleSort}/>

          <Grid gridTemplateColumns="repeat(3,1fr)" gap = "20px" p="20px">
        {
            products.map((property)=>{
                return (<Box w="100%" h="500px" borderWidth='1px' borderRadius='20px' overflow='hidden' textAlign="center">
                <Image src={property.image} alt={property.imageAlt} w="100%" h="300px" borderBottomRadius="20px"/>
                <Box p='6'>
                  
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {property.title}
                  </Box>
          
                  <Box>
                    {property.price}
                    <Box as='span' color='gray.600' fontSize='sm'>
                      / wk
                    </Box>
                  </Box>
          
                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      50+ reviews
                    </Box>
                  </Box>
                </Box>
                
                <Button bg="tomato" color="white" onClick={()=>{
                    // alert(`Sorry! Page is not working.${property.id}`)
                    navigate(`/productDetails/${property.id}`)
                }} >View Details</Button>
              </Box>)
            })
        }
        </Grid>
        </Box>
        )
}

export default Products;