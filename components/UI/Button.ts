import styled from "styled-components";

// da kolega Josip bude zadovoljan 😁
const Button = styled.button`
  padding: 1rem;
  background: #023168;
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  &:hover,
  &:focus {
    background: #011d3e;
  }
`;

export default Button;
