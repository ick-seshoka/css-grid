import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: [Logo] fit-content(20%) [Navigation] auto [Navigation-end];
  background-color: #f2f2f2;
  padding-left: 4em;
  padding-right: 4em;
  align-items: center;
  border-bottom: 6px solid rgba(0, 0, 0, 0.1);
  grid-area: Header;
`;
