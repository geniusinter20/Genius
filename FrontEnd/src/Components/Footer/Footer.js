import React, { Component } from 'react';
import styled from 'styled-components';
import logo from "../../Images/Logo.svg";
import{Tooltip} from 'antd';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'

class Footer extends Component {
    render() {
        return (
            <MainContainer>
                <Logo><object data={logo} type="image/svg+xml"></object></Logo>
                <Text>©2021 Genius Digital All Right Reserved</Text>
                <Socials>
                    <Tooltip overlayInnerStyle={{color:"#303030"}} color="white" title="Facebook">
                        <AiFillFacebook></AiFillFacebook>
                    </Tooltip>
                    <Tooltip overlayInnerStyle={{color:"#303030"}} color="white" title="LinkedIn">
                        <AiFillLinkedin></AiFillLinkedin>
                    </Tooltip>
                
                </Socials>
            </MainContainer>
        );
    }
}
const MainContainer= styled.div`
display: flex;
justify-content: space-between;
align-content: center;
align-items: center;
background-color: #303030;
height: 60px;
width: 100%;
padding-left: 4vw;
padding-right: 4vw;
`
const Logo= styled.div`
display: flex; 
align-items: center;
height: 100%;
&> object{
    height: 75%;
}
`
const Text= styled.div`
color: white;
font-weight: 300;
font-size:14px ;
`
const Socials= styled.div`
display: flex;
align-items: center;
gap: 1vw;
& > *{
    color: white;
    height: 90%;
    width: 30px;;
};
& > *:hover{
    color: #5BCAD6;
    height: 90%;
    width: 30px;;
}
`
export default Footer;