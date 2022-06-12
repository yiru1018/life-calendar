import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { deleteDoc, doc } from 'firebase/firestore';
import closeImg from '../../assets/images/close.png';
import editImg from '../../assets/images/edit.png';
import trashImg from '../../assets/images/trash1.png';
import descImg from '../../assets/images/multiline-text.png';
import bellImg from '../../assets/images/bell.png';
import GlobalContext from '../../context/GlobalContext';
import { db } from '../../../firebase-config';

const Div = styled.div`
  padding-bottom: 8px;
  width: 448px;
  box-shadow: 0px 5px 8px 2px #cccecf;
  border-radius: 5px;
  position: absolute;
  ${(props) =>
    props.rowIdx === 'search' && 'top:200px; left:50px; height:fit-content;'}
  ${(props) => (props.rowIdx < 2 ? { top: '0' } : { bottom: '0' })}
  ${(props) => (props.columnIdx < 2 ? { left: '102%' } : { right: '102%' })} 
  background-color: #fff;
  z-index: 2;
  color: #3c4043;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
  padding-right: 6px;
`;

const Img = styled.img`
  margin: 0px 5px 0px 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #dadce0;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 0px 6px 0px;
`;

const TitleTime = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-size: 14px;
  &.title {
    font-size: 22px;
  }
  &.time {
    margin-right: auto;
  }
`;

const Icon = styled.img`
  margin-left: 28px;
  margin-right: 20px;
  &.desc {
    width: 28px;
    height: 22px;
  }
  &.notify {
    width: 25px;
    height: 25px;
  }
`;

const ColorDiv = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  margin-left: 32px;
  margin-right: 30px;
`;

function EditEvent({
  title,
  desc,
  color,
  id,
  allDay,
  start,
  end,
  notify,
  rowIdx,
  columnIdx,
}) {
  const {
    showEditEvent,
    setShowEditEvent,
    setShowSearchEvent,
    setShowUpdateModal,
    setReNewEvents,
  } = useContext(GlobalContext);

  const showTime = () => {
    console.log(start, end, allDay);
    let result;
    const week = {
      0: '日',
      1: '一',
      2: '二',
      3: '三',
      4: '四',
      5: '五',
      6: '六',
    };

    const startToDate = dayjs(start.toDate());
    const endToDate = dayjs(end.toDate());

    const startDate = `${startToDate.format('M[月]D[日]')}(星期${
      week[startToDate.format('d')]
    })`;
    const endDate = `${endToDate.format('M[月]D[日]')}(星期${
      week[endToDate.format('d')]
    })`;

    const startTime = startToDate.format('h:mm A');
    const endTime = endToDate.format('h:mm A');

    if (allDay === true) {
      if (startDate === endDate) result = startDate;
      result = `${startDate}-${endDate}`;
    }
    if (allDay === false) {
      if (startDate === endDate)
        result = `${startDate} ${startTime} - ${endTime}`;
      result = `${startDate} ${startTime} - ${endDate} ${endTime}`;
    }
    console.log(result);
    return result;
  };

  const deleteEvent = async () => {
    const eventDoc = doc(db, 'event', id);
    await deleteDoc(eventDoc);
    setReNewEvents(true);
  };

  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowEditEvent(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [showEditEvent]);

  return (
    <Div
      onClick={(e) => e.stopPropagation()}
      ref={ref}
      rowIdx={rowIdx}
      columnIdx={columnIdx}
    >
      <Header>
        <Img
          className="edit"
          src={editImg}
          onClick={() => {
            setShowUpdateModal(true);
            setShowEditEvent(false);
            setShowSearchEvent(false);
          }}
        />
        <Img
          className="trash"
          src={trashImg}
          onClick={() => {
            deleteEvent();
            setShowEditEvent(false);
            setShowSearchEvent(false);
          }}
        />
        <Img
          className="close"
          src={closeImg}
          onClick={() => {
            setShowEditEvent(false);
            setShowSearchEvent(false);
          }}
        />
      </Header>
      <InnerDiv className="titleTime">
        <ColorDiv color={color} />
        <TitleTime>
          <P className="title">{title}</P>
          <P className="time">{showTime()}</P>
        </TitleTime>
      </InnerDiv>
      {desc && (
        <InnerDiv className="desc">
          <Icon src={descImg} className="desc" />
          <P>{desc}</P>
        </InnerDiv>
      )}
      {notify && (
        <InnerDiv className="notify">
          <Icon src={bellImg} className="notify" />
          <P>{notify}前</P>
        </InnerDiv>
      )}
    </Div>
  );
}

export default EditEvent;
