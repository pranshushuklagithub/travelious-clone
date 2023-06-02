import {Box,  } from '@chakra-ui/react'
  import "./homepage.css"

  import { Footer } from './components/footer';
import { CommentBox, MainFront, PopularAttraction, PopularDestination } from './components/All';
  import 'react-multi-carousel/lib/styles.css';
import { NavbarCode } from './components/navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Experience, SubscribePart } from './components/All';

library.add(faStar);


export function Navbar(){
 

    return(
       <Box m="auto" bg="#f9f9f9">

{/* //navbar */}
       

<NavbarCode/>
<MainFront/>
<Box w="90%" m="auto" bg="#f9f9f9">
<PopularDestination/>
<PopularAttraction/>
<Experience/>
<CommentBox/>
<Box  bg={"#f9f9f9"} p="40px" mt="30px" >
  <SubscribePart/>
<Footer />
</Box>
</Box>


        </Box>
    )
}