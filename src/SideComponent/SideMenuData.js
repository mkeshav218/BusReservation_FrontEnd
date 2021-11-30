import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styleSidenav = styled.div`
    position:fixed;
    height:100%;
    width:75px;
    z-index:1;
    top:3.4cm;
    background-color:#222;
    overflow-x:hidden;
    padding-top:10px;
`;
class SideNav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activepath:'/',
            items:[
                {
                    path:'/',
                    name:'Home',
                    css:'fa fa-fw fa-home',
                    key:1
                },
                {
                    path:'/login',
                    name:'Login',
                    css:'fa fa-fw fa-clock',
                    key:2
                }
            ]
        }
    }
    onItemClick = (path) =>{
        this.setState({
            active:path
        })
    }
    render(){
        const {items,activepath} = this.state;
        return(
            <styleSidenav>
                {
                    items.map((item) =>{
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onClick={this.onItemClick}
                                active={item.path === activepath}
                                key = {item.key}
                               /> 
                        );
                    })
                }
            </styleSidenav>
        )
    }
}

class NavItem extends React.Component{
    handleClick = () => {
        const {path,onItemClick} = this.props;
        onItemClick(path);
    }
     render(){
        const {active} = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        )
    }
}

const StyledNavItem = styled.div`
    height:70px;
    width:75px;
    text-alogn:center;
    margin-bottom:0;
    a{
        font-size:2.7cm;
        color:${(props) => props.active? "white":"#9FFFCB"};
        :hover{
            opacity:0.7;
            text-decoration:none
        }
    }
`;
const NavIcon = styled.div`

`;
export default class SideBar extends React.Component{
    render(){
        return(
            <SideNav/>
        )
    }
}

//
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

// export const SidebarData = [
//   {
//     title: 'Home',
//     path: '/',
//     icon: <AiIcons.AiFillHome />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Reports',
//     path: '/reports',
//     icon: <IoIcons.IoIosPaper />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Products',
//     path: '/products',
//     icon: <FaIcons.FaCartPlus />,
//     cName: 'nav-text'
//   },
// ];