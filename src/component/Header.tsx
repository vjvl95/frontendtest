import './Header.css';
import { Dispatch, SetStateAction } from 'react';
interface props {
  setSearchCategory: Dispatch<SetStateAction<any>>;
  searchCategory: string;
}

export default function Header({ setSearchCategory, searchCategory }: props) {
  const onChangeHander = (e: React.ChangeEvent<{ value: string }>) => {
    setSearchCategory(e.target.value);
  };
  return (
    <div className='contanier'>
      <div>상품 검색</div>
      <div className='line'></div>
      <div className='searchDiv'>
        <span>검색</span>
        <select onChange={onChangeHander} defaultValue={searchCategory}>
          <option value='all'>전체</option>
          <option value='title'>상품명</option>
          <option value='brand'>브랜드</option>
          <option value='description'>상품내용</option>
        </select>
      </div>
    </div>
  );
}
