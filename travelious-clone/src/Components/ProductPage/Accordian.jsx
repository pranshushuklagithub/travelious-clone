import {Accordion,AccordionItem,AccordionButton,AccordionPanel,Box,ListItem,UnorderedList,Image} from '@chakra-ui/react'
import { useState } from 'react'

export const Accordian=()=>{
    let[option,setOption] = useState({
        stayType:false,
        meals:false,
        activity:false,
        inclusion:false
    })
    
    return <Box w="60%" textAlign="left" p="30px">
        <Accordion display="flex" w="100%"  justifyContent="space-evenly" h="400px">
  <AccordionItem w="33%" p="15px">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300' }} fontSize="xx-large" textAlign="center" justifyContent="center" bg="tomato" onClick={()=>{
        setOption({stayType:!option.stayType,meals:false,activity:false,inclusion:false})
      }} borderRadius="20px">
      Stay Type
      </AccordionButton>
    </h2>
    {
    option.stayType?
    
    <AccordionPanel pb={4}>
    
        <UnorderedList>
        <ListItem>For the duration of this adventure, you will be staying in camps on a sharing basis.</ListItem>
        <ListItem>We will provide you with adequate camping gear like waterproof tents and sleeping bags</ListItem>
        <ListItem>All our provisions follow the strictest standards of hygiene.</ListItem>
    </UnorderedList>
    
    </AccordionPanel>:<Image src='https://bit.ly/2Z4KKcF' w="100%" h="250px" mt="20px"></Image>}
    
  </AccordionItem>

  <AccordionItem w="33%" p="15px">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300' }} fontSize="xx-large" textAlign="center" justifyContent="center" bg="tomato" onClick={()=>{
        setOption({stayType:false,meals:!option.meals,activity:false,inclusion:false})
      }} borderRadius="20px">
      Meals
      </AccordionButton>
    </h2>
    {
        option.meals?<AccordionPanel pb={4}>
        <UnorderedList>
            <ListItem>For the duration of this adventure, you will be staying in camps on a sharing basis.</ListItem>
            <ListItem>We will provide you with adequate camping gear like waterproof tents and sleeping bags</ListItem>
            <ListItem>All our provisions follow the strictest standards of hygiene.</ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src='https://bit.ly/2Z4KKcF' w="100%" h="250px" mt="20px"></Image>
    }
  </AccordionItem>

  <AccordionItem w="33%" p="15px">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300' }} fontSize="xx-large" textAlign="center" justifyContent="center" bg="tomato" onClick={()=>{
        setOption({stayType:false,meals:false,activity:!option.activity,inclusion:false})
      }} borderRadius="20px">
      Activity
      </AccordionButton>
    </h2>
    {
        option.activity?<AccordionPanel pb={4}>
        <UnorderedList>
            <ListItem>For the duration of this adventure, you will be staying in camps on a sharing basis.</ListItem>
            <ListItem>We will provide you with adequate camping gear like waterproof tents and sleeping bags</ListItem>
            <ListItem>All our provisions follow the strictest standards of hygiene.</ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src='https://bit.ly/2Z4KKcF' w="100%" h="250px" mt="20px"></Image>
    }
  </AccordionItem>


  <AccordionItem w="33%" p="15px">
    <h2>
      <AccordionButton _hover={{ bg: 'green.300' }} fontSize="xx-large" textAlign="center" justifyContent="center" bg="tomato" onClick={()=>{
        setOption({stayType:false,meals:false,activity:false,inclusion:!option.inclusion})
      }} borderRadius="20px">
      Inclusions
      </AccordionButton>
    </h2>
    {
        option.inclusion?<AccordionPanel pb={4}>
        <UnorderedList>
            <ListItem>For the duration of this adventure, you will be staying in camps on a sharing basis.</ListItem>
            <ListItem>We will provide you with adequate camping gear like waterproof tents and sleeping bags</ListItem>
            <ListItem>All our provisions follow the strictest standards of hygiene.</ListItem>
        </UnorderedList>
        </AccordionPanel>:<Image src='https://bit.ly/2Z4KKcF' w="100%" h="250px" mt="20px"></Image>
    }
  </AccordionItem>
</Accordion>
    </Box>
}