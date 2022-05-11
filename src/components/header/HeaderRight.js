import styled from 'styled-components';
import SearchEvent from './SearchEvent';
import Trash from './Trash';
import Dropdownmenu from './Dropdownmenu';
import Avatar from './Avatar';

const Div = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

function HeaderRight() {
    return (
        <Div>
            <SearchEvent />
            <Trash />
            <Dropdownmenu />
            <Avatar />
        </Div>
    );
}

export default HeaderRight;
