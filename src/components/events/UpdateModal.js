import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { updateDoc, doc } from 'firebase/firestore';
import dayjs from 'dayjs';
import closeImg from '../../assets/images/close.png';
import UpdateSetTime from './UpdateSetTime';
import UpdateNotification from './UpdateNotification';
import UpdateDescription from './UpdateDescription';
import UpdateColor from './UpdateColor';
import GlobalContext from '../../context/GlobalContext';
import { db, requestForToken } from '../../../firebase-config';
import getEvents from '../../utils/getEvents';

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

function UpdateModal() {
  const { setShowUpdateModal, setEvents, currentDoc, setReNewEvents } =
    useContext(GlobalContext);
  console.log(currentDoc);
  const [title, setTitle] = useState(currentDoc.title);
  const [eventStartDate, setEventStartDate] = useState(
    currentDoc.start.toDate()
  );
  const [eventEndDate, setEventEndDate] = useState(currentDoc.start.toDate());
  const [eventStartTime, setEventStartTime] = useState(
    currentDoc.start.toDate()
  );
  const [eventEndTime, setEventEndTime] = useState(currentDoc.end.toDate());
  const notifyList = currentDoc.notify.split(' ');
  const [notify, setNotify] = useState({
    number: notifyList[0],
    timeUnit: notifyList[1],
  });
  const [createNotify, setCreateNotify] = useState(currentDoc.createNotify);
  const [description, setDescription] = useState(currentDoc.desc);
  const [divColor, setDivColor] = useState(currentDoc.color);
  const [allDay, setAllDay] = useState(currentDoc.allDay);
  const [token, setToken] = useState('');

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

    const notifyTime = start.getTime() - result;
    return notifyTime;
  };

  const updateEvent = async () => {
    const eventDoc = doc(db, 'event', currentDoc.id);
    const allDayStart = new Date(dayjs(eventStartDate).format('YYYY,M,D'));
    const allDayEnd = new Date(dayjs(eventEndDate).format('YYYY,M,D'));
    const startWithTime = new Date(
      new Date(eventStartDate).setHours(
        eventStartTime.getHours(),
        eventStartTime.getMinutes()
      )
    );
    const endWithTime = new Date(
      new Date(eventEndDate).setHours(
        eventEndTime.getHours(),
        eventEndTime.getMinutes()
      )
    );
    const newFields = {
      event: title || '無標題',
      isAllDay: allDay,
      days: parseInt(
        Math.abs(allDayStart - allDayEnd) / 1000 / 60 / 60 / 24,
        10
      ),
      start: allDay ? allDayStart : startWithTime,
      end: allDay ? allDayEnd : endWithTime,
      notify: createNotify ? `${notify.number} ${notify.timeUnit}` : '',
      notifyTime: createNotify
        ? getNotifyTime(
            notify.number,
            notify.timeUnit,
            allDay ? allDayStart : startWithTime
          )
        : '',
      token: createNotify ? token : '',
      desc: description,
      color: divColor,
    };
    await updateDoc(eventDoc, newFields);
    setReNewEvents(true);
  };

  return (
    <Div allDay={allDay} onClick={(e) => e.stopPropagation()}>
      <ClosingTag>
        <Img
          src={closeImg}
          onClick={() => {
            setShowUpdateModal(false);
          }}
        />
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
        <UpdateSetTime
          allDay={allDay}
          setAllDay={setAllDay}
          eventStartDate={eventStartDate}
          setEventStartDate={setEventStartDate}
          eventEndDate={eventEndDate}
          setEventEndDate={setEventEndDate}
          eventStartTime={eventStartTime}
          setEventStartTime={setEventStartTime}
          eventEndTime={eventEndTime}
          setEventEndTime={setEventEndTime}
        />
        <UpdateNotification
          notify={notify}
          setNotify={setNotify}
          createNotify={createNotify}
          setCreateNotify={setCreateNotify}
        />
        <UpdateDescription
          description={description}
          setDescription={setDescription}
        />
        <UpdateColor divColor={divColor} setDivColor={setDivColor} />
        <SaveDiv>
          <SaveButton
            onClick={() => {
              updateEvent();
              // getEvents(setEvents);
              setShowUpdateModal(false);
            }}
          >
            儲存
          </SaveButton>
        </SaveDiv>
      </ExceptTitle>
    </Div>
  );
}

export default UpdateModal;
