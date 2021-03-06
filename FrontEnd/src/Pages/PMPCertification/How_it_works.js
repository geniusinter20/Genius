import {React, Component} from "react";
import styled from'styled-components';
import { CgSmileMouthOpen } from 'react-icons/cg';
import { BiCheckShield } from 'react-icons/bi';
import { MdManageAccounts } from 'react-icons/md';
import './How_it_works.css';


class HowItWorks extends Component{
    render(){
        return(
            <MainContainer>
                <Header>
                    How It <div style={{color:"#3CA9E7", fontWeight:"600"}}>Works</div>
                </Header>
                <Sections>
                    <SubSection><MdManageAccounts className='icon'/><div className="subTitle">Create an account</div><div className="subDiscription">Lorem ipsum dolor sit amet,consecteteu.</div></SubSection>
                    <SubSection><BiCheckShield className='icon'/><div className="subTitle">Get authorization</div><div className="subDiscription">Lorem ipsum dolor sit amet,consecteteu.</div></SubSection>
                    <SubSection><CgSmileMouthOpen className='icon'/><div className="subTitle">Enjoy the app</div><div className="subDiscription">Lorem ipsum dolor sit amet,consecteteu.</div></SubSection>
                </Sections>
            </MainContainer>
        )
    }
}
const MainContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:#F8F8F8 ;
gap: 1.5vw;
padding:3vw;


`
const Header= styled.h1`
display: flex;
gap: 1.3vw;
font-size: clamp(30px, 4vw, 70px);
font-weight: 300;
color: #444444;
`
const Sections= styled.div`
display: flex;
gap: 4vw;
flex-wrap:wrap;
align-items: center;
justify-content: center;
`
const SubSection= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1vw;
`
export default HowItWorks;