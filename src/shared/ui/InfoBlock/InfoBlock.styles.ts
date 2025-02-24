import styled from 'styled-components';
import { Typography } from '../Typography';

export const InfoBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0;
  flex: 1;
`;

export const Label = styled(Typography)`
  font-size: 18px !important;
  line-height: 21.6px;
  opacity: 0.6;
`;

export const Value = styled(Typography)`
  font-size: 25px !important;
  line-height: 30px;
`;
