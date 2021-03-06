import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { navItems } from "./NavItems";
import "./Navbar.css";
import "./Buttons.css";
import { Navbar, NavbarBrand, NavLink, NavItem, NavbarToggler, Collapse, Nav, Button } from 'reactstrap';
import logo1 from "../../Images/Logo1.svg";
import { Avatar, Badge } from 'antd';
import styled from "styled-components";
import { Menu, Dropdown } from 'antd';
import { onlineTrainingMenu, aboutMenu } from "./NavItems";
import { MdLogout } from "react-icons/md"
import { FaUserCog, FaUserPlus } from "react-icons/fa"
import { signOut } from "../../Redux/Actions/UserAuthActions";
import { Typography } from '@mui/material';
import { MdOutlineShoppingCart } from "react-icons/md"




function NavBar() {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const loggedIn = useSelector(state => state.auth.loggedIn)
  const userInfo = useSelector(state => state.auth.userData)
  const navigate = useNavigate()
  const products = useSelector(state => state.cart.products)
  const auth = useSelector(state => state.auth)
  //localStorage.removeItem("userToken")
  useEffect(() => {
    setUserLogged(loggedIn)
  }, [loggedIn])
  const toggleHandle = () => {
    setToggle(v => !v);
  };
  var stringToColour = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }
  const handleUserMenuClick = (key) => {
    switch (key) {
      case "signOut": {
        setUserLogged(false)
        dispatch(signOut())
        break;
      }
      case "createAccount": {
        navigate("/register")
        break;
      }
      case "manageYourAccount": {
        navigate("/profile")
        break;
      }
      default:
        break;
    }
  }
  const menu = (
    <Menu>{
      onlineTrainingMenu.map(item => (
        <MyMenueItem >
          <Link to={item.path} >
            {item.title}
          </Link>
        </MyMenueItem>
      ))}

    </Menu>
  );
  const menu1 = (
    <Menu>{
      aboutMenu.map(item => (
        <MyMenueItem >
          <Link to={item.path} >
            {item.title}
          </Link>
        </MyMenueItem>
      )
      )
    }
    </Menu>
  );
  const userMenu = (
    <UserMenu onClick={({ item, key, keyPath, domEvent }) => handleUserMenuClick(key)}>
      <UserMenueItem key="manageYourAccount">
        <MyCon>
          
          <Typography style={{ width: "180px", fontSize: "13px", fontWeight: "500" }} component="div" noWrap={true}>
            {loggedIn ? userInfo.email : ""}
          </Typography>
        </MyCon>
      </UserMenueItem>
      <UserMenueItem key="manageYourAccount" icon={<FaUserCog style={{ height: "100%", width: "18px" }} />}>
        Manage your Acccount
      </UserMenueItem>
      <Menu.Divider />
      <UserMenueItem key="createAccount" icon={<FaUserPlus style={{ height: "100%", width: "18px" }} />} >
        Create new Account
      </UserMenueItem>
      <UserMenueItem key="signOut" icon={<MdLogout style={{ height: "100%", width: "18px" }} />} >
        Sign Out
      </UserMenueItem>
    </UserMenu>
  );
  return (
    <div>
      <div className="navbar1">

        <Link to="/" className="navbar-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.49 357.65"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="329.75" cy="350.65" r="7" /><path class="cls-1" d="M399.75,290a94.79,94.79,0,0,1-11.74-.58s-5,26.09-31,37.09c-1.5,1.5-5.81-17.82-54.3-24.19-12.4-1.63-27.68-2.41-46.55-1.78q-8.56.29-18.15,1c-16.88,1.41-30.22,1.42-40.71.44-13.08-1.22-31.93-4.36-35.68-19.48-2.79-11.23,5.84-23.09,14.53-29.36,1.49-1.08,17.45-8.63,17.86-6.6-.74-3.69-1.52-7.06-2.38-10.2a95.75,95.75,0,0,0-11.3-25.84c-5.34-8.8-12.07-16.86-17.44-25.57-1-1.56-1.9-3.15-2.76-4.76A65.92,65.92,0,0,1,155,168.82a45.29,45.29,0,0,1-1.79-14.1c.34-31.72,15.65-49.07,37.91-60.38s50.53-9.53,71.37,4.22c19.34,12.76,32,36,29.79,59.09-2.27,24-20.82,42.91-32.23,62.85-5.48,9.36-5,10-12,28,23.55-7.22,47.83-15.17,64.56-34.3,15.14-17.31,23.93-39.69,26.81-63.38a80.12,80.12,0,0,0,.29-16.09c-.34-4.17-.84-6.57-1.13-8.81-1.25-7.62-5.11-17.37-10.47-27.08-.58-1,11.9-4.64,13.07-4.79a27,27,0,0,1,13.92,2c9.7,4,17.41,12.25,28,14.08,14.36,2.47,24.73-9.2,27.45-22.3,5.22-25.24-18.43-38.1-40.52-35-14.66,2-28.95,8.17-41,16.66-4.65,3.28-9,6.91-13.6,10.29a102.29,102.29,0,0,0-7.23-8.28,119,119,0,0,0-192.61,31.85c-.06.13-.12.26-.19.39a97.32,97.32,0,0,0-1.65,79.58c.48,1.15,1,2.3,1.53,3.43a119.47,119.47,0,0,0,46.17,51.16l.08,0A76.45,76.45,0,0,0,104,312a75.67,75.67,0,0,0,.78,10.92c-20.59-7.82-36.88-23.27-44.71-42.51-34-13-58.82-45.5-60-83.93A93,93,0,0,1,75.6,102.13a161,161,0,0,1,250-67.26,68,68,0,0,1,110.52,77.05,93,93,0,0,1,55.4,83.36C492.42,246.57,451,289.32,399.75,290Z" /></g></g></svg>
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Online Training") {
              return (

                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Dropdown overlay={menu} placement="bottomCenter">
                    <div ><MyLink to={item.path}>{item.title}</MyLink></div>
                  </Dropdown>
                </li>

              );
            }
            if (item.title === "About") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown1(true)}
                  onMouseLeave={() => setDropdown1(false)}
                >
                  <Dropdown overlay={menu1} placement="bottomCenter">
                    <div ><MyLink to={item.path}>{item.title}</MyLink></div>
                  </Dropdown>
                </li>
              );
            }
            if (item.title === "Dashboard") {
              if (userLogged) {
                return (
                  <li key={item.id} className={item.cName}>
                    <MyLink to={!auth.userData.accountType?"/mydashboard":"/dashboard"}>{item.title}</MyLink>
                  </li>
                );
              }
              else return (
                <div></div>
              )
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}

        </ul>
        {
          !userLogged ? <ul className="Nav-batns">
            <li key="1" className="Navbatn">
              <Link to="/login">Log in</Link>
            </li>
            <li key="2" className="Navbatn1">
              <Link to="/register">Get started</Link>
            </li>
          </ul> :
            <ul className="Nav-batns-logged">
              <li key="1" className="cartIcon">
                <Badge count={products.length} style={{ backgroundColor: "#5BCAD6", position: "absolute", top: "5px" }}>
                  <MdOutlineShoppingCart onClick={()=>navigate("/cart")} id="icon" style={{ marginTop: "3px", cursor: "pointer", fontSize: "35px", display: "flex", justifyContent: "space-around", color: "#6C6C6C" }} />
                </Badge>
              </li>
              <li key="2" >
                <Dropdown overlay={userMenu} placement="bottomRight">
                  <MyAvatar style={{ borderStyle: "solid" }} size={45}
                  >
                    {userInfo.fullName.charAt(0).toUpperCase()}
                  </MyAvatar>
                </Dropdown>

              </li>
            </ul>
        }
      </div>
      <div className="navbar2">
        <Navbar
          color="faded"
          light
          style={{ minHeight: "11vh" }}
        >
          <NavbarBrand
            className="me-auto"
            href="/"
          >
            <Link to="/" className="navbar-logo">
              <object data={logo1} type="image/svg+xml" />
            </Link>
          </NavbarBrand>
          <NavbarToggler
            className="me-2"
            onClick={toggleHandle}
          />
          <Collapse navbar isOpen={toggle}>
            <Nav navbar >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  {navItems.map((item) => {
                    if (item.title === "Online Training") {
                    }
                    return (
                      <NavItem >
                        <NavLink>
                          <Link to={item.path}>
                            {item.title}
                          </Link>
                        </NavLink>
                      </NavItem>
                    )
                  })
                  }
                </div>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>

  );
}
const MyCon = styled.div`
display: flex;
align-items: center;
justify-content:space-between;

`
const MyAvatar = styled(Avatar)`
 background-color: #6C6C6C;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 list-style-type: none;
 
`
const MyLink = styled(Link)`
text-decoration: none;
    color: #303030;
    font-size: 1.1rem;
    border-radius: 5px;
    
`
const MyMenueItem = styled(Menu.Item)`
&>*{
  fill:#6C6C6C;
    color:#6C6C6C;
    font-weight: 400;
    margin: 5px 0 5px 0;
}
&:hover>*{
  animation: mmm 0.3s;
      animation-fill-mode: forwards;
}
@keyframes mmm {
    0% {
      color:#6C6C6C;
   }
     
   100% {
color: #5BCAD6;
   }
}
`
const UserMenueItem = styled(Menu.Item)`
font-size: 14px;
  fill:#6C6C6C;
  color:#6C6C6C;
  font-weight: 400;
  padding: 10px 15px 10px 15px;
`
const UserMenu = styled(Menu)`
width: 250px;
`
export default NavBar;