import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    scale: 0.9;
  }
  to {
    opacity: 1;
    scale: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: ${({ theme }) => theme.colors.blue};
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const BlockCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 10px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BlockFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
