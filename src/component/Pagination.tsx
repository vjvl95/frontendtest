import React from 'react';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePageNumber, changeLimitNumber } from '../store/paginationSlice';

import './Pagination.css';

export default function Pagination({ total }: any) {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const totalPage = Math.ceil(total / limit);
  const totalShowPage = Math.ceil(totalPage);
  const onLeftClick = useCallback(() => {
    if (page === 1) return;
    setPage(page - 1);
    dispatch(changePageNumber(page - 1));
  }, [page, limit]);

  const onRightClick = useCallback(() => {
    if (page === totalPage) return;
    setPage(page + 1);
    dispatch(changePageNumber(page + 1));
  }, [page, limit, totalPage]);

  const onNumberClick = useCallback(
    (e: any) => {
      const { innerText: clickNumber } = e.target;
      setPage(+clickNumber);
      dispatch(changePageNumber(+clickNumber));
    },
    [limit]
  );

  const onChangeHander = (e: React.ChangeEvent<{ value: string }>) => {
    dispatch(changeLimitNumber(parseInt(e.target.value)));
    dispatch(changePageNumber(1));

    setLimit(parseInt(e.target.value));
    setPage(1);
  };

  const numPages = Math.ceil(total / limit);
  return (
    <>
      <nav className='buttonNav'>
        <select onChange={onChangeHander} defaultValue={limit}>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
        <button onClick={onLeftClick} disabled={page === 1}>
          &lt;
        </button>
        {Array(totalShowPage)
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
        <button onClick={onRightClick} disabled={page === numPages}>
          &gt;
        </button>
      </nav>
    </>
  );
}
