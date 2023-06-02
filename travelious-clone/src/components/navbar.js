
import {Box, Button, Flex,Text, Image,  Spacer,Link,
 Center,} from '@chakra-ui/react'
  import {HamburgerIcon} from "@chakra-ui/icons"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./nav.css"
library.add(faStar);



export function NavbarCode(){
    return(
        <Flex bg="#122722" as="nav" align="center" justify="space-between" pr="60px" pl="60px" pb="30px">
        <Box>
            {/* //image logo */}
<Image 
w="80%" h="30%"
mt="10px" src="https://banbanjara.com/assets/images/logo.svg"
/>
        </Box>
        <Spacer/>
        <Box>
        <Flex gap={["20px","30px","40px","50px"]}>
     
  

<ul className="nav-links" >
{/* 1st a */}
<li>
<Link  _hover={{ textDecorationColor:"white"}}><Text fontWeight={"500"} color={"#dbdde5"} fontSize={["10px","15px","15px","20px"]}>Trekking</Text></Link>
<Box className="mega-box">
    <Box className="content">
    {/* 1st row */}
        <Box className="row">
           <h1 className='head'>HIMACHAL</h1>
            <ul className='mega-links'>
            <li><a><Text>Kheerganga Trek</Text></a></li>
            <li><a><Text>Hampta Pass Trek</Text></a></li> 
            <li><a><Text>Bhrigu Lake Trek</Text></a></li> 
            <li><a><Text>Kheerganga Trek</Text></a></li>
             <li><a><Text>Deo Tibba Trek</Text></a></li>
              <li><a><Text>Sar Pass Trek </Text></a></li>
               <li><a><Text>Buran Ghati trek</Text></a></li>
               </ul>
        </Box>
        {/* 2nd row */}
        <Box className='row'>
            <h1>BANGLORE</h1>
            <ul className='mega-links'>
                <li><a><Text>Savandurga Hill</Text></a></li>
                <li><a><Text>Ramanagara</Text></a></li>
                <li><a><Text> Nandi Hills</Text></a></li>
                <li><a><Text>Skandagiri</Text></a></li>
                <li><a><Text> Makalidurga</Text></a></li>
            </ul>
        </Box>
        {/* 3rd row */}
        <Box className='row'>
            <h1>MUMBAI</h1>
            <ul className='mega-links'>
                <li><a><Text>Kalsubai Trek</Text></a></li>
                <li><a><Text>Sandhan Valley trek</Text></a></li>
                <li><a><Text>Rajmachi Trek</Text></a></li>
                <li><a><Text>Prabalmachi Trek</Text></a></li>
                <li><a><Text>Devkund Trek</Text></a></li>
            </ul>
        </Box>
        {/* 4th row */}
        <Box className='row'>
            <h1>EXPEDITIONS</h1>
            <ul className='mega-links'>
                <li><a><Text>Everest Base Camp</Text></a></li>
                <li><a><Text>Annapurna Base Camp</Text></a></li>
                <li><a><Text>Goechala Trek</Text></a></li>
                <li><a><Text>Chadar trek</Text></a></li>
                
            </ul>
        </Box>
        {/* 5th row */}
        <Box className='row'>
            <h1>UTTARAKHAND</h1>
            <ul className='mega-links'>
                <li><a><Text>Valley of Flowers</Text></a></li>
                <li><a><Text>Kedarkantha Trek</Text></a></li>
                <li><a><Text>Kedartal</Text></a></li>
                <li><a><Text>Dayara Bugyal</Text></a></li>
                <li><a><Text>Rudranath</Text></a></li>
            </ul>
        </Box>
{/* 6th row */}
<Box className='row'>
<img src="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
</Box>
{/* 7th row */}
<Box className='row'>
<img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
</Box>
{/* 8th row */}
<Box className='row'>
<img src="https://images.unsplash.com/photo-1587547131116-a0655a526190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
</Box>
    </Box>

    
</Box>
</li>

{/* 2nd a */}
<li>
<Link  _hover={{ textDecorationColor:"white"}}><Text  fontWeight={"500"} color={"#dbdde5"} fontSize={["10px","15px","15px","20px"]}>Tours</Text></Link>
<Box className="mega-box">
    <Box className="content">
    {/* 1st row */}
        <Box className="row">
            <h1>HIMACHAL</h1>
            <ul className='mega-links'>
            <li><a><Text>Kullu Manali</Text></a></li>
            <li><a><Text>Spiti Valley</Text></a></li> 
            <li><a><Text>Shimla</Text></a></li> 
            <li><a><Text>Parvati Valley</Text></a></li>
             <li><a><Text>Tosh</Text></a></li>
              <li><a><Text>Dalhousie </Text></a></li>
               <li><a><Text>Dharamshala</Text></a></li>
               </ul>
        </Box>
        {/* 2nd row */}
        <Box className='row'>
            <h1>UTTRAKHAND</h1>
            <ul className='mega-links'>
                <li><a><Text>Rishikesh</Text></a></li>
                <li><a><Text>Kedaranath Yatra</Text></a></li>
                <li><a><Text>Rishikesh food Walk</Text></a></li>
                <li><a><Text>Jim Corbett</Text></a></li>
                <li><a><Text>Rishikesh Spiritual</Text></a></li>
            </ul>
        </Box>
        {/* 3rd row */}
        <Box className='row'>
            <h1>LADHAK</h1>
            <ul className='mega-links'>
                <li><a><Text>Manali To Srinagar</Text></a></li>
                <li><a><Text>Leh Ladhak From Delhi</Text></a></li>
                <li><a><Text>Srinagar To Leh</Text></a></li>
                <li><a><Text>Leh SightSeeing</Text></a></li>
                <li><a><Text>Leh urtuk Village</Text></a></li>
            </ul>
        </Box>
        {/* 4th row */}
        <Box className='row'>
            <h1>ANDAMAN</h1>
            <ul className='mega-links'>
                <li><a><Text>Backpacking tour</Text></a></li>
                <li><a><Text>Honeymoon Tour</Text></a></li>
                <li><a><Text>Romantic Candlelight Beachside Honeymoon 4 Days Honeymoon</Text></a></li>
                <li><a><Text>8 Days Offsbeat</Text></a></li>
                
            </ul>
        </Box>
        {/* 5th row */}
        <Box className='row'>
            <h1>DELHI TO DELHI</h1>
            <ul className='mega-links'>
                <li><a><Text>Kasol Kheerganga</Text></a></li>
                <li><a><Text>Mcleodganj Triund</Text></a></li>
                <li><a><Text>Manali Lahaul</Text></a></li>
                <li><a><Text>Jibhi Tirthan</Text></a></li>
                <li><a><Text>Rudranath</Text></a></li>
            </ul>
        </Box>
{/* 6th row */}
<Box className='row'>
<h1>GOA</h1>
<ul className='mega-links'>
    <li><a><Text>4 Days Goa</Text></a></li>
    <li><a><Text>Grande Island</Text></a></li>
</ul>
</Box>
{/* 7th row */}
<Box className='row'>
<h1>SPITI</h1>
<ul className='mega-links'>
    <li><a><Text>Spiti From Manali</Text></a></li>
    <li><a><Text>Spiti Circuit</Text></a></li>
</ul>
</Box>
    </Box>

    
</Box>
</li>
{/* 3rd a */}
<li >
    <Link  _hover={{ textDecorationColor:"white"}}><Text  fontWeight={"500"} color={"#dbdde5"} fontSize={["10px","15px","15px","20px"]}>About us</Text></Link>
    <Box className='mega-box'>
    <Box className='row'>
            <h1>Our Mission</h1>
            <Center>
            <Text w="80%" textAlign={"center"} justifyContent={"center"} alignItems={"center"} alignContent={"center"}>BanBanjara’s mission is to empower and enhance the lives of its customers, employees, and the local communities that are key stakeholders in its business activities. We follow a strict triple bottom line, where we give equal importance to the People, Planet, and Profits. For every rupee that we generate as profit, a part of it goes towards a social and environmental cause. With this in our arsenal, our objective is to enhance the travel industry and redefine the way people browse and book their desired experiences.</Text>
            </Center>
        </Box>
        <Box className='content'>
        
        <Box className='row'>
<img src="https://banbanjara.com/assets/images/mission-img1.jpg" />
       </Box>

<Box className='row'>
<img src="https://banbanjara.com/assets/images/mission-img3.jpg"/>
</Box>

<Box className='row'>
<img src="https://banbanjara.com/assets/images/mission-img2.jpg"/>
</Box>
<Box className='row'>
<img src="https://banbanjara.com/assets/images/mission-img4.jpg"/>
</Box>
        </Box>
    </Box>
</li>
{/* 4th a */}
<li>
<Link  _hover={{ textDecorationColor:"white"}}><Text  fontWeight={"500"} color={"#dbdde5"} fontSize={["10px","15px","15px","20px"]}>Services</Text></Link>
</li>
 {/* 6th a */}
<li>
<Link  _hover={{ textDecorationColor:"white"}}><Text fontWeight={"500"} color={"#dbdde5"} fontSize={["10px","15px","15px","20px"]}>Login</Text></Link>
</li>
 {/* 7th a */}
<li>
    <Link  _hover={{ textDecorationColor:"white"}}><Button mt="-5px" _hover={{bg:"white" ,color:"#e2660f",border:"2px solid #e2660f"}} bg="#e2660f" color="white"><Text>Register</Text></Button></Link>
</li>
</ul>    
<Box className='hamburger'>
<HamburgerIcon  w={8} h={8} color="white"  />
</Box>
        </Flex>
        </Box>
    </Flex>

    )
}