import styled from "styled-components";

export const WrapperDiv = styled.div`
  
  height:auto;
  position:auto;
  margin: auto;
  > h4 {
    padding-bottom: 0px;
  }
  label {
    height:auto;
    display: flex;
    align-items: center;
    padding:  0;
    margin-left: 12px;
    width: max-content;
    cursor: pointer;
  }
  input {
    margin-left: 6px;
    &[type="radio"] {
      margin-left: 0;
      margin-right: 6px;
    }
  }
`;