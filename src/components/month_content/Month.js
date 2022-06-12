import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Day from './Day';

const Div = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, minmax(0, 1fr)); ;
`;

function Month({ month }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Div>
        {month.map((row, i) => (
          <React.Fragment key={v4()}>
            {row.map((day, j) => (
              <Day day={day} key={v4()} rowIdx={i} columnIdx={j} />
            ))}
          </React.Fragment>
        ))}
      </Div>
    </DndProvider>
  );
}

export default Month;
