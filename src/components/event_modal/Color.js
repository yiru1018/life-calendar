import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import downImg from '../../assets/images/down.png';
import editColorImg from '../../assets/images/color-dropper.png';
import checkImg from '../../assets/images/check.png';

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 20px 0px;
  position: relative;
`;

const Down = styled.img`
  width: 5px;
  height: 3px;
  margin-left: 6px;
`;

const ColorDropper = styled.img`
  margin-right: 10px;
  width: 16px;
  height: 16px;
`;

const Check = styled.img`
  width: 10px;
  height: 10px;
  /* z-index: 1; */
`;

const Palette = styled.div`
  background-color: #fff;
  top: 0px;
  left: 30px;
  position: absolute;
  z-index: 1;
  padding: 8px;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0px 5px 8px 2px #cccecf;
  height: 120px;
`;

const SelectColorBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 25px;
  cursor: pointer;
  &:hover {
    background-color: #e8eaed;
  }
  position: relative;
  /* &:hover ~ ${Palette} {
    max-height: 150px;
  } */
`;

const ColorTag = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  &:hover.inPalette {
    transform: scale(1.1);
    box-shadow: 0px 1.5px 1px 0px #cccecf;
  }
`;

function Color() {
  const colorList = [
    'rgb(213, 0, 0)',
    'rgb(230, 124, 115)',
    'rgb(244, 81, 30)',
    'rgb(246, 191, 38)',
    'rgb(51, 182, 121)',
    'rgb(11, 128, 67)',
    'rgb(3, 155, 229)',
    'rgb(63, 81, 181)',
    'rgb(121, 134, 203)',
    'rgb(142, 36, 170)',
    'rgb(97, 97, 97)',
  ];
  const [showPalette, setShowPalette] = useState(false);
  const [divColor, setDivColor] = useState('rgb(121, 134, 203)');
  const paletteRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target)) {
        setShowPalette(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [showPalette]);

  return (
    <Div>
      <ColorDropper src={editColorImg} />
      <SelectColorBtn
        onClick={() => {
          setShowPalette(true);
        }}
      >
        <ColorTag className="current" color={divColor} />
        <Down src={downImg} />
      </SelectColorBtn>
      {showPalette && (
        <Palette ref={paletteRef}>
          {colorList.map((color) => (
            <ColorTag
              key={v4()}
              color={color}
              className="inPalette"
              onClick={() => {
                setDivColor(color);
                setShowPalette(false);
              }}
            >
              {divColor === color && <Check src={checkImg} />}
            </ColorTag>
          ))}
        </Palette>
      )}
    </Div>
  );
}

export default Color;
