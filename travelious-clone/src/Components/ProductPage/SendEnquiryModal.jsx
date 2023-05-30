import React from 'react'

import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,FormLabel,Input,Button,FormControl,Spinner} from '@chakra-ui/react'
import { useState } from 'react'

export const SendEnquiryModal=({onClose,isOpen}) =>{
  let[spin,setSpin] = useState(false)
  let [enquiry,setEnquiry] = useState({});
  function handleSpin(){
    setTimeout(()=>{
      setSpin(false);
    },1000)
    setSpin(true)
    setTimeout(()=>{
      onClose()
    },1000)
  }
  
    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Fill The Enquiry Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input  placeholder='Your Name' name="Name" onChange={(e)=>{
                  setEnquiry({...enquiry,[e.target.name]:e.target.value})
                }}/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>From</FormLabel>
                <Input placeholder='From' name="from" onChange={(e)=>{
                  setEnquiry({...enquiry,[e.target.name]:e.target.value})
                }}/>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Date</FormLabel>
                <Input placeholder='Date of Travel' name="date" type="datetime-local" onChange={(e)=>{
                  setEnquiry({...enquiry,[e.target.name]:e.target.value})
                }}/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>No. of People </FormLabel>
                <Input placeholder='Number of People' name="numberOfPeople" type="number" onChange={(e)=>{
                  setEnquiry({...enquiry,[e.target.name]:e.target.value})
                }}/>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' type='email' name="email" onChange={(e)=>{
                  setEnquiry({...enquiry,[e.target.name]:e.target.value})
                }}/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Phone</FormLabel>
                <Input placeholder='Phone Number' type='ph' name="phoneNumber" onChange={(e)=>{
                  setEnquiry({...enquiry,[e.target.name]:e.target.value})
                }}/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button mr={3} _hover={{ bg: 'green.300',color:"black" }} bg="tomato" color="white" onClick={()=>{
                console.log(enquiry);
                handleSpin();
              }}>
              {spin?<Spinner color='black'/>:"Send"}
              </Button>
              <Button onClick={onClose}  mr={3} _hover={{ bg: 'green.300',color:"black" }} bg="tomato" color="white">Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  