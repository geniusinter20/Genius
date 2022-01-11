import { React, Component } from "react";
import 'antd/dist/antd.css';
import "./AboutPMP.css";
import { Button } from 'antd';
import { CSSTransition } from 'react-transition-group';
import styled from "styled-components"
import img1 from '../../Images/pmp1.jpg';
import img2 from '../../Images/pmp2.jpeg';
import { Typography, Switch } from 'antd';

const { Paragraph, Text } = Typography;
class Aboutpmp extends Component {

    state = { toggled: true, toggled1: true }

    toggle = () => {
        this.setState(prevState => ({
            toggled: !prevState.toggled,
            toggled1: prevState.toggled1
        }));
    }
    toggle1 = () => {

        this.setState(prevState => ({
            toggled: prevState.toggled,
            toggled1: !prevState.toggled1
        }));
    }
    render() {
        return (
            <div>
                <div className="mainContainer1">
                    
                    <TextContainer>
                        <Header>What is PMP</Header>
                        <Paragraph style={{ fontSize: "25px" }} ellipsis={this.state.toggled1 ? { rows: 5 } : false}>
                            The Project Management Professional (PMP)® is the world's leading project management certification.
                            Now including predictive, agile and hybrid approaches, the PMP® proves project leadership experience and
                            expertise in any way of working. It supercharges careers for project leaders across industries and helps
                            organizations find the people they need to work smarter and perform better.dsffsdfsdgfdgdfgsgshfdghfhdfsgdfgfsgdghfg
                            hfdghfdhfhfhfhfdghgfdhfhfhfhfdgxcvxcbxvcbfdbcbxzdfbcxbcbcxvbggggggggggggggggggggggggggggggggggggggggg
                            ggggggggggggggggggggggggggggggggggg
                        </Paragraph>
                        <MyButton type="primary"  onClick={this.toggle1} >Read{this.state.toggled1 ? ' more' : ' less'}</MyButton>
                    </TextContainer>
                    <div className="pic1" ><img src={img2}/></div>
                </div>
                <div className="mainContainer1">
                    <div className="pic1" ><img src={img1}/></div>
                    <TextContainer>
                        <Header>What is PMP</Header>
                        <Paragraph style={{ fontSize: "25px", transition: "width 2s, height 4s" }} ellipsis={this.state.toggled ? { rows: 5 } : false}>
                            The Project Management Professional (PMP)® is the world's leading project management certification.
                            Now including predictive, agile and hybrid approaches, the PMP® proves project leadership experience and
                            expertise in any way of working. It supercharges careers for project leaders across industries and helps
                            organizations find the people they need to work smarter and perform better.dsffsdfsdgfdgdfgsgshfdghfhdfsgdfgfsgdghfg
                            hfdghfdhfhfhfhfdghgfdhfhfhfhfdgxcvxcbxvcbfdbcbxzdfbcxbcbcxvbggggggggggggggggggggggggggggggggggggggggg
                            ggggggggggggggggggggggggggggggggggg
                        </Paragraph>
                        <MyButton type="primary"  onClick={this.toggle} >Read{this.state.toggled ? ' more' : ' less'}</MyButton>
                    </TextContainer>
                </div>
            </div>
        )

    }

}
/*style={{width:"44vw",position: "absolute",top: "-9999px",left: "-9999px",right: "-9999px",bottom: "-9999px",margin: "auto"}}*/
const TextContainer = styled.div`
display: flex;
flex-direction: column;
width: 44vw;
transition: width 2s, height 4s;
`
const Header = styled.div`
width: 100%;
font-size: 45px;
text-align: center;
color:#303030;
font-weight: 300;
margin: 0px;
`
const MyButton= styled(Button)`
width: 100px;
&:hover{
    animation: mymove00 0.5s;
    animation-fill-mode: forwards;
}
@keyframes mymove00 {
    0% {
   }
     
100% {
    background: white;
    color: #404040;
    border-style: none;
   }
}
`
export default Aboutpmp;