import styled from "styled-components";

export const CoffeeList = styled.div`
  display: flex;

  h4 {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: "Baloo 2";
    text-align: center;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }
`;
