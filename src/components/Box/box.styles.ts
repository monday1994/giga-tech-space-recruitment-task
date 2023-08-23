import styled from 'styled-components';
import {cardBoxStyle} from '../../assets/styles/base.styles';

export const StyledBoxContainer = styled.div`
  margin-top: 2em;
  width: 240px;
  height: 240px;
  ${cardBoxStyle};
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-sizing: border-box;
`

export const StyledLabel = styled.span`
  display: block;
  padding: 0.5em 0;
  font-weight: 700;
  font-size: 1.2em;
  width: 100%;
`

export const StyledTextHeader = styled.span`
  font-size: 0.9em;
`

export const StyledText = styled.span`
  word-break: break-all;
  padding: 0.5em 0;
  font-weight: 300;
  font-size: 0.8em;
  width: 100%;
`