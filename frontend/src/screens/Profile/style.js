import styled from "styled-components";

export const Container = styled.div`
  padding-left: 10vw;
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 28px;
    color: var(--pink-color);
  }

  > h1 {
    margin: 40px 0;
  }
  @media (max-width: 650px) {
    padding: 0 5vw;
  }
`;

export const Book = styled.div`
  width: 100%;
  margin-bottom: 50px;

`;

export const InfoWrapper = styled.div`
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Cover = styled.div`
  width: 12vw;
  height: calc(1.45 * 12vw);
  padding-top: calc(1.45);
  box-shadow: 0 10px 20px rgba(204, 204, 204, 0.2),
    0 6px 6px rgba(204, 204, 204, 0.2);
  background-color: pink;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1050px) {
    width: 25vw;
    height: calc(1.45 * 25vw);
  }
  @media (max-width: 650px) {
    width: 50vw;
    height: calc(1.45 * 50vw);
  }
`;

export const Info = styled.div`
  width: 70%;
  padding-left: 30px;

  @media (max-width: 650px) {
    width: 100%;
    padding-left: 0;
    margin: 20px 0;
  }

  h3 {
    font-weight: 700;
    font-size: 28px;
    color: var(--pink-color);
    margin-bottom: 15px;
  }
  h6 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    color: var(--pink-color);
  }
  span {
    font-weight: normal;
    color: var(--gray-color);
  }
  p {
    font-size: 18px;
    word-wrap: break-word;
    margin-bottom: 15px;
  }
`;
