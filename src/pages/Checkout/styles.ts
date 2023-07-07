import styled from "styled-components";

export const CheckoutMainContainer = styled.form`
  display: grid;
  grid-template-columns: 640px 448px;
  justify-items: end;

  h2 {
    font-size: 1.125rem;
    font-family: "Baloo 2";
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 1rem;
  }
`;
