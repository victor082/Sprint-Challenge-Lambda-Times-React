import React from 'react';
import styled, { css } from 'styled-components'

const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    .header {
      width: 1280px;
    }
`
const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const HeaderSpan = styled.span `
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`
const HeaderSpanDate = styled.span `
  margin-left: 25px;
  flex: 1;
`
const HeaderSpanTemp = styled.span `
  text-align: right;
  margin-right: 25px;
  flex: 1;
`


const Header = () => {
  return (
    <HeaderMain>
      <HeaderSpan>
      <HeaderSpanDate>SMARCH 32, 2018</HeaderSpanDate>
      </HeaderSpan>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpan>
      <HeaderSpanTemp>98°</HeaderSpanTemp>
      </HeaderSpan>
    </HeaderMain>
  )
}

export default Header