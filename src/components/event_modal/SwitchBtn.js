import React from 'react';
import styled from 'styled-components';

const StyledSwitchButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    width: 34px;
    background-color: ${(props) => (props.active ? '#9649c9' : '#70757a')};
    border-radius: 11px;
    border: 1px solid ${(props) => (props.active ? '#9649c9' : '#70757a')};
    box-sizing: border-box;
    padding: 0;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    outline: none;
    &::after {
      content: '';
      width: 16px;
      height: 16px;
      background-color: #ffffff;
      border-radius: 50%;
      box-shadow: 0px 1px 3px rgba(30, 30, 30, 0.3);
      transition: all 200ms ease-in-out;
      transform: ${(props) =>
        props.active ? 'translate(16px)' : 'translate(0)'};
      display: block;
    }
  }
`;

function SwitchBtn({ active, clicked }) {
  return (
    <StyledSwitchButton active={active}>
      <button type="button" onClick={clicked} aria-label="all day check" />
    </StyledSwitchButton>
  );
}

export default SwitchBtn;
