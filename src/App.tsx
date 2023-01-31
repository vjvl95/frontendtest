import './App.css';
import Header from './component/Header';
import ListTable from './component/ListTable';
import { useEffect, useState } from 'react';
import React from 'react';
import Pagination from './component/Pagination';
import { useSelector } from 'react-redux';
import { selectQueryParams } from './store/store';

export default function App() {
  const [productList, setProductList] = useState<any>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  let [limit, page, searchWord, filter] = useSelector(selectQueryParams);

  if (parseInt(sessionStorage.getItem('limit'))) {
    limit = parseInt(sessionStorage.getItem('limit'));
  }

  if (parseInt(sessionStorage.getItem('page'))) {
    page = parseInt(sessionStorage.getItem('page'));
  }

  if (sessionStorage.getItem('searchWord')) {
    searchWord = sessionStorage.getItem('searchWord');
  }
  if (sessionStorage.getItem('filter')) {
    filter = sessionStorage.getItem('filter');
  }

  const getDataAPI = async () => {
    const requestURL = `https://dummyjson.com/products/search?q=${searchWord}&limit=${limit}&skip=${
      limit * (page - 1)
    }`;

    const res = await fetch(requestURL);
    const result = await res.json();

    setProductList(result.products);
    setTotalCount(result.total);
  };

  useEffect(() => {
    getDataAPI();
    console.log(limit, page, searchWord, filter);
  }, [limit, page, searchWord, filter]);
  return (
    <div className='container'>
      <Header getDataAPI={getDataAPI} />
      <section className='totalsection'>
        검색된 데이터 : {totalCount} 건
      </section>
      <ListTable productList={productList}></ListTable>
      <Pagination total={totalCount} />
    </div>
  );
}
