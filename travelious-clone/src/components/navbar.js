
import {Box, Button, Flex,Text, Image,  Spacer,
 Center,
 Heading,} from '@chakra-ui/react'
  import {HamburgerIcon} from "@chakra-ui/icons"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./nav.css"
import { useEffect ,useState} from 'react';

import { Link } from 'react-router-dom';
library.add(faStar);



export function NavbarCode({nameOfUser}){
   
    return(
        <Flex bg="#122722" as="nav" align="center" justify="space-between" pr="60px" pl="60px" pb="30px">
        <Box>
           
            <Link to="/">
                <Heading mt="5%"  fontFamily={"cursive"} color="#e2660f" fontSize={["30px","40px"]} >O TRLVS</Heading>
            </Link>

        </Box>
        <Spacer/>
        <Box>
        <Flex gap={["20px","30px","40px","50px"]}>
     
  

<ul className="nav-links" >
{/* 1st a */}
<li>
<Link to="/trekking" _hover={{ textDecorationColor:"white"}}><Text fontWeight={"500"} color={"#dbdde5"} fontSize={["10px","15px","15px","20px"]}>Trekking</Text></Link>
<Box className="mega-box">
    <Box className="content">
    {/* 1st row */}
        <Box className="row">
           <h1 className='head'>HIMACHAL</h1>
            <ul className='mega-links'>
            <li><Link to="/trekking"><Text>Kheerganga Trek</Text></Link></li>
            <li><Link to="/trekking"><Text>Hampta Pass Trek</Text></Link></li> 
            <li><Link to="/trekking"><Text>Bhrigu Lake Trek</Text></Link></li> 
            <li><Link to="/trekking"><Text>Kheerganga Trek</Text></Link></li>
             <li><Link to="/trekking"><Text>Deo Tibba Trek</Text></Link></li>
              <li><Link to="/trekking"><Text>Sar Pass Trek </Text></Link></li>
               <li><Link to="/trekking"><Text>Buran Ghati trek</Text></Link></li>
               </ul>
        </Box>
        {/* 2nd row */}
        <Box className='row'>
            <h1>BANGLORE</h1>
            <ul className='mega-links'>
                <li><Link to="/trekking"><Text>Savandurga Hill</Text></Link></li>
                <li><Link to="/trekking"><Text>Ramanagara</Text></Link></li>
                <li><Link to="/trekking"><Text> Nandi Hills</Text></Link></li>
                <li><Link to="/trekking"><Text>Skandagiri</Text></Link></li>
                <li><Link to="/trekking"><Text> Makalidurga</Text></Link></li>
            </ul>
        </Box>
        {/* 3rd row */}
        <Box className='row'>
            <h1>MUMBAI</h1>
            <ul className='mega-links'>
                <li><Link to="/trekking"><Text>Kalsubai Trek</Text></Link></li>
                <li><Link to="/trekking"><Text>Sandhan Valley trek</Text></Link></li>
                <li><Link to="/trekking"><Text>Rajmachi Trek</Text></Link></li>
                <li><Link to="/trekking"><Text>Prabalmachi Trek</Text></Link></li>
                <li><Link to="/trekking"><Text>Devkund Trek</Text></Link></li>
            </ul>
        </Box>
        {/* 4th row */}
        <Box className='row'>
            <h1>EXPEDITIONS</h1>
            <ul className='mega-links'>
                <li><Link to="/trekking"><Text>Everest Base Camp</Text></Link></li>
                <li><Link to="/trekking"><Text>Annapurna Base Camp</Text></Link></li>
                <li><Link to="/trekking"><Text>Goechala Trek</Text></Link></li>
                <li><Link to="/trekking"><Text>Chadar trek</Text></Link></li>
                
            </ul>
        </Box>
        {/* 5th row */}
        <Box className='row'>
            <h1>UTTARAKHAND</h1>
            <ul className='mega-links'>
                <li><Link to="/trekking"><Text>Valley of Flowers</Text></Link></li>
                <li><Link to="/trekking"><Text>Kedarkantha Trek</Text></Link></li>
                <li><Link to="/trekking"><Text>Kedartal</Text></Link></li>
                <li><Link to="/trekking"><Text>Dayara Bugyal</Text></Link></li>
                <li><Link to="/trekking"><Text>Rudranath</Text></Link></li>
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
<Link to="/camping"  _hover={{ textDecorationColor:"white"}}><Text  fontWeight={"500"} color={"#dbdde5"} fontSize={["10px","15px","15px","20px"]}>Tours</Text></Link>
<Box className="mega-box">
    <Box className="content">
    {/* 1st row */}
        <Box className="row">
            <h1>HIMACHAL</h1>
            <ul className='mega-links'>
            <li><Link to="/camping"><Text>Kullu Manali</Text></Link></li>
            <li><Link to="/camping"><Text>Spiti Valley</Text></Link></li> 
            <li><Link to="/camping"><Text>Shimla</Text></Link></li> 
            <li><Link to="/camping"><Text>Parvati Valley</Text></Link></li>
             <li><Link to="/camping"><Text>Tosh</Text></Link></li>
              <li><Link to="/camping"><Text>Dalhousie </Text></Link></li>
               <li><Link to="/camping"><Text>Dharamshala</Text></Link></li>
               </ul>
        </Box>
        {/* 2nd row */}
        <Box className='row'>
            <h1>UTTRAKHAND</h1>
            <ul className='mega-links'>
                <li><Link to="/camping"><Text>Rishikesh</Text></Link></li>
                <li><Link to="/camping"><Text>Kedaranath Yatra</Text></Link></li>
                <li><Link to="/camping"><Text>Rishikesh food Walk</Text></Link></li>
                <li><Link to="/camping"><Text>Jim Corbett</Text></Link></li>
                <li><Link to="/camping"><Text>Rishikesh Spiritual</Text></Link></li>
            </ul>
        </Box>
        {/* 3rd row */}
        <Box className='row'>
            <h1>LADHAK</h1>
            <ul className='mega-links'>
                <li><Link to="/camping"><Text>Manali To Srinagar</Text></Link></li>
                <li><Link to="/camping"><Text>Leh Ladhak From Delhi</Text></Link></li>
                <li><Link to="/camping"><Text>Srinagar To Leh</Text></Link></li>
                <li><Link to="/camping"><Text>Leh SightSeeing</Text></Link></li>
                <li><Link to="/camping"><Text>Leh urtuk Village</Text></Link></li>
            </ul>
        </Box>
        {/* 4th row */}
        <Box className='row'>
            <h1>ANDAMAN</h1>
            <ul className='mega-links'>
                <li><Link to="/camping"><Text>Backpacking tour</Text></Link></li>
                <li><Link to="/camping"><Text>Honeymoon Tour</Text></Link></li>
                <li><Link to="/camping"><Text>Romantic Candlelight Beachside Honeymoon 4 Days Honeymoon</Text></Link></li>
                <li><Link to="/camping"><Text>8 Days Offsbeat</Text></Link></li>
                
            </ul>
        </Box>
        {/* 5th row */}
        <Box className='row'>
            <h1>DELHI TO DELHI</h1>
            <ul className='mega-links'>
                <li><Link to="/camping"><Text>Kasol Kheerganga</Text></Link></li>
                <li><Link to="/camping"><Text>Mcleodganj Triund</Text></Link></li>
                <li><Link to="/camping"><Text>Manali Lahaul</Text></Link></li>
                <li><Link to="/camping"><Text>Jibhi Tirthan</Text></Link></li>
                <li><Link to="/camping"><Text>Rudranath</Text></Link></li>
            </ul>
        </Box>
{/* 6th row */}
<Box className='row'>
<h1>GOA</h1>
<ul className='mega-links'>
    <li><Link to="/camping"><Text>4 Days Goa</Text></Link></li>
    <li><Link to="/camping"><Text>Grande Island</Text></Link></li>
</ul>
</Box>
{/* 7th row */}
<Box className='row'>
<h1>SPITI</h1>
<ul className='mega-links'>
    <li><Link to="/camping"><Text>Spiti From Manali</Text></Link></li>
    <li><Link to="/camping"><Text>Spiti Circuit</Text></Link></li>
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
<Link to="/activities"  _hover={{ textDecorationColor:"white"}}><Text  fontWeight={"500"} color={"#dbdde5"} fontSize={["10px","15px","15px","20px"]}>Services</Text></Link>
</li>
 {/* 6th a */}
<li>
<Link to="/login"  _hover={{ textDecorationColor:"white"}}><Text fontWeight={"500"}
 color= {nameOfUser==""?"#dbdde5":"#e2660f" }
fontSize={["10px","15px","15px","20px"]}>{nameOfUser==""?"Login":nameOfUser}</Text></Link>
</li>
 {/* 7th a */}
<li>
    <Link to="/login"  _hover={{ textDecorationColor:"white"}}><Button mt="-5px" _hover={{bg:"white" ,color:"#e2660f",border:"2px solid #e2660f"}} bg="#e2660f" color="white"><Text>Register</Text></Button></Link>
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