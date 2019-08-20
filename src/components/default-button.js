import styled from "styled-components"
import { device } from "../devices"

export const DefaultBtn = styled.a`
  cursor: pointer;
  font-size: 1.2rem;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--primary-color)
  );
  color: #fff;
  padding: 1.6rem 2.2rem;
  border: none;
  border-radius: 15px;
  text-decoration: none;

  @media ${device.md} {
    font-size: 1.8rem;
    padding: 2.1rem 3.4rem;
  }
`
export const DefaultBtnOutline = styled.button`
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 15px;
  background: none;
  border: 0.3rem solid var(--primary-color);
  padding: 1.3rem 2.2rem;
  color: var(--primary-color);

  @media ${device.md} {
    font-size: 1.8rem;
    padding: 1.8rem 3.4em;
  }
`
