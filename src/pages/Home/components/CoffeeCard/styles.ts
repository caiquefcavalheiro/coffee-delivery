import styled from "styled-components";

export const CoffeeContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 1.25rem;
  width: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    margin-top: -2.5rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: "Baloo 2";
    text-align: center;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & > p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const CoffeeTypes = styled.div`
  display: flex;
  gap: 0.25rem;

  p {
    background: ${(props) => props.theme["brand-yellow-light"]};
    color: ${(props) => props.theme["brand-yellow-dark"]};
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 100px;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-text"]};
    font-weight: bold;
    font-family: "Baloo 2";
  }
  p span {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`;
export const CoffeeAsideInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const CoffeeQuantity = styled.div`
  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  border-radius: 6px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme["brand-purple"]};
  }

  svg:hover {
    color: ${(props) => props.theme["brand-purple-dark"]};
  }
`;

export const CoffeeCart = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme["brand-purple-dark"]};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["base-card"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["brand-purple"]};
  }
`;
