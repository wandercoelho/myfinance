import styled from "styled-components";
import Image from "../../assets/Background.jpeg";

export const Container = styled.header`
  background-image: url(${Image});
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #fff;
    background: var(--blue);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem; // 0.25*16px = 4px
    height: 3rem; //3*16px = 48px

    transition: filter 0.2s;

    &:hover {
      // propriedade muda a cor (+ claro) de todos os elementos (texto e butão)
      filter: brightness(0.9);
    }
  }
`;
