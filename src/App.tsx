import './App.css';
import Header from './component/Header';
import ListTable from './component/ListTable';
import { useEffect, useState } from 'react';
import React from 'react';
import Pagination from './component/Pagination';
import { useSelector } from 'react-redux';
import { selectQueryParams } from './store/store';

import aa from './utils/isSessionExistence';
export default function App() {
  const [productList, setProductList] = useState<any>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const [limit, page, searchWord, filter] = useSelector(selectQueryParams);

  const [storedLimit, storedPage, storedSearchWord, storedFilter] = aa({
    limit,
    page,
    searchWord,
    filter,
  });
  console.log(storedLimit, storedPage, storedSearchWord, storedFilter, 3);
  const getDataAPI = async () => {
    const requestURL = `https://dummyjson.com/products/search?q=${searchWord}&limit=${storedLimit}&skip=${
      +storedLimit * (+storedPage - 1)
    }`;

    const res = await fetch(requestURL);
    const result = await res.json();

    setProductList(result.products);
    setTotalCount(result.total);
  };

  useEffect(() => {
    getDataAPI();
  }, [storedLimit, storedPage, storedSearchWord, storedFilter]);
  return (
    <div className='container'>
      <Header />
      <section className='totalsection'>
        검색된 데이터 : {totalCount} 건
      </section>
      <ListTable productList={productList}></ListTable>
      <Pagination total={totalCount} />
    </div>
  );
}
