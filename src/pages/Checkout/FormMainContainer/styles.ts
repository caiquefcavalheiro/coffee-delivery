import styled from "styled-components";

export const FormMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  input {
    padding: 0.75rem;
    font-size: 0.875rem;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-label"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;
  }
`;

const ICON_COLOR = {
  "brand-purple": "brand-purple",
  "brand-yellow-dark": "brand-yellow-dark",
};

interface FormHeaderProps {
  $iconColor: keyof typeof ICON_COLOR;
}

export const FormHeader = styled.header<FormHeaderProps>`
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[props.$iconColor]};
  }

  p:nth-child(2) {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p:nth-child(3) {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FormInputsContainer = styled.div`
  display: grid;
  gap: 1rem;

  grid-template-areas:
    "i1 .  ."
    "i2 i2 i2"
    "i3 i4 i4"
    "i5 i6 i7";

  input:nth-child(1) {
    grid-area: i1;
  }

  input:nth-child(2) {
    grid-area: i2;
  }

  input:nth-child(3) {
    grid-area: i3;
  }

  input:nth-child(4) {
    grid-area: i4;
  }

  input:nth-child(5) {
    grid-area: i5;
  }

  input:nth-child(6) {
    width: 275px;
    grid-area: i6;
  }

  input:nth-child(7) {
    width: 48px;
    grid-area: i7;
  }
`;

export const FormInputRadioContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 176px;
    gap: 0.75rem;
    padding: 1rem;
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};
    cursor: pointer;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 6px;
    background: ${(props) => props.theme["base-button"]};
    cursor: pointer;
    border: 1px solid transparent;
  }

  & div:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  input:checked + div {
    background: ${(props) => props.theme["brand-purple-light"]};
    border: 1px solid ${(props) => props.theme["brand-purple"]};
  }

  svg {
    color: ${(props) => props.theme["brand-purple"]};
  }
`;
