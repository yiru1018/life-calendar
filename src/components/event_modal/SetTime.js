import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import clockImg from '../../assets/images/clock.png';
import GlobalContext from '../../context/GlobalContext';
import SwitchBtn from './SwitchBtn';
import StartCalendar from './StartCalendar';
import EndCalendar from './EndCalendar';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  color: #3c4043;
  font-size: 14px;
  margin-top: 10px;
`;

const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  width: 364px;
  &.forWholeDay {
    margin-left: 40px;
    font-size: 16px;
    justify-content: space-between;
  }
  &.forRepeatSelector {
    margin: 10px 0px 0px 30px;
  }
  &.forTime {
    margin-left: 40px;
  }
`;

const Img = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;

const Underline = styled.span`
  background-color: #9649c9;
  position: absolute;
  width: 127px;
  height: 1.5px;
  bottom: 0px;
  transition: all 0.2s linear;
  transform: scale(0, 1);
`;

const DateBackground = styled.div`
  margin: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 127px;
  height: 36px;
  &:focus-within {
    background-color: #e8eaed;
  }
  position: relative;
`;

const DateInput = styled.input`
  font-size: 14px;
  color: #3c4043;
  width: 111px;
  height: 24px;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  &:focus ~ ${Underline} {
    transform: scale(1);
  }
`;

function SetTime({
  allDay,
  setAllDay,
  eventStartTime,
  setEventStartTime,
  eventEndTime,
  setEventEndTime,
}) {
  const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: 'Roboto,"Noto Sans TC",Helvetica,Arial,sans-serif',
      textColor: 'red',
    },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const { eventStartDay, eventEndDay } = useContext(GlobalContext);

  const showDay = (slcDay) => {
    const week = {
      0: '日',
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六',
    };

    const result = `${slcDay.format('M[月]D[日]')}(星期${
      week[slcDay.format('d')]
    })`;
    return result;
  };

  const [startDateInput, setStartDateInput] = useState(showDay(eventStartDay));

  const handleFocus = (event) => {
    event.target.select();
  };

  return (
    <Div>
      <InnerDiv className="forWholeDay">
        <p>全天</p>
        <SwitchBtn active={allDay} clicked={() => setAllDay((prev) => !prev)} />
      </InnerDiv>
      <InnerDiv>
        <Img src={clockImg} />
        <DateBackground allday={allDay}>
          <DateInput
            type="text"
            name="startDate"
            value={showDay(eventStartDay)}
            onChange={(newDate) => setStartDateInput(newDate)}
            onFocus={handleFocus}
            onClick={() => {
              setShowStartCalendar(true);
              setShowEndCalendar(false);
            }}
          />
          <Underline />
          {showStartCalendar && (
            <StartCalendar
              showStartCalendar={showStartCalendar}
              setShowStartCalendar={setShowStartCalendar}
            />
          )}
        </DateBackground>
        &nbsp;–&nbsp;
        <DateBackground>
          <DateInput
            type="text"
            name="endDate"
            value={showDay(eventEndDay)}
            onChange={(newDate) => setStartDateInput(newDate)}
            onFocus={handleFocus}
            onClick={() => {
              setShowStartCalendar(false);
              setShowEndCalendar(true);
            }}
          />
          <Underline />
          {showEndCalendar && (
            <EndCalendar
              showEndCalendar={showEndCalendar}
              setShowEndCalendar={setShowEndCalendar}
            />
          )}
        </DateBackground>
      </InnerDiv>
      {!allDay && (
        <InnerDiv className="forTime">
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Begin"
                value={eventStartTime}
                onChange={(newTime) => setEventStartTime(newTime)}
                renderInput={(params) => (
                  <TextField size="small" sx={{ width: '118px' }} {...params} />
                )}
              />
              <TimePicker
                label="End"
                value={eventEndTime}
                onChange={(newTime) => setEventEndTime(newTime)}
                renderInput={(params) => (
                  <TextField
                    size="small"
                    sx={{ marginLeft: '20px', width: '118px' }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </InnerDiv>
      )}
    </Div>
  );
}

export default SetTime;
