import styled from 'styled-components';
import leftImg from '../../assets/images/arrow-left.png';
import rightImg from '../../assets/images/arrow-right.png';

const Div = styled.div`
    display: flex;
    align-items: center;
    color: #3c4043;
`;

const Button = styled.button`
    width: 20px;
    height: 20px;
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
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const P = styled.p`
    margin-left: 15px;
    font-size: 14px;
`;

function MonthController() {
    return (
        <Div>
            <Button className="prev">
                <Img src={leftImg} />
            </Button>
            <Button>
                <Img src={rightImg} />
            </Button>
            <P>
                <span>2022</span>年<span>6</span>月
            </P>
        </Div>
    );
}

export default MonthController;
