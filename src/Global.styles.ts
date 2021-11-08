import styled from 'styled-components';

export const S = {
  Calendar: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    height: 100vh;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    & button {
      font-size: 20px;
      padding-bottom: 35px;
    }
  `,
  List: styled.li`
    list-style-type: none;
  `,
  Section: styled.section`
    list-style-type: none;
  `,
  Ul: styled.ul`
    list-style-type: none;
  `,
  Div: styled.div`
    padding: 10px 20px;
  `,
  Label: styled.label`
    padding-left: 10px;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  `,
  Span: styled.span``,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `
};
