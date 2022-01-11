import react from'react';
import styled from 'styled-components';
import PracticeTests from './Practicetests';
import img from "../../Images/PracticeTest_Header.jpg";
import img1 from "../../Images/PracticeTest_Header1.jpg";

function Header(){
    return(
        <MainContainer>
            <SubContainer>
                <Text>
                    <Title> 
                        Take Your Desired Tests Online
                    </Title>
                    <Brief>
                        You now have the option of taking it from your favorite computer at home or in the office.
                    </Brief>
                </Text>
                <Image>
                    <img src={img}></img>
                </Image>
            </SubContainer>
            <SubContainer>
            <Image>
                    <img src={img1}></img>
                </Image>
                <Text style={{backgroundColor:"#5BCAD6"}}>
                    <Title> 
                    Premium Project Management Tools and Templates
                    </Title>
                    <Brief>
                    We have tools, template and more created by experts, tested and ready to go. 
                    </Brief>
                </Text>
            </SubContainer>
        </MainContainer>
    )
}
export default Header;

const MainContainer= styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
    justify-content: space-between;
    align-items: center;

`
const SubContainer= styled.div`
    width: clamp(500px, 48.5vw, 49vw);
    height: 88vh;
    display: flex;
    
    flex-direction: column;
    gap: 2vw;
`

const Text= styled.div`
color: white;
background-color: #303030;
flex-basis: 32vh;


`
const Title= styled.h1`
    color: white;
    font-size: clamp(30px, 3vw, 60px);
    margin:2.5vw 2vw 2.5vw 2vw;
`
const Brief= styled.div`
    font-size: clamp(15px, 1.3vw, 25px);
    margin:2vw;
`

const Image= styled.div`
    margin-right: 2vw;
    position: relative;
    overflow: hidden;
    width: 100%;
    flex-basis: 50vh;
    position: relative;
    overflow: hidden;
    flex-grow: 0.7;
    & > img{
        width:100%;
    position: absolute;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto;
    }
`
