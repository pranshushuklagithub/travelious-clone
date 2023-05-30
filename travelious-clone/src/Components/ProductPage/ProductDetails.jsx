import { Box,Flex,Grid,Heading,Image,Text,Input,Button,useDisclosure,UnorderedList,ListItem,IconButton } from "@chakra-ui/react";
import {StarIcon,AddIcon,MinusIcon,ChevronUpIcon, SearchIcon,} from "@chakra-ui/icons"
import { useState,useEffect } from "react";
import { SendEnquiryModal } from "./SendEnquiryModal";
import { Accordian } from "./Accordian";
import { useParams } from "react-router-dom";
import { singleProductAction } from "../../Redux/action";
import { useDispatch,useSelector} from "react-redux";

function ProductDetails() {
let[adult,setAdult] = useState(0);
let[child,setChild] = useState(0);
const { isOpen, onOpen, onClose } = useDisclosure()
const dispatch=useDispatch()
const {id} = useParams();


useEffect(()=>{
  handleSingleProduct(productType,id)
},[])

const productType= useSelector((store)=>{
  return store.productReducer.productType
})
const property= useSelector((store)=>{
  return store.singleProductReducer.singleProduct
})
const cPrice = Math.floor((property.price*10)/100)


const handleSingleProduct=(type,id)=>{
    dispatch(singleProductAction(type,id))
}




    const prop = {image: 'https://bit.ly/2Z4KKcF',
    description:'For a travel site, this means that design can be the determining factor in whether a visitor trusts recommendations and information.And considering the significant investments that go into planning a trip, trust is essential.It can make or break a traveler’s decision to take a certain tour, stay at a certain hotel, or even visit a city or country altogether.Plus, beyond serving as a trustworthy source of inspiration, a travel site also needs to give would-be travelers all the information they need to arrange their travel plans.Once a visitor is convinced that they need to see the sights in the photos for themselves, it should be easy for them to plan their trip.',
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: 900,
    strikedOffPrice:1100,
    reviewCount: 34,
    rating: 4,
  }
    return <Box>
      <Flex p="20px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" w="95%" m="auto" justifyContent="space-between">
                <Box  w="60%"  textAlign="left" p="30px">
                    <Image src={property.image} borderRadius="20px" w="100%" mb="20px"></Image>
                    <Text mb="20px">{prop.description}</Text>
                </Box>

                <Box textAlign="left" p="30px" w="40%" justifyContent="center">
                <Heading mb="20px">{property.title}</Heading>
                <Flex  mt='2' alignItems='center' mb="20px">
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'tomato' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      50+ reviews
                    </Box>
                  </Flex>
                  <Text fontSize="xl">Starting from</Text>
                  <Flex w="45%" justify="space-between">
                  <Heading> ₹  {property.price}</Heading>
                  <Heading display="flex" gap="10px"> ₹ <Text textDecoration="line-through">{property.price+cPrice}</Text></Heading>
                  </Flex>
                  <Text fontSize="xl">Per adult</Text>
                  <Grid gridTemplateColumns="repeat(2,1fr)" w="60%" p="20px" h="350px" justifyContent="space-evenly">
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="20px" textAlign="center">
                        <Image src="https://admin.banbanjara.com/public/frontend/uploads/masters/1560171111727-accommodationicon.svg" m="auto" mb = "40px" h="40px"></Image>
                        <Text>Accommodation</Text>
                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="20px" textAlign="center">
                        <Image src="https://admin.banbanjara.com/public/frontend/uploads/masters/1560171281311-activitiesicon.svg" m="auto" mb = "40px" h="40px"></Image>
                        <Text>Activities</Text>
                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"p="20px" textAlign="center">
                        <Image src="https://admin.banbanjara.com/public/frontend/uploads/masters/1560171322872-guideicon.svg" m="auto" mb = "40px" h="40px"></Image>
                        <Text>Guide</Text>
                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" p="20px" textAlign="center">
                        <Image src="https://admin.banbanjara.com/public/frontend/uploads/masters/1560171393204-mealicon.svg" m="auto" mb = "40px" h="40px"></Image>
                        <Text>Meals</Text>
                    </Box>
                  </Grid>
                  <Flex  w="70%" h="70px" gap="10px" justify="space-evenly" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" ml="20px">
                        <Box display="flex" gap="10px" h="70px" alignItems="center"  p="10px">
                          <Image src="https://banbanjara.com/assets/images/day-icon.png" w="40px" h="40px"></Image>
                          <Text fontSize="xl">4 Days  |</Text>
                        </Box>
                        <Box display="flex" gap="10px" h="70px" alignItems="center"  p="10px">
                          <Image src="https://banbanjara.com/assets/images/night-icon.png" w="40px" h="40px"></Image>
                          <Text fontSize="xl">3 Nights  |</Text>
                        </Box>
                        <Box display="flex" gap="10px" h="70px" alignItems="center"  p="10px">
                          <Image src="https://banbanjara.com/assets/images/location-icon.png" w="40px" h="40px"></Image>
                          <Text fontSize="xl">Manali</Text>
                        </Box>
                  </Flex>
                </Box>
            </Flex>

            <Flex gap="20px" bg="teal" alignItems="center" p="20px" h="90px" justify="space-evenly">
                <Input placeholder="Select Date and Time" size="md" type="datetime-local" w="15%" borderColor="black" bg="white"/>
                <Flex w="120px" h="50px">
                  <Text mr="10px" fontSize="lg" alignItems="center" p="10px">Adult </Text>
                  <Box display="flex" gap="10px" alignItems="center">
                    <Button bg="tomato" color="white" onClick={()=>{
                    setAdult(adult+1);
                  }}  _hover={{ bg: 'green.300',color:"black" }}><AddIcon/></Button>
                  <Text fontSize="lg">{adult<0?setAdult(0):adult}</Text>
                  <Button bg="tomato" color="white" onClick={()=>{
                    setAdult(adult-1);
                  }}  _hover={{ bg: 'green.300',color:"black" }}><MinusIcon/></Button></Box>
                </Flex>

                <Flex w="120px" h="50px" ml="70px">
                  <Text mr="10px" fontSize="lg" alignItems="center" p="10px">Child </Text>
                  <Box display="flex" gap="10px" alignItems="center">
                    <Button bg="tomato" color="white" onClick={()=>{
                    setChild(child+1);
                  }}  _hover={{ bg: 'green.300',color:"black" }}><AddIcon/></Button>
                  <Text fontSize="lg">{child<0?setChild(0):child}</Text>
                  <Button bg="tomato" color="white" onClick={()=>{
                    setChild(child-1);
                  }}  _hover={{ bg: 'green.300',color:"black" }}><MinusIcon/></Button></Box>
                </Flex>

                <Flex gap="20px">
                  <Button _hover={{ bg: 'green.300',color:"black" }} bg="tomato" color="white" size="lg">Book Now</Button>
                  <Button _hover={{ bg: 'green.300', color:"black"}} bg="tomato" color="white" onClick={onOpen} size="lg">Send Enquiry</Button>
                  {onOpen?<SendEnquiryModal  onClose={onClose}  isOpen={isOpen}/>:false}
                </Flex>
            </Flex> 

            <Box  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" w="95%" m="auto">
              <Accordian/>


              <Flex w="100%" justify="space-between" gap="20px" p="20px">
                <Box w="60%">
                <Box h="85px" bg="gray.100" w="100%" p="20px" textAlign="left" alignItems="center" fontSize="3xl" fontWeight="bold">
                  Confirmation Policy
              </Box>
              <Box p="20px">
                <UnorderedList color="tomato" textAlign="left" fontSize="3xl">
                  <ListItem ><Text color="black" fontSize="2xl">Upon booking, the traveller will receive a confirmation voucher via email, within 24 hours.</Text></ListItem>
                  <ListItem ><Text color="black" fontSize="2xl">In the special cases of slots not being available, feasible alternatives will be provided to the customer, in regards to the customer’s preference. In such cases, a new voucher would be sent via email, consisting of the new travel details.</Text></ListItem>
                </UnorderedList>
              </Box>


              <Box h="85px" bg="gray.100" w="100%" p="20px" textAlign="left" alignItems="center" fontSize="3xl" fontWeight="bold">
              Cancellation Policy
              </Box>
              <Box p="20px">
                <UnorderedList color="tomato" textAlign="left" fontSize="3xl">
                  <ListItem ><Text color="black" fontSize="2xl">Any cancellation made before 25 days prior to the date of departure, would levy a 50% of total tour cost as cancellation charges.</Text></ListItem>
                  <ListItem ><Text color="black" fontSize="2xl">Any cancellation made within 0-25 days prior to the date of departure, would levy a 100% of total tour cost as cancellation charges.</Text></ListItem>
                  <ListItem ><Text color="black" fontSize="2xl">Due to any restrictions such as sudden government policies or regulations, health hazards, medical emergencies, or unprecedented weather conditions, activities and tours may be nonoperational and be cancelled. In cases such as these, operators will attempt to cater to the traveller an alternate, which is feasible in nature. However, any refund would not be catered.</Text></ListItem>
                </UnorderedList>
                
              </Box>
              </Box>


              <Box >
                <Image  src="https://admin.banbanjara.com/public/frontend/uploads/product/1633584633283-KEDARKANTHATREKWEBSITEADD.jpg"h="100%" borderRadius="50px"></Image>
              </Box>

              </Flex>

              
              <IconButton color='white' bg = "tomato" icon={<ChevronUpIcon />}  _hover={{ bg: 'green.300',color:"black" }} fontSize="xx-large"  position="-webkit-sticky"  overflow="revert" onClick={()=>{
                    alert("hello")
                  }}/>
            </Box> 

            
             
    </Box>
}

export default ProductDetails;