import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  height: 6.5625rem;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
  > div {
    display: grid;
    line-height: 1.5rem;
    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
