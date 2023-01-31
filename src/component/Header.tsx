import './Header.css';
import React, { KeyboardEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter, changeSearchWord } from '../store/searchSlice';
import { changePageNumber } from '../store/paginationSlice';

export default function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const dispatch = useDispatch();
  const onChangeHander = (e: React.ChangeEvent<{ value: string }>) => {
    setSearchCategory(e.target.value);
    dispatch(changeFilter(e.target.value));
  };
  const searchBoxChange = (e: React.ChangeEvent<{ value: string }>) => {
    setSearchInput(e.target.value);
  };
  const searchOnClick = () => {
    dispatch(changeSearchWord(searchInput));
    dispatch(changePageNumber(1));
  };
  const keyCheck = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === 'Enter') {
      dispatch(changeSearchWord(searchInput));
      dispatch(changePageNumber(1));
    }
  };
  return (
    <div className='headercontanier'>
      <div className='headertext'>상품 검색</div>
      <div className='searchDiv' onKeyDown={keyCheck}>
        <select
          style={{
            marginRight: '30px',
            height: '40px',
            border: '1px solid rgb(233, 231, 231)',
          }}
          onChange={onChangeHander}
          defaultValue={searchCategory}
        >
          <option value='all'>전체</option>
          <option value='title'>상품명</option>
          <option value='brand'>브랜드</option>
          <option value='description'>상품내용</option>
        </select>
        <input
          type='search'
          style={{
            border: '1px solid rgb(233, 231, 231)',
            width: '300px',
            height: '40px',
          }}
          defaultValue={searchInput}
          onChange={searchBoxChange}
        ></input>
        <button className='clickbox' onClick={searchOnClick}>
          조회
        </button>
      </div>
    </div>
  );
}
