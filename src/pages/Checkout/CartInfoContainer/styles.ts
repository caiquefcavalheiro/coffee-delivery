import styled from "styled-components";

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  max-width: 460px;
`;

export const CartCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartCoffee = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    display: none;
  }

  @media (min-width: 480px) {
    justify-content: left;
    gap: 1.5rem;

    img {
      display: block;
      width: 64px;
      height: 64px;
    }
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
  }

  div > p {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
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

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem;
    border: none;
    gap: 0.25rem;
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    cursor: pointer;

    p {
      font-size: 0.75rem;
      line-height: 1.6;
      color: ${(props) => props.theme["base-text"]};
      text-transform: uppercase;
    }

    svg {
      color: ${(props) => props.theme["brand-purple"]};
    }
  }

  button:hover {
    background: ${(props) => props.theme["base-hover"]};

    p {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    svg {
      color: ${(props) => props.theme["brand-purple-dark"]};
    }
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  div:nth-child(1),
  div:nth-child(2) {
    color: ${(props) => props.theme["base-text"]};
    p {
      font-size: 0.875rem;
    }
    span {
      font-size: 1rem;
    }
  }

  div:nth-child(3) {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: bold;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button {
    background: ${(props) => props.theme["brand-yellow"]};
    color: ${(props) => props.theme["base-white"]};
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: ${(props) => props.theme["brand-yellow-dark"]};
    color: ${(props) => props.theme["base-white"]};
  }
`;
