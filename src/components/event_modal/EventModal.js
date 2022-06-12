import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { collection, addDoc } from 'firebase/firestore';
import closeImg from '../../assets/images/close.png';
import SetTime from './SetTime';
import Notification from './Notification';
import Description from './Description';
import Color from './Color';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import GlobalContext from '../../context/GlobalContext';
import { db, requestForToken } from '../../../firebase-config';

const Div = styled.div`
  width: 448px;
  height: ${(props) => (props.allDay ? '450px' : '500px')};
  box-shadow: 0px 5px 8px 2px #cccecf;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  background-color: #fff;
  position: absolute;
  z-index: 1;
  top: 10%;
  left: 20%;
  @media screen and (max-width: 600px) {
    left: 10%;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const ExceptTitle = styled.div`
  padding: 5px 10px 5px 15px;
`;

const ClosingTag = styled.div`
  width: 100%;
  height: 36px;
  background-color: #e8eaed;
  border-radius: 5px 5px 0px 0px;
  margin-top: 1.5px;
  position: relative;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin: 0px 5px 2px auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #dadce0;
  }
`;

const TitleInputDiv = styled.div`
  position: relative;
`;

const Underline = styled.span`
  background-color: #9649c9;
  position: absolute;
  width: 364px;
  height: 1.5px;
  top: 52px;
  left: 52px;
  transition: all 0.2s linear;
  transform: scale(0, 1);
`;

const TitleInput = styled.input`
  width: 364px;
  border-bottom: 1px solid #ccc;
  color: #555;
  font-size: 22px;
  margin: 20px 40px 10px 52px;
  &:focus ~ ${Underline} {
    transform: scale(1);
  }
`;

const SaveDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 40px;
  margin-right: 20px;
`;

const SaveButton = styled.button`
  width: 76px;
  height: 36px;
  color: #fff;
  font-size: 14px;
  background-color: #9649c9;
  border-radius: 3px;
`;

function EventModal() {
  const {
    setShowEventModal,
    eventStartDay,
    eventEndDay,
    user,
    setReNewEvents,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState('');
  const [eventStartTime, setEventStartTime] = useState(new Date(eventStartDay));
  const [eventEndTime, setEventEndTime] = useState(new Date(eventEndDay));
  const [notify, setNotify] = useState({ number: '1', timeUnit: '分鐘' });
  const [createNotify, setCreateNotify] = useState(false);
  const [description, setDescription] = useState('');
  const [divColor, setDivColor] = useState('rgb(121, 134, 203)');
  const [allDay, setAllDay] = useState(true);
  const [token, setToken] = useState('');

  // get firebase cloud message token
  useEffect(() => {
    requestForToken(setToken);
  }, []);

  const getNotifyTime = (n, unit, start) => {
    const number = Number(n);
    let result;
    if (unit === '分鐘') result = number * 60 * 1000;
    if (unit === '小時') result = number * 60 * 60 * 1000;
    if (unit === '天') result = number * 24 * 60 ** 60 * 1000;
    if (unit === '週') result = number * 7 * 24 * 60 * 60 * 1000;

    const notifyTime = new Date(start.getTime() - result);
    return notifyTime;
  };

  const createEvent = async () => {
    const eventCollectionRef = collection(db, 'event');
    const allDayStart = new Date(eventStartDay.format('YYYY,M,D'));
    const allDayEnd = new Date(eventEndDay.format('YYYY,M,D'));
    const startWithTime = new Date(
      new Date(eventStartDay).setHours(
        eventStartTime.getHours(),
        eventStartTime.getMinutes()
      )
    );
    const endWithTime = new Date(
      new Date(eventEndDay).setHours(
        eventEndTime.getHours(),
        eventEndTime.getMinutes()
      )
    );

    await addDoc(eventCollectionRef, {
      user: user.email,
      event: title || '無標題',
      isAllDay: allDay,
      days: parseInt(
        Math.abs(allDayStart - allDayEnd) / 1000 / 60 / 60 / 24,
        10
      ),
      start: allDay ? allDayStart : startWithTime,
      end: allDay ? allDayEnd : endWithTime,
      createNotify,
      notify: createNotify ? `${notify.number} ${notify.timeUnit} ` : '',
      notifyTime: createNotify
        ? getNotifyTime(
            notify.number,
            notify.timeUnit,
            allDay ? allDayStart : startWithTime
          )
        : '',
      notifySent: false,
      token: createNotify ? token : '',
      desc: description,
      color: divColor,
    });
    setReNewEvents(true);
  };

  return (
    <Div allDay={allDay}>
      <GlobalStyle />
      <ClosingTag>
        <Img src={closeImg} onClick={() => setShowEventModal(false)} />
      </ClosingTag>
      <TitleInputDiv>
        <TitleInput
          autoFocus
          placeholder="新增標題"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Underline />
      </TitleInputDiv>
      <ExceptTitle>
        <SetTime
          allDay={allDay}
          setAllDay={setAllDay}
          eventStartTime={eventStartTime}
          setEventStartTime={setEventStartTime}
          eventEndTime={eventEndTime}
          setEventEndTime={setEventEndTime}
        />
        <Notification
          notify={notify}
          setNotify={setNotify}
          createNotify={createNotify}
          setCreateNotify={setCreateNotify}
        />
        <Description
          description={description}
          setDescription={setDescription}
        />
        <Color divColor={divColor} setDivColor={setDivColor} />
        <SaveDiv>
          <SaveButton
            onClick={() => {
              createEvent();
              setShowEventModal(false);
            }}
          >
            儲存
          </SaveButton>
        </SaveDiv>
      </ExceptTitle>
    </Div>
  );
}

export default EventModal;
