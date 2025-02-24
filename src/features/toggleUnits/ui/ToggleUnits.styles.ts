import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 6px;
  gap: 9px;
  width: fit-content;
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  padding: 0;
  cursor: pointer;
  width: 77px;
  height: 29px;

  &:hover {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
  }
`;

export const Part = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 100%;
  flex: 1;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
  background: ${({ isActive }) =>
    isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
`;
