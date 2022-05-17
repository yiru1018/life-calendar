import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import Day from './Day';

const Div = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

function Month({ month }) {
  return (
    <Div>
      {month.map((row, i) => (
        <React.Fragment key={v4()}>
          {row.map((day) => (
            <Day day={day} key={v4()} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </Div>
  );
}

export default Month;
