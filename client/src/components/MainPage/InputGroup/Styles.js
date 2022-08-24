import styled from "@emotion/styled";

export const Form = styled.div`
  display: flex;
  @media ${props => props.theme.media.xs}{  
    flex-direction: column;
  }
  @media ${props => props.theme.media.sm}{
    flex-direction: column;
  }

  margin-top: auto;
`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  
  @media ${props => props.theme.media.xs}{
    grid-template-columns: repeat(2, 1.2fr);
    column-gap: 10px;
    row-gap: 20px;
  }
  @media ${props => props.theme.media.sm}{
    grid-template-columns: repeat(2, 1.2fr);
    column-gap: 10px;
    row-gap: 20px;
  }
  @media ${props => props.theme.media.md}{
    max-width: 700px;
    grid-template-columns: 1fr 1.2fr 0.8fr 0.8fr;
    row-gap: 20px;
  }
  @media ${props => props.theme.media.lg}{
    max-width: 700px;
    grid-template-columns: 1fr 1.2fr 0.8fr 0.8fr;
    row-gap: 20px;
  }
  @media ${props => props.theme.media.xl} {
    max-width: 700px;
    grid-template-columns: 1fr 1.2fr 0.8fr 0.8fr;
    row-gap: 20px;
  }
  @media ${props => props.theme.media.xxl} {
    max-width: 700px;
    grid-template-columns: 1fr 1.2fr 0.8fr 0.8fr;
    row-gap: 20px;
  }
`
export const Popover = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;

  color: #5DAAFF;
  white-space: nowrap;
  
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 5px;
  
  position: absolute;
  bottom: -80px;
  width: auto;
  
  & svg {
    margin-left: 12px;
  }
`