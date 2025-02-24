import { Button } from 'shared/ui/Button';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 30px;
`;

export const ActiveButton = styled(Button)<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.7)};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
`;
