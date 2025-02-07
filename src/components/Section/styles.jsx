import styled from 'styled-components';

export const DividerContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #000000;

  @media (max-width: 768px) {
    height: 30px;
  }

  @media (max-width: 480px) {
    height: 20px;
  }
`;