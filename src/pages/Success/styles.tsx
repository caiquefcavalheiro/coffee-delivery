import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  gap: 6.4rem;

  img {
    object-fit: contain;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  & > h2 {
    font-size: 2rem;
    font-family: "Baloo 2";
    font-weight: 800;
    color: ${(props) => props.theme["brand-yellow-dark"]};
  }
  & > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const SuccessInfoContainer = styled.div`
  padding: 0.1rem;
  border-radius: 0.375rem 2.25rem;
  background: linear-gradient(#dbac2c, #8047f8);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    border-radius: 0.375rem 2.25rem;
    background: ${(props) => props.theme["base-background"]};
  }
`;

export const SuccessInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p,
  span {
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: bold;
  }
`;

const BG_INFO = {
  "brand-purple": "brand-purple",
  "brand-yellow": "brand-yellow",
  "brand-yellow-dark": "brand-yellow-dark",
};

interface SuccessIconProps {
  $bgcolor: keyof typeof BG_INFO;
}

export const SuccessIcon = styled.div<SuccessIconProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 62.5rem;
  background: ${(props) => props.theme[props.$bgcolor]};
  color: ${(props) => props.theme["base-background"]};
`;
