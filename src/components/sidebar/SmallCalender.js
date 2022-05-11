import { getMonth } from '../../getMonth';
import { useState } from 'react';
import leftImg from '../../assets/images/arrow-left.png';
import rightImg from '../../assets/images/arrow-right.png';
import styled from 'styled-components';
import dayjs from 'dayjs';
import React from 'react';

const Div = styled.div`
    color: #3c4043;
    padding: 0px 14px 16px 19px;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px;
    font-size: 10px;
`;

const Button = styled.button`
    width: 15px;
    height: 15px;
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
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const DateTable = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-size: 8px;
    margin-top: 5px;
`;

const Week = styled.p`
    color: #70757a;
    padding-left: 5px;
`;

const Date = styled.p`
    text-align: center;
    line-height: 16px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-top: 5px;
    cursor: pointer;
    &:hover {
        background-color: #e8eaed;
    }
    ${(props) =>
        props.currentdate === dayjs().format('D-M-YY') &&
        `
        color:white;
        background-color:#9649c9;
        &:hover {
        background-color: #7c3da6;
    }
        `}
    ${(props) => props.month !== dayjs().format('M') && `color:#70757a;`}
`;

function SmallCalender() {
    const week = ['日', '一', '二', '三', '四', '五', '六'];

    const [currentMonth, setCurrentMonth] = useState(getMonth(undefined, 6));
    return (
        <Div>
            <Header>
                <p>2022年6月</p>
                <div>
                    <Button className="prev">
                        <Img src={leftImg} />
                    </Button>
                    <Button>
                        <Img src={rightImg} />
                    </Button>
                </div>
            </Header>
            <DateTable>
                {week.map((day, i) => (
                    <Week key={i}>{day}</Week>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <Date
                                key={idx}
                                currentdate={day.format('D-M-YY')}
                                month={day.format('M')}
                            >
                                {day.format('D')}
                            </Date>
                        ))}
                    </React.Fragment>
                ))}
            </DateTable>
        </Div>
    );
}

export default SmallCalender;
