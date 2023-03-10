import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePageNumber, changeLimitNumber } from '../store/paginationSlice';
import { selectQueryParams } from '../store/store';

import './Pagination.css';
interface PagnationProps {
  total: number;
}
export default function Pagination({ total }: PagnationProps) {
  const dispatch = useDispatch();

  const page = useSelector(selectQueryParams)[1];
  const limit = useSelector(selectQueryParams)[0];

  useEffect(() => {
    if (sessionStorage.getItem('page') !== null) {
      dispatch(changePageNumber(parseInt(sessionStorage.getItem('page'))));
    }
    if (sessionStorage.getItem('limit') !== null) {
      dispatch(changeLimitNumber(parseInt(sessionStorage.getItem('limit'))));
    }
  }, []);

  const totalPage = Math.ceil(total / limit);

  const onLeftClick = useCallback(() => {
    if (page === 1) return;
    dispatch(changePageNumber(page - 1));
  }, [page, limit]);

  const onRightClick = useCallback(() => {
    if (page === totalPage) return;
    dispatch(changePageNumber(page + 1));
  }, [page, limit, totalPage]);

  const onNumberClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { innerText: clickNumber } = e.target as HTMLLIElement;
      dispatch(changePageNumber(+clickNumber));
    },
    [limit, page]
  );

  const onChangeHander = (e: React.ChangeEvent<{ value: string }>) => {
    dispatch(changeLimitNumber(parseInt(e.target.value)));
    dispatch(changePageNumber(1));
  };

  const numPages = Math.ceil(total / limit);

  return (
    <>
      <nav className='buttonNav'>
        <select onChange={onChangeHander} value={limit}>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
        <button
          className='leftRightButton'
          onClick={onLeftClick}
          disabled={page === 1}
        >
          &lt;
        </button>
        {Array(totalPage)
          .fill(0)
          .map((_, i) =>
            page === i + 1 ? (
              <button
                className='selectButton'
                key={i + 1}
                onClick={onNumberClick}
              >
                {i + 1}
              </button>
            ) : (
              <button
                className='buttonNumber'
                key={i + 1}
                onClick={onNumberClick}
              >
                {i + 1}
              </button>
            )
          )}
        <button
          className='leftRightButton'
          onClick={onRightClick}
          disabled={page === numPages || total === 0}
        >
          &gt;
        </button>
      </nav>
    </>
  );
}
