import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.125rem;
  opacity: 0.4;
  transition: opacity 0.5s;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.2;
  }

  .icon {
    width: 1.75rem;
    height: 1.75rem;
  }
`;
