import TodayBtn from './TodayBtn';
import MonthController from './MonthController';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
    margin-left: 70px;
`;

function CalendarHeader() {
    return (
        <Div>
            <TodayBtn />
            <MonthController />
        </Div>
    );
}

export default CalendarHeader;
