import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { v4 } from 'uuid';
import dayjs from 'dayjs';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GlobalContext from '../../context/GlobalContext';
import EditEvent from '../events/EditEvent';

const Div = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 8px;
  color: #5f6368;
  font-size: 20px;
  width: 90%;
`;

const Button = styled.button`
  padding: 12px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 8px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
  &.clsoe {
    padding: 8px;
    width: 40px;
    height: 40px;
    margin: 3px;
  }
`;

const Search = styled.div`
  width: 70%;
  margin-left: auto;
  position: relative;
`;

const SearchInput = styled.div`
  height: 46px;
  padding: 0px 8px 0px 8px;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 0px #dadce0;
`;

const Input = styled.input`
  font-size: 14px;
  width: 100%;
  margin: 0px 8px 0px 8px;
`;

const DataResult = styled.div`
  border: 1px solid #e8eaed;
  border-radius: 0px 0px 5px 5px;
  background-color: #fff;
  width: 100%;
  padding: 8px;
  position: absolute;
  z-index: 5;
  font-size: 14px;
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    background-color: #e8eaed;
  }
  padding: 3px;
  position: relative;
`;

const SearchP = styled.p`
  &.title {
    margin: 0px 5px 0px 5px;
  }
  &.time {
    margin-left: auto;
  }
`;

function SearchHeader({ setSearching }) {
  const { events, user, showSearchEvent, setShowSearchEvent, setCurrentDoc } =
    useContext(GlobalContext);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  console.log(events.filter((event) => event.user === user.email));

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = events
      .filter((item) => item.user === user.email)
      .filter((value) =>
        value.event.toLowerCase().includes(searchWord.toLowerCase())
      );

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <Div>
      <Button onClick={() => setSearching(false)}>
        <ArrowBackIcon sx={{ color: '#5f6368' }} />
      </Button>
      <p>搜尋</p>
      <Search>
        <SearchInput>
          <SearchIcon sx={{ color: '#5f6368' }} />
          <Input
            type="text"
            placeholder="搜尋"
            value={wordEntered}
            onChange={handleFilter}
          />
          {filteredData.length !== 0 && (
            <Button className="clsoe" onClick={clearInput}>
              <CloseIcon sx={{ color: '#5f6368', marginLeft: 'auto' }} />
            </Button>
          )}
        </SearchInput>
        {filteredData.length !== 0 && (
          <DataResult>
            {filteredData.map((value) => (
              <Result
                key={v4()}
                onClick={() => {
                  setShowSearchEvent(value.id);
                  setCurrentDoc({
                    title: value.event,
                    allDay: value.isAllDay,
                    start: value.start,
                    end: value.end,
                    desc: value.desc,
                    color: value.color,
                    id: value.id,
                    notify: value.notify,
                    createNotify: value.createNotify,
                  });
                }}
              >
                <CalendarTodayIcon />
                <SearchP className="title">{value.event}</SearchP>
                <SearchP className="time">
                  {dayjs(value.start.toDate()).format('M[月]D[日]')}
                </SearchP>
                {showSearchEvent === value.id && (
                  <EditEvent
                    title={value.event}
                    desc={value.desc}
                    color={value.color}
                    id={value.id}
                    allDay={value.isAllDay}
                    start={value.start}
                    end={value.end}
                    notify={value.notify}
                    createNotify={value.createNotify}
                    rowIdx="search"
                    columnIdx="search"
                  />
                )}
              </Result>
            ))}
          </DataResult>
        )}
      </Search>
    </Div>
  );
}

export default SearchHeader;
