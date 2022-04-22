import React, {useState, useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

function Header() {
    const [burgerstatus, setburgerstatus] = useState(false)
    useEffect(() => {
         
    }, [])
    return (
        <Container>
        <a>
            <img src="images/logo.svg"/>
            </a>
            <Menu>
            <p> <a href='#'>Model S </a> </p>
            <p> <a href='#'>Model X </a> </p>
            <p> <a href='#'>Model 3 </a> </p>
            <p> <a href='#'>Model Y </a> </p>
            </Menu>
            <Rightmenu>
            
            <a href="#"> Shop </a>
            <a href="#"> Account </a>
            <Customenu onClick={ () => setburgerstatus(true) } />
            </Rightmenu>
            <Burgernav show={burgerstatus} >
            <Closemenuwrapper onClick={ () => setburgerstatus(false) }>
            <CloseIconn/>
            </Closemenuwrapper>
            <li><a href="#"> Upcoming Cars </a></li>
            <li><a href="#"> Used Cars </a></li>
            <li><a href="#"> Electric Cars </a></li>
            <li><a href="#"> CYber truck Cars </a></li>
            <li><a href="#"> Automodel Cars </a></li>
            <li><a href="#"> Luxury Cars </a></li>
            <li><a href="#"> New Cars </a></li>
            </Burgernav>
        </Container>
    )
}

export default Header


const Container = styled.div`
z-index:1;
min-height: 60px;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding:0px 20px;
top:0;
left:0;
right:0;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

a{
    font-weight:600px;
    text-transform: uppercase;
    padding: 0px 10px;
    flex-wrap:no-wrap;
}
@media(max-width:768px){
    display:none;
}
`
const Rightmenu = styled.div`
a{
    font-weight:600px;
    text-transform: uppercase;
   margin-right: 10px;
}
`
const Customenu = styled(MenuIcon)`
cursor:pointer;

`
const CloseIconn = styled(CloseIcon)`
cursor:pointer;
text-align: end;
`
const Burgernav = styled.div`
cursor:pointer;
position:fixed;
right:0;
top:0;
bottom:0;
background:white;
width:300px;
z-index:16;
list-style:none;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)' };
transition: transform 0.3s ease-in;
li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}
a{
    font-weight:600;
}


`

const Closemenuwrapper = styled.div`
cursor:pointer;text-align:end;
`