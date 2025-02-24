import styled from 'styled-components';

export const StyledSelect = styled.select`
  max-width: 360px;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.drWhite};
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;
  appearance: none;

  &:hover {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
  }
`;
