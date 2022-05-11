import avatarImg from '../../assets/images/avatar.png';
import styled from 'styled-components';

const Button = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    &.prev {
        margin-right: 5px;
    }
    &:hover {
        background-color: #e8eaed;
    }
`;

const Img = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function Avatar() {
    return (
        <>
            <Button>
                <Img src={avatarImg} />
            </Button>
        </>
    );
}

export default Avatar;
