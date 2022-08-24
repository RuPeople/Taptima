import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 50%;
`
export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding-bottom: 50px;
`
export const Input = styled.input`
  background: #FFFFFF;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  border: none;

  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */
  padding: 20px;
  letter-spacing: 0.2px;

  color: #B7B7B7;
`
export const Subject = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;

  & span {
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    /* identical to box height, or 100% */

    letter-spacing: 0.2px;

    color: #606F7A;
    margin-bottom: 20px;
  }

  & textarea {
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    /* identical to box height, or 100% */

    letter-spacing: 0.2px;

    color: #606F7A;

    padding: 20px;

    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    border: none;
    height: 125px;

    resize: vertical;
  }

  margin-bottom: 20px;
`
export const Submit = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;

  & button {
    background: #5DAAFF;
    border-radius: 5px;

    padding: 20px 30px;
    border: none;

    font-weight: 600;
    font-size: 17px;
    line-height: 17px;
    /* identical to box height, or 100% */

    text-align: center;
    letter-spacing: 0.2px;

    color: #FCFDFF;

    cursor: pointer;

    &:hover {

      background: #2876CC !important;
      box-shadow: 0px 4px 40px rgba(40, 118, 204, 0.12);
    }

  }

  margin-bottom: 20px;
`
export const Agreement = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  /* or 147% */

  letter-spacing: 0.2px;

  color: #B7B7B7;

  & a {
    text-decoration: none;
    color: #606F7A;
  }
`
export const Error = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #FF5D5D;
`
