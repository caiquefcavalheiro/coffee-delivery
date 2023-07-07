import { styled } from "styled-components";

export const InputContainerStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  span {
    position: absolute;
    bottom: -17px;
    left: 2px;
    font-size: 0.7rem;
    color: ${(props) => props.theme["brand-red-light"]};
  }
`;
