import styled from 'styled-components';
import { Button } from 'shared/ui/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.drWhite};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 30px;
  max-width: 579px;
`;

export const StyledSelectButton = styled(Button)`
  color: ${({ theme }) => theme.colors.blue};
  opacity: 1;
  font-size: 30px;
  line-height: 36px;

  &:disabled {
    opacity: 0.4;
  }
`;
