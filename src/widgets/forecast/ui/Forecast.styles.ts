import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  height: 100%;
  background: ${({ theme }) => theme.colors.blue};
  animation: ${fadeIn} 0.5s ease-in-out;
  gap: 10px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
