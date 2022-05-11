import styled from 'styled-components';
import HeaderLeft from './HeaderLeft';
import CalendarHeader from './CalendarHeader';
import HeaderRight from './HeaderRight';

const Div = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex: 0 0 48px;
    /* height: 48px; */
    padding-left: 8px;
    padding-right: 8px;
    border-bottom: 0.6px solid #e8eaed;
    position: relative;
`;

function Header() {
    return (
        <Div>
            <HeaderLeft />
            <CalendarHeader />
            <HeaderRight />
        </Div>
    );
}

export default Header;
