import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Form } from '@unform/core';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { darken } from 'polished';

export const Title = styled.h2`
  margin: 34px 0 34px 270px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  padding: 0px 270px;
`;

export const Box = styled.div`
  margin-top: 20px;
  border-radius: 5px;

  display: flex;
  width: 100%;
  padding: 25px 0px;
  background: #fff;
  align-items: center;
  flex-wrap: wrap;
`;

export const Formulary = styled(Form)`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Icon = styled(MdKeyboardArrowDown)`
  color: black;
  width: 25px;
  height: 25px;
  right: 5px;
  bottom: 10px;

  position: absolute;
`;

export const RecipientList = styled.ul.attrs(props => ({
  visible: props.visible,
}))`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 650px;

  background: #fff;
  border: 1px solid #e32;
  top: 70px;
  z-index: 5;
`;

export const CourierList = styled.div.attrs(props => ({
  visible: props.visible,
}))`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 650px;

  background: #fff;
  border: 1px solid #e32;
  top: 70px;
  z-index: 5;
`;

export const Option = styled.ul`
  display: flex;
  align-self: flex-start;
  align-items: center;
  height: 25px;
  border-bottom: 1px solid #ccc;

  :last-child {
    border: 0;
  }
`;

export const Itens = styled.option`
  padding-left: 5px;
  font-size: 16px;
  color: #000000;
  border: 0;
  width: 100%;

  &:hover {
    cursor: pointer;
    color: ${darken(0.4, '#999999')};
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  padding: 0px 15px 0 0;
  max-height: 100px;
`;
