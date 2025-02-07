import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
  width: 100vw;
  height: 21px;
  box-sizing: border-box;
  z-index: 10;

  @media (max-width: 768px) {
    height: auto;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fcfcfc;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000000;
  font-size: 13px;
  padding: 0;
  border: none;
  background: none;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: #404040;
  }

  &:active {
    color: #000000;
  }

  ${({ as }) => as === 'button' && `
    background-color: none;
    border: none; 
    padding: 0; 
    color: #000000;

    &:hover {
      color: #0018ec;
    }

    &:active {
      color: #000000;
    }
  `}

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`;