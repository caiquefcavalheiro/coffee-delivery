import styled from "styled-components";

export const HomeIntroContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: end;
  grid-template-columns: 1fr;
  gap: 3.5rem;

  img {
    display: none;
  }

  @media (min-width: 826px) {
    grid-template-columns: 1fr 476px;
    padding: 5.75rem 0;

    img {
      display: block;
    }
  }
`;

export const AsideLeft = styled.div`
  h1 {
    font-size: 3rem;
    font-family: "Baloo 2";
    font-weight: 800;
    font-style: normal;
    color: ${(props) => props.theme["base-title"]};
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-top: 1rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;

const ICON_BACKGROUND_COLOR = {
  "brand-yellow-dark": "brand-yellow-dark",
  "base-text": "base-text",
  "brand-yellow": "brand-yellow",
  "brand-purple": "brand-purple",
};

const ICON_WIDTH = {
  "294": "294px",
};

interface IconContainerProps {
  $bgcolor: keyof typeof ICON_BACKGROUND_COLOR;
  width?: keyof typeof ICON_WIDTH;
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  width: ${(props) => (props.width ? ICON_WIDTH[props.width] : "auto")};

  div {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme[props.$bgcolor]};
    padding: 0.5rem;
    border-radius: 999px;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }

  svg {
    color: ${(props) => props.theme["base-background"]};
  }
`;
