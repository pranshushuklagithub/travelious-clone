import { Box,Flex,Grid,Heading,Image,Text,Input,Button,useDisclosure } from "@chakra-ui/react";
import {StarIcon,AddIcon,MinusIcon} from "@chakra-ui/icons"
import { useState } from "react";
import { SendEnquiryModal } from "./SendEnquiryModal";
import { Accordian } from "./Accordian";


function ProductDetails() {
let[adult,setAdult] = useState(0);
let[child,setChild] = useState(0);
const { isOpen, onOpen, onClose } = useDisclosure()



    const property = {image: 'https://bit.ly/2Z4KKcF',
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
                    <Text mb="20px">{property.description}</Text>
                </Box>

                <Box textAlign="left" p="30px" w="40%" justifyContent="center">
                <Heading mb="20px">{property.title}</Heading>
                <Flex  mt='2' alignItems='center' mb="20px">
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? 'orange' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {property.reviewCount} reviews
                    </Box>
                  </Flex>
                  <Text fontSize="xl">Starting from</Text>
                  <Flex w="30%" justify="space-between">
                  <Heading> ₹  {property.formattedPrice}</Heading>
                  <Heading display="flex" gap="10px"> ₹ <Text textDecoration="line-through">{property.strikedOffPrice}</Text></Heading>
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
                    <Button bg="tomato" onClick={()=>{
                    setAdult(adult+1);
                  }}  _hover={{ bg: 'green.300' }}><AddIcon/></Button>
                  <Text fontSize="lg">{adult<0?setAdult(0):adult}</Text>
                  <Button bg="tomato" onClick={()=>{
                    setAdult(adult-1);
                  }}  _hover={{ bg: 'green.300' }}><MinusIcon/></Button></Box>
                </Flex>

                <Flex w="120px" h="50px" ml="70px">
                  <Text mr="10px" fontSize="lg" alignItems="center" p="10px">Child </Text>
                  <Box display="flex" gap="10px" alignItems="center">
                    <Button bg="tomato" onClick={()=>{
                    setChild(child+1);
                  }}  _hover={{ bg: 'green.300' }}><AddIcon/></Button>
                  <Text fontSize="lg">{child<0?setChild(0):child}</Text>
                  <Button bg="tomato" onClick={()=>{
                    setChild(child-1);
                  }}  _hover={{ bg: 'green.300' }}><MinusIcon/></Button></Box>
                </Flex>

                <Flex gap="20px">
                  <Button _hover={{ bg: 'green.300' }} bg="tomato" size="lg">Book Now</Button>
                  <Button _hover={{ bg: 'green.300' }} bg="tomato" onClick={onOpen} size="lg">Send Enquiry</Button>
                  {onOpen?<SendEnquiryModal  onClose={onClose}  isOpen={isOpen}/>:false}
                </Flex>
            </Flex> 

            <Box  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" w="95%" m="auto">

              <Accordian/>
              </Box> 
             
    </Box>
}

export default ProductDetails;