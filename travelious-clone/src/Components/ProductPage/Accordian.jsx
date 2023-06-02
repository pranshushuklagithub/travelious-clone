import {Accordion,AccordionItem,AccordionButton,AccordionPanel,Box,ListItem,UnorderedList,Image,Text} from '@chakra-ui/react'
import { useState } from 'react'

export const Accordian=({img})=>{
    let[option,setOption] = useState({
        stayType:false,
        meals:false,
        activity:false,
        inclusion:false,
        thingToCarry:false
    })
    
    return <Box w="100%" textAlign="left" p="30px">
        <Accordion display="flex" w="100%"  justifyContent="space-evenly" h="500px">
  <AccordionItem w="33%" p="15px">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="xx-large" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:!option.stayType,meals:false,activity:false,inclusion:false,thingToCarry:false})
      }} borderRadius="20px">
      Stay Typ
      </AccordionButton>
    </h2>
    {
    option.stayType?
    <AccordionPanel pb={4}>
    
    <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
    
    </AccordionPanel>:<Image src={img} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>}
    
  </AccordionItem>

  <AccordionItem w="33%" p="15px">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="xx-large" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:false,meals:!option.meals,activity:false,inclusion:false,thingToCarry:false})
      }} borderRadius="20px">
      Meals
      </AccordionButton>
    </h2>
    {
        option.meals?<AccordionPanel pb={4}>
        <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src={img} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>
    }
  </AccordionItem>

  <AccordionItem w="33%" p="15px">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="xx-large" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:false,meals:false,activity:!option.activity,inclusion:false,thingToCarry:false})
      }} borderRadius="20px">
      Activity
      </AccordionButton>
    </h2>
    {
        option.activity?<AccordionPanel pb={4}>
        <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src={img} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>
    }
  </AccordionItem>


  <AccordionItem w="33%" p="15px">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="xx-large" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:false,meals:false,activity:false,inclusion:!option.inclusion,thingToCarry:false})
      }} borderRadius="20px">
      Inclusions
      </AccordionButton>
    </h2>
    {
        option.inclusion?<AccordionPanel pb={4}>
        <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src={img} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>
    }
  </AccordionItem>
  <AccordionItem w="33%" p="15px">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300',color:"black" }} fontSize="xx-large" textAlign="center" justifyContent="center" bg="tomato" color="white" onClick={()=>{
        setOption({stayType:false,meals:false,activity:false,inclusion:false,thingToCarry:!option.thingToCarry})
      }} borderRadius="20px">
      Things To Carry
      </AccordionButton>
    </h2>
    {
        option.thingToCarry?<AccordionPanel pb={4}>
        <UnorderedList color="tomato" fontSize="3xl">
            <ListItem><Text color="black" fontSize="xl">For the duration of this adventure, you will be staying in camps on a sharing basis.</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">We will provide you with adequate camping gear like waterproof tents and sleeping bags</Text></ListItem>
            <ListItem><Text color="black" fontSize="xl">All our provisions follow the strictest standards of hygiene.</Text></ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src={img} w="100%" h="300px" mt="20px" borderRadius="20px"></Image>
    }
  </AccordionItem>
</Accordion>
    </Box>
}