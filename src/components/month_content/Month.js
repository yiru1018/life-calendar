import React from 'react';
import styled from 'styled-components';
import Day from './Day';

const Div = styled.div`
  height: 92vh;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

function Month({ month }) {
  return (
    <Div>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </Div>
  );
}

export default Month;
