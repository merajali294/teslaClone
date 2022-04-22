import React from 'react'
import Section from './Section'
import styled from "styled-components"

function Home() {
    return (
       <Container>
       <Section 
       title="Model s"
       desc="Tesla, Inc. designs, develops, manufactures, sells and leases electric vehicles and energy generation"
       bimage="model-s.jpg"
       leftbtn="Shop Now"
       rightbtn="Services"
           
       />
       <Section 
       title="Model 3"
       desc="The Model 3 is an electric fastback mid-size four-door sedan developed by Tesla. ... The base Model 3 delivers an EPA-rated all-electric range of 272 miles"
       bimage="model-3.jpg"
       leftbtn="Shop Now"
       rightbtn="Services"

       />
       <Section 
       title="Model x"
       desc="Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection"
       bimage="model-x.jpg"
       leftbtn="Shop Now"
       rightbtn="Services"

       />
       
       <Section 
       title="Tesla Interior"
       desc="Staying true to the Model S's maxi-minimalist interior design, the Model 3 is just as stark."
       bimage="connected.jpg"
       leftbtn="Shop Now"
       rightbtn="Services"

       />
       <Section 
       title="Model y"
       desc="Model Y is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection"
       bimage="model-y.jpg"
       leftbtn="Shop Now"
       rightbtn="Services"

       />
       <Section 
       title="Accessories"
       desc="Discover made to fit accessories for your Tesla. Shop the official Tesla store for vehicle accessories made exclusively for your car"
       bimage="accessories.jpg"
       leftbtn="Shop Now"

       />
       </Container>
    )
}

export default Home

const Container = styled.div`

`