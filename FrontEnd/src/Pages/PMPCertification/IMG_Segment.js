import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import image from "../../Images/PMPpage_Header.jpeg";


class Segment extends Component {
    render() {
        return (
                <HomeSection>
                    <Fill>
                    <div className="container">
                        <HomeInformation>
                            <HomeTitle style={{opacity:'100%'}}>
                                <h1 style={{fontSize:'6vw', fontWeight:300, color:"white"}}>Supercharge Your Skills and<h1 style={{fontSize:'6vw',fontWeight:600, color:'#5BCAD6'}}> Work Smarter</h1></h1>
                            </HomeTitle> 
                            <HomeDesc >
                            <h2 style={{color:"white",fontSize:'3vw', fontWeight:"400"}}>Earn the New PMP Certification</h2>
                            </HomeDesc>
                            <Buttons>
                                <a href="/store" style={{ textDecoration: 'none' }}>
                                     <Button shape="round" style={{margin:"4% 4% 4% 4%", fontSize: "2vmax", borderRadius: 50, borderWidth:'px', borderColor:"white"}}   outline size="lg"  className='customBtn' ><BtnTxt >practical tests</BtnTxt></Button>
                                </a>
                                <a href="/store" style={{ textDecoration: 'none' }}>
                                    <Button outline style={{margin:"4%", fontSize: "2vmax",borderRadius: 50, borderWidth:'px', borderColor:"white"}}  outline size="lg"  className='customBtn' color="secondary"><BtnTxt >Our courses</BtnTxt></Button>
                                </a>
                            </Buttons>
                        </HomeInformation>
                    </div>
                    </Fill>
                 </HomeSection>
        )
    }
}


const BtnTxt= styled.div`
width:15vw ;
font-size: 90%;
margin: 0% 0% 3% 0%;
font-weight: 300;
color: white;
`
const Fill= styled.div`
    background-color: rgba(30,30,30,0.87); 
    height:100%;
    width: 100%;

`
const Buttons= styled.div`
    width: 60%;
    margin-left:20vmax;
    margin-right:20vmax

`
const HomeSection = styled.div`
   
    background: url(${image});
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`

const HomeInformation = styled.div`
font-size: 0px;
height: 100%;
display: flex;
row-gap: 1vh;
flex-direction: column;
align-items: center;
padding: 2% 5% 5% 5%;

`
const HomeTitle = styled.h2`
margin-top: 5vh;
    align-self:stretch;
    margin-bottom: 0vh;
    font-weight: bold;
    color: white;
  
`

const HomeInfo = styled.h4`
    font-size: 35px;
    color: white;
    margin-bottom: 200px;
`

const HomeDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: white;
    margin-bottom: 5px
`


export default Segment;