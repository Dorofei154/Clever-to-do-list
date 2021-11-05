import styled from "styled-components";

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `,
  Label: styled.label`
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  `,
  Span: styled.span``,
  Div: styled.div`
    padding: 10px 20px;
  `,
};
