// src/components/Navbar/styles.js
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000000;
  color: white;
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
    height: 60px;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  font-size: 1.57rem;
  font-weight: bold;

    //@media (max-width: 768px) {
    //font-size: 1.2rem;
    //margin-bottom: 10px;
  //}
//`;

export const NavLinks = styled.div`
  display: flex;
  gap: 7rem;
  margin-right: 500px;
  margin-bottom: -30px;

  //@media (max-width: 1200px) {
    //gap: 3rem;
   // margin-right: 200px;
  //}

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;
  font-weight: bold;

  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
  }
`;

export const LogoImage = styled.img`
  width: 188px;
  height: auto;
  margin-left: 800px;

  @media (max-width: 1200px) {
    margin-left: 400px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 150px;
    margin-bottom: 10px;
  }
`;