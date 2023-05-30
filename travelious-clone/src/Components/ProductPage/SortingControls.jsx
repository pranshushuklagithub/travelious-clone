import { Box,Select,Heading,Flex, } from "@chakra-ui/react";

export default function SortingControls({handleSort}){
    return <Box w="30%" textAlign="left" mt="20px" p="20px"  mb="20px">
                <Heading fontSize="2xl" mb="20px">Sort By Price</Heading>
                <Select bg="tomato" color="white" fontWeight="bold" onChange={(e)=>{
                    handleSort(e.target.value);
                }}>
                    <option value='asc' style={{background:"tomato",fontWeight:"bold"}}>Low To High</option>
                    <option value='desc' style={{background:"tomato",fontWeight:"bold"}}>High to Low</option>
                </Select>
            </Box>
}