// src/components/Navbar/index.jsx
import React from 'react';
import { NavbarContainer, Logo, NavLinks, NavLink, LogoImage } from './styles';
import logo from './../../assets/images/FullLogo9.png';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo><LogoImage src={logo} alt="logo aleatoria" /></Logo>
      <NavLinks>
        <NavLink href="#home"></NavLink>
        <NavLink href="#about"></NavLink>
        <NavLink href="#services"></NavLink>
        <NavLink href="#contact"></NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;