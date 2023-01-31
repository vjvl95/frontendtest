import React from 'react';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pagenation.css';
// import { createLink } from '../utils/makeLink';
export default function Pagenation({
  total,
  limit,
  page,
  setPage,
  setLimit,
}: any) {
  const navigator = useNavigate();
  const [showPages, setShowPages] = useState(Math.ceil(page / 3));
  const totalPage = Math.ceil(total / limit);
  const totalShowPage = Math.ceil(totalPage);
  console.log(limit, page, showPages, totalPage, totalShowPage);

  const onLeftClick = useCallback(() => {
    if (page === 1) return;
    navigator(`?_page=${page - 1}&_limit=${limit}`);
    setPage(page - 1);
    setShowPages(Math.ceil(page - 1) / 3);
  }, [page, limit]);

  const onRightClick = useCallback(() => {
    if (page === totalPage) return;
    navigator(`?_page=${page + 1}&_limit=${limit}`);
    setShowPages(Math.ceil(page + 1) / 3);
    setPage(page + 1);
  }, [page, limit, totalPage]);

  const onNumberClick = useCallback(
    (e: any) => {
      const { innerText: clickNumber } = e.target;
      navigator(`?_page=${+clickNumber}&_limit=${limit}`);
      setShowPages(Math.ceil(clickNumber) / 3);
      setPage(+clickNumber);
    },
    [limit]
  );

  const onChangeHander = (e: React.ChangeEvent<{ value: string }>) => {
    setLimit(e.target.value);
  };

  useEffect(() => {
    setShowPages(Math.ceil(page));
  }, [page]);

  const numPages = Math.ceil(total / limit);
  return (
    <>
      <nav className='buttonNav'>
        <select onChange={onChangeHander} defaultValue={limit}>
          <option value='10'>10</option>
          <option value='30'>30</option>
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
