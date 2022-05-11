import SidebarBtn from './SidebarBtn';
import Label from './Label';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
`;

function HeaderLeft() {
    return (
        <Div>
            <SidebarBtn />
            <Label />
        </Div>
    );
}

export default HeaderLeft;
