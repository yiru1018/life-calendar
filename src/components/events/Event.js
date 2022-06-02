import React, { useContext } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import GlobalContext from '../../context/GlobalContext';

const StyledEvent = styled.div`
  background-color: ${(props) => props.color};
  opacity: ${(props) => (props.isDragging ? 0.8 : 1)};
  height: 20px;
  border-radius: 6px;
  margin-bottom: 2px;
  width: 95%;
  position: relative;
  /* z-index: 1; */
  color: #fff;
  font-size: 12px;
`;

const Title = styled.p`
  margin-left: 5px;
  height: 20px;
`;

function Event({ title, desc, color, id, days, start, end }) {
  const { setShowEditEvent } = useContext(GlobalContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'div',
    item: { id, days, start, end },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <StyledEvent ref={drag} color={color} isDragging={isDragging}>
      <Title>{title}</Title>
    </StyledEvent>
  );
}

export default Event;
