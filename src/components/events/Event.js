import React from 'react';
import styled from 'styled-components';

const StyledEvent = styled.div`
  background-color: ${(props) => props.color};
  height: 20px;
  border-radius: 6px;
  margin-bottom: 2px;
  width: 95%;
  color: #fff;
  font-size: 12px;
`;

const Title = styled.p`
  margin-left: 5px;
`;

function Event({ title, desc, color, id }) {
  return (
    <StyledEvent color={color}>
      <Title>{title}</Title>
    </StyledEvent>
  );
}

export default Event;
