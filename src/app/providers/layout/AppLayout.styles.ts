import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  padding: 75px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const Header = styled.header``;

export const LayoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LayoutBody = styled.div`
  width: 100%;
  height: calc(100vh - 122px - 150px);
  display: flex;
  column-gap: 16px;
`;

export const LayoutMain = styled.main`
  width: 100%;
`;
