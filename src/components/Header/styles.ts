import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme["brand-purple-light"]};
  padding: 0.5rem;
  border-radius: 8px;

  label {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme["brand-purple-dark"]};
  }

  svg {
    color: ${(props) => props.theme["brand-purple"]};
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const RightIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["brand-yellow-light"]};
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    top: -10px;
    right: -15px;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme["base-white"]};
    background-color: ${(props) => props.theme["brand-yellow-dark"]};
  }

  svg {
    color: ${(props) => props.theme["brand-yellow-dark"]};
  }
`;
