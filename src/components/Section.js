import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title,desc,bimage,leftbtn, rightbtn}) {
    return (
        <Wrap bgImage={bimage}>
        <Fade bottom>
        <Itemtext>
        <h1>{title}</h1>
        <p>{desc}</p>
        </Itemtext>
        </Fade>
        
        <Buttons>
        <Fade bottom>
        <Buttongroup>
        <Leftbutton>
            {leftbtn}
        </Leftbutton>
        {rightbtn && 
            <Rightbutton> 
        {rightbtn}
        </Rightbutton>
    }
        </Buttongroup>
        </Fade>
        <Downarrow src="/images/down-arrow.svg"></Downarrow>
        </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display:flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
background-image: ${ props => `url("/images/${props.bgImage}")` } ;




`
const Itemtext = styled.div`
padding-top: 15vh;
text-align: center;
`
const Buttongroup = styled.div`
        display:flex;
        amrgin-bottom:30px;

`
const Leftbutton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width:256px;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;

    `
const Rightbutton = styled(Leftbutton)`
    background:white;
    opacity: 0.65;
    color:black;
`
const Buttons = styled.div`

`
const Downarrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x:hidden;
`
