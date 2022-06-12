import React, { useContext } from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import GlobalContext from '../../context/GlobalContext';
import EditEvent from './EditEvent';

const StyledEvent = styled.div`
  background-color: ${(props) => props.color};
  opacity: ${(props) => (props.isDragging ? 0.8 : 1)};
  height: 20px;
  border-radius: 6px;
  margin-bottom: 2px;
  width: 95%;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  position: relative;
`;

const Title = styled.p`
  margin-left: 5px;
  height: 20px;
`;

function Event({
  title,
  desc,
  color,
  id,
  days,
  start,
  end,
  allDay,
  notify,
  createNotify,
  rowIdx,
  columnIdx,
}) {
  const { showEditEvent, setShowEditEvent, setCurrentDoc } =
    useContext(GlobalContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'div',
    item: { id, days, start, end },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <StyledEvent
      ref={drag}
      color={color}
      isDragging={isDragging}
      onClick={(e) => {
        setShowEditEvent(id);
        setCurrentDoc({
          title,
          desc,
          color,
          id,
          allDay,
          start,
          end,
          notify,
          createNotify,
        });
        e.stopPropagation();
      }}
    >
      <Title>{title}</Title>
      {showEditEvent === id && (
        <EditEvent
          title={title}
          desc={desc}
          color={color}
          id={id}
          start={start}
          end={end}
          notify={notify}
          allDay={allDay}
          rowIdx={rowIdx}
          columnIdx={columnIdx}
        />
      )}
    </StyledEvent>
  );
}

export default Event;
