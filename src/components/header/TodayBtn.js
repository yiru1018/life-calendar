import styled from 'styled-components';

const Div = styled.div`
    margin-right: 10px;
`;

const Today = styled.button`
    font-size: 10px;
    color: #3c4043;
    background-color: white;
    border: 1px solid #e8eaed;
    border-radius: 5px;
    width: 40px;
    height: 25px;
    cursor: pointer;
    &:hover {
        background-color: #e8eaed;
    }
`;
function TodayBtn() {
    return (
        <Div>
            <Today>今天</Today>
        </Div>
    );
}

export default TodayBtn;
